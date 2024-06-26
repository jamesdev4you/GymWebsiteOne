import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import placeholder from '../../assets/homeheader.png';
import AboutHeader from './AboutHeader';
import AboutTrainer from './AboutTrainer';
import Trainer from '../../assets/trainer.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const About = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '3em',
        marginBottom: '2em',
      }}
    >
      <AboutHeader />
      <AboutTrainer />
      <Box
        sx={{
          width: '100%',
          height: '110vh',
          backgroundImage: `url(${placeholder})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
          backgroundAttachment: 'fixed',
          paddingLeft: '22em',
          paddingRight: '22em',
          marginTop: '5em',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '1em',
        }}
      >
        <Typography
          variant='h4'
          sx={{ color: 'info.main', fontWeight: 'bold', width: '100%' }}
        >
          ARE WE RIGHT FOR YOU?
        </Typography>
        <Typography variant='p' sx={{ color: 'primary.main', width: '70%' }}>
          How do you know if we’re the right Personal Trainers in Milton Keynes
          to help you get from point A (where you are now), to point B (where
          you want to be)?
        </Typography>
        <Typography variant='p' sx={{ color: 'primary.main', width: '70%' }}>
          For over a decade we’ve been helping men and women achieve results
          they never thought were possible, often after years of frustration and
          empty promises from solutions they’d tried previously
        </Typography>
        <Typography variant='p' sx={{ color: 'primary.main', width: '70%' }}>
          We work with any man or woman that are willing to step up, and make a
          change
        </Typography>
        <Typography variant='p' sx={{ color: 'primary.main', width: '70%' }}>
          If you find yourself nodding or muttering “yes” to any of these
          questions…
        </Typography>
        <Typography variant='p' sx={{ color: 'primary.main', width: '70%' }}>
          If you find yourself nodding or muttering “yes” to any of these
          questions…
        </Typography>
        <List
          sx={{
            listStyleType: 'disc',
            marginLeft: '1em',
            color: 'primary.main',
            width: '70%',
          }}
        >
          <ListItem sx={{ display: 'list-item' }}>
            Have you found clothes fitting snugger and snugger each passing
            year, all in the “wrong” areas?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Were you shocked the last time you stepped onto the scales (or
            actively avoid doing so)?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Ever found yourself wheezing like you’ve just run an Ironman after
            climbing a flight of stairs, or attempted an impromptu kickabout in
            the garden?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Have you found yourself internally cringing whenever a full-body
            shot of you gets uploaded to Facebook, and you can see your physique
            from a less-than-flattering angle?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Do you wish you could just look forward to holidays, without
            dreading how you’ll feel on the beach?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Have you started to recognise that taking action isn’t all about
            being vain, rather being around to be active and present for your
            family (be it partner, kids, or (future or current) grandkids)?
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            Have you been discouraged by a boring training plan or bland diet in
            the past, and though that “dieting” & “training” just aren’t for
            you’?
          </ListItem>
        </List>
        <Typography variant='p' sx={{ color: 'primary.main', width: '70%' }}>
          If so? Then now is the time to do something about it. And here at the
          Armoury, it’d be an honour to be able to help. CLICK HERE to apply for
          a free, zero obligation consult or trial
        </Typography>
        <Typography variant='p' sx={{ color: 'primary.main', width: '70%' }}>
          Nobody else will take the action for you, so if you're waiting for a
          sign? This is it.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
