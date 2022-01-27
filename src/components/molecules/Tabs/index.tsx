import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { makeStyles } from "@material-ui/core";
import Box from "@mui/material/Box";
import tabsTheme from "../../../Theme/tabTheme";
import { ThemeProvider } from "emotion-theming";

const useStyle = makeStyles({});
const TabComponent = () => {
  const classes = useStyle();
  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
      <ThemeProvider theme={tabsTheme}>
        <Tabs indicatorColor="secondary" value={0} textColor="secondary">
          <Tab label="Currently Reading" value={0} />
          <Tab label="Content" value={1} />
          <Tab label="Connected Services" value={2} />
        </Tabs>
      </ThemeProvider>
    </Box>
  );
};

export default TabComponent;
