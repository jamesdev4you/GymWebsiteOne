import React, { useEffect, useState } from 'react';
import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import '../../navlink.css';

const Footer = () => {
  return (
    <Box
      sx={{ width: '100%', height: '100%', backgroundColor: 'primary.main' }}
    >
      <Box
        sx={{
          width: '90%',
          height: 'auto',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'start',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Pages{' '}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Ubuntu',
            }}
          >
            <NavLink to='/' className='nav_link'>
              {' '}
              Home{' '}
            </NavLink>
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/about' className='nav_link'>
              About
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/contact' className='nav_link'>
              Contact
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/trainwithus' className='nav_link'>
              Train With Us
            </NavLink>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Services{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/programs/11personaltraining' className='nav_link'>
              1:1 Personal Training
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink
              to='/programs/smallgrouppersonaltraining'
              className='nav_link'
            >
              Small Group PT
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/programs/nutritioncoaching' className='nav_link'>
              Nutrition Coaching
            </NavLink>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Contact{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            <a
              href='tel:7274879698'
              style={{ color: 'black', textDecoration: 'none' }}
            >
              813-216-8665
            </a>
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', color: 'black' }}>
            {' '}
            jimboy@gmailyahoo.com
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
            }}
            variant='h5'
          >
            {' '}
            Hours{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Monday: 9am-9am
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Tuesday: 9am-9am
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Wednesday: 9am-9am
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Thursday: 9am-9am
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Friday: 9am-9am
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Saturday: 9am-9am
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            Sunday: 9am-9am
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
