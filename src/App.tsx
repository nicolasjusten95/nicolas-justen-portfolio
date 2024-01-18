import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import {Box} from "@mui/material";

function App() {
    return (
        <Box
            minHeight={'100vh'}
            display={'flex'}
            flexDirection={'column'}>
            <Header/>
            <Body/>
            <Footer/>
        </Box>
    );
}

export default App;
