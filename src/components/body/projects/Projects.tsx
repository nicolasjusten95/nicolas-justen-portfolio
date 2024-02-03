import {Box, Typography} from "@mui/material";
import {projects} from "./ProjectData";
import Project from "./Project";

const Projects = () => {
    return (
        <Box
            id='Projects'
            mt='150px'
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            width='80%'
            sx={{scrollMargin: '130px'}}>
            <Box
                width='70%'
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                flexWrap='wrap'>
                {projects.map(project => <Project {...project}/>)}
            </Box>
            <Box width='15%'>
                <Typography color='text.primary' variant='h4'>
                    Projects
                </Typography>
            </Box>
        </Box>
    );
};

export default Projects;