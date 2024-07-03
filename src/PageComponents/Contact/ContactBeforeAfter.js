import React from 'react';
import BeforeAfter1 from '../../assets/beforeafter1.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ContactBeforeAfter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingLeft: {
          xl: '20em',
          lg: '18em',
          md: '12em',
          sm: '2em',
          xs: '1em',
        },
        paddingRight: {
          xl: '20em',
          lg: '18em',
          md: '12em',
          sm: '2em',
          xs: '1em',
        },
        marginTop: '5em',
        gap: '2em',
        backgroundColor: 'white',
        width: '100%',
        height: 'auto',
      }}
    >
      <Box
        sx={{
          height: {
            xl: '30vh',
            lg: '22vh',
            md: '20vh',
            sm: '20vh',
            xs: '12vh',
          },
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'row',
            xs: 'row',
          },
        }}
      >
        <Box
          sx={{
            width: '32%',
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
            width: '32%',
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
            width: '32%',
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
      <List
        sx={{
          listStyleType: 'disc',
          marginLeft: '1em',
          color: 'secondary.main',
          width: '90%',
        }}
      >
        <ListItem sx={{ display: 'list-item' }}>
          <Typography variant='h5'>
            ​Do you want to feel amazing in 2024, but you've fallen out of (or
            never gotten into) a consistent exercise routine
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <Typography variant='h5'>
            Do you want to trim up, but you don't want to have to restrict
            yourself and limit your social life?
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <Typography variant='h5'>
            Do you find normal gyms boring, and want a fitness space you
            actually enjoy?
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <Typography variant='h5'>
            Are you fed up of quick fixes, and want a solution that actually
            sticks for life?
          </Typography>
        </ListItem>
      </List>
      <Typography variant='h5'>
        If you can relate, and feel ready to move your health and fitness up
        your list of priorities, then scroll up and hit apply- one of our
        friendly PTs will give you a call and see if we can help
      </Typography>
    </Box>
  );
};

export default ContactBeforeAfter;
