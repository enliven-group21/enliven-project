// React Stuff
import React, { useState } from 'react'

// MUI Stuff
import { TextareaAutosize, Toolbar } from '@material-ui/core'
import CustomBtn from './CustomBtn'

// CSS
import "../App.css"

//Icons
import AddIcon from '@material-ui/icons/Add'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'
import AttachmentIcon from '@material-ui/icons/AttachFile'


// Firebase Stuff
import { db } from '../firebase'
import { serverTimestamp, addDoc, collection } from '@firebase/firestore'
import { useAuth } from '../contexts/AuthContext'

import ProgressBar from './progressBar';

const WritePost = () => {
  const [post, setPost] = useState("");

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const { currentUser } = useAuth();

  const handleChooseImage = () => {
    const fileInput = document.getElementById('imageInput');
    fileInput.click();
  };

  // Allowed Types to be uploaded to Storage
  const types = ['image/png', 'image/jpeg'];

  const handleImageUpload = (event) => {
    event.preventDefault();
    let selected = event.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      alert('Please select an image file (png or jpg)');
      setError('Incorrect File Type');
    }
  }

  const handleTextUpload = (event) => {
    event.preventDefault();

    addDoc(collection(db, "posts"), {
      content: post,
      createdAt: serverTimestamp(),
      user: currentUser.displayName,
      userEmail: currentUser.email,
    })
      .then(() => {
        console.log('Posted');
      })
      .catch((error) => {
        alert(error.post);
        console.error();
      })

  };

  return (
    <form className="" onSubmit={handleTextUpload}>
      <h1>Make a New Post</h1>
      <hr />
      <TextareaAutosize
        className="posting"
        minRows={3}
        maxRows={3}
        style={{ minWidth: 375, minHeight: 75 }}
        maxLength={250}    // Max character length of Post
        placeholder="Share your thoughts"
        value={post}
        onChange={((event) => setPost(event.target.value))}
      />

      {file && <ProgressBar file={file} setFile={setFile} />}

      <Toolbar>
        <CustomBtn onClick={handleTextUpload} tip="Click here to Post">
          <AddIcon />
        </CustomBtn>

        {/* This is the image Upload */}
        <input type="file" id="imageInput" hidden="hidden" onChange={handleImageUpload} />
        <CustomBtn onClick={handleChooseImage} tip="Click here to add a Photo">
          <InsertPhotoIcon />
        </CustomBtn>
        {error && <div className="error"></div>}

        {/* This is the attach Image to post*/}
        <input type="file" id="imageInput" hidden="hidden" onChange={handleImageUpload} />
        <CustomBtn onClick={handleChooseImage} tip="Click here to attach a file">
          <AttachmentIcon />
        </CustomBtn>
      </Toolbar>
    </form>
  )
}

export default WritePost
