import {Box} from "@mui/material";
import Home from "./home/Home";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Education from "./education/Education";


const Body = () => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            flexGrow={1}
            id='Home'>
            <Home/>
            <Skills/>
            <Experience/>
            <Education/>
        </Box>
    );
}

export default Body;