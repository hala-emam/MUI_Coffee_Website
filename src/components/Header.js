// // src/components/Header.js
// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CoffeeIcon from '@mui/icons-material/LocalCafe';

// const Header = () => {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <CoffeeIcon />
//         <Typography variant="h6" style={{ marginLeft: 10 }}>
//           Coffee Shop
//         </Typography>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
// src/components/Header.js
import CoffeeIcon from '@mui/icons-material/LocalCafe';
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" cssBaselie>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 2 , p:'10px'}}>
        <CoffeeIcon />
          Coffee Shop
        </Typography>
        <Button component={Link} to="/menu" color="inherit" style={{ textDecoration: 'none', marginRight: 10 }}>Menu</Button>
        <Button component={Link} to="/about" color="inherit" style={{ textDecoration: 'none', marginRight: 10 }}>About</Button>
        <Button component={Link} to="/contact" color="inherit" style={{ textDecoration: 'none', marginRight: 10 }}>Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
