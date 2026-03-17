import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './COMPONENTS/Header';
import Footer from './COMPONENTS/Footer';
import Home from './PAGES/Home';
import AboutUs from './PAGES/AboutUs';
import Services from './PAGES/Services';
import Contact from './PAGES/Contact';
import Product from './PAGES/Product';
import Other from './PAGES/Other';
import Cart from './COMPONENTS/Cart';
import Login from './COMPONENTS/Login';
import Signup from './Signup';
import { AppProvider } from './usecontext/AppContext.jsx';
import './ASSETS/style.css';
import './ASSETS/responsive.css';

const UpArrow = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: '#4f8cff',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '48px',
        height: '48px',
        fontSize: '2rem',
        cursor: 'pointer',
        zIndex: 1000,
        boxShadow: '0 2px 8px #a1e3ff',
      }}
      onClick={handleScrollTop}
      aria-label='Scroll to top'
    >
      ↑
    </button>
  );
};

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/other' element={<Other />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Footer />
        <UpArrow />
      </Router>
    </AppProvider>
  );
};

export default App;