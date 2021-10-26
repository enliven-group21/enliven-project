import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy, where } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";


//import Grid from '@material-ui/core/Grid';

const UserPosts = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), where("user", "==", `${currentUser.displayName}`));
        const subscriber = onSnapshot(q, (querySnapshot) => {
            const allPosts = [];
            querySnapshot.forEach((doc) => {
                allPosts.push(doc.data());
            });
            setPosts(allPosts);
            setLoading(false);
        });
        console.log(posts);
        // return cleanup function
        return () => subscriber();
    }, [loading]); // empty dependencies array => useEffect only called once

    if (loading) {
        return <h1>loading firebase data...</h1>;
    }

    return (
        <div className="">
            {
                posts.map((post) =>
                    <div>
                        <p><strong>{post.user}</strong> wrote: {post.content}</p>
                    </div>
                )
            }
        </div>
    );
};

export default UserPosts;