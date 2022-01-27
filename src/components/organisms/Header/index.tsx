import { AccordionSummary, Box } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import mainTheme from "../../../Theme/mainTheme";
import { ThemeProvider } from "emotion-theming";
import Logo from "../../atoms/Logo";
import { makeStyles } from "@mui/styles";
import Img from "../../atoms/Images";
import Accordion from "@mui/material/Accordion";
import { ExpandMore } from "@mui/icons-material";
import Typography from "../../atoms/Typography";
import { height } from "@mui/material/node_modules/@mui/system";
import AvatarComponent from "../../atoms/Avatar";
const useStyle = makeStyles({
  logo: {
    position: "absolute",
    left: "17.36%",
    right: "74.02%",
    top: "34.88%",
    bottom: "34.88%",
  },
  search: {
    position: "absolute",
    left: "28.82%",
    right: "69.51%",
    top: "36.05%",
    bottom: "36.05%",
  },
  mylibrary: {
    position: "absolute",
    left: "41.25%",
    right: "53.33%",
    top: "38.37%",
    bottom: "38.37%",
    fontSize: "16px",
  },
  explore: {
    position: "absolute",
    left: "33.26%",
    right: "61.25%",
    top: "38.37%",
    width: "81px",
    height: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "0px !important"
  },
  text: {
    position: "static",
    width: "57px",
    height: "20px",
    left: "0px",
    top: "0px",
  },
  moreicon: {
    width: "20px !important",
    height: "20px !important",
  },
});
const Header = () => {
  const classes = useStyle();
  return (
    <ThemeProvider theme={mainTheme}>
      <AppBar
        color="primary"
        sx={{
          width: "1440px",
          height: "86px",
          position: "absolute",
          left: "20px",
          top: "126px",
        }}
      >
        <Logo className={classes.logo}></Logo>
        <Img
          src="Assets/Vector.png"
          height="24px"
          width="24px"
          className={classes.search}
        ></Img>

        <Box className={classes.explore}>
          <Typography className={classes.text}>Explore</Typography>
          <Box height="20px" width="20px">
          <ExpandMore className={classes.moreicon}></ExpandMore>
          </Box>
        </Box>

        <Typography className={classes.mylibrary} variant="body1">
          My Library
        </Typography>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
