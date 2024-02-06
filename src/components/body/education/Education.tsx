import {Box, Typography} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import MyTimelineItem from "../util/MyTimelineItem";
import {educationData} from "./EducationData";
import {experienceData} from "../experience/ExperienceData";
import MyTimelinePaperItem from "../util/MyTimelinePaperItem";

const Education = () => {
    return (
        <Box
            id='Education'
            mt='100px'
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
                    Education
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
                <Timeline sx={{display: {xs: 'none', md: 'flex'}}}>
                    {educationData.map(exp => (
                        <MyTimelineItem {...exp}/>
                    ))}
                </Timeline>
                <Box
                    flexDirection='column'
                    p='20px'
                    sx={{display: {xs: 'flex', md: 'none'}}}>
                    {educationData.map(exp => <MyTimelinePaperItem {...exp}/>)}
                </Box>
            </Box>
        </Box>
    );
};

export default Education;