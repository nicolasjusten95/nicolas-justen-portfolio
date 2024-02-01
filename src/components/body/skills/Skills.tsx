import {Box, Typography} from "@mui/material";

const Skills = () => {
    return (
        <Box
            id='Skills'
            mt='150px'
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            width='80%'>
            <Box width='70%'>

            </Box>
            <Box width='20%'>
                <Typography color='text.primary' variant='h4' pb='15px'>Skills</Typography>
            </Box>
        </Box>
    );
};

export default Skills;