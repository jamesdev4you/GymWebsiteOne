import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../assets/logo.png';
import '../../navlink.css';
import '../../index.css';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;
const navItems = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Programmes', href: '/programmes' },
  { text: 'Success Stories', href: '/successstories' },
  { text: 'Contact', href: '/contact' },
  { text: 'Train With Us', href: '/trainwithus' },
];

export default function NavBar(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    const { scrollTop } = event.target;
    if (scrollTop > 100) {
      setScrollPosition(scrollTop);
    } else {
      setScrollPosition(0);
    }
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: 'primary.main' }}
    >
      <img src={Logo} alt='yooo' style={{ height: '150px', width: '150px' }} />
      <Divider sx={{ backgroundColor: 'primary.main' }} />
      <List sx={{ backgroundColor: 'primary.main' }}>
        {navItems.map((item) => (
          <ListItem key={item.text} sx={{ margin: '15px 0px' }} disablePadding>
            <NavLink
              style={{
                textDecoration: 'none',
                color: '#1B1E1E',
                fontFamily: 'Ubuntu',
                fontSize: '20px',
                margin: 'auto',
              }}
              to={item.href}
            >
              {item.text}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar
          sx={{
            backgroundColor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15em',
          }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: 'none' } }}
          >
            <MenuIcon sx={{ color: '#1B1E1E' }} />
          </IconButton>
          <Box
            alt='yooo'
            sx={{
              display: { sm: 'none', md: 'block' },
              height: '100px',
              width: '100px',
              marginLeft: {
                xs: 'auto',
                sm: 'auto',
                md: '0',
                lg: '0',
                xl: '0',
              },
              backgroundImage: `url(${Logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'block' },
            }}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                className='menu_link'
                style={{
                  fontFamily: 'Birds',
                  textTransform: 'none',
                }}
                to={item.href}
              >
                {item.text}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ backgroundColor: '#E4DCC0' }}>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: '#E4DCC0',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}
