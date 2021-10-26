import React from 'react'
import { Icon } from '@material-ui/core'

// Grid
import Grid from '@material-ui/core/Grid'

//Compoenents
import WritePost from '../components/writePost'
import ReadPost from '../components/readPost'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <>
            <Navbar />
            <Grid container spacing={3}>
                <Grid item sm={8} sx={12}>
                    <ReadPost />
                </Grid>
                <Grid item sm={4} sx={12}>
                    <WritePost />
                </Grid>
            </Grid>
        </>
    )
}

