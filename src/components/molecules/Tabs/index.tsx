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
    height: "fit-content",
  },
});
type tabDataProps = {
  value: number,
  label: string
}
type TabProps = {
  tabData: Array<tabDataProps>,
  stateHandler: Function
}
const TabComponent = (props: TabProps) => {
  const {tabData, stateHandler} = props;
  const classes = useStyle();
  const [value, setValue] = useState(tabData && tabData[0].value);

  const handleChange = (event: React.SyntheticEvent, val: any) => {
    setValue(val);
    stateHandler(val);
  };
  return (
    <Box
      sx={{ borderBottom: 1, borderColor: "divider" }}
      className={classes.tabs}
    >
      <ThemeProvider theme={tabsTheme}>
        <Tabs
          indicatorColor="secondary"
          value={value}
          textColor="secondary"
          sx={{ borderBottom: "none" }}
          onChange={handleChange}
          data-testid="tabs"
        >
          {tabData.map((curr: any) => {
            return (
              <Tab
                label={curr.label}
                value={curr.value}
                key={curr.value}
                data-testid={`tab-${curr.value}`}
              ></Tab>
            );
          })}
        </Tabs>
      </ThemeProvider>
    </Box>
  );
};

export default TabComponent;
