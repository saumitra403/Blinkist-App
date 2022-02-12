import { makeStyles } from "@mui/styles";
import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../Theme/baseTheme";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
type ButtonProps = {
  className?: string,
  content?: string
};

const useStyle = makeStyles({
  addToLibrary: {
    fontFamily: "Cera Pro !important",
  },
  buttonStyle: {
    width: "284px",
    height: "52px",
    '&:hover': {
      backgroundColor: "#0365F2 !important",
      color: "#FFFFFF"
    }
  },
})
const AddButton = (props: any) => {
  const classes = useStyle();

  return (
    <ThemeProvider theme={baseTheme}>
      <Button
        variant="text"
        startIcon={<AddIcon></AddIcon>}
        className={classes.buttonStyle}
        sx={{ textTransform: "none" }}
        data-testid="box"
      >
       {props.content} 
      </Button>
    </ThemeProvider>
  );
};




export default AddButton;