import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './SinglePage.css'
import Rating from '@mui/material/Rating';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useState } from "react";


// Import Swiper styles


// install Swiper modules

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Button, Container, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router';


SwiperCore.use([EffectCoverflow, Pagination]);


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const SinglePage = () => {
    const { id } = useParams();
    const [counter, setCounter] = useState(0)
    const [product, setProduct] = useState({})


    // data fetch
    React.useEffect(() => {
        const url = `https://lit-bayou-30151.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const { title, description, image, price, rating, category, img1, img2 } = product;

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }
    return (
        <div>
            <Container mt={400} >
                <Box sx={{
                    flexGrow: 1, mt: 10,
                    border: 'none'
                }}>
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
                                <Rating size="small" name="read-only" value={3} readOnly />
                                <Typography variant="h4" gutterBottom component="div">
                                    {title}
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    ${price}
                                </Typography>
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
                                        fashion,women
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

            </Container>
        </div>
    );
};

export default SinglePage;