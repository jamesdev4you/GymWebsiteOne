import React from 'react';
import Box from '@mui/material/Box';
import fillerPic from '../../assets/homeheader.png';
import Typography from '@mui/material/Typography';
import { HomeTextLinkButton } from '../styledComponents.js';

const HomeOverlap = () => {
  return (
    <Box
      sx={{
        height: '140vh',
        width: '100%',
        paddingLeft: '22em',
        paddingRight: '22em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        flexDirection: 'column',
        gap: '1em',
        '&::before': {
          content: '""',
          position: 'absolute',
          width: '100%',
          height: '70vh',
          backgroundImage: `url(${fillerPic})`,
          backgroundColor: '#999',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          zIndex: '-2',
        },
      }}
    >
      <Box
        sx={{
          width: '100%',
          marginTop: '5em',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5em',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            fontWeight: 'bold',
            color: 'primary.main',
            marginRight: 'auto',
          }}
        >
          WHAT WE DO
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'primary.main',
            marginRight: 'auto',
            width: '60%',
          }}
        >
          Our coaching options have been designed from the ground up to put you
          and your goals first. From one-on-one training in your private studio,
          to our renowned small group personal training and bespoke nutrition
          packages- everything we offer has been battle-tested over a decade in
          the field, to ensure the results you achieve are not only impressive
          in the short term- but also sustainable for life
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            backgroundColor: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1em',
            borderRadius: '5px',
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${fillerPic})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
              width: '90%',
              height: '60%',
              marginBottom: '2em',
            }}
          />
          <Typography
            variant='h5'
            sx={{
              fontWeight: 'bold',
              color: 'secondary.main',
              textAlign: 'center',
            }}
          >
            SMALL GROUP PERSONAL TRAINING
          </Typography>
          <Typography
            variant='h6'
            sx={{
              color: 'secondary.main',
              textAlign: 'center',
              width: '90%',
            }}
          >
            <span style={{ fontWeight: 'bold' }}>
              Our Small Group Personal Training is unlike anything you'll have
              experienced before.
            </span>{' '}
            In micro training groups of just 6:1, all your workouts are
            customised for you, recorded and coached by an experienced personal
            trainer. The balance of the motivational group environment, 1-2-1
            attention and your own personal nutrition & accountability coach
            makes it the perfect mix to produce fast results, without the bounce
            back
          </Typography>
          <HomeTextLinkButton />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeOverlap;
