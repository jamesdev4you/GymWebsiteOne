import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';

const TrainWithUsHeader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '50vh',
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
        variant='h2'
        sx={{ color: 'info.main', width: '60%', fontWeight: 'bold' }}
      >
        CONTACT
      </Typography>
      <Typography variant='h6' sx={{ color: 'primary.main', width: '50%' }}>
        Want to learn more about who we are, and what we do here at The Armoury
        Coaching Studio? Have a question that hasn’t been answered on any other
        page? Fill in the form below, and we’ll get back to you as soon as
        possible
      </Typography>
    </Box>
  );
};

export default TrainWithUsHeader;
