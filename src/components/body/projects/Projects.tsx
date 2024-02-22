import {Box} from "@mui/material";
import {projects} from "./ProjectData";
import PaperItem from "../util/PaperItem";
import MySectionHeading from "../util/MySectionHeading";

const Projects = () => {
    return (
        <Box
            id='Projects'
            mt='100px'
            display='flex'
            sx={{
                width: {xs: '100vw', md: '80%'},
                scrollMargin: '130px',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: {xs: 'space-evenly', md: 'space-between'},
                alignItems: {xs: 'center', md: 'start'}
            }}>
            <MySectionHeading title='Projects'/>
            <Box
                display='flex'
                flexDirection='row'
                justifyContent='start'
                flexWrap='wrap'
            sx={{
                width: {xs: '100%', md: '85%'},
                justifyContent: {xs: 'space-evenly', md: 'space-evenly'}
            }}>
                {projects.map(project => <PaperItem {...project}/>)}
            </Box>
        </Box>
    );
};

export default Projects;