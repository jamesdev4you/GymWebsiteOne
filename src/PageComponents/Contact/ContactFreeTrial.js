import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BeforeAfter1 from '../../assets/beforeafter1.png';
import TextField from '@mui/material/TextField';
import { HomeHeaderButton } from '../styledComponents.js';

const ContactFreeTrial = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: '22em',
        paddingRight: '22em',
        paddingBottom: '5em',
        gap: '3em',
        backgroundColor: 'white',
        width: '100%',
        height: 'auto',
      }}
    >
      <Box
        sx={{
          height: '30vh',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            width: '30%',
            height: '100%',
            backgroundImage: `url(${BeforeAfter1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            marginBottom: '1em',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'secondary.main',
          }}
        />
        <Box
          sx={{
            width: '30%',
            height: '100%',
            backgroundImage: `url(${BeforeAfter1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            marginBottom: '1em',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'secondary.main',
          }}
        />
        <Box
          sx={{
            width: '30%',
            height: '100%',
            backgroundImage: `url(${BeforeAfter1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
            marginBottom: '1em',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'secondary.main',
          }}
        />
      </Box>

      <Box
        sx={{
          height: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1em',
        }}
      >
        <Typography
          variant='h3'
          sx={{ width: '100%', color: 'secondary.main', textAlign: 'center' }}
        >
          START YOUR TRANSFORMATION -{' '}
        </Typography>
        <Typography
          variant='h3'
          sx={{ width: '100%', color: 'info.main', textAlign: 'center' }}
        >
          APPLY NOW FOR YOUR FREE TRIAL
        </Typography>
        <Typography
          variant='h5'
          sx={{ width: '70%', color: 'secondary.main', textAlign: 'center' }}
        >
          One of our friendly PTs will give you a call, go through goals
          together and explain how everything works. If we're both happy we can
          help we'll book you in a free session from there to try us out!
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '45%',
          gap: '2em',
          borderWidth: '1px',
          borderStyle: 'dotted',
          borderColor: 'secondary.main',
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
    </Box>
  );
};

export default ContactFreeTrial;
