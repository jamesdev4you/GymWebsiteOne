import React from 'react';
import Box from '@mui/material/Box';
import TrainWithUsHeader from './TrainWithUsHeader';
import TrainWithUsContent from './TrainWithUsContent.js';

const TrainWithUs = () => {
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
      <TrainWithUsHeader />
      <TrainWithUsContent />
    </Box>
  );
};

export default TrainWithUs;
