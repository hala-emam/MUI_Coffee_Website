// src/components/Services.js
import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { keyframes } from '@mui/system';

// Define animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const services = [
  { title: 'Fast Service', description: 'Quick and friendly service.' },
  { title: 'Quality Beans', description: 'We use only the best beans.' },
  { title: 'Cozy Atmosphere', description: 'Relax and enjoy your coffee.' },
];

const Services = () => {
  return (
    <Box sx={{ py: 5, color: 'orange', my: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <Grid container spacing={3} justifyContent="center" item key={index} xs={12} sm={6} md={4} sx={{ mt: 10 }}>
            <Paper
              sx={{
                p: 3,
                textAlign: 'center',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                animation: `${fadeIn} 1s ease-in-out forwards`, // Apply animation
              }}
            >
              <Typography variant="h6">{service.title}</Typography>
              <Typography>{service.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
