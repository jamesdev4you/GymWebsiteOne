import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';

const NutritionHeader = () => {
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
        variant='h6'
        sx={{
          color: 'primary.main',
          fontWeight: 'bold',
          width: { xl: '60%', lg: '100%' },
        }}
      >
        DITCHING FAD DIETS & YO-YOING WITH EVIDENCE BASED GUIDANCE
      </Typography>
      <Typography
        variant='h3'
        sx={{
          color: 'info.main',
          fontWeight: 'bold',
          width: { xl: '60%', lg: '100%' },
        }}
      >
        NUTRITION COACHING
      </Typography>
      <Typography
        variant='h6'
        sx={{ color: 'primary.main', width: { xl: '60%', lg: '100%' } }}
      >
        The Armoury’s 6 Week Nutrition Coaching Project teaches busy men and
        women how to take control of their diet to reach their dream physique
        without the frustrations & bounce-back
      </Typography>
    </Box>
  );
};

export default NutritionHeader;
