import React from 'react';
import Box from '@mui/material/Box';
import HomeHeader from './HomeHeader';
import HomeCTA1 from './HomeCTA1';
import HomeOverlap from './HomeOverlap.js';
import fillerPic from '../../assets/homeheader.png';
import Typography from '@mui/material/Typography';
import { HomeTextLinkButton } from '../styledComponents.js';

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
      }}
    >
      <HomeHeader />
      <HomeCTA1 />
      <HomeOverlap />
      <Box
        sx={{
          width: '100%',
          height: '90vh',
          paddingLeft: '22em',
          paddingRight: '22em',
          alignItems: 'center',
          justifyContent: 'space-between',
          display: 'flex',
          gap: '1.5em',
        }}
      >
        <Box
          sx={{
            width: '47%',
            height: '80%',
            backgroundColor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1em',
            borderRadius: '5px',
          }}
        >
          <Box
            sx={{
              width: '90%',
              height: '50%',
              backgroundImage: `url(${fillerPic})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              marginBottom: '1em',
            }}
          />
          <Typography
            variant='h5'
            sx={{
              fontWeight: 'bold',
              color: 'secondary.main',
              textAlign: 'center',
              width: '90%',
            }}
          >
            1-2-1 PERSONAL TRAINING
          </Typography>
          <Typography
            variant='p'
            sx={{
              color: 'secondary.main',
              textAlign: 'center',
              width: '90%',
            }}
          >
            1-2-1 personal training is the ultimate investment in your health.
            You'll be working directly with your coach in our private studio,
            following a bespoke plan to ensure you hit your goals in record
            time. Whether you want to slim down, add muscle or anything in
            between, our personal training packages will get you there in a fun
            and sustainable way
          </Typography>
          <HomeTextLinkButton />
        </Box>
        <Box
          sx={{
            width: '47%',
            height: '80%',
            backgroundColor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1em',
            borderRadius: '5px',
          }}
        >
          <Box
            sx={{
              width: '90%',
              height: '50%',
              backgroundImage: `url(${fillerPic})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              marginBottom: '1em',
            }}
          />
          <Typography
            variant='h5'
            sx={{
              fontWeight: 'bold',
              color: 'secondary.main',
              textAlign: 'center',
              width: '90%',
            }}
          >
            NUTRITION COACHING
          </Typography>
          <Typography
            variant='p'
            sx={{
              color: 'secondary.main',
              textAlign: 'center',
              width: '90%',
            }}
          >
            We'll teach you how to take control of your health and weight,
            without relying on any specific diet or products, with our 1-2-1
            nutrition coaching. You'll working alongside a qualified
            nutritionist to build a sustainable approach together, so you'll not
            only hit your physique goals, but be able to stay there without
            rigid diets.
          </Typography>
          <HomeTextLinkButton />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
