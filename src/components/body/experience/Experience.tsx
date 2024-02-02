import {Box, Typography} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import {experiences} from "./Experiences";
import MyTimelineItem from "../util/MyTimelineItem";

const Experience = () => {
    return (
        <Box
            id='Experience'
            mt='150px'
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            width='80%'
            sx={{scrollMargin: '130px'}}>
            <Box width='10%'>
                <Typography color='text.primary' variant='h4'>
                    Experience
                </Typography>
            </Box>
            <Box
                width='85%'
                display='flex'
                flexDirection='column'
                justifyContent='start'>
                <Timeline>
                    {experiences.map(exp => (
                        <MyTimelineItem {...exp}/>
                    ))}
                </Timeline>
            </Box>
        </Box>
    );
};

export default Experience;