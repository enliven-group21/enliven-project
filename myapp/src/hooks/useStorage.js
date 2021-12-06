import { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage'
import { db } from '../firebase'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import { useAuth } from '../contexts/AuthContext'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const { currentUser } = useAuth();
  const storage = getStorage();

  useEffect(() => {
    const metadata = {
      contentType: file.type,
      // owner: currentUser.displayName
    };

    console.log('useStorage?');

    // Creating Consistant File Names
    const fileName = new Date() + '-' + file.name;

    // References
    const storageRef = ref(storage, `images/${fileName}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('Upload is ' + progress + '% done');

        setProgress(progress);

        switch (snapshot.state) {
          case 'paused':
            // console.log('Upload is paused');
            break;
          case 'running':
            // console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {
        setError(error);
      },
      // Function for when upload is complete
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            // console.log('File available at', url);
            setUrl(url);

            addDoc(collection(db, "images"),
              {
                url,
                createdAt: serverTimestamp(),
                user: currentUser.displayName,
                userEmail: currentUser.email
              }).then(() => {
                // console.log('Image File (Url) Uploaded')
              })
          });
      }
    );

  }, [file]);

  return { progress, url, error };
}

export default useStorage;