import Button from '@mui/material/Button';

const HomeHeaderButton = (props) => (
  <Button
    variant='contained'
    sx={{
      backgroundColor: 'info.main',
      color: 'primary.main',
      padding: '1em',
      width: '90%',
      '&:hover': {
        backgroundColor: 'info.main',
      },
    }}
  >
    Claim Your Trail Training Session!
  </Button>
);

const HomeCTAButton = (props) => (
  <Button
    variant='contained'
    sx={{
      backgroundColor: 'info.main',
      color: 'primary.main',
      '&:hover': {
        backgroundColor: 'primary.main',
        color: 'info.main',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'info.main',
        fontWeight: 'bold',
      },
    }}
  >
    {props.title}
  </Button>
);

const HomeTextLinkButton = (props) => (
  <Button
    variant='text'
    sx={{
      color: 'info.main',
      fontSize: '20px',
      textDecoration: 'underline',
      fontWeight: 'bold',
      '&:hover': {
        textDecoration: 'underline',
        color: 'info.light',
      },
    }}
  >
    Learn More
  </Button>
);

const HomeTestimonialButton = (props) => (
  <Button
    variant='contained'
    sx={{
      backgroundColor: '#000000',
      color: 'primary.main',
      '&:hover': {
        backgroundColor: 'primary.main',
        color: '#000000',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: '#000000',
        fontWeight: 'bold',
      },
    }}
  >
    Click Here To See Even More Results
  </Button>
);

const HomeMissionButton = (props) => (
  <Button
    variant='contained'
    sx={{
      backgroundColor: 'info.main',
      color: 'secondary.main',
      borderRadius: '20px',
      '&:hover': {
        backgroundColor: 'secondary.main',
        color: 'info.main',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'info.main',
        fontWeight: 'bold',
      },
    }}
  >
    {props.title}
  </Button>
);

export {
  HomeHeaderButton,
  HomeCTAButton,
  HomeTextLinkButton,
  HomeTestimonialButton,
  HomeMissionButton,
};
