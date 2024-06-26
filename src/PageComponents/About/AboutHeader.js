import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';

const AboutHeader = () => {
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
        MEET OUR EXPERTS
      </Typography>
      <Typography
        variant='h3'
        sx={{ color: 'info.main', fontWeight: 'bold', width: '60%' }}
      >
        THE BEST PERSONAL TRAINERS IN MILTON KEYNES
      </Typography>
      <Typography variant='h6' sx={{ color: 'primary.main', width: '60%' }}>
        Put an end to the mid-afternoon slump, or having to bust out the WD40 in
        order to squeeze into your best suit-trousers or dress
      </Typography>
    </Box>
  );
};

export default AboutHeader;
