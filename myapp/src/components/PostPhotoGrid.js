// React stuff
import React from "react";

// Firestore stuff / Hooks
import useFirestore from "../hooks/useFirestore";
// import { getStorage } from "firebase/storage";

// Styling
import '../styling/post.css'

import Grid from '@material-ui/core/Grid'
import { Box } from "@material-ui/core";

const PostPhotoGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('posts');

    // (WIP)
    // const storage = getStorage();
    // const [noImageUrl, setNoImageUrl] = useState('');
    // getDownloadURL(ref(storage, 'default images/No-Image.jpg')).then((url) => {setNoImageUrl(url)})

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} style={{ postition: 'absolute', marginTop: 'auto' }}>  {/* Fow far apart each grid is from each other in each direction */}
                <div className="post-grid">
                    {docs && docs.map((doc) => (
                        <>
                            {/* This is if there is text only */}
                            {doc.content && (doc.imageUrl === null) && <div className="post-wrap-text-only" key={doc.id}>
                                <div className="post-name-txt-only">
                                    <strong>{doc.user}: </strong>
                                </div>
                                <div className="post-content-txt-only">
                                    {doc.content}
                                </div>
                            </div>}

                            {/* This is if there is image only */}
                            {(doc.content === '') && (doc.imageUrl) && <div className="post-wrap-img-only" key={doc.id}>
                                <img src={doc.imageUrl} alt="Loading..." onClick={() => setSelectedImg(doc.imageUrl)} />
                            </div>}

                            {/* This is if there is image and text together */}
                            {doc.content && doc.imageUrl && <div className="post-wrap" key={doc.id}>
                                <div className="post-name-img-txt">
                                    <strong>{doc.user}</strong>
                                </div>

                                <div className="post-content-img-txt">
                                    {doc.content}
                                </div>

                                <img src={doc.imageUrl} alt="Loading..." onClick={() => setSelectedImg(doc.imageUrl)} />
                            </div>}


                            {/* This is if there is nothing in the post (error) */}
                            {(doc.content === '') && (doc.imageUrl === null) && <div className="post-wrap-text-only" key={doc.id}>
                                <div style={{ textAlign: "center" }}> Empty: Error </div>
                            </div>}
                        </>
                    ))}
                </div>
            </Grid>
        </Box>

    )
}

export default PostPhotoGrid;