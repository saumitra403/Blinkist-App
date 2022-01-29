import { Box } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import mainTheme from "../../../Theme/mainTheme";
import { ThemeProvider } from "emotion-theming";
import Logo from "../../atoms/Logo";
import { makeStyles } from "@mui/styles";
import Img from "../../atoms/Images";
import { ExpandMore } from "@mui/icons-material";
import Typography from "../../atoms/Typography";
import AvatarComponent from "../../atoms/Avatar";
import Icon from "../../atoms/Icons";
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
    padding: "0px !important",
  },
  moreicon: {
    width: "20px !important",
    height: "20px !important",
  },
  avatar: {
    position: "static",
    right: "35.48%",
    top: "0%",
    bottom: "0%",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "0px",
    position: "absolute",
    left: "78.33%",
    right: "17.36%",
    top: "26.74%",
    bottom: "26.74%"
  }
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
          <Typography variant="body1">Explore</Typography>
          <ExpandMore></ExpandMore>
        </Box>

        <Typography className={classes.mylibrary} variant="body1">
          My Library
        </Typography>

        <Box className={classes.box}>
          <AvatarComponent sx={{position: 'static', backgroundColor: "#69A6E3"}}></AvatarComponent>
          <ExpandMore className={classes.moreicon}></ExpandMore>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
