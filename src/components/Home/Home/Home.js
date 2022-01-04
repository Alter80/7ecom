import { Box } from '@mui/material';
import React from 'react';
import AllProducts from '../../AllProducts/AllProducts';
import Banner from '../Banner/Banner';
import Products from './../../Shared/Products/Products';

const Home = () => {
  return (
    <Box>
      <Banner></Banner>
      <AllProducts></AllProducts>
      <Products></Products>
    </Box>
  );
};

export default Home;