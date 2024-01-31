import React, {useState} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import {Box, CssBaseline, ThemeProvider} from "@mui/material";
import {themeDark, themeLight} from "./utils/MuiTheme";

function App() {

    const [light, setLight] = useState<boolean>(false);

    return (
        <ThemeProvider theme={light ? themeLight : themeDark}>
            <CssBaseline />
            <Box
                minHeight={'100vh'}
                display={'flex'}
                flexDirection={'column'}
                maxWidth={'100vw'}>
                <Header/>
                <Body/>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
}

export default App;
