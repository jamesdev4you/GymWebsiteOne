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
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'info.main',
        fontWeight: 'bold',
      },
    }}
  >
    Try Us Out
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
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '#000000',
        fontWeight: 'bold',
      },
    }}
  >
    Click Here To See Even More Results
  </Button>
);

export {
  HomeHeaderButton,
  HomeCTAButton,
  HomeTextLinkButton,
  HomeTestimonialButton,
};
