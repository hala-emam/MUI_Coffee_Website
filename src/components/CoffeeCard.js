// src/components/CoffeeCard.js
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CoffeeCard = ({ coffee }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={coffee.image}
        alt={coffee.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {coffee.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {coffee.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CoffeeCard;
