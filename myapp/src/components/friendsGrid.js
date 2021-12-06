// React stuff
import React from "react";

// Firestore stuff / Hooks
// import { getStorage, ref, getDownloadURL } from "firebase/storage";

// Styling
import '../styling/post.css'

import Grid from '@material-ui/core/Grid'
import { Box } from "@material-ui/core";
import useFirestoreFriends from "../hooks/useFirestoreFriends";

const FriendGrid = () => {
    const { docs } = useFirestoreFriends('users');

    // getDownloadURL(ref(storage, 'default images/No-Image.jpg')).then((url) => {setNoImageUrl(url)})

    return (
        // WIP
        <Box sx={{ flexGrow: 1}}>
            <Grid container spacing={0} style={{postition: 'absolute', marginTop: 'auto'}}>  {/* Fow far apart each grid is from each other in each direction */}
                <div className="friend-grid">
                   {docs && docs.map((doc) => {
                       <>
                        <div>
                            {console.log(doc.displayName)}
                        </div>
                       </>
                   })}
                </div>
            </Grid>
        </Box>
            
    )
}

export default FriendGrid;