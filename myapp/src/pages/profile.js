// React Stuff
import React, { useState, useRef, useEffect } from 'react'

import { Image, Label } from 'semantic-ui-react'
import placeholder from '../assets/placeholder.png'

// MUI Stuff

import { Button, TextField, Grid, Dialog, DialogActions, DialogContent, DialogTitle, CircularProgress } from '@material-ui/core';
import { Alert, Form } from 'react-bootstrap';

// Firebase / Database stuff
import { doc, setDoc, collection, query, onSnapshot, where } from '@firebase/firestore'
import { db, storage } from '../firebase'
import { useAuth } from '../contexts/AuthContext'
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import { useHistory } from 'react-router-dom'

// Components
import UserPhotoPostGrid from '../components/UserPhotoPostGrid';
import Navbar from '../components/Navbar';
import ImagePop from '../components/imagePop';

import '../styling/App.css'

export default function Profile() {
    const [selectedImage, setSelectedImg] = useState(null);
    const [loading, setLoading] = useState(false);

    const [editError, setEditError] = useState('');
    const [error, setError] = useState('');

    const [photoURL, setPhotoURL] = useState(null);
    const [open, setOpen] = useState(false);
    const [bio, setBio] = useState('');

    const { currentUser, update } = useAuth();
    const history = useHistory();
    const bioRef = useRef();
    const userImageRef = useRef();

    useEffect(() => {
        // Get user bio
        const q = query(collection(db, "users"), where("email", "==", `${currentUser.email}`));

        const subscriber = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setBio(doc.data().bio)
                setPhotoURL(doc.data().photoURL)
            });
        })

        return subscriber;
    }, []); // empty dependencies array => useEffect only called once

    const handleClickOpen = () => {
        setOpen(true);
    };

    async function handleSave() {
        if (!userImageRef.current.files[0] || !bioRef.current.value) {
            setEditError('Please do not leave fields blank');
        } else {
            setEditError(null);
            setLoading(true);
            setBio(bioRef.current.value);
            const files = userImageRef.current.files;
            const usersRef = ref(storage, 'users/' + currentUser.uid + '/profile.jpg');
            uploadBytes(usersRef, files[0]).then((snapshot) => {
                console.log(snapshot.ref);
                getDownloadURL(ref(storage, 'users/' + currentUser.uid + '/profile.jpg'))
                    .then((url) => {
                        setPhotoURL(url);
                        setDoc(doc(db, 'users', currentUser.email), { // Add to user database, email as document id
                            displayName: currentUser.displayName,
                            email: currentUser.email,
                            photoURL: url
                        }, { merge: true })
                    });
                setLoading(false);
            }).catch((error) => {
                console.log(error);
            });
            setDoc(doc(db, 'users', currentUser.email), { // Add to user database, email as document id
                displayName: currentUser.displayName,
                email: currentUser.email,
                bio: bioRef.current.value,
            }, { merge: true })
            await update(currentUser.displayName, currentUser.email, currentUser.photoURL, bioRef.current.value)
            setOpen(false);
        }
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Navbar />
            <Grid container spacing={3}>
                {/* Left hand grid containing User Profile + friend list */}
                <Grid item sm={4} xs={12}>
                    <div>
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="profile-container">
                                {photoURL ?
                                    <Image className="profile-image" src={photoURL} alt="Loading image" size="small" />
                                    :
                                    <Image className="profile-image" src={placeholder} alt="Loading image" size="small" />
                                }
                            </div>
                            {loading ? <CircularProgress style={{ color: 'blue' }} /> : null}
                        </div>
                        <hr />
                        <p><strong>{currentUser && currentUser.displayName}</strong></p>
                        <p><em>{currentUser && currentUser.email}</em></p>
                        <p><strong>Bio:</strong> {currentUser && bio}</p>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <hr />
                        <Button className="w-100" variant="contained" color="secondary" type="submit" onClick={handleClickOpen}>
                            Edit Profile
                        </Button>

                    </div>
                </Grid>

                {/* Right hand side grid containing users posts */}
                <Grid item sm={8} xs={12} >
                    {/* The Grid containg the posts */}
                    <UserPhotoPostGrid setSelectedImg={setSelectedImg} />

                    {/* handling of img click to get a detailed view */}
                    {selectedImage && <ImagePop selectedImage={selectedImage} setSelectedImg={setSelectedImg} />}
                </Grid>
            </Grid>

            <Dialog open={open}             // If open= 1 the dialog is opened else its 0 and its closed
                onClose={handleClose}   // handling close when clicking off dialog box
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" >

                {/* The title of the Dialog pop-up */}
                <DialogTitle id="alert-dialog-title">
                    {"Edit Your Profile"}
                </DialogTitle>

                {/* The content in the dialog pop-up */}
                <DialogContent>
                    {editError && <Alert variant="danger">{editError}</Alert>}
                    <Form>
                        <Label className="mb-2" type="text">Choose a profile image:</Label>
                        <input required type="file" accept="image/*" className="mb-3" ref={userImageRef} />
                        <TextField inputRef={bioRef} className="mb-3" margin="normal" fullWidth id="bio" label="Add a bio" variant="filled" type="text" />
                    </Form>
                </DialogContent>

                {/* The buttons in the dialog pop-up */}
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleClose}>Close</Button>
                    <Button variant="contained" color="primary" onClick={handleSave} autoFocus>Save Changes </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
