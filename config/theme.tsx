import { createTheme, Theme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const defaultTheme: Theme = createTheme({
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
