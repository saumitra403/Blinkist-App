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
      fontSize: "36px",
      lineHeight: "45.25px"
    },
    h5: {
      fontWeight: "bold",
      fontSize: "33px",
    },
    body1: {
      color: "#03314B",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#6D787E"
    },
    subtitle1: {
      color: "#0365F2",
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "500",
    },
    caption: {
      color: "#6D787E",
      lineHeight: "22px",
      fontSize: "14px",
    },
    button: {
      textTransform: "none",
    },
  },
});

export default buttonTheme;
