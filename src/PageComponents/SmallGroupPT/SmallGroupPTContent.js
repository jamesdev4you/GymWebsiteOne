import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';
import SmallGroupPTHeader from './SmallGroupPTHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { HomeHeaderButton } from '../styledComponents.js';

const SmallGroupPTContent = () => {
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
          You deserve to feel fit, strong and confident in your health &
          physique. Which is exactly where you'll be within just 42 days of our
          starting our flagship Small Group Personal Training Programme - The
          Six Week Transformation Challenge
        </Typography>
        <Typography variant='p' sx={{ textAlign: 'left', width: '100%' }}>
          The time you invest into training should add to your life. It should
          increase your energy when you're with your family and friends, improve
          your productivity and drive within your career, and embed additional
          confidence into everything you do.
        </Typography>
        <Typography variant='p' sx={{ textAlign: 'left', width: '100%' }}>
          If you're ready to take action, drop weight, add muscle and finally
          create a relationship with your health and fitness that lasts- then
          check out the Six Week Challenge details below, and apply for a trial
          session here at the studio to see if we're the right fit for you
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
            Your Transformation Roadmap- where you and your coach will work
            together to break down your long term goals into step-by-step
            targets, even in our group coaching, we cater our approach to your
            needs on a 1-2-1 basis
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            3 x Small Group Personal Training Sessions a week in our private
            coaching facility (or via Zoom!), you’ll be put through your paces
            in a safe, supportive environment where exercises are adjusted and
            recorded based off your progress for long-term results- There are
            only 6 spaces in each session so you get the benefits of individual
            attention AND the supportive atmosphere of the group
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
            Weekly Accountability Check-ins to review exactly where we’re at
            compared to our vision set within the Transformation Roadmap- so we
            can keep you 100% on track, and make any adjustments we need so life
            never gets in the way of you and your goals again
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Private Facility - No waiting around for equipment or feeling
            crowded in a busy gym. Train in an environment designed to get
            results, without a busy, impersonal feel
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Our 100% money back guarantee - if you attend your sessions, follow
            our nutrition suggestions and don't hit the targets we set in our
            goal setting session? You get a complete refund on your investment.
            Yes, Really.
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
          The same way we don't do generic training? We don't do generic
          results. With our Small Group Personal Training, we customise your
          programming and nutrition approach so that your progress will be based
          off your goals.
        </Typography>
        <Typography variant='p' sx={{ textAlign: 'left', width: '100%' }}>
          ​We've had clients boast about dropping dress sizes, fitting into suit
          jackets they haven't even attempted since before they got married,
          feeling elated they can keep up with their kids and grandkids, or
          finally being able to put on muscle after years of frustration.
        </Typography>
        <Typography variant='p' sx={{ textAlign: 'left', width: '100%' }}>
          It's not our job as the number one personal trainers in Milton Keynes
          to tell you your goal- it's simply our role to get you there (and
          we're damn good at that part)
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
          The Six Week Transformation Challenge includes 1-2-1 goals setting and
          nutrition coaching, 3 x weekly Small Group Personal Training Sessions
          in our private studio, access to the Armoury Coaching Academy
          membership site, weekly accountability check ins AND a money back
          guarantee if you don't get the results we agree upon (yes, really)
        </Typography>
        <Typography variant='p' sx={{ textAlign: 'left', width: '100%' }}>
          You investment for the above is £327, with the option afterwards to
          continue on a month to month basis (with zero sticky, long-term
          contracts, because we don't believe in them)
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
          Want to see if our Small Group Personal Training is the right approach
          for you? We offer a zero-obligation trial session so you can have
          peace of mind in your choice. To grab your slot, or ask any questions
          you might have- just fill in your details below, and we'll get in
          touch:
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

export default SmallGroupPTContent;
