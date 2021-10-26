import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'

export default function Navbar() {
    const useStyles = makeStyles({
        flexGrow: {
            flex: '1',
        },
        button: {
            backgroundColor: '#3c52b2',
            color: '#fff',
            '&:hover': {
                backgroundColor: '#303f9f',
                color: '#fff',
            },
        },
    })

    const classes = useStyles()
    return (
        <AppBar>
            <Toolbar className="nav-container">
                <div className={classes.flexGrow}>
                    <Button className={classes.button} variant="outlined" style={{ marginRight: 200 }} color="inherit" component={Link} to="/aboutus">
                        About Us
                    </Button>

                    <Button className={classes.button} variant="outlined" style={{ marginRight: 200, marginLeft: 200 }} color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button className={classes.button} variant="outlined" style={{ marginLeft: 200 }} color="inherit" component={Link} to="/profile">
                        Profile
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}
