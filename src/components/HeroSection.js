// src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { keyframes } from '@mui/system';
import bgImage from '../assets/coffe.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        backgroundImage: `url(${bgImage})`, // Corrected
        backgroundSize: 'cover',
        color: 'white',
        textAlign: 'center',
        p: 3,
        animation: animate ? `${fadeIn} 1s ease-in-out` : 'none',
      }}
    >
      <Container>
        <Typography variant="h2" gutterBottom>
          Welcome to Coffee Shop
        </Typography>
        <Typography variant="h5" gutterBottom>
          The best coffee in town
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Order Now
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
