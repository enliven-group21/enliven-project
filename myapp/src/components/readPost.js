import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase";


//import Grid from '@material-ui/core/Grid';

const ReadPost = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const subscriber = onSnapshot(q, (querySnapshot) => {
      const allPosts = [];
      querySnapshot.forEach((doc) => {
        allPosts.push(doc.data());
      });
      setPosts(allPosts);
      setLoading(false);
    });

    // return cleanup function
    return () => subscriber();
  }, [loading]); // empty dependencies array => useEffect only called once

  if (loading) {
    return <h1>loading firebase data...</h1>;
  }

  return (
    <div className="">
      <h1>Posts</h1>
      <hr />
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

export default ReadPost;