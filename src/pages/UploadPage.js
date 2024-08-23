
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UploadPage() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push({ image, description });
    localStorage.setItem('items', JSON.stringify(items));
    navigate('/display');
  };

  return (
    <div className="container mt-4">
      <h1>Upload Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Upload Image</label>
          <input type="file" id="image" className="form-control" onChange={handleImageChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea id="description" className="form-control" rows="4" value={description} onChange={handleDescriptionChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Upload</button>
      </form>
    </div>
  );
}

export default UploadPage;
