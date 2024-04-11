import { createTheme, responsiveFontSizes } from '@mui/material';

let themeSystem = createTheme({
  palette: {
    primary: {
      main: '#878383', // Indigo
      dark: '#283593', // Dark Indigo
      light: '#878383', // Light Indigo
      contrastText: '#ffffff', // White
    },
    secondary: {
      main: '#00fff2', // Orange
      dark: '#ffff00', // Dark Orange
      light: '#002aff', // Light Orange
      contrastText: '#000000', // Black
    },
    background: {
      paper: '#e5e4ed', // Light Gray
      default: '#ffffff', // Slightly Darker Light Gray
    },
  },
});

themeSystem = responsiveFontSizes(themeSystem);

export default themeSystem;