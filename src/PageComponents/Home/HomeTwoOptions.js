import React from 'react';
import Box from '@mui/material/Box';
import fillerPic from '../../assets/homeheader.png';
import Typography from '@mui/material/Typography';
import { HomeTextLinkButton } from '../styledComponents.js';

const HomeTwoOptions = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        paddingLeft: {
          xl: '20em',
          lg: '18em',
          md: '12em',
          sm: '2em',
          xs: '1em',
        },
        paddingRight: {
          xl: '20em',
          lg: '18em',
          md: '12em',
          sm: '2em',
          xs: '1em',
        },
        paddingTop: {
          xl: '5em',
          lg: '5em',
          md: '1em',
          sm: '1em',
          xs: '1em',
        },
        paddingBottom: {
          xl: '5em',
          lg: '5em',
          md: '1em',
          sm: '1em',
          xs: '1em',
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: {
          xl: 'row',
          lg: 'column',
          md: 'column',
          sm: 'column',
          xs: 'column',
        },
        gap: {
          xl: '1em',
          lg: '5em',
          md: '3em',
          sm: '2em',
          xs: '2em',
        },
      }}
    >
      <Box
        sx={{
          width: {
            xl: '47%',
            lg: '100%',
            md: '100%',
            sm: '100%',
            xs: '100%',
          },
          height: 'auto',
          backgroundColor: 'white',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1em',
          borderRadius: '5px',
          padding: '1em',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '400px',
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
          following a bespoke plan to ensure you hit your goals in record time.
          Whether you want to slim down, add muscle or anything in between, our
          personal training packages will get you there in a fun and sustainable
          way
        </Typography>
        <HomeTextLinkButton />
      </Box>
      <Box
        sx={{
          width: {
            xl: '47%',
            lg: '100%',
            md: '100%',
            sm: '100%',
            xs: '100%',
          },
          height: 'auto',
          backgroundColor: 'white',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1em',
          borderRadius: '5px',
          padding: '1em',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '400px',
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
          We'll teach you how to take control of your health and weight, without
          relying on any specific diet or products, with our 1-2-1 nutrition
          coaching. You'll working alongside a qualified nutritionist to build a
          sustainable approach together, so you'll not only hit your physique
          goals, but be able to stay there without rigid diets.
        </Typography>
        <HomeTextLinkButton />
      </Box>
    </Box>
  );
};

export default HomeTwoOptions;
