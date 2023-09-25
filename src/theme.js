import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Color principal
      contrastText: '#fff', // Texto en color principal
    },
    secondary: {
      main: '#FF5722', // Color secundario
      contrastText: '#fff', // Texto en color secundario
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Fuente de texto predeterminada
  },
});

export default theme;
