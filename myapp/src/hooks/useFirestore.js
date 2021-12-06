import { useState, useEffect } from 'react';
import { db } from '../firebase'
import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";

const useFirestore = (a_collection) => {    //  We are using camelCase throught he code. Try and keep it consitstant 
    const [loading, setLoading] = useState(true);
    const [docs, setDocs] = useState([]);

    useEffect(() => {                       //  Has missing dependacies (currentUser.displayName, currentUser.email, storage)
                                            //  Either include it or remove the dependency array
        const q = query(collection(db, a_collection), orderBy("visible"), orderBy("createdAt", "desc"), where("visible", "!=", 0));
                                            // Currently there are two seperate hooks for reading posts, maybe there is a way to conglomerate the two
        const unsub = onSnapshot(q, (querySnapshot) => {
                const documents = [];       //  Instead of declaring documents as a const try using a let variable
                querySnapshot.forEach((doc) => {
                    documents.push({...doc.data(), id: doc.id})
                });
                setDocs(documents);
                setLoading(false);
            })
                                            //  Try using console.log to debug when necessary and comment it out until you need it
            return () => unsub();
    }, [a_collection, loading]);

    if (loading) {
        return <h1>loading firebase data...</h1>
    }

    return { docs };
}
                                            //  Expected a default case
export default useFirestore;