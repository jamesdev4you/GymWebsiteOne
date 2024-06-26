import React from 'react';
import NavBar from './PageComponents/Navbar/navbar';
import Home from './PageComponents/Home/Home';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#2A2A2A',
    },
    info: {
      main: '#1CB1E6',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' element={<NavBar />} color='secondary'>
          <Route path='/' element={<Home />} color='secondary' />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
