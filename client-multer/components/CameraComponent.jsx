// CameraComponent.js
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

const CameraComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const openCamera = () => {
    // Ensure there is a user gesture (e.g., tap) before opening the camera
    setIsCameraOpen(true);
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    onCapture(imageSrc);
    setIsCameraOpen(false);
  };

  return (
    <div className="camera-container">
      {isCameraOpen ? (
        <>
          <Webcam audio={false} ref={webcamRef} />
          <button onClick={capture}>Capture Photo</button>
        </>
      ) : (
        <button onClick={openCamera}>Open Camera</button>
      )}
    </div>
  );
};

export default CameraComponent;
