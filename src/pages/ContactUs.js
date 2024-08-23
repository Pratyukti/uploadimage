
import React from 'react';

function ContactUs() {
  return (
    <div className="container mt-4">
      <h1 className="text-center">Contact Us</h1>
      <p>
        We would love to hear from you! Please reach out to us using the contact information below, or fill out the contact form.
      </p>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> support@example.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Example St, City, Country</p>
      </div>
      <div className="contact-form mt-4">
        <h2>Send Us a Message</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-control" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
