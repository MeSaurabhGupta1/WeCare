import React, { useState } from 'react';
import axios from 'axios'; // Install axios: npm install axios

export default function CoachHome(){
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
      reader.readAsDataURL(file);
    } else {
      setPreviewUrl(null);
    }
  };

  const uploadImage = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data); // Handle successful upload response
    } catch (error) {
      console.error(error); // Handle upload errors
    }
  };

  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '8px', padding: '8px'}}>
      <h1>Image Upload</h1>
      <input type="file" accept="image/*" onChange={handleChange} />
      {previewUrl && (<><img src={previewUrl} alt="Selected Image" style={{boxSizing: 'border-box', height: '352px', width: '320px', padding: '18px'}}/>
      <button onClick={uploadImage}>Upload Image</button></>)

      }
      
      </div>
    </>
  );
};
