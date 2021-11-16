import { useState, useEffect } from 'react';
import { db } from '../firebase'
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";

const useFirestore = (a_collection) => {
    const [loading, setLoading] = useState(true);
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const q = query(collection(db, a_collection), orderBy("createdAt", "desc"));
        const unsub = onSnapshot(q, (querySnapshot) => {
                const documents = [];
                querySnapshot.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id})
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

export default useFirestore;