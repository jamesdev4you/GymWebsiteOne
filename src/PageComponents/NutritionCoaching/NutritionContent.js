import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { HomeHeaderButton } from '../styledComponents.js';

const NutritionContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
        paddingLeft: '22em',
        paddingRight: '22em',
        marginTop: '2em',
        marginBottom: '5em',
        gap: '2em',
        backgroundColor: 'white',
        width: '100%',
        height: 'auto',
      }}
    >
      <Box
        sx={{
          width: '55%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '1em',
        }}
      >
        <Typography
          variant='h4'
          sx={{ textAlign: 'left', width: '100%', fontWeight: 'bold' }}
        >
          ​WHO'S IT FOR?
        </Typography>
        <Typography variant='p' sx={{ textAlign: 'left', width: '100%' }}>
          Our 6 Week Nutrition Coaching Project is ideal if you're tired of
          yo-yo dieting, sick of juice cleanses and fads, and want to finally
          take control of your health and physique.
        </Typography>

        <Typography
          variant='h4'
          sx={{
            textAlign: 'left',
            width: '100%',
            fontWeight: 'bold',
            marginTop: '2em',
          }}
        >
          WHAT'S INCLUDED?
        </Typography>
        <List
          sx={{
            listStyleType: 'disc',
            marginLeft: '1em',
            color: 'secondary.main',
            width: '100%',
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            Your Nutrition Transformation Roadmap- where you and your coach will
            work together to break down your long term goals into step-by-step
            targets, so there’s a crystal clear vision and path to take you away
            from frustration, and towards your ideal physique, fitness, strength
            and energy levels
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Your Lifestyle-Audit, you and your coach will look at your current
            habits to effectively establish which are bringing your closer to
            your goals, and which are moving you further away (to adjust from
            there)
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Weekly 1-2-1 Coaching Sessions in a private studio or Zoom, to set
            weekly nutrition and lifestyle targets, reflect on the last week,
            and ensure you’re accountable to your goals and progression
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Exclusive access to The Armoury Coaching Academy- your online
            platform that gives you all the additional tools you need to win at
            life- from recipe books, to follow along mobility and yoga video,
            we’ve got your back every step of the way
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Your Coach in your pocket- Your coach is available for advice and
            help via email in between face to face sessions, alongside giving
            you tools and tricks to use in day to day life to create a healthy
            and balanced approach to “dieting” and nutrition
          </ListItem>
        </List>
        <Typography
          variant='h4'
          sx={{
            textAlign: 'left',
            width: '100%',
            fontWeight: 'bold',
            marginTop: '2em',
          }}
        >
          THE RESULTS YOU CAN EXPECT
        </Typography>
        <Typography variant='p' sx={{ textAlign: 'left', width: '100%' }}>
          Our Nutrition Coaching Program will have you covered whether fat loss,
          performance or muscle growth is your primary goal. You can expect your
          progress speed to double when solid nutrition coaching has your back
          (and you won't bounce back either!)
        </Typography>
        <Typography variant='p' sx={{ textAlign: 'left', width: '100%' }}>
          By the end of the 6 weeks with your fitness coach in Milton Keynes you
          won't have followed a 'diet plan', you'll have created sustainable
          lifestyle changes to mean you'll never need to "diet" again
        </Typography>
        <Typography
          variant='h4'
          sx={{
            textAlign: 'left',
            width: '100%',
            fontWeight: 'bold',
            marginTop: '2em',
          }}
        >
          YOUR INVESTMENT
        </Typography>
        <Typography variant='p' sx={{ textAlign: 'left', width: '100%' }}>
          the investment for 6 weeks of 1-2-1 nutrition coaching to supercharge
          your training recovery, results, energy and give you the long-term
          tools to take back control of your diet and eat the foods you love, is
          just £247
        </Typography>
      </Box>
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
          variant='h5'
          sx={{
            color: 'info.main',
            width: '100%',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          CLAIM YOUR TRIAL SESSION
        </Typography>
        <Typography
          variant='p'
          sx={{
            color: 'secondary.main',
            width: '100%',
            textAlign: 'center',
            marginTop: '1em',
            marginBottom: '1em',
          }}
        >
          We offer a zero-obligation trial session so you can have peace of mind
          in your choice. To grab your slot, or ask any questions you might
          have- just fill in your details below, and we'll get in touch
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
    </Box>
  );
};

export default NutritionContent;
