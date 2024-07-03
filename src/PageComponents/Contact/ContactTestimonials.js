import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Review from '../../assets/review.png';

const ContactTestimonials = () => {
  return (
    <Box
      sx={{
        paddingLeft: {
          xl: '20em',
          lg: '12em',
          md: '12em',
          sm: '2em',
          xs: '1em',
        },
        paddingRight: {
          xl: '20em',
          lg: '12em',
          md: '12em',
          sm: '2em',
          xs: '1em',
        },
        marginBottom: '5em',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5em',
      }}
    >
      <Typography variant='h4' sx={{ width: '95%' }}>
        {' '}
        Don't just take our word for it, here's what a few of our Challenge
        Graduates are saying about the programme...
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          width: '100%',
          height: 'auto',
        }}
      >
        <Grid
          item
          sm={4}
          xs={12}
          sx={{
            height: { md: '350px', sm: '250px', xs: '400px' },
            backgroundImage: `url(${Review})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Grid>
        <Grid
          item
          sm={4}
          xs={12}
          sx={{
            height: { md: '350px', sm: '250px', xs: '400px' },
            backgroundImage: `url(${Review})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Grid>
        <Grid
          item
          sm={4}
          xs={12}
          sx={{
            height: { md: '350px', sm: '250px', xs: '400px' },
            backgroundImage: `url(${Review})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Grid>
        <Grid
          item
          sm={4}
          xs={12}
          sx={{
            height: { md: '350px', sm: '250px', xs: '400px' },
            backgroundImage: `url(${Review})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Grid>
        <Grid
          item
          sm={4}
          xs={12}
          sx={{
            height: { md: '350px', sm: '250px', xs: '400px' },
            backgroundImage: `url(${Review})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Grid>
        <Grid
          item
          sm={4}
          xs={12}
          sx={{
            height: { md: '350px', sm: '250px', xs: '400px' },
            backgroundImage: `url(${Review})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></Grid>
      </Grid>
    </Box>
  );
};

export default ContactTestimonials;
