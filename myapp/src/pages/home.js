import React, { useState } from 'react'

// Grid
import Grid from '@material-ui/core/Grid'

//Compoenents
import WritePost from '../components/writePost'

import Navbar from '../components/Navbar'
import ImageGrid from '../components/ImageGrid'
import PostGrid from '../components/PostGrid'
import ImagePop from '../components/imagePop'


export default function Home() {
    const [selectedImage, setSelectedImg] = useState(null);

    return (
        <>
            <Navbar />
            <Grid container spacing={2}>
                <Grid item sm={4} sx={12}>
                    <PostGrid />
                </Grid>
                <Grid item sm= {4} sx= {12}>
                    <ImageGrid setSelectedImg={setSelectedImg} />
                   { selectedImage && <ImagePop selectedImage={selectedImage} setSelectedImg={setSelectedImg}/>}
                </Grid>
                <Grid item sm={4} sx={12}>
                    <WritePost />
                </Grid>
            </Grid>
        </>
    )
}

