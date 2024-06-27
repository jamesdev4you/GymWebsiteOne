import React from 'react';
import Box from '@mui/material/Box';
import OnePTHeader from './OnePTHeader';
import OnePTContent from './OnePTContent';

const OnePT = () => {
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
      <OnePTHeader />
      <OnePTContent />
    </Box>
  );
};

export default OnePT;
