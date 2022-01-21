import React from "react";
import { ThemeProvider } from "@emotion/react";
import baseTheme from '../../../Theme/baseTheme';
import { Typography } from "@mui/material";

const TypographyComponent = ({ theme, ...props }: any) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Typography {...props}>
        {props.children}
      </Typography>
    </ThemeProvider>
  );
};

export default TypographyComponent;
