import React from 'react';
import Box from '@mui/material/Box';
import HomeHeader from './HomeHeader';
import HomeCTA1 from './HomeCTA1';
import HomeOverlap from './HomeOverlap.js';
import HomeTwoOptions from './HomeTwoOptions.js';
import HomeTestimonials from './HomeTestimonials.js';
import HomeMission from './HomeMission.js';

const Home = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1em',
      }}
    >
      <HomeHeader />
      <HomeCTA1 />
      <HomeOverlap />
      <HomeTwoOptions />
      <HomeTestimonials />
      <HomeMission />
    </Box>
  );
};

export default Home;
