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


const homeMainBannerPicture1 = 'https://i.ibb.co/Nss6Lkv/3.png';
const homeMainBannerPicture2 = 'https://i.ibb.co/W3yqtSf/1.png';
const homeMainBannerPicture3 = 'https://i.ibb.co/0sYJQXG/2.png';

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
          "delay": 5000,
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
                    <Box sx={{ textTransform: 'uppercase' }}>Get your product in Right Time</Box>
                    <Typography component="h1" fontSize="47px" fontWeight="700">Your Fasion & Gadget Storehouse</Typography>
                    <Typography component="span" sx={{ textTransform: 'uppercase', fontSize: '17', fontWeight: 300 }}>Don't be into trends. Don't make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live.</Typography>
                    <Box py={3}>
                      <Link to='/dashboard/myOrders'>
                        <Button variant="contained" color="secondary" size="large">Order Now!</Button>
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
                    <Box sx={{ textTransform: 'uppercase' }}>Get your product in Right Time</Box>
                    <Typography component="h1" fontSize="47px" fontWeight="700">Your Fasion & Gadget Storehouse</Typography>
                    <Typography component="span" sx={{ textTransform: 'uppercase', fontSize: '17', fontWeight: 300 }}>Don't be into trends. Don't make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live.</Typography>
                    <Box py={3}>
                      <Link to='/dashboard/myOrders'>
                        <Button variant="contained" color="secondary" size="large">Order Now!</Button>
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
                    <Box sx={{ textTransform: 'uppercase' }}>Get your product in Right Time</Box>
                    <Typography component="h1" fontSize="47px" fontWeight="700">Your Fasion & Gadget Storehouse</Typography>
                    <Typography component="span" sx={{ textTransform: 'uppercase', fontSize: '17', fontWeight: 300 }}>Don't be into trends. Don't make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live.</Typography>
                    <Box py={3}>
                      <Link to='/dashboard/myOrders'>
                        <Button variant="contained" color="secondary" size="large">Order Now!</Button>
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