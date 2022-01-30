import { createTheme } from '@mui/material/styles';
const mainTheme = createTheme({
    palette: {
        background: {
            default: "#FFFFFF"
        },
        primary: { 
            main: '#ffffff',
        },

    },
    typography: {
        fontFamily: 'Cera Pro',
        body1: {
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "20.11px",
            color: "#03314B"
        },
        caption: {
            color: "#6D787E",
            lineHeight: "22px",
            fontSize: "14px"
        }
    }
})

export default mainTheme;