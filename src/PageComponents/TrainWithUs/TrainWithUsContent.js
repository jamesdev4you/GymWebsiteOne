import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';
import TrainWithUsHeader from './TrainWithUsHeader';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { HomeHeaderButton } from '../styledComponents.js';

const TrainWithUsContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '22em',
        paddingRight: '22em',
        marginTop: '5em',
        marginBottom: '5em',
        gap: '2em',
        backgroundColor: 'white',
        width: '100%',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          width: '45%',
          backgroundColor: 'rgb(247, 247, 247)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '3em',
        }}
      >
        <Typography
          variant='h3'
          sx={{ color: 'secondary.main', width: '80%', textAlign: 'left' }}
        >
          CONTACT US
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '100%',
            gap: '2em',
            margin: 'auto',
          }}
        >
          <Grid
            container
            sx={{
              width: '100%',
              height: '60vh',
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
              xs={12}
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
                  width: '90%',
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
              <TextField
                id='outlined-basic'
                label='Last Name *'
                variant='outlined'
                sx={{
                  width: '90%',
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
              }}
            >
              <TextField
                id='outlined-basic'
                label='Email *'
                variant='outlined'
                sx={{
                  width: '90%',
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
              }}
            >
              <TextField
                id='outlined-basic'
                label='Phone Number *'
                variant='outlined'
                sx={{
                  width: '90%',
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
              <TextField
                id='outlined-basic'
                label='How Can We Help?'
                variant='outlined'
                sx={{
                  width: '90%',
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
      <Box
        sx={{
          width: '47%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'start',
          gap: '1em',
        }}
      >
        <Typography
          variant='h3'
          sx={{ color: 'secondary.main', width: '80%', textAlign: 'left' }}
        >
          ADDRESS
        </Typography>
        <Box
          sx={{
            height: 'auto',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
          }}
        >
          <Typography
            variant='p'
            sx={{
              color: 'secondary.main',
              width: '80%',
              textAlign: 'left',
              fontWeight: 'bold',
            }}
          >
            The Armoury Coaching Studio LTD
          </Typography>
          <Typography
            variant='p'
            sx={{ color: 'secondary.main', width: '80%', textAlign: 'left' }}
          >
            Victory Ct
          </Typography>
          <Typography
            variant='p'
            sx={{ color: 'secondary.main', width: '80%', textAlign: 'left' }}
          >
            Bletchley
          </Typography>
          <Typography
            variant='p'
            sx={{ color: 'secondary.main', width: '80%', textAlign: 'left' }}
          >
            Milton Keynes
          </Typography>
          <Typography
            variant='p'
            sx={{ color: 'secondary.main', width: '80%', textAlign: 'left' }}
          >
            MK1 1EW
          </Typography>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28144.803340179373!2d-82.3343366!3d28.1434311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b6eb09dcc495%3A0x3f530dde20072124!2sKingshyre%20At%20Cross%20Creek!5e0!3m2!1sen!2sus!4v1719492785736!5m2!1sen!2sus'
            width='500'
            height='200'
            style={{ border: '0', marginTop: '1em' }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </Box>
        <Box
          sx={{
            height: 'auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '3em',
          }}
        >
          <Box
            sx={{
              width: '42%',
              height: '10vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'start',
              gap: '1em',
            }}
          >
            <Typography
              variant='h3'
              sx={{
                color: 'secondary.main',
                width: '100%',
                textAlign: 'left',
              }}
            >
              TELEPHONE
            </Typography>
            <Typography
              variant='p'
              sx={{
                color: 'secondary.main',
                width: '100%',
                textAlign: 'left',
              }}
            >
              Call or text our Coaches Mobile directly on 07897 019085
            </Typography>
          </Box>
          <Box
            sx={{
              width: '40%',
              height: '10vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'start',
              gap: '1em',
            }}
          >
            <Typography
              variant='h3'
              sx={{
                color: 'secondary.main',
                width: '80%',
                textAlign: 'left',
              }}
            >
              EMAIL
            </Typography>
            <Typography
              variant='p'
              sx={{
                color: 'secondary.main',
                width: '100%',
                textAlign: 'left',
              }}
            >
              lewis@armourycoaching.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TrainWithUsContent;
