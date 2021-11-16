import { useState, useEffect } from 'react';
import { db } from '../firebase'
import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";
import { useAuth } from '../contexts/AuthContext';

const useFirestoreAuth = (a_collection) => {
    const [loading, setLoading] = useState(true);
    const [docs, setDocs] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        const q = query(collection(db, a_collection), orderBy("createdAt", "desc"), where("user", "==", `${currentUser.displayName}`));
        const unsub = onSnapshot(q, (querySnapshot) => {
                const documents = [];
                querySnapshot.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id})
                // console.log(doc);
                });
                setDocs(documents);
                setLoading(false);
            })

            return () => unsub();
    }, [a_collection, loading]);

    if (loading) {
        return <h1>loading firebase data...</h1>
    }

    return { docs };
}

export default useFirestoreAuth;