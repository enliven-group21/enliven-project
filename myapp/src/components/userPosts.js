import React from "react";
import useFirestoreAuth from "../hooks/useFireStoreAuth";

const UserPosts = () => {    
    const { docs } = useFirestoreAuth('posts');
   
    return (
        // The div for the entire user post component
        <div className="user-posts">
            { docs && docs.map((post) => (
                    // The div for each user post component
                    <div className="user-post-wrap" key={post.id}>
                        <p><strong>{post.user}</strong>: {post.content}</p>
                    </div>
                
            ))}
        </div>
    );
};

export default UserPosts;