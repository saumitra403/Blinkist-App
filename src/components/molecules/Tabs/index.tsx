import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import tabsTheme from "../../../Theme/tabTheme";
import { ThemeProvider } from "emotion-theming";
import { useState } from "react";

const useStyle = makeStyles({
  tabs: {
    position: "absolute",
    width: "912px",
    height: "39px",
    left: "264px",
    top: "250px"
  }
});
const TabComponent = ({ value, ...props }: any) => {
  const classes = useStyle();
  
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }} className={classes.tabs}>
      <ThemeProvider theme={tabsTheme}>
        <Tabs
          indicatorColor="secondary"
          value={value}
          textColor="secondary"
          sx={{borderBottom: "none"}}
        >
          <Tab label="Currently Reading" value={0} />
          <Tab label="Finished" value={1} />
        </Tabs>
      </ThemeProvider>
    </Box>
  );
};

export default TabComponent;
