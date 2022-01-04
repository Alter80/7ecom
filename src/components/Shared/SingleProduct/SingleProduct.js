import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link, useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import './SingleProduct.css'

const SingleProduct = (props) => {
  const { title, description, image, price, _id, rating, category } = props.product || {};

  return (
    <Grid item xs={4} sm={4} md={3}>
      <Card className="singleProduct" sx={{ minWidth: 275, }}>
        <CardMedia
          component="img"
          style={{ width: "200px", height: '200px', paddingTop: '20px', margin: "0 auto", objectFit: "contain" }}
          image={image}
          alt="green iguana"
        />
        <Box style={{ textAlign: "center", paddingTop: "30px" }}>

          <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly />
        </Box>
        <CardContent >
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            {title.slice(0, 20).toString()}
          </Typography>
          <Button style={{ color: "#666", marginBottom: "10px" }} size="small">{category}</Button>
          <Typography color="text.secondary" variant="body2">
            {description.slice(0, 80).toString()}... See more
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', pt: 2 }}>
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            <span style={{ color: '' }}>$</span>{price}
          </Typography>

          <Link to={`/products/${_id}`} className='text-decoration-none text-black'><Box style={{ textDecoration: 'none' }}><Button sx={{ color: '#9c27b0' }} variant="text">View Details</Button></Box></Link>

        </Box>
      </Card>
    </Grid>
  );
};

export default SingleProduct;