import React from 'react';
import Footer from './Footer';

const Product = () => (
  <div className='product' style={{ minHeight: '80vh', padding: '2rem' }}>
    <h2>Product List</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {/* Example products, replace with dynamic data */}
      <li style={{ marginBottom: '1rem', background: '#f0f4ff', padding: '1rem', borderRadius: '8px' }}>
        Product A - $10
      </li>
      <li style={{ marginBottom: '1rem', background: '#f0f4ff', padding: '1rem', borderRadius: '8px' }}>
        Product B - $25
      </li>
    </ul>
    <Footer />
  </div>
);

export default Product;
