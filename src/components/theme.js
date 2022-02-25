import { createTheme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
      second: "#2979ff",
    },
    secondary: {
      main: blueGrey[300],
    },
  },
});
