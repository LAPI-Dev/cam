import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [imageUrl, setImageUrl] = useState(null); // State untuk menyimpan URL gambar

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(
        "http://localhost:3002/upload",
        formData
      );

      if (response.status === 201) {
        setMessage("File uploaded successfully!");

        setImageUrl(response.data.post.imageUrl);
      }
    } catch (error) {
      console.error("Error during file upload:", error);
      setMessage("Error uploading file. Please try again.");
    }
  };

  return (
    <div>
      <h1>File Upload</h1>
      <input type="file" onChange={handleFileChange} name="imageUrl" />
      <button onClick={handleUpload}>Upload</button>
      {message && <p>{message}</p>}
      {imageUrl && (
        <div>
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "100%" }} />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
