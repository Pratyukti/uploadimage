import React, { useState } from 'react';

function UploadPage() {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [items, setItems] = useState([]);

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && description) {
      // Add the new item to the list
      setItems([...items, { image, description }]);
      // Clear the form fields
      setImage();
      setDescription('');
    }
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

      {items.length > 0 && (
        <div className="mt-4">
          <h2>Uploaded Items</h2>
          <div className="row">
            {items.map((item, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card d-flex flex-row">
                  <img src={item.image} className="img-fluid" alt="Uploaded" style={{ maxWidth: '200px', marginRight: '15px' }} />
                  <div className="card-body">
                    <p className="card-text">{item.description}</p>
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
