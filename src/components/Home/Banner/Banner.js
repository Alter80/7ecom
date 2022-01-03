import { Button, Typography, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Link } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const homeMainBannerPicture1 = 'http://lezada.reactdemo.hasthemes.com/assets/images/hero-slider/hero-slider-two/1.png';
const homeMainBannerPicture2 = 'http://lezada.reactdemo.hasthemes.com/assets/images/hero-slider/hero-slider-two/2.png';
const homeMainBannerPicture3 = 'http://lezada.reactdemo.hasthemes.com/assets/images/hero-slider/hero-slider-two/3.png';

const Banner = () => {
  const matches960px = useMediaQuery('(min-width:960px)');
  return (
    <Box sx={{ py: 4, bgcolor: 'rgb(235, 244, 242)', boxSizing: 'border-box' }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          "clickable": true,
        }}
        autoplay={{
          "delay": 6000,
          "disableOnInteraction": false
        }}
        navigation={true}
        className="mySwiper"
      >
        {/* Slider Number 01 */}
        <SwiperSlide>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', maxHeight: '70vh' }}>
            <Box>
              <Box sx={{ p: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ maxWidth: '50%' }}>
                    <Box sx={{ textTransform: 'uppercase' }}>Magical London Bridge with Neil Stay</Box>
                    <Typography component="h1" fontSize="47px" fontWeight="700">The Audi Premium Cars</Typography>
                    <Typography component="span" sx={{ textTransform: 'uppercase', fontSize: '17', fontWeight: 300 }}>The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.”</Typography>
                    <Box py={3}>
                      <Link to='/dashboard/myOrders'>
                        <Button variant="contained" color="secondary" size="large">Your Orders</Button>
                      </Link>
                    </Box>
                  </Box>
                  {
                    matches960px
                    && (
                      <Box sx={{ minheight: '70vh' }}>
                        <img src={homeMainBannerPicture1} alt="" />
                      </Box>
                    )
                  }
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        {/* Slider Number 01 */}
        {/* Slider Number 02 */}
        <SwiperSlide>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', maxHeight: '70vh' }}>
            <Box>
              <Box sx={{ p: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ maxWidth: '50%' }}>
                    <Box sx={{ textTransform: 'uppercase' }}>Magical London Bridge with Neil Stay</Box>
                    <Typography component="h1" fontSize="47px" fontWeight="700">The Audi Premium Cars</Typography>
                    <Typography component="span" sx={{ textTransform: 'uppercase', fontSize: '17', fontWeight: 300 }}>The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.”</Typography>
                    <Box py={3}>
                      <Link to='/dashboard/myOrders'>
                        <Button variant="contained" color="secondary" size="large">Your Orders</Button>
                      </Link>
                    </Box>
                  </Box>
                  {
                    matches960px
                    && (
                      <Box sx={{ minheight: '70vh' }}>
                        <img src={homeMainBannerPicture2} alt="" />
                      </Box>
                    )
                  }
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        {/* Slider Number 02 */}
        {/* Slider Number 03 */}
        <SwiperSlide>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', maxHeight: '70vh' }}>
            <Box>
              <Box sx={{ p: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ maxWidth: '50%' }}>
                    <Box sx={{ textTransform: 'uppercase' }}>Magical London Bridge with Neil Stay</Box>
                    <Typography component="h1" fontSize="47px" fontWeight="700">The Audi Premium Cars</Typography>
                    <Typography component="span" sx={{ textTransform: 'uppercase', fontSize: '17', fontWeight: 300 }}>The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.”</Typography>
                    <Box py={3}>
                      <Link to='/dashboard/myOrders'>
                        <Button variant="contained" color="secondary" size="large">Your Orders</Button>
                      </Link>
                    </Box>
                  </Box>
                  {
                    matches960px
                    && (
                      <Box sx={{ minheight: '70vh' }}>
                        <img src={homeMainBannerPicture3} alt="" />
                      </Box>
                    )
                  }
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        {/* Slider Number 03 */}
      </Swiper>
    </Box>
  );
};

export default Banner;