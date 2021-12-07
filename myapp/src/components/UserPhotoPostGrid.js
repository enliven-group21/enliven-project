// React stuff
import React, { useState } from "react";

// MUI stuff
import { Fade, Tooltip, IconButton } from "@material-ui/core";

// Icons
import DeleteIcon from '@material-ui/icons/Delete'

// Firestore stuff / Hooks
import useFirestoreAuth from "../hooks/useFireStoreAuth";
import { useAuth } from "../contexts/AuthContext";
import { updateDoc, doc, deleteDoc } from "@firebase/firestore";
import { db } from '../firebase'

// Styling stuff
import '../styling/buttons.css'

const UserPostPhotoGrid = ({ selectedImg, setSelectedImg }) => {
    const { docs } = useFirestoreAuth('posts');
    const { currentUser } = useAuth();


    const [deleteDocId, setDeleteDocId] = useState(null);
    const deletePostRef = doc(db, 'posts', `${deleteDocId}`);

    const handleDelete = (event) => {
        event.preventDefault();
        console.log('clicked');
        updateDoc(deletePostRef, {
            visible: 0
        }).then(() => {
            console.log('deleted');
        });
    }

    return (
        <div>
            <h1 > <strong>{currentUser && currentUser.displayName}'s </strong> Posts + Photos </h1>
            <hr />
            <div className="post-grid">
                {docs && docs.map((doc) => (
                    <>
                    {console.log(doc.imageUrl)}
                        {/* This is if there is text only */}
                        {doc.content && (doc.imageUrl === null) &&
                            <div className="post-wrap-text-only" key={doc.id}>
                                <div className="post-name-txt-only">
                                    <strong>{doc.user}:</strong>
                                </div>
                                <div className="post-content-txt-only">
                                    {doc.content}
                                </div>

                                <div className="dlt-post-btn-txt-only">
                                    <Tooltip TransitionComponent={Fade}
                                        TransitionProps={{ timeout: 400 }}
                                        title='Click here to delete the post'
                                        arrow >
                                        <IconButton color="secondary" onClick={(event) => { setDeleteDocId(doc.id); handleDelete(event) }} >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </div>
                            </div>}

                        {/* This is if there is image only */}
                        {(doc.content === '') && (doc.imageUrl) && <div className="post-wrap-img-only" key={doc.id}>
                                                                    <img src={doc.imageUrl} alt="Loading..." onClick={() => setSelectedImg(doc.imageUrl)} />

                            <div className="dlt-post-btn-img-only">
                                <Tooltip TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 400 }}
                                    title='Click here to delete the post'
                                    arrow >
                                    <IconButton color="secondary" onClick={(event) => { setDeleteDocId(doc.id); handleDelete(event) }} >
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>}

                        {/* This is if there is image and text together */}
                        {doc.content && doc.imageUrl && <div className="post-wrap" key={doc.id}>
                            <div className="post-name-img-txt">
                                <strong>{doc.user}: </strong>
                            </div>
                            <div className="post-content-img-txt">
                                {doc.content}
                            </div>
                            <img src={doc.imageUrl} alt="Loading..." onClick={() => setSelectedImg(doc.imageUrl)} />

                            <div className="dlt-post-btn-txt-img">
                                <Tooltip TransitionComponent={Fade}
                                    TransitionProps={{ timeout: 400 }}
                                    title='Click here to delete the post'
                                    arrow >
                                    <IconButton color="secondary" onClick={(event) => { setDeleteDocId(doc.id); handleDelete(event) }} >
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>}

                        {/* This is if there is nothing in the post (error) */}
                        {(doc.content === '') && (doc.imageUrl === null) && <div className="post-wrap-text-only" key={doc.id}>
                            <div style={{ textAlign: "center" }}> Empty: Error </div>
                        </div>}
                    </>
                ))}
            </div>
        </div>
    )
}

export default UserPostPhotoGrid;

