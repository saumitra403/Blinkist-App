import { Box } from "@material-ui/core";
import AppBar from "@mui/material/AppBar";
import mainTheme from "../../../Theme/mainTheme";
import { ThemeProvider } from "emotion-theming";
import Logo from "../../atoms/Logo/index";
import { makeStyles } from "@mui/styles";
import Img from "../../atoms/Images";
import { ExpandMore } from "@mui/icons-material";
import Typography from "../../atoms/Typography";
import AvatarComponent from "../../atoms/Avatar";
import { Link } from "react-router-dom";
import { Popover } from "@mui/material";
import { useState } from "react";
import Nav from "../../molecules/ExtendedNav";
const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleclick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <ThemeProvider theme={mainTheme}>
      <AppBar
        color="primary"
        sx={{
          width: "100%",
          height: "86px",
          position: "absolute",
          left: "0%",
          top: "0%",
          boxShadow: "none",
          backgroundColor: "white !important",
        }}
        data-testid="header"
      >
        <Link to="/">
          <Box
            sx={{
              position: "absolute",
              left: "17.36%",
              right: "74.02%",
              top: "34.88%",
              bottom: "34.88%",
            }}
          >
            <Logo></Logo>
          </Box>
        </Link>
        <Box
          sx={{
            position: "absolute",
            left: "28.82%",
            right: "69.51%",
            top: "36.05%",
            bottom: "36.05%",
          }}
        >
          <Img src="/Assets/Vector.png" height="24px" width="24px"></Img>
        </Box>
        <Box
          sx={{
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
            fontSize: "16px !important",
          }}
          aria-describedby={id}
          onClick={handleclick}
        >
          <Typography variant="body1">Explore</Typography>
          <ExpandMore></ExpandMore>
        </Box>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Nav></Nav>
        </Popover>

        <Link to="/library">
          <Typography
            sx={{
              position: "absolute",
              left: "41.25%",
              right: "53.33%",
              top: "38.37%",
              bottom: "38.37%",
              fontSize: "16px !important",
              width: "fit-content",
            }}
            variant="body1"
          >
            My Library
          </Typography>
        </Link>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "0px",
            position: "absolute",
            left: "78.33%",
            right: "17.36%",
            top: "26.74%",
            bottom: "26.74%",
          }}
        >
          <AvatarComponent
            sx={{ position: "static", backgroundColor: "#69A6E3" }}
          ></AvatarComponent>
          <ExpandMore
            sx={{ width: "20px !important", height: "20px !important" }}
          ></ExpandMore>
        </Box>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
