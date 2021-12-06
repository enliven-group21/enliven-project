import { useState, useEffect } from 'react';
import { db } from '../firebase'
import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';

const useFirestoreAuth = (aCollection) => {
    const [loading, setLoading] = useState(true);
    const [docs, setDocs] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        const q = query(collection(db, aCollection), orderBy("visible"), orderBy("createdAt", "desc"), where("userEmail", "==", `${currentUser.email}`), where("visible", "!=", 0));
        const unsub = onSnapshot(q, (querySnapshot) => {
            const documents = [];
            querySnapshot.forEach((doc) => {
                documents.push({ ...doc.data(), id: doc.id })
                // console.log(doc);
            });
            setDocs(documents);
            setLoading(false);
        })

        return () => unsub();
    }, [aCollection, loading]);

    if (loading) {
        return <h1>loading firebase data...</h1>
    }

    return { docs };
}

export default useFirestoreAuth;