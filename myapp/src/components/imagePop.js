import React, { useState } from 'react'

import DeleteIcon from '@material-ui/icons/Delete'
import CustomBtn from './CustomBtn'

import {deleteDoc, doc} from 'firebase/firestore'
import useFirestore from '../hooks/useFirestore'

const ImagePop = ({selectedImage, setSelectedImg}) => {
    const [deleteImg, setDeleteImg] =  useState(null);
    const {imageUrls} = useFirestore('images');

    const handleBackdropClick = (event) => {
        if(event.target.classList.contains('backdrop'))
        {
            setSelectedImg(null);
        }
    }
    
    const handleImageDelete = (event) => {
        if(event.target.classList.contains('img-delete-btn'))
        {
            setDeleteImg(selectedImage)
        }
        
        deleteDoc(doc(imageUrls, 'images', `${deleteImg}`))
    }

    return (
        <div className="backdrop" onClick={handleBackdropClick}>
            <img src={selectedImage} alt="image pop out view"/>
            <CustomBtn  btnClassName="img-delete-btn" onClick={handleImageDelete} tip="Click here to DELETE Post">
                <DeleteIcon />
            </CustomBtn>
        </div>
    )

}

export default ImagePop