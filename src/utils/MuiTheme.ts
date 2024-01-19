import {createTheme} from "@mui/material";


export const themeLight = createTheme({
    palette: {
        background: {
            default: "#ffffff"
        },
        primary: {
            main: "#62874b"
        },
        secondary: {
            main: "#e8e4db"
        }
    }
});

export const themeDark = createTheme({
    palette: {
        background: {
            default: "#272935"
        },
        primary: {
            main: "#62874b"
        },
        secondary: {
            main: "#e8e4db"
        }
    }
});