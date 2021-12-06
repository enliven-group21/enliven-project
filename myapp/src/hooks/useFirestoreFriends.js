import { useState } from 'react';
import { db } from '../firebase'
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';

async function useFirestoreFriends(aCollection){    //  We are using camelCase throught he code. Try and keep it consitstant 
    const [docs, setDocs] = useState([]);
    const { currentUser } = useAuth();
    
    const docRef = doc(db, `${aCollection}`, `${currentUser.email}`);
    
    try {
        const doc = await getDoc(docRef);
        console.log(doc.data());
        setDocs(doc);
    } catch (error) {
        console.log(error);
    }


    // useEffect(() => {
    //     const q = query(collection(db, `${aSubCollection}`));
    //     const unsub = onSnapshot(q, (querySnapshot) => {
    //         let documents =[];
    //         querySnapshot.forEach((doc) => {
    //             documents.push({...doc.data(), id: doc.id})
    //         });
    //         setDocs(documents);
    //         setLoading(false);
    //     })
    //     return () => unsub();
        
    // }, [aCollection])

    return { docs };
}

export default useFirestoreFriends;