
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function DisplayPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const handleModify = (index) => {
    const newDescription = prompt('Enter new description:', items[index].description);
    if (newDescription !== null) {
      const updatedItems = items.map((item, i) => i === index ? { ...item, description: newDescription } : item);
      setItems(updatedItems);
      localStorage.setItem('items', JSON.stringify(updatedItems));
    }
  };

  const truncateText = (text, maxLength) => {
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="container mt-4">
      <h1>Display Page</h1>
      {items.length === 0 ? (
        <p>No items to display.</p>
      ) : (
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card card-custom">
                <img src={item.image} className="card-img-top" alt="Uploaded" />
                <div className="card-body">
                  <p className="card-text">{truncateText(item.description, 100)}</p>
                  <button className="btn btn-warning me-2" onClick={() => handleModify(index)}>Modify</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/upload" className="btn btn-primary mt-4">Back to Upload</Link>
    </div>
  );
}

export default DisplayPage;
