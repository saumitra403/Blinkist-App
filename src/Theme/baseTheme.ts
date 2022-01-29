import { createTheme } from "@mui/material/styles";

const buttonTheme = createTheme({
  palette: {
    success: {
      main: "#11cb5f",
    },
    primary: {
      main: "#ffffff",
      contrastText: "#11cb5f",
    },
    background: {
      default: "#394764",
    },
  },
  typography: {
    fontFamily: "Cera Pro",
    h1: {
      fontWeight: "bold",
    },
    h5: {
      fontWeight: "bold",
      fontSize: "33px",
    },
    body1: {
      fontWeight: "500",
      color: "#03314B",
    },
    button: {
      textTransform: "none",
    },
  },
});

export default buttonTheme;
