import React from 'react'

// Grid
import Grid from '@material-ui/core/Grid'

//Compoenents
import Navbar from '../components/Navbar'
import FriendGrid from '../components/friendsGrid'

// Styling
import '../styling/App.css'

export default function Friends() {

    return (
        <>
            <Navbar />
                    <Grid item sm= {8} sx= {12} style={{position: 'relative', margin: 'auto'}}>
                        <FriendGrid />
                    </Grid>
        </>
    )
}

