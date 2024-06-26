import React from 'react';
import Box from '@mui/material/Box';
import HomeHeader from './HomeHeader';
import HomeCTA1 from './HomeCTA1';
import HomeOverlap from './HomeOverlap.js';
import HomeTwoOptions from './HomeTwoOptions.js';
import HomeTestimonials from './HomeTestimonials.js';
import Typography from '@mui/material/Typography';

const Home = () => {
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
      }}
    >
      <HomeHeader />
      <HomeCTA1 />
      <HomeOverlap />
      <HomeTwoOptions />
      <HomeTestimonials />
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          paddingLeft: '22em',
          paddingRight: '22em',
          paddingTop: '3em',
          paddingBottom: '3em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          backgroundColor: 'secondary.main',
          gap: '1em',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
          }}
        >
          OUR MISSION
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'primary.main',
            textAlign: 'center',
            width: '100%',
          }}
        >
          We're committed to helping over 1,000 people in Milton Keynes to live
          longer, stronger, more confident lives. It's why we offer free trial
          sessions, and our{' '}
          <span style={{ color: '#c2a43a' }}>
            iron-clad money back guarantee on results{' '}
          </span>{' '}
          (yes, really)
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'primary.main',
            textAlign: 'center',
            width: '100%',
          }}
        >
          If you’re desperate to get back into your favourite clothes that have
          been relegated to the back of the closet, are tired of your work
          shirts beginning to feel the strain around your stomach, and feel sick
          of no-longer having the “get-up-and-go” you felt when you were
          younger? We will guide you to getting that mojo back, to feel
          confident the next time you’re on a beach, making a presentation at
          work, or running around with your kids
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'primary.main',
            textAlign: 'center',
            width: '100%',
          }}
        >
          Training & addressing your diet with the correct approach adds to your
          life exponentially, through increasing your energy, decreasing your
          stress, heightening your mood, boosting long-term health, and
          equipping you with confidence in your everyday strength and
          appearance. Which is exactly why we designed The Armoury from the
          ground up to be{' '}
          <span style={{ fontWeight: 'bold' }}>
            the best 1-2-1 & Small Group Personal Training Studio in Milton
            Keynes.
          </span>{' '}
          If you’d like to be part of a coaching environment that puts you
          first? Get in touch
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
