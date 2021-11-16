import React from "react";
import useFirestore from "../hooks/useFirestore";

const PostGrid = () => {
  const { docs } = useFirestore('posts')
  
  return (
    <div className="">
      <h1>Posts</h1>
      <hr />
      { docs && docs.map((post) => (
          <div className="post-wrap" key={post.id}>
            {/* <CustomBtn  btnClassName='post-delete-btn' onClick={() => selectedPost(post.id)} tip="Click here to DELETE Post">
                <DeleteIcon />
            </CustomBtn> */}
            <p><strong>{post.user}</strong>: {post.content}</p>
          </div>
        ))}
    </div>
  );
};

export default PostGrid;