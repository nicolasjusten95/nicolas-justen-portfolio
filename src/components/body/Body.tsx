import {Box} from "@mui/material";
import Home from "./home/Home";
import Skills from "./skills/Skills";
import Experience from "./experience/Experience";
import Education from "./education/Education";
import Publications from "./publications/Publications";
import Projects from "./projects/Projects";


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
            <Experience/>
            <Education/>
            <Publications/>
            <Projects/>
        </Box>
    );
}

export default Body;