import React from 'react';
import Footer from './Footer';

const Slider = () => (
  <div className='slider' style={{ minHeight: '80vh', padding: '2rem' }}>
    <h2>Slider</h2>
    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '2rem 0' }}>
      <div style={{ width: '150px', height: '100px', background: '#a1e3ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Slide 1</div>
      <div style={{ width: '150px', height: '100px', background: '#4f8cff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Slide 2</div>
      <div style={{ width: '150px', height: '100px', background: '#222', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>Slide 3</div>
    </div>
    <Footer />
  </div>
);

export default Slider;
