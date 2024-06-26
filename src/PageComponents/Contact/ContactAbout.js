import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ContactAbout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: '22em',
        paddingRight: '22em',
        marginTop: '5em',
        marginBottom: '5em',
        paddingTop: '3em',
        paddingBottom: '3em',
        gap: '2em',
        backgroundColor: 'secondary.main',
        width: '100%',
        height: 'auto',
      }}
    >
      <Typography
        variant='h4'
        sx={{
          color: 'info.main',
          width: '100%',
          textAlign: 'left',
          fontWeight: 'bold',
        }}
      >
        HERE'S EXACTLY HOW WE'LL GET YOU RESULTS:
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          ​PERSONALISED PROGRAMME CREATION
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'primary.main',
            textAlign: 'left',
          }}
        >
          We'll create a personal training programme specific to your goals and
          experience levels, so everything from day one is bespoke to get you to
          your target
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          2-4 x PT LED SESSIONS WEEKLY
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'primary.main',
            textAlign: 'left',
          }}
        >
          Train 2-4 times (depending on the package chosen) a week in our
          private PT studio with a coach that understands you. We track every
          workout on an individual basis so session to session you'll get
          stronger, fitter and more confident with your health
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          1-2-1 NUTRITION CONSULTATION & PLAN
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'primary.main',
            textAlign: 'left',
          }}
        >
          Meet one on one with a nutrition expert to create a plan of action
          that is not only personalised to your lifestyle to get results, but
          also ensures you keep those results for life
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          LIFETIME ACCESS TO THE ARMOURY ATHLETE ACADEMY
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'primary.main',
            textAlign: 'left',
          }}
        >
          Get exclusive access to specifically designed recipe books, restaurant
          guides, follow-along yoga videos and a heap of other support, to cover
          every aspect of your transformation
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          WEEKLY ACCOUNTABILITY CHECK INS
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'primary.main',
            textAlign: 'left',
          }}
        >
          Our support doesn't start and end when you're in the studio. We check
          in weekly on progress with your training and nutrition, to ensure you
          have the tools and accountability on hand to complete a successful
          transformation
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          OUR IRON-CLAD 100% MONEY BACK GUARANTEE
        </Typography>
        <Typography
          variant='h6'
          sx={{
            color: 'primary.main',
            textAlign: 'left',
          }}
        >
          All the evidence to know what we do works. If you follow the steps and
          aren't thrilled with your progress? We'll refund you 100% of your
          Challenge investment. Yes, really
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactAbout;
