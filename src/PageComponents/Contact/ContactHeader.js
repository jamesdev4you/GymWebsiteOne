import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { HomeHeaderButton } from '../styledComponents.js';

const ContactHeader = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '90vh',
        paddingLeft: '22em',
        paddingRight: '22em',
        marginTop: '5em',
        backgroundColor: 'secondary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '2em',
      }}
    >
      <Typography
        variant='h3'
        sx={{
          color: 'info.main',
          fontWeight: 'bold',
          width: '100%',
          textAlign: 'center',
        }}
      >
        ​START YOUR 6 WEEK TRANSFORMATION CHALLENGE
      </Typography>
      <Typography
        variant='h5'
        sx={{
          color: 'primary.main',
          width: '90%',
          textAlign: 'center',
        }}
      >
        Are You Local to Milton Keynes, and need help{' '}
        <span style={{ textDecoration: 'underline' }}>
          getting your fitness mojo back?
        </span>
      </Typography>
      <Typography
        variant='h5'
        sx={{
          color: 'primary.main',
          width: '90%',
          textAlign: 'center',
        }}
      >
        Start Your{' '}
        <span style={{ fontWeight: 'bold' }}>Six Week Challenge</span> to see
        how we've helped hundreds of men and women in Milton Keynes to Turn Back
        The Clock on Their Health and Fitness in Just 42 Days, to{' '}
        <span style={{ fontWeight: 'bold' }}>Feel Fitter</span>,{' '}
        <span style={{ fontWeight: 'bold' }}>Stronger</span> and{' '}
        <span style={{ fontWeight: 'bold' }}>
          More Confident With Their Physique
        </span>{' '}
        (WITHOUT Living on a Treadmill or Surviving on Rabbit Food)
      </Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '45%',
          gap: '2em',
        }}
      >
        <Grid
          container
          sx={{
            width: '100%',
            height: '32vh',
            backgroundColor: 'primary.main',
            borderRadius: '5px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '1em',
            padding: '1em',
          }}
        >
          <Grid
            item
            xs={6}
            sx={{
              backgroundColor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '0px',
              borderRadius: '15px',
            }}
          >
            <TextField
              id='outlined-basic'
              label='First Name *'
              variant='outlined'
              sx={{
                '& label.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'yellow',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'secondary.main',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#1B1E1E',
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              backgroundColor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: '15px',
            }}
          >
            <TextField
              id='outlined-basic'
              label='Last Name *'
              variant='outlined'
              sx={{
                '& label.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'yellow',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'secondary.main',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#1B1E1E',
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              backgroundColor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <TextField
              id='outlined-basic'
              label='Email *'
              variant='outlined'
              sx={{
                '& label.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'yellow',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'secondary.main',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#1B1E1E',
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              backgroundColor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <TextField
              id='outlined-basic'
              label='Phone Number *'
              variant='outlined'
              sx={{
                '& label.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root': {
                  color: '#1B1E1E',
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: '#1B1E1E',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: 'yellow',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&:hover fieldset': {
                    borderColor: '#1B1E1E',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'secondary.main',
                  },
                },
                '& .MuiInputBase-root': {
                  color: '#1B1E1E',
                },
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              backgroundColor: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              borderRadius: '15px',
            }}
          >
            <HomeHeaderButton />
          </Grid>
        </Grid>
      </Box>
      <Typography
        variant='p'
        sx={{
          paddingTop: '8vh',
          width: '100%',
          textAlign: 'center',
          color: 'primary.main',
        }}
      >
        NOTE: MONTHLY INTAKE FOR THE SIX WEEK IS LIMITED TO ENSURE ALL CLIENTS
        GET SERVICE SPECIFIC TO THEIR GOALS
      </Typography>
    </Box>
  );
};

export default ContactHeader;
