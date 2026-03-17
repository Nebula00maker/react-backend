import React from 'react';

const Contact = () => (
  <div style={{ minHeight: '80vh', padding: '2rem' }}>
    <h2>Contact Us</h2>
    <p>Have questions or need support? We're here to help!</p>
    <div style={{ marginTop: '1rem' }}>
      <strong>Email:</strong> support@ecommerce.com<br />
      <strong>Phone:</strong> +1-234-567-8901<br />
      <strong>Address:</strong> 123 Commerce St, Online City, Webland
    </div>
    <form style={{ marginTop: '2rem', maxWidth: '400px' }}>
      <input type='text' placeholder='Your Name' style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
      <input type='email' placeholder='Your Email' style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
      <textarea placeholder='Your Message' style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
      <button type='submit' style={{ background: '#4f8cff', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px' }}>Send Message</button>
    </form>
  </div>
);

export default Contact;
