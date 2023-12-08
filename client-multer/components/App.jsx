// App.js
import React, { useState } from "react";
import CameraComponent from "./CameraComponent";

const App = () => {
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCapture = (imageData) => {
    setCapturedImage(imageData);
  };

  return (
    <div>
      <h1>Camera Apppppp</h1>
      {capturedImage ? (
        <div>
          <img src={capturedImage} alt="Captured" />
          <p>Image Captured!</p>
        </div>
      ) : (
        <CameraComponent onCapture={handleCapture} />
      )}
    </div>
  );
};

export default App;
