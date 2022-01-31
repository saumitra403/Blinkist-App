import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../Theme/baseTheme";
import Typography from "../../atoms/Typography";
import AddIcon from "@mui/icons-material/Add";
import Button from '@mui/material/Button';
type ButtonProps = {
  resting: boolean;
  className? :string
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
  
  resting ? button = <Button variant="text" startIcon={<AddIcon></AddIcon>} className={classes.buttonStyle} style={{color: "#0365F2 "}} sx={{textTransform: 'none'}}>Add To Library</Button> : 
  button = <Button variant="contained" startIcon={<AddIcon></AddIcon>} className={classes.buttonStyle} sx={{textTransform: 'none'}}>Add To Library</Button>
  
  return <ThemeProvider theme={baseTheme}>{button}</ThemeProvider>
};

export default AddButton;
