import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
  },
  typography: {
    h4: {
      fontFamily: "monospace",
      color: "#61dbfb",
    },
    h5: {
      fontFamily: "monospace",
      color: "InfoText",
    },
  },
});
