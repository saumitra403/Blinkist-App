import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import tabsTheme from "../../../Theme/tabTheme";
import { ThemeProvider } from "emotion-theming";
import { useState } from "react";

const useStyle = makeStyles({
  tabs: {
    width: "fit-content",
    height: "fit-content"
  }
});

const TabComponent = ({tabData,...props }: any) => {
  const classes = useStyle();
  const [value, setValue] = useState(tabData && tabData[0].value);

  const handleChange = (event: React.SyntheticEvent,value: any) => {
    setValue(value);
    props.stateHandler(value);
  }
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }} className={classes.tabs}>
      <ThemeProvider theme={tabsTheme}>
        <Tabs
          indicatorColor="secondary"
          value={value}
          textColor="secondary"
          sx={{borderBottom: "none"}}
          onChange={handleChange}
        >
          {tabData.map((curr: any) => {
            return <Tab label={curr.label} value={curr.value} key={curr.value}></Tab>
          })}
        </Tabs>
      </ThemeProvider>
    </Box>
  );
};

export default TabComponent;
