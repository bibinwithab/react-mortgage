import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    h4: {
      fontFamily: "monospace",
      color: "steelblue",
    },
    h5: {
      fontFamily: "monospace",
      color: "InfoText",
    },
  },
});
