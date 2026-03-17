import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Blog from './Blog';
import Home from './PAGES/Home';
import AboutUs from './PAGES/AboutUs';
import Services from './PAGES/Services';
import Contact from './PAGES/Contact';
import Product from './PAGES/Product';
import Other from './PAGES/Other';
import Cart from './COMPONENTS/Cart';

import Login from './COMPONENTS/Login';
import Signup from './Signup';

const Myroutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/other" element={<Other />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/app" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Myroutes;