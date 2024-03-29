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
    // fontSize: 15,
    fontFamily: [
        'Nunito Sans',
        'Roboto',
        'sans-serif'
    ].join(','),
  },
});

export default theme;
