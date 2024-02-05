import {Box, Typography} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import {experienceData} from "./ExperienceData";
import MyTimelineItem from "../util/MyTimelineItem";

const Experience = () => {
    return (
        <Box
            id='Experience'
            mt='150px'
            display='flex'
            maxWidth='100%'
            sx={{
                width: {xs: '100vw', md: '80%'},
                scrollMargin: '130px',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: {xs: 'center', md: 'space-between'},
                alignItems: {xs: 'center', md: 'start'}
            }}>
            <Box sx={{width: {xs: '70%', md: '15%'}}}>
                <Typography color='text.primary' variant='h4' align='center'>
                    Experience
                </Typography>
            </Box>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='start'
                sx={{
                    width: {xs: '100%', md: '85%'},
                    mt: {xs: '40px', md: '0px'}
                }}>
                <Timeline>
                    {experienceData.map(exp => (
                        <MyTimelineItem {...exp}/>
                    ))}
                </Timeline>
            </Box>
        </Box>
    );
};

export default Experience;