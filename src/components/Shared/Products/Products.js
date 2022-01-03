import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material/';
import SingleProduct from './../SingleProduct/SingleProduct';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() =>
    fetch(`https://lit-bayou-30151.herokuapp.com/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        console.log(data)
      })

    , [])

  return (
    <Box sx={{ flexGrow: 1, mt: 5 }} style={{ paddingTop: "100px", paddingBottom: '100px', marginLeft: "50px", marginRight: "50px" }}>
      <Box>
        <Typography sx={{ fontFamily: 'Work Sans', fontWeight: "400", pb: 0, textAlign: "center", fontSize: "48px" }} variant="h3" gutterBottom component="div">Spring summer 2022
        </Typography>
        <Typography sx={{ fontFamily: 'Work Sans', fontWeight: "400", pb: 0, textAlign: "center", fontSize: "14px", paddingBottom: '50px' }} variant="h6" gutterBottom component="div">Find your style. Fall fashion 20xx
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ paddingTop: "30px" }}>
          {products.map(product =>
            <SingleProduct
              key={product._id}
              product={product}
            ></SingleProduct>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;