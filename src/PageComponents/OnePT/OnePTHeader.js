import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';

const OnePTHeader = () => {
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
        BESPOKE COACHING IN YOUR OWN PRIVATE STUDIO
      </Typography>
      <Typography
        variant='h3'
        sx={{ color: 'info.main', fontWeight: 'bold', width: '60%' }}
      >
        ONE ON ONE PERSONAL TRAINING
      </Typography>
      <Typography variant='h6' sx={{ color: 'primary.main', width: '60%' }}>
        The Armoury’s One To One Personal Training helps busy men and women to
        build lean, athletic, healthy physiques without the frustrations,
        rigidity & ‘bounce-back’
      </Typography>
    </Box>
  );
};

export default OnePTHeader;
