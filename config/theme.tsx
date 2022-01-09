import { createTheme, Theme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const defaultTheme: Theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: grey.A400,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none',
        },
      },
    },
  },
  palette: {
    primary: {
      main: grey.A700,
    },
    secondary: {
      main: grey[100],
    },
    error: {
      main: red.A400,
    },
  },
});
