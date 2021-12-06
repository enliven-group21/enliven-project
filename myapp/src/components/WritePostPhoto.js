// React Stuff
import React, { useState } from 'react'

// MUI Stuff
import { Tooltip, TextareaAutosize, Toolbar, Fade, IconButton } from '@material-ui/core'

// CSS
import "../App.css"

//Icons
import AddIcon from '@material-ui/icons/Add'
import AttachmentIcon from '@material-ui/icons/AttachFile'


// Firebase Stuff
import { db } from '../firebase'
import { serverTimestamp, addDoc, collection } from '@firebase/firestore'
import { useAuth } from '../contexts/AuthContext'

// Components
import ProgressBar from './progressBar';

const WritePostPhoto = () => {
  const [post, setPost] = useState("");

  // Allowed Types to be uploaded to Storage
  const types = ['image/png', 'image/jpeg'];

  let [selectedFile, setSelectedFile] = useState(null);
  const [file, setFile] = useState(null);

  const [isDisabled, setIsDisabled] = useState("");
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('');

  const { currentUser } = useAuth();

  const handleClickInput = () => {
    console.log('Attachment Icon Clicked')
    setSelectedFile(null);
    let inputFile = document.getElementById("fileInput");
    inputFile.click();
  }

  const handleChooseFile = (event) => {
    setSelectedFile(null);
    let selected = event.target.files[0]; // Selecting the files

    // Checking the Filetypes to make sure they match 'types'
    if (selected && types.includes(selected.type)) {
      console.log('File Selected')
      setSelectedFile(selected);
      setError('');
    } else {
      setSelectedFile(null);
      setFile(null);
      alert('Please select an image file (png or jpg)');
      setError('Incorrect File Type');
    }
  };

  const isUploadEnabled = () => {
    if (!(post) && !(selectedFile)) {
      setIsDisabled("disabled")
    } else if ((post) || (selectedFile)) {
      setIsDisabled("");
    }
  }

  const handleUpload = (event) => {
    // Uploading the file to the db if there is a file selected
    if (selectedFile)
      setFile(selectedFile)

    // error checking if trying to upload to db with no content
    if (!(post) && !(selectedFile)) {
      setFile(null);
      setSelectedFile(null);
      alert("Please either post text or an image or both");
      setError('Nothing to Post');
    }

    // Uploading the post to the db
    if ((!post && (selectedFile)) ||
      (post && (selectedFile)) ||
      (post && !(selectedFile))) {
      // Adding the post document to the db
      addDoc(collection(db, "posts"), {
        content: post,
        imageUrl: url,
        createdAt: serverTimestamp(),
        user: currentUser.displayName,
        userEmail: currentUser.email,
      })
        .then(() => {
          console.log('Posted');
          setSelectedFile(null);
          setPost(null);
          setUrl(null);
          console.log(selectedFile)
        })
        .catch((error) => {
          alert(error.post);
          console.error();
        })
    }
  };

  return (
    <form className="">
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
        onChange={((event) => {
          setPost(event.target.value);
        })} />

      <Toolbar>
        {/* Add Post button */}
        <div className="upload-post-btn">
          <Tooltip TransitionComponent={Fade}
            TransitionProps={{ timeout: 400 }}
            title='Click here to choose a photo'
            arrow >
            <IconButton color="primary" onClick={handleUpload} disabled={isDisabled}>
              <AddIcon />
            </IconButton>

          </Tooltip>
        </div>

        {/* This is the file attachment button */}
        <div className="attach-file-btn">
          <label for="fileInput">
            <Tooltip TransitionComponent={Fade}
              TransitionProps={{ timeout: 400 }}
              title='Click here to choose a photo'
              arrow
            >
              <IconButton color="primary" onClick={handleClickInput}>
                <AttachmentIcon />
              </IconButton>
            </Tooltip>
          </label>
          <input accept="image/*" id="fileInput" type="file" onChange={handleChooseFile} hidden="hidden" />
        </div>
      </Toolbar>

      {/* If there is a file then upload the file <ProgressBar/> */}
      {file && <ProgressBar file={file} setFile={setFile} setUrl={setUrl} />}
      {error && <div className="error"></div>}

      {/* When there is a file selected the photo preview apears */}
      {selectedFile &&
        <div className="img-preview-card">
          <div className="img-background" />
          <img className="img-upload-preview" src={URL.createObjectURL(selectedFile)} alt="selected img preview" />
        </div>}

    </form>
  )
}

export default WritePostPhoto
