// UploadComponent.js
import React, { useState } from "react";
import axios from "axios";

const UploadComponent = ({ imageData }) => {
  const [uploadStatus, setUploadStatus] = useState("");

  const uploadImage = async () => {
    try {
      // Send the image data to the server
      const response = await axios.post("YOUR_UPLOAD_API_ENDPOINT", {
        imageData,
      });
      setUploadStatus(response.data.message);
    } catch (error) {
      console.error("Error uploading image:", error);
      setUploadStatus("Error uploading image");
    }
  };

  return (
    <>
      <img src={imageData} alt="Captured" />
      <button onClick={uploadImage}>Upload Image</button>
      <p>{uploadStatus}</p>
    </>
  );
};

export default UploadComponent;
