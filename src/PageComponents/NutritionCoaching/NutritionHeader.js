import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';

const NutritionHeader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '60vh',
        backgroundImage: `url(${placeholder})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        paddingLeft: '22em',
        paddingRight: '22em',
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
        sx={{ color: 'primary.main', fontWeight: 'bold', width: '60%' }}
      >
        DITCHING FAD DIETS & YO-YOING WITH EVIDENCE BASED GUIDANCE
      </Typography>
      <Typography
        variant='h3'
        sx={{ color: 'info.main', fontWeight: 'bold', width: '60%' }}
      >
        NUTRITION COACHING
      </Typography>
      <Typography variant='h6' sx={{ color: 'primary.main', width: '60%' }}>
        The Armoury’s 6 Week Nutrition Coaching Project teaches busy men and
        women how to take control of their diet to reach their dream physique
        without the frustrations & bounce-back
      </Typography>
    </Box>
  );
};

export default NutritionHeader;
