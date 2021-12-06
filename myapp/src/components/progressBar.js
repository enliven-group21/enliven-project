// React stuff
import React, { useEffect } from 'react';

// Firestore stuff / hooks
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile, setUrl}) => {
    const { url, progress } = useStorage(file);
    
    useEffect(() => {
      if (url) {
        setUrl(url);
        setFile(null);
      }
    }, [url, setFile, setUrl]);

  return (
    <div className="progress-bar" style= {{width: (progress + '%')}}></div>
  );
} 

export default ProgressBar;