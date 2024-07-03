import React from 'react';
import Box from '@mui/material/Box';
import SmallGroupPTHeader from './SmallGroupPTHeader';
import SmallGroupPTContent from './SmallGroupPTContent';
import Footer from '../Footer/Footer';

const SmallGroupPT = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '3em',
        marginBottom: '2em',
      }}
    >
      <SmallGroupPTHeader />
      <SmallGroupPTContent />
      <Footer />
    </Box>
  );
};

export default SmallGroupPT;
