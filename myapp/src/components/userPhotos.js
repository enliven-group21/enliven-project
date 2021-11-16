import React from "react";
import useFireStoreAuth from '../hooks/useFireStoreAuth'

const UserPosts = () => {
    const { docs } = useFireStoreAuth('images')

    return (
        <div className="user-img-grid">
            {docs && docs.map((doc) => (
                <div className="user-img-wrap" key={doc.id}>
                    <img src={doc.url} alt="Loading..."/>                  
                </div>
            ))}
        </div>
    );
};

export default UserPosts;