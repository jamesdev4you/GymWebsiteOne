import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';

const TrainWithUsHeader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: {
          xl: '60vh',
          lg: '60vh',
          md: '60vh',
          sm: '60vh',
          xs: 'auto',
        },
        backgroundImage: `url(${placeholder})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
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
          xl: '0em',
          lg: '0em',
          md: '0em',
          sm: '0em',
          xs: '10em',
        },
        paddingBottom: {
          xl: '0em',
          lg: '0em',
          md: '0em',
          sm: '0em',
          xs: '10em',
        },
        marginTop: '5em',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1em',
      }}
    >
      <Typography
        variant='h2'
        sx={{
          color: 'info.main',
          width: { xl: '60%', lg: '100%' },
          fontWeight: 'bold',
        }}
      >
        CONTACT
      </Typography>
      <Typography
        variant='h6'
        sx={{ color: 'primary.main', width: { xl: '50%', lg: '100%' } }}
      >
        Want to learn more about who we are, and what we do here at The Armoury
        Coaching Studio? Have a question that hasn’t been answered on any other
        page? Fill in the form below, and we’ll get back to you as soon as
        possible
      </Typography>
    </Box>
  );
};

export default TrainWithUsHeader;
