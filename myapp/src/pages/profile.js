// React Stuff
import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

// MUI Stuff
import Button from '@material-ui/core/Button'
import { TextField, Grid, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

// Firebase / Database stuff
import { doc, setDoc, collection, query, onSnapshot, where } from '@firebase/firestore'
import { db } from '../firebase'
import { useAuth } from '../contexts/AuthContext'

// Components
import UserPosts from '../components/userPosts';
import UserPhotos from '../components/userPhotos';
import Navbar from '../components/Navbar';

export default function Profile() {
    const { currentUser, signout, update } = useAuth();
    const [error, setError] = useState('')
    const [bio, setBio] = useState('')
    const [open, setOpen] = useState(false);
    const bioRef = useRef();
    const history = useHistory();

    useEffect(() => {
        // Get user bio
        const q = query(collection(db, "users"), where("email", "==", `${currentUser.email}`));
        const subscriber = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setBio(doc.data().bio)
            });
        })
        return subscriber;
    }, []); // empty dependencies array => useEffect only called once

    async function handleLogout() {
        try {
            setError('')
            await signout();
            console.log('User signed out');
            history.push('/login')
        } catch (error) {
            console.log(error);
            setError('Failed to log out: ' + error);
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    async function handleSave() {
        setDoc(doc(db, 'users', currentUser.email), { // Add to user database, email as document id
            displayName: currentUser.displayName,
            email: currentUser.email,
            photoURL: "null",
            bio: bioRef.current.value,
        })
        await update(currentUser.displayName, currentUser.email, currentUser.photoURL, bioRef.current.value)
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Navbar />
            <Grid container spacing={3}>
                <Grid item sm={4} xs={12}>
                    <div>
                        <h1>User Profile</h1>
                        <hr />
                        <p><strong>Name:</strong> {currentUser && currentUser.displayName}</p>
                        <p><strong>Email:</strong> {currentUser && currentUser.email}</p>
                        <p><strong>Bio:</strong> {currentUser && bio}</p>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <hr />
                        <Button className="w-100" variant="contained" color="primary" type="submit" onClick={handleClickOpen}>
                            Edit Profile
                        </Button>
                        <Button className="w-100 mt-4" variant="contained" color="primary" type="submit" onClick={handleLogout} >
                            Log Out
                        </Button>
                    </div>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <h1>User Posts</h1>
                    <hr />
                    <UserPosts />
                </Grid>
                <Grid item sm={4} xs={12}>
                    <h1>User Photos</h1>
                    <hr />
                    <UserPhotos />
                </Grid>
            </Grid>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Edit Your Profile"}
                </DialogTitle>
                <DialogContent>
                    <Form>
                        <TextField inputRef={bioRef} className="mb-3" margin="normal" fullWidth id="bio" label="Add a bio" variant="filled" type="text" />
                    </Form>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleClose}>Close</Button>
                    <Button variant="contained" color="primary" onClick={handleSave} autoFocus>
                        Save Changes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
