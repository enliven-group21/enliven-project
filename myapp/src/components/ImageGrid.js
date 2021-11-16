import React from "react";
import useFirestore from "../hooks/useFirestore";



const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className="">
            <h1> Images </h1>
            <hr />
            { docs && docs.map((doc) => (
                // The div for each image component
                <div className="img-wrap" key={doc.id}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <img src={doc.url} alt="Loading..."/>
                </div>
            ))}
        </div>
    )
}

export default ImageGrid;