import { ThemeProvider } from "@emotion/react";
import baseTheme from "../../../Theme/baseTheme";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
type ButtonProps = {
  className?: string;
  content?: string;
};
const AddButton = (props: any) => {

  return (
    <ThemeProvider theme={baseTheme}>
      <Button
        variant="text"
        startIcon={<AddIcon></AddIcon>}
        sx={{
          fontFamily: "Cera Pro !important",
          textTransform: "none",
          width: "284px",
          height: "52px",
          "&:hover": {
            backgroundColor: "#0365F2 !important",
            color: "#FFFFFF",
          },
        }}
        data-testid="box"
      >
        {props.content}
      </Button>
    </ThemeProvider>
  );
};

export default AddButton;
