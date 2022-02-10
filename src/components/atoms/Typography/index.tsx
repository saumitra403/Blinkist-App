import { ThemeProvider } from "emotion-theming";
import baseTheme from '../../../Theme/baseTheme';
import { Typography } from "@mui/material";

const TypographyComponent = ({ theme, ...props }: any) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Typography {...props} data-testid="typo">
        {props.children}
      </Typography>
    </ThemeProvider>
  );
};

export default TypographyComponent;
