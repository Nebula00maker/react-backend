import React from 'react';
import Footer from './Footer';

const Rating = ({ value }) => (
  <div className='rating' style={{ minHeight: '80vh', padding: '2rem' }}>
    <div style={{ fontSize: '1.5rem', color: '#4f8cff' }}>Rating: {value} / 5</div>
    <Footer />
  </div>
);

export default Rating;
