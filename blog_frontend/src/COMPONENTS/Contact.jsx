import React from 'react';
import Footer from './Footer';

const Contact = () => (
  <div className='contact' style={{ minHeight: '80vh', padding: '2rem' }}>
    <h2>Contact Form</h2>
    <form style={{ maxWidth: '400px', margin: 'auto' }}>
      <input type='text' placeholder='Name' style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
      <input type='email' placeholder='Email' style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
      <textarea placeholder='Message' style={{ width: '100%', marginBottom: '1rem', padding: '0.5rem' }} />
      <button type='submit' style={{ background: '#4f8cff', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px' }}>Send</button>
    </form>
    <Footer />
  </div>
);

export default Contact;
