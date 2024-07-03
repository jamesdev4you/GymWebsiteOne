import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';

const SmallGroupPTHeader = () => {
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
        variant='h5'
        sx={{
          color: 'primary.main',
          fontWeight: 'bold',
          width: { xl: '60%', lg: '100%' },
        }}
      >
        FUN AND EFFECTIVE
      </Typography>
      <Typography
        variant='h3'
        sx={{
          color: 'info.main',
          fontWeight: 'bold',
          width: { xl: '60%', lg: '100%' },
        }}
      >
        SMALL GROUP PERSONAL TRAINING
      </Typography>
      <Typography
        variant='h6'
        sx={{ color: 'primary.main', width: { xl: '60%', lg: '100%' } }}
      >
        The Armoury's Small Group Personal Training helps Milton Keynes’ busy
        men and women get in the best shape of their life, fall in love with
        training, and become part of a fitness community WITHOUT banning foods
        or taking the fun out of the process.
      </Typography>
      <Typography
        variant='h6'
        sx={{ color: 'primary.main', width: { xl: '60%', lg: '100%' } }}
      >
        It all starts with our renowned Six Week Transformation Challenge
      </Typography>
    </Box>
  );
};

export default SmallGroupPTHeader;
