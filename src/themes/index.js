import { createTheme } from "@mui/material/styles";
import { purple, deepOrange, blueGrey, teal } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: teal[700],
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
    teal: {
      md: teal[700],
      main: teal[900],
    },
  },
});
