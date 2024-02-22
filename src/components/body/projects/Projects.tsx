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
                justifyContent: {xs: 'center', md: 'space-between'},
                alignItems: {xs: 'center', md: 'start'}
            }}>
            <MySectionHeading title='Projects'/>
            <Box
                width='70%'
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                flexWrap='wrap'>
                {projects.map(project => <PaperItem {...project}/>)}
            </Box>
        </Box>
    );
};

export default Projects;