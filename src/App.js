import React from 'react';
import NavBar from './PageComponents/Navbar/navbar';
import Home from './PageComponents/Home/Home';
import About from './PageComponents/About/About';
import Contact from './PageComponents/Contact/Contact';
import TrainWithUs from './PageComponents/TrainWithUs/TrainWithUs';
import SmallGroupPT from './PageComponents/SmallGroupPT/SmallGroupPT';
import OnePT from './PageComponents/OnePT/OnePT';
import NutritionCoaching from './PageComponents/NutritionCoaching/NutritionCoaching';
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
          <Route path='/about' element={<About />} color='secondary' />
          <Route path='/contact' element={<Contact />} color='secondary' />
          <Route
            path='/trainwithus'
            element={<TrainWithUs />}
            color='secondary'
          />
          <Route
            path='/programs/smallgrouppersonaltraining'
            element={<SmallGroupPT />}
            color='secondary'
          />
          <Route
            path='/programs/11personaltraining'
            element={<OnePT />}
            color='secondary'
          />
          <Route
            path='/programs/nutritioncoaching'
            element={<NutritionCoaching />}
            color='secondary'
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
