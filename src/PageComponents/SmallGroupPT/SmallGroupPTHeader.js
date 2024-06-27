import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';

const SmallGroupPTHeader = () => {
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
        variant='h5'
        sx={{ color: 'primary.main', fontWeight: 'bold', width: '60%' }}
      >
        FUN AND EFFECTIVE
      </Typography>
      <Typography
        variant='h3'
        sx={{ color: 'info.main', fontWeight: 'bold', width: '60%' }}
      >
        SMALL GROUP PERSONAL TRAINING
      </Typography>
      <Typography variant='h6' sx={{ color: 'primary.main', width: '60%' }}>
        The Armoury's Small Group Personal Training helps Milton Keynes’ busy
        men and women get in the best shape of their life, fall in love with
        training, and become part of a fitness community WITHOUT banning foods
        or taking the fun out of the process.
      </Typography>
      <Typography variant='h6' sx={{ color: 'primary.main', width: '60%' }}>
        It all starts with our renowned Six Week Transformation Challenge
      </Typography>
    </Box>
  );
};

export default SmallGroupPTHeader;
