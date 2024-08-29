import React from 'react';

function Footer() {
  return (
    <footer className=" text-light text-center py-4" style={{background:"#2392D0"}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: contact@example.com</p>
            <p>Phone: +1 (555) 123-4567</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="text-light me-2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <br />
            <a href="https://twitter.com" className="text-light me-2" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <br />
            <a href="https://instagram.com" className="text-light" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
        <div className="mt-4">
          <p>&copy; 2024 My First React Project</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
