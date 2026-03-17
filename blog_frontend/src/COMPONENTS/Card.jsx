import React from 'react';
import Footer from './Footer';

const Card = ({ title, price, image, children }) => (
  <div className='card' style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '1rem', margin: '1rem', maxWidth: '300px', background: '#fff' }}>
    {image && <img src={image} alt={title} style={{ width: '100%', borderRadius: '8px' }} />}
    <h3 style={{ color: '#4f8cff' }}>{title}</h3>
    {price && <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>${price}</div>}
    <div>{children}</div>
    <Footer />
  </div>
);

export default Card;
