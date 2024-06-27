import React from 'react';
import Box from '@mui/material/Box';
import NutritionHeader from './NutritionHeader';
import NutritionContent from './NutritionContent';

const NutritionCoaching = () => {
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
      <NutritionHeader />
      <NutritionContent />
    </Box>
  );
};

export default NutritionCoaching;
