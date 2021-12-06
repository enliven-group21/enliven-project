import React from 'react'

const ImagePop = ({selectedImage, setSelectedImg}) => {
    const handleBackdropClick = (event) => {
        if(event.target.classList.contains('backdrop'))
        {
            setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleBackdropClick}>
            <img src={selectedImage} alt=""/>
        </div>
    )

}

export default ImagePop