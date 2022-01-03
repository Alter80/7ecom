import { Box } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import Products from './../../Shared/Products/Products';

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <Products></Products>
    </Box>
  );
};

export default Home;