import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';
import AboutHeader from './AboutHeader';
import Trainer from '../../assets/trainer.png';

const AboutTrainer = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '60vh',
        backgroundColor: 'primary.main',
        paddingLeft: '22em',
        paddingRight: '22em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: '25%',
          height: '50vh',
          backgroundImage: `url(${Trainer})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      />
      <Box
        sx={{
          height: '55vh',
          width: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          gap: '1em',
        }}
      >
        <Typography
          variant='h3'
          sx={{ color: 'info.main', fontWeight: 'bold', width: '100%' }}
        >
          Who Are We?
        </Typography>
        <Typography
          variant='h6'
          sx={{ color: 'secondary.main', width: '100%' }}
        >
          I’m guessing you’ve either ended up here from a quick google search
          for a{' '}
          <span
            style={{
              textDecoration: 'underline',
              color: '#1CB1E6',
              '&::hover': { cursor: 'pointer' },
            }}
          >
            personal trainer in Milton Keynes
          </span>
          , via a recommendation from a friend, or navigated your way over from
          one of our hilarious, insightful & poignant social media posts
        </Typography>
        <Typography
          variant='h6'
          sx={{ color: 'secondary.main', width: '100%' }}
        >
          So now you’re looking around, trying to figure out if we’re the answer
          you’re looking for (and frankly, we’d love to know if we are too)
        </Typography>
        <Typography
          variant='h6'
          sx={{ color: 'secondary.main', width: '100%' }}
        >
          So let’s start simple: who are we?
        </Typography>
        <Typography
          variant='h6'
          sx={{ color: 'secondary.main', width: '100%' }}
        >
          The Armoury Coaching Studio is a Small Group & 1-2-1 Personal Training
          Facility in Milton Keynes. We provide bespoke training, nutrition
          guidance and a mix of both accountability and community that strives
          to make fitness and health a valued and enjoyable part of your life,
          rather than a chore
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutTrainer;
