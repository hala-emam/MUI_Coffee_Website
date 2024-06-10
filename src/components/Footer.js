// src/components/Footer.js
import React from 'react';
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 3, backgroundColor: '#333', color: 'white' }}>
      <Container>
        <Typography align="center" gutterBottom>
          &copy; 2024 Coffee Shop. All rights reserved.
        </Typography>
        <Typography align="center">
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>
          {' | '}
          <Link href="#" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
