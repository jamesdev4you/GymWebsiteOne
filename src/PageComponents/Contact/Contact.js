import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Review from '../../assets/review.png';
import ContactHeader from './ContactHeader.js';
import ContactBeforeAfter from './ContactBeforeAfter.js';
import ContactAbout from './ContactAbout.js';
import ContactTestimonials from './ContactTestimonials.js';

const Contact = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1em',
      }}
    >
      <ContactHeader />
      <ContactBeforeAfter />
      <ContactAbout />
      <ContactTestimonials />
      <ContactAbout />
    </Box>
  );
};

export default Contact;
