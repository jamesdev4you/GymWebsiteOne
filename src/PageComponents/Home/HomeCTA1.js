import React from 'react';
import Typography from '@mui/material/Typography';
import { HomeCTAButton } from '../styledComponents.js';
import Box from '@mui/material/Box';

const HomeCTA1 = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        height: 'auto',
        weight: '100%',
        paddingTop: '1em',
        paddingBottom: '1em',
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1em',
      }}
    >
      <Typography variant='h4' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {' '}
        IT'S TIME TO PUT YOURSELF FIRST
      </Typography>
      <Typography variant='h6' sx={{ textAlign: 'center' }}>
        {' '}
        We work with men and women that have let fitness slide down their list
        of priorities, and want to make a change
      </Typography>
      <Typography variant='h6' sx={{ textAlign: 'center' }}>
        {' '}
        Using our Armoury Transformation Formula, we'll guide you through our
        proven system of creating a healthier, happier and more confident
        version of yourself in the next 6 weeks- without boring workouts, or fad
        diets
      </Typography>
      <Typography variant='h6' sx={{ textAlign: 'center' }}>
        {' '}
        We believe fitness should enhance your life, rather than take away from
        it- every Armoury Transformation starts with an in-depth look at where
        you currently are, and creates an achievable path to where you want to
        be.
      </Typography>
      <Typography variant='h6' sx={{ textAlign: 'center' }}>
        Whether that's ditching the mid-afternoon energy slump so you can be
        active with your kids after school, banishing the expanding midsection
        that's making it harder to slide into your work trousers each passing
        year, or finally having the body confidence to buy clothes that show off
        your physique, rather than hide it
      </Typography>
      <Typography variant='h6' sx={{ textAlign: 'center' }}>
        In just 42 days we'll take you from feeling frustrated with your current
        trajectory, to feeling proud of the positive habits you've built
      </Typography>
      <Typography variant='h6' sx={{ textAlign: 'center' }}>
        ​If you feel ready to take action, and put yourself first? Hit the
        button below, and apply for a free session to try us out for yourself
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          jusitfyContent: 'center',
          height: '5vh',
        }}
      >
        <HomeCTAButton title={'Try Us Out'} />
      </Box>
    </Box>
  );
};

export default HomeCTA1;
