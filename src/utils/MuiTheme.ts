import {createTheme} from "@mui/material";


export const themeLight = createTheme({
    palette: {
        background: {
            default: '#ffffff',
            paper: '#e8e4db'
        },
        primary: {
            main: '#62874b',
        },
        secondary: {
            main: '#e8e4db',
        },
    }
});

export const themeDark = createTheme({
    palette: {
        background: {
            default: '#1d212f',
            paper: '#343a40',
        },
        primary: {
            main: '#2a2f40',
        },
        secondary: {
            main: '#bdc6ff',
        },
        text: {
            primary: '#e1e6f3',
        },
    }
});