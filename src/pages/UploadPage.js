import React, { useState, useRef } from 'react';

function UploadPage() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);
  const fileInputRef = useRef(null);
  const maxUploads = 4;

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleDescriptionChange = (e) => {
    const words = e.target.value.split(' ');
    if (words.length <= 35) {
      setDescription(e.target.value);
    } else {
      alert('Description cannot exceed 35 words.');
    }
  };

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && description) {
      if (items.length < maxUploads) {
        setItems([...items, { image, description }]);
        setImage(null);
        setDescription('');
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        if (items.length + 1 === maxUploads) {
          window.alert("Maximum uploads reached.");
        }
      }
    }
  };

  const isSubmitDisabled = items.length >= maxUploads;

  return (
    <div className="container mt-4">
      <div style={{ background: "#BDE0F4", padding: "20px" }}>
        <h1>Upload Page</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Upload Image</label>
            <input 
              type="file" 
              id="image" 
              className="form-control" 
              ref={fileInputRef} 
              onChange={handleImageChange} 
              disabled={isSubmitDisabled} // Disable if max uploads reached
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description (max 35 words)</label>
            <textarea 
              id="description" 
              className="form-control" 
              rows="4" 
              value={description} 
              onChange={handleDescriptionChange} 
              required 
              disabled={isSubmitDisabled} // Disable if max uploads reached
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{marginLeft:"45%"}} disabled={isSubmitDisabled}>
            Submit
          </button>
        </form>
      </div>

      {items.length > 0 && (
        <div className="mt-4">
        <div className="uploaded-items-container" style={{ maxHeight: '200px', overflowY: 'auto' }}>
          {items.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card d-flex flex-row" style={{ background: '#65BFCD' }}>
                <img 
                  src={item.image} 
                  className="img-fluid" 
                  alt="Uploaded" 
                  style={{ maxWidth: '200px', marginRight: '15px' }} 
                />
                <div className="card-body">
                  <p className="card-text d-flex">{item.description}</p>
                </div>
                <div>
                  <button className="btn btn-danger" style={{ marginLeft: "50%" }} onClick={() => handleDelete(index)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      )}
    </div>
  );
}

export default UploadPage;
