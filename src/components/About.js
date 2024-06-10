// src/components/About.js
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          About Us
        </Typography>
        <Typography align="center">
          We are passionate about coffee and committed to providing the best coffee experience to our customers.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
