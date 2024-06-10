// src/components/Testimonial.js
import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';

const testimonials = [
  {
    name: 'John Doe',
    text: 'Great coffee and friendly staff!',
    avatar: 'https://source.unsplash.com/random/80x80?person',
  },
  {
    name: 'Jane Smith',
    text: 'I love the cozy atmosphere!',
    avatar: 'https://source.unsplash.com/random/80x80?woman',
  },
  {
    name: 'Michael Brown',
    text: 'Best place to relax and enjoy a cup of coffee.',
    avatar: 'https://source.unsplash.com/random/80x80?man',
  },
];

const Testimonial = () => {
  return (
    <Box sx={{ py: 5, backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Testimonials
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Paper sx={{ p: 3, textAlign: 'center' }}>
              <Avatar
                alt={testimonial.name}
                src={testimonial.avatar}
                sx={{ margin: 'auto', width: 80, height: 80 }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>
                {testimonial.name}
              </Typography>
              <Typography>{testimonial.text}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonial;
