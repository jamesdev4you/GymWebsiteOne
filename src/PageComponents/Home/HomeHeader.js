import React from 'react';
import Box from '@mui/material/Box';
import HomeHeaderPic from '../../assets/homeheader.png';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { HomeHeaderButton } from '../styledComponents.js';

const HomeHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
        width: '100%',
        height: '110vh',
        backgroundImage: `url(${HomeHeaderPic})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        paddingLeft: '22em',
        paddingRight: '22em',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '55%',
          gap: '2em',
        }}
      >
        <Typography
          variant='h5'
          sx={{ color: 'primary.main', fontWeight: 'bold' }}
        >
          1-2-1 & SMALL GROUP
        </Typography>
        <Typography
          variant='h3'
          sx={{ color: 'info.main', fontWeight: 'bold' }}
        >
          PERSONAL TRAINING IN MILTON KEYNES
        </Typography>
        <Typography variant='h6' sx={{ color: 'primary.main' }}>
          <span style={{ color: '#1CB1E6', fontWeight: 'bold' }}>
            The number one Personal Training Studio in Milton Keynes
          </span>
          - helping men and women to get in the best shape of their lives with
          our infamous 6 Week Transformation Challenge (without living on a
          treadmill or surviving on salads)
        </Typography>
        <Grid
          container
          sx={{
            width: '80%',
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
    </Box>
  );
};

export default HomeHeader;
