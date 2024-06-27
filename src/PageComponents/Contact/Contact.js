import React from 'react';
import Box from '@mui/material/Box';
import ContactHeader from './ContactHeader.js';
import ContactBeforeAfter from './ContactBeforeAfter.js';
import ContactAbout from './ContactAbout.js';
import ContactTestimonials from './ContactTestimonials.js';
import ContactFreeTrial from './ContactFreeTrial.js';

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
      <ContactFreeTrial />
    </Box>
  );
};

export default Contact;
