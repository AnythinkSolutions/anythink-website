import { grey, indigo, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: indigo[700],
    },
    secondary: {
      main: "#b3a42f", //yellow.A100,
    },
    error: {
      main: red.A400,
    },
    background: {
      alternate: grey[100],
    }
  },
  typography: {
    fontFamily: [
        'Nunito Sans',
        'Roboto',
        'Montserrat',
        'sans-serif'
    ].join(','),
  },
});

export default theme;
