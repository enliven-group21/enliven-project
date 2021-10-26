// React Stuff
import React, { Component, useState, useEffect } from 'react'

// MUI Stuff
import { Button, TextField, Toolbar } from '@material-ui/core'
import CustomBtn from './CustomBtns/CustomBtn'

// CSS
import "../App.css"

//Icons
import AddIcon from '@material-ui/icons/Add'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto'
import AttachmentIcon from '@material-ui/icons/AttachFile'


// Database
import { db } from '../firebase'
import { Timestamp, doc, addDoc, collection } from '@firebase/firestore'
import { useAuth } from '../contexts/AuthContext'

const WritePost = () => {
  const [post, setPost] = useState("");
  const { currentUser } = useAuth();

  //const [loader,setLoader] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    //setLoader(true);

    addDoc(collection(db, "posts"), {
      content: post,
      createdAt: Timestamp.fromDate(new Date),
      user: currentUser.displayName,
      userEmail: currentUser.email,
    })
      .then(() => {
        //setLoader(false);
        //alert("Your post has been posted");
        console.log('Posted');
      })
      .catch((error) => {
        alert(error.post);
        console.error();
        //setLoader(false);
      })

  };




  return (
    <form className="" onSubmit={handleSubmit}>
      <h1>Make a New Post</h1>
      <hr />
      {/* <label> Post </label> */}
      <TextField
        placeholder="Share your thoughts"
        value={post}
        onChange={(event) => setPost(event.target.value)} />

      <Toolbar className="postingBtn-container">
        <CustomBtn onClick={handleSubmit} tip="Click here to Post">
          <AddIcon />
        </CustomBtn>
        <CustomBtn onClick={handleSubmit} tip="Click here to add a Photo">
          <InsertPhotoIcon />
        </CustomBtn>
        <CustomBtn onClick={handleSubmit} tip="Click here to attach a file">
          <AttachmentIcon />
        </CustomBtn>

        {/* Different Button  */}
        {/* <Button type= "submit" style={{ background: loader ? "#ccc" : "rgb(2,2,110)"}, { marginRight: 100 }}>Post</Button> */}
        {/* <Button type= "submit" style={{ background: loader ? "#ccc" : "rgb(2,2,110)"}}>Post</Button> */}

      </Toolbar>
    </form>
  )
}

export default WritePost
