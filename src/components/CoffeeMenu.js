// src/components/CoffeeMenu.js
import React from 'react';
import Grid from '@mui/material/Grid';
import CoffeeCard from './CoffeeCard';
import user1 from '../assets/user1.jpg';
import user2 from '../assets/user2.jpg';
import user3 from '../assets/user3.jpg';
const coffees = [
  {
    name: 'Espresso',
    description: 'Strong and bold coffee.',
    image: `${user1}`,
  },
  {
    name: 'Latte',
    description: 'Coffee with steamed milk.',
    image: `${user2}`,
  },
  {
    name: 'Cappuccino',
    description: 'Coffee with frothed milk.',
    image: `${user3}`,
  },
];

const CoffeeMenu = () => {
  return (
    <Grid container spacing={4}>
      {coffees.map((coffee, index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <CoffeeCard coffee={coffee} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CoffeeMenu;
