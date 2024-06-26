import React from 'react';
import Box from '@mui/material/Box';
import BeforeAfter1 from '../../assets/beforeafter1.png';
import BeforeAfter2 from '../../assets/beforeafter2.png';
import Quotations from '../../assets/quotes.png';
import Typography from '@mui/material/Typography';
import Stars from '../../assets/stars.png';
import { HomeTestimonialButton } from '../styledComponents.js';

const HomeTestimonials = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        height: 'auto',
        weight: '100%',
        paddingLeft: '22em',
        paddingRight: '22em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1em',
      }}
    >
      <Box
        sx={{
          height: 'auto',
          weight: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1em',
          marginBottom: '2em',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            fontWeight: 'bold',
            color: 'secondary.main',
          }}
        >
          THE RESULTS YOU CAN EXPECT
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'secondary.main',
            textAlign: 'center',
            width: '100%',
          }}
        >
          The Armoury would be nothing without the men and women that have put
          their trust in us over the last 10 years, and working together we've
          had the privilege of seeing some truly tremendous accomplishments.
          Whether that means gaining the confidence to wear a two-piece at the
          beach after having their first child, fitting into the suit they
          always imagined they'd wear for their daughters wedding, or the
          everyday confidence that permeates everything they do, installed
          through the effort they've put in at the studio.
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'secondary.main',
            textAlign: 'center',
            width: '100%',
          }}
        >
          Our client's success are at the forefront of The Armoury's "Why"-{' '}
          <span
            style={{
              textDecoration: 'underline',
              color: '#1CB1E6',
              '&::hover': { cursor: 'pointer' },
            }}
          >
            click here
          </span>{' '}
          to have a chat about working together to create your own
          transformation
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '3em',
          }}
        >
          <Box
            sx={{
              width: '45%',
              height: 'auto',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2em',
              borderRadius: '5px',
              marginBottom: '1em',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '40vh',
                backgroundImage: `url(${BeforeAfter1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                marginBottom: '1em',
              }}
            />
            <Box
              sx={{
                width: '100%',
                height: '20vh',
                backgroundColor: '#f2f2f2',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1em',
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${Quotations})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom',
                  height: '30px',
                  width: '30px',
                  marginTop: '.2em',
                }}
              />
              <Box
                sx={{
                  width: '90%',
                  height: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant='p'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'left',
                    width: '100%',
                    textDecoration: 'italize',
                  }}
                >
                  I love our training and never get bored, it helps me balance
                  my busy life as a mum and gives me the time to focus on
                  myself. The best decision I ever made for my health was
                  booking my first session at The Armoury!"
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'left',
                    width: '100%',
                    fontWeight: 'bold',
                  }}
                >
                  - Kyla Clarke
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItem: 'center',
                  width: '45%',
                  gap: '.5em',
                }}
              >
                <Typography
                  variant='p'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'center',
                    width: '100%',
                    textDecoration: 'italize',
                  }}
                >
                  "started a week and a half ago and so far it's been brilliant.
                  The PT trainers are all so friendly and encouraging and
                  genuinely care about getting you to where you want to be"
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'center',
                    width: '100%',
                    fontWeight: 'bold',
                  }}
                >
                  ​CATHERINE COBURN
                </Typography>
                <Box
                  sx={{
                    height: '4vh',
                    backgroundImage: `url(${Stars})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItem: 'center',
                  width: '45%',
                  gap: '.5em',
                }}
              >
                <Typography
                  variant='p'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'center',
                    width: '100%',
                    textDecoration: 'italize',
                  }}
                >
                  "From the moment you step foot through the door, everything is
                  bespoke based on your goals, I have without a doubt seen
                  massive improvements in myself"
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'center',
                    width: '100%',
                    fontWeight: 'bold',
                  }}
                >
                  SHAY ELAHSOGLU
                </Typography>
                <Box
                  sx={{
                    height: '4vh',
                    backgroundImage: `url(${Stars})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: '45%',
              height: 'auto',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2em',
              borderRadius: '5px',
              marginBottom: '1em',
            }}
          >
            <Box
              sx={{
                width: '100%',
                height: '40vh',
                backgroundImage: `url(${BeforeAfter2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                marginBottom: '1em',
              }}
            />
            <Box
              sx={{
                width: '100%',
                height: '20vh',
                backgroundColor: '#f2f2f2',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1em',
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${Quotations})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom',
                  height: '30px',
                  width: '30px',
                }}
              />
              <Box
                sx={{
                  width: '90%',
                  height: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  variant='p'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'left',
                    width: '100%',
                    textDecoration: 'italize',
                  }}
                >
                  Working from home meant my body felt stiffer, my energy
                  plummeted and my motivation was non-existent. The Armoury has
                  completely turned that around- I've lost weight, gained
                  strength and feel like a healthier, happier version of
                  myself!"
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'left',
                    width: '100%',
                    fontWeight: 'bold',
                  }}
                >
                  - Dave Wood
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItem: 'center',
                  width: '45%',
                  gap: '.5em',
                }}
              >
                <Typography
                  variant='p'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'center',
                    width: '100%',
                    textDecoration: 'italize',
                  }}
                >
                  "started a week and a half ago and so far it's been brilliant.
                  The PT trainers are all so friendly and encouraging and
                  genuinely care about getting you to where you want to be"
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'center',
                    width: '100%',
                    fontWeight: 'bold',
                  }}
                >
                  ​CATHERINE COBURN
                </Typography>
                <Box
                  sx={{
                    height: '4vh',
                    backgroundImage: `url(${Stars})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItem: 'center',
                  width: '45%',
                  gap: '.5em',
                }}
              >
                <Typography
                  variant='p'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'center',
                    width: '100%',
                    textDecoration: 'italize',
                  }}
                >
                  "From the moment you step foot through the door, everything is
                  bespoke based on your goals, I have without a doubt seen
                  massive improvements in myself"
                </Typography>
                <Typography
                  variant='h6'
                  sx={{
                    color: 'secondary.main',
                    textAlign: 'center',
                    width: '100%',
                    fontWeight: 'bold',
                  }}
                >
                  SHAY ELAHSOGLU
                </Typography>
                <Box
                  sx={{
                    height: '4vh',
                    backgroundImage: `url(${Stars})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <HomeTestimonialButton />
    </Box>
  );
};

export default HomeTestimonials;
