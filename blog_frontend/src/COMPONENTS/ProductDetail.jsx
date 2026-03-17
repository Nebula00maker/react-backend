import React from 'react';
import Footer from './Footer';

const ProductDetail = () => (
  <div className='product-detail' style={{ minHeight: '80vh', padding: '2rem' }}>
    <h2>Product Detail</h2>
    <div style={{ background: '#f0f4ff', padding: '1rem', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
      <div><strong>Name:</strong> Example Product</div>
      <div><strong>Price:</strong> $99</div>
      <div><strong>Description:</strong> This is a sample product description.</div>
    </div>
    <Footer />
  </div>
);

export default ProductDetail;
