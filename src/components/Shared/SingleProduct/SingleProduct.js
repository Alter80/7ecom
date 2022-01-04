import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Rating } from '@mui/material';
import './SingleProduct.css'
import Modal from '@mui/material/Modal';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container, Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useState } from 'react';
SwiperCore.use([EffectCoverflow, Pagination]);

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SingleProduct = (props) => {
  const { title, description, image, price, _id, rating, category, img1, img2 } = props.product || {};

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

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

          <Box style={{ textDecoration: 'none' }}><Button onClick={handleOpen} sx={{ color: '#9c27b0' }} variant="text">View Details</Button></Box>

          {/* MODAL PART STARTS */}
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"

          >
            <Box sx={style}>
              <Grid container spacing={0}>
                <Grid item xs={6} sx={{ border: 'none' }}>
                  <Container maxWidth='sm'>
                    <Item style={{ boxShadow: "none" }} className='swiper-height'>
                      <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                          rotate: 50,
                          stretch: 0,
                          depth: 100,
                          modifier: 1,
                          slideShadows: false,
                        }}
                        pagination={true}
                        className="mySwiper"
                      >
                        <SwiperSlide  >
                          <img className='img-fluid' src={img1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img className='img-fluid' src={img2} alt="" />
                        </SwiperSlide>

                      </Swiper>
                    </Item>
                  </Container>
                </Grid>
                <Grid item xs={6}>
                  <Item style={{ boxShadow: "none" }} className='align'>
                    <Typography variant="h4" gutterBottom component="div">
                      {title}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                      ${price}
                    </Typography>
                    <Rating name="half-rating-read" defaultValue={rating.rate} precision={0.5} readOnly />
                    <Typography className='align' variant="subtitle1" gutterBottom component="div">
                      {description}
                    </Typography>

                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'space-between',

                    }}>
                      <Typography sx={{ mt: 1 }} variant="h6" gutterBottom component="div">
                        Size
                      </Typography>
                      <Typography sx={{ ml: 8 }} variant="h6" gutterBottom component="div">
                        <Button sx={{ fontSize: 20, color: '#AAAAAA' }} variant="text">X</Button>
                        <Button sx={{ fontSize: 20, color: '#AAAAAA' }} variant="text">M</Button>
                        <Button sx={{ fontSize: 20, color: '#AAAAAA' }} variant="text">XL</Button>
                      </Typography>
                    </Box>
                    {/* <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',

                                }}>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Color
                                    </Typography>
                                    <Typography variant="h6" gutterBottom component="div">
                                        Color
                                    </Typography>
                                </Box> */}
                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'space-between',


                    }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Quantity
                      </Typography>


                      <Button sx={{ ml: 5, color: 'black' }} onClick={handleDecrement}><HorizontalRuleIcon /></Button>
                      <Typography variant="h6" gutterBottom component="div">
                        {counter}
                      </Typography>
                      <Button sx={{ color: 'black' }} onClick={handleIncrement}><LocalHospitalIcon /></Button>

                    </Box>

                    <Button className='single-btn' sx={{
                      padding: '10px 50px',
                      backgroundColor: "#212121",
                      my: 8,
                      '&:hover': {
                        backgroundColor: '#fff',
                        color: 'black',
                      },
                    }} variant="contained">Add To Cart</Button>



                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'space-between',

                    }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Categories:
                      </Typography>
                      <Typography sx={{ ml: 4 }} variant="h6" gutterBottom component="div">
                        {category}
                      </Typography>
                    </Box>

                    <Box sx={{
                      display: 'flex',
                      justifyContent: 'space-between',

                    }}>
                      <Typography variant="h6" gutterBottom component="div">
                        Share on:
                      </Typography>
                      <Typography sx={{ ml: 6 }} variant="h6" gutterBottom component="div">
                        <Link href='#'><FacebookIcon sx={{ color: '#AAAAAA' }} /></Link>
                        <Link href='#'><TwitterIcon sx={{ ml: 2, color: '#AAAAAA' }} /></Link>
                        <Link href='#'><InstagramIcon sx={{ ml: 2, color: '#AAAAAA' }} /></Link>
                        <Link href='#'><YouTubeIcon sx={{ ml: 2, color: '#AAAAAA' }} /></Link>
                      </Typography>
                    </Box>

                  </Item>
                </Grid>

              </Grid>
            </Box>
          </Modal>

        </Box>
      </Card>
    </Grid>
  );
};

export default SingleProduct;