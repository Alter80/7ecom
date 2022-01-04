import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container, Grid, Link } from '@mui/material';
import Rating from '@mui/material/Rating';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
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

export default function KeepMountedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [counter, setCounter] = React.useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
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
                                            <img className='img-fluid' src="http://lezada.reactdemo.hasthemes.com/assets/images/product/fashion/9.jpg" alt="" />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <img className='img-fluid' src="http://lezada.reactdemo.hasthemes.com/assets/images/product/fashion/10.jpg" alt="" />
                                        </SwiperSlide>

                                    </Swiper>
                                </Item>
                            </Container>
                        </Grid>
                        <Grid item xs={6}>
                            <Item style={{ boxShadow: "none" }} className='align'>
                                <Rating size="small" name="read-only" value={3} readOnly />
                                <Typography variant="h4" gutterBottom component="div">
                                    Lorem ipsum fashion nine
                                </Typography>
                                <Typography variant="h6" gutterBottom component="div">
                                    $28.00
                                </Typography>
                                <Typography className='align' variant="subtitle1" gutterBottom component="div">
                                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
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
            </Modal>
        </div>
    );
}