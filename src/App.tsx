import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import {Box, ThemeProvider} from "@mui/material";
import {theme} from "./utils/MuiTheme";

function App() {
    return (
        <ThemeProvider theme={theme}>
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
