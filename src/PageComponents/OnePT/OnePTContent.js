import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { HomeHeaderButton } from '../styledComponents.js';

const OnePTContent = () => {
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
          Personal training is an ideal choice for busy men and women that are
          tired of not looking or feeling happy with their health, strength &
          physique, and feel ready to invest in themselves for the fastest, most
          effective results possible
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
            ​Your Transformation Roadmap- where you and your coach will work
            together to break down your long term goals into step-by-step
            targets, so there’s a crystal clear vision and path to take you away
            from frustration, and towards your ideal physique, fitness, strength
            and energy levels
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            100% bespoke programme design following an in-depth movement
            assessment and based on your roadmap. We don’t do cookie-cutter,
            everything is designed with your progress and lifestyle in mind
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Unrivalled one to one Personal Training in our private coaching
            facility, two or more times per week- where your progression is our
            number one priority in an environment that allows all the focus to
            be on you (no waiting for machines, or feeling crowded in a big,
            impersonal gym)
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            1-2-1 Nutrition Coaching to ensure all the work you’re putting in at
            the studio? Is reflected by your results. Without the restrictive
            diets or strict eating regimes- take back control and make progress
            on your terms, with our expert, non-judgemental guidance
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Exclusive access to The Armoury Coaching Academy- your online
            platform that gives you all the additional tools you need to win at
            life- from recipe books, to follow along mobility and yoga video,
            we’ve got your back every step of the way
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Weekly Accountability check ins to review exactly where we’re at
            compared to our vision set within the Transformation Roadmap- so we
            can keep you 100% on track, and make any adjustments we need so life
            never gets in the way of you and your goals again
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Private training environment- no waiting around for equipment,
            sharing kit or feeling crowded in a busy gym. The space is
            exclusively for you and your coach to train, and get great results
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
          Never feel "out of shape" again. Personal Training with us in Milton
          Keynes allows you to not only hit your short term goals (whether it's
          feeling confident on the beach, fitting back into clothes that have
          been relegated to the back of the wardrobe, or anything in between),
          but you'll also have the tools to ensure the changes you make with us?
          You can maintain, and build upon for life
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
          Our 1-2-1 Personal Training Packages run for either 6 or 12 weeks
          initially, with the option to continuing on a month-to-month basis
          without any sticky long-term contracts, making our partnership
          entirely results driven
        </Typography>
        <Typography variant='p' sx={{ textAlign: 'left', width: '100%' }}>
          All options include the above benefits and service, and can expect
          exceptional results, starting from £597
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

export default OnePTContent;
