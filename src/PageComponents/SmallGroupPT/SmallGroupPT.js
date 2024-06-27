import React from 'react';
import Box from '@mui/material/Box';
import SmallGroupPTHeader from './SmallGroupPTHeader';
import SmallGroupPTContent from './SmallGroupPTContent';

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
    </Box>
  );
};

export default SmallGroupPT;
