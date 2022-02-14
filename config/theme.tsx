import { Theme, createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const defaultTheme: Theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        fontFamily: `"Noto Sans KR", sans-serif`,
      },
    },
    MuiButton: {
      defaultProps: {
        style: {
          fontFamily: `"Noto Sans KR", sans-serif`,
        },
      },
    },
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

export const globalStyles = {
  body: {
    fontFamily: `"Noto Sans KR", sans-serif`,
    margin: '0px',
    padding: '0px',
  },
};
