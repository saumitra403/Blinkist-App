import Template from "./components/Templates";
import baseTheme from "./Theme/mainTheme";
import {ThemeProvider} from '@mui/material';
function App() {
    return <ThemeProvider theme={baseTheme}><Template data-testid="box"/></ThemeProvider>
}
export default App;
