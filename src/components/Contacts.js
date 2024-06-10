// src/components/Contacts.js
import React from 'react';
import { Box, Typography, Container, TextField, Button } from '@mui/material';

const Contacts = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Box component="form" sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Your Name"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Your Email"
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Your Message"
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
          >
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contacts;
