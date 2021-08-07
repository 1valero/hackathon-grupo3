import React, { Component, useState } from 'react';
/*import './cameraStyles.css'*/
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  
  const WebcamCapture = () => {
    const [image,setImage]=useState('');

    const webcamRef = React.useRef(null);
  
    const capture = React.useCallback(
      () => {
        const imageSrc = webcamRef.current.getScreenshot();
      },
      [webcamRef]

    );
  
    return (
      <>
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{width:'80%',height: '80%'}}
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
      </>
    );
  };

  export default WebcamCapture;