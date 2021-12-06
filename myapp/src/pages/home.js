import React, { useState } from 'react'

// Grid
import Grid from '@material-ui/core/Grid'

//Compoenents
import Navbar from '../components/Navbar'
import ImagePop from '../components/imagePop'
import PostPhotoGrid from '../components/PostPhotoGrid'
import WritePhotoPost from '../components/WritePhotoPost'

// Styling
import '../styling/App.css'
// import { useAuth } from '../contexts/AuthContext'

export default function Home() {
    const [selectedImage, setSelectedImg] = useState(null);

    return (
        <>
            <Navbar />
                    <Grid item sm= {8} sx= {12} className="home-grid" style={{position: 'relative', margin: 'auto'}}>
                        <WritePhotoPost />
                        <PostPhotoGrid setSelectedImg={setSelectedImg} />
                        { selectedImage && <ImagePop selectedImage={selectedImage} setSelectedImg={setSelectedImg}/>}

                    </Grid>
        </>
    )
}

