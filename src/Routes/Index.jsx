// Routes/Index.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './../components/Navbar';

import Error from './../pages/Error';
import About from './../pages/About';
import Contact from './../pages/Contact';
import Home from '../pages/Home';
import Themes from '../components/Themes';
import Projects from '../pages/Projects';
import Services from '../pages/Services';


function Index() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Index;
