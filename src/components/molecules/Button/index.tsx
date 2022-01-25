import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../Theme/baseTheme";
import Typography from "../../atoms/Typography";
import Icon from "../../atoms/icons";
import AddIcon from "@mui/icons-material/Add";
import Button from '@mui/material/Button';
type ButtonProps = {
  resting: boolean;
};

const useStyle = makeStyles({
  addToLibrary: {
    fontFamily: "Cera Pro !important",
  },
  buttonStyle: {
    width: "183px",
    height: "52px",
  }
});
const AddButton = (props: ButtonProps) => {
  const { resting } = props;
  const classes = useStyle();
  let button = <></>;
  
  resting ? button = <Button variant="text" startIcon={<AddIcon></AddIcon>} className={classes.buttonStyle} style={{color: "#0365F2 "}}><Typography className={classes.addToLibrary}>Add To Library</Typography></Button> : 
  button = <Button variant="contained" startIcon={<AddIcon></AddIcon>} className={classes.buttonStyle}><Typography className={classes.addToLibrary}>Add To Library</Typography></Button>
  
  return <ThemeProvider theme={baseTheme}>{button}</ThemeProvider>
};

export default AddButton;
