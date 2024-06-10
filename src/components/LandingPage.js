// src/components/LandingPage.js
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Services from './Services';
import About from './About';
import CoffeeMenu from './CoffeeMenu';
import Testimonial from './Testimonial';
import Contacts from './Contacts';
import Footer from './Footer';
import Container from '@mui/material/Container';

const LandingPage = () => {
  return (
    <div>
   
      <div sx={{mx:'5px'}}>
        <HeroSection />
        <Services />
        <About />
        <CoffeeMenu />
        <Testimonial />
        <Contacts />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
