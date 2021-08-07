import React, { Component, useState } from 'react';
/*import './cameraStyles.css'*/
import Webcam from "react-webcam";
const WebcamComponent = () => <Webcam />;
const videoConstraints = {
    width: '80%',
    height: '80%',
    facingMode: "user"
  };
  
  const WebcamCapture = () => {
    const [image,setImage]=useState('');

    const webcamRef = React.useRef(null);
    var imageSrc = null;
  
    const capture = React.useCallback(
      () => {
        imageSrc = webcamRef.current.getScreenshot();
      },
      [webcamRef]

    );
  
    return (
      <>
      {console.log(imageSrc)}
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
        <button onClick={capture}>Capture photo</button>
      </>
    );
  };

  export default WebcamCapture;