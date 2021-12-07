// React Stuff
import React, { useState } from 'react'

// MUI Stuff
import { Tooltip, TextareaAutosize, Toolbar, Fade, Button } from '@material-ui/core'

// CSS
import "../styling/App.css"
import '../styling/buttons.css'

//Icons
import AddIcon from '@material-ui/icons/Add'
import noUserImage from '../abstract-user-flat-4.svg';
import AttachFile from '@material-ui/icons/AttachFile'


// Firebase Stuff
import { db, storage, analytics } from '../firebase'
import { serverTimestamp, addDoc, collection } from '@firebase/firestore'
import { logEvent } from '@firebase/analytics'
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import { useAuth } from '../contexts/AuthContext'

// Components
import ProgressBar from './progressBar';

const WritePostPhoto = () => {
  const [post, setPost] = useState("");

  // Allowed Types to be uploaded to Storage
  const types = ['image/png', 'image/jpeg'];

  const [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState(null);
  // const [fileUploaded, setFileUploaded] = useState(null);

  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  // const [noProfilePicUrl, setNoProfilePicUrl] = useState(null);

  const { currentUser } = useAuth();

  const handleClickInput = () => {
    // console.log('Attachment Icon Clicked')
    setSelectedFile(null);
    let inputFile = document.getElementById("fileInput");
    inputFile.click();
  }

  const handleChooseFile = (event) => {
    event.preventDefault();

    setSelectedFile(null);
    let selected = event.target.files[0]; // Selecting the files

    // Checking the Filetypes to make sure they match 'types'
    if (selected && types.includes(selected.type)) {
      // console.log('File Selected')
      setSelectedFile(selected);
      setError('');
    } else {
      setSelectedFile(null);
      setFile(null);
      alert('Please select an image file (png or jpg)');
      setError('Incorrect File Type');
      return;
    }
  };

  const handleUpload = (event) => {
    logEvent(analytics, "share")
    event.preventDefault();

    // Uploading the file to the db if there is a file selected
    if (selectedFile)
      setFile(selectedFile)

    // error checking if trying to upload to db with no content
    if (!(post) && !(selectedFile)) {
      setFile(null);
      setSelectedFile(null);
      alert("Please either post text or an image or both");
      setError('Nothing to Post');
      return;
    }

    // Uploading the post to the db
    if ((!post && (selectedFile)) ||
      (post && (selectedFile))) {
      if (selectedFile) {
        console.log(selectedFile.name);
        const storageRef = ref(storage, `images/${selectedFile.name}`);
        console.log('url: ' + url);

        uploadBytes(storageRef, selectedFile).then((snapshot) => {
          console.log(snapshot.ref);
          getDownloadURL(ref(storageRef))
            .then((url) => {
              console.log('uploadBytes: ' + url);
              addDoc(collection(db, "posts"), {
                content: post,
                imageUrl: url,
                createdAt: serverTimestamp(),
                user: currentUser.displayName,
                userEmail: currentUser.email,
                visible: 1,
              })
                .then(() => {
                  setSelectedFile(null);
                  setPost('');
                  setUrl(null);
                })
                .catch((error) => {
                  alert(error.post);
                  console.error();
                })
            });
        }).catch((error) => {
          console.log(error);
        });
      }
    } else if (post && !(selectedFile)) {

      addDoc(collection(db, "posts"), {
        content: post,
        imageUrl: null,
        createdAt: serverTimestamp(),
        user: currentUser.displayName,
        userEmail: currentUser.email,
        visible: 1,
      })
        .then(() => {
          setPost('');
        })
        .catch((error) => {
          alert(error.post);
          console.error();
        })
    }
  };

  return (
    <form className="">

      <div>
        <h1 style={{ textAlign: 'center', color: 'black', marginTop: '2%', fontFamily: 'Georgia'}}>
          Enliven Your Day
        </h1>
      </div>

      <div className="upload-post-div">
        {currentUser.photoUrl && <img src={`${currentUser.photoUrl}`} alt={"..."} style={{ borderRadius: 20 }} />}
        {!currentUser.photoUrl && <img src={noUserImage} alt="" />}
        <TextareaAutosize spellCheck="true"
          maxRows={1}
          maxLength={152}    // Max character length of Post
          placeholder="Share your thoughts"
          value={post}
          onChange={((event) => {
            setPost(event.target.value);
          })} />

        <hr style={{ maxWidth: 600, marginLeft: 5.7 + '%' }} />


        <Toolbar>
          {/* Add Post button */}
          <div className="button-row">
            <Tooltip TransitionComponent={Fade}
              TransitionProps={{ timeout: 400 }}
              title="Click here to choose a photo"
              arrow >
              <Button style={{ marginLeft: '25%', marginRight: '10%' }} disableElevation color="secondary" variant="contained" startIcon={<AddIcon />} onClick={handleUpload}> Post </Button>
            </Tooltip>

            {/* This is the file attachment button */}
            <label for="fileInput">
              <Tooltip TransitionComponent={Fade}
                TransitionProps={{ timeout: 400 }}
                title="Click here to choose a photo"
                arrow >
                <Button color="secondary" disableElevation variant="contained" startIcon={<AttachFile />} onClick={handleClickInput}> Attach a Photo </Button>

              </Tooltip>
            </label>
            <input accept="image/*" id="fileInput" type="file" onChange={handleChooseFile} hidden="hidden" />
          </div>
        </Toolbar>
      </div>

      {/* If there is a file then upload the file <ProgressBar/> */}
      {file && <ProgressBar file={file} setFile={setFile} setUrl={setUrl} />}
      {error && <div className="error"></div>}

      {/* When there is a file selected the photo preview apears */}
      {
        selectedFile &&
        <div className="img-upload-preview">
          <img src={URL.createObjectURL(selectedFile)} alt="selected img preview" />
        </div>
      }

    </form>
  )
}

export default WritePostPhoto