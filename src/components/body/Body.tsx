import {Box} from "@mui/material";
import Home from "./home/Home";
import Skills from "./skills/Skills";


const Body = () => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            flexGrow={1}>
            <Home/>
            <Skills/>
        </Box>
    );
}

export default Body;