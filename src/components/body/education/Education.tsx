import {Box, Typography} from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import MyTimelineItem from "../util/MyTimelineItem";
import {educations} from "./Educations";

const Education = () => {
    return (
        <Box
            id='Education'
            mt='150px'
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            width='80%'>
            <Box
                width='85%'
                display='flex'
                flexDirection='column'
                justifyContent='start'>
                <Timeline position='left'>
                    {educations.map(exp => (
                        <MyTimelineItem {...exp}/>
                    ))}
                </Timeline>
            </Box>
            <Box width='10%'>
                <Typography color='text.primary' variant='h4'>
                    Education
                </Typography>
            </Box>
        </Box>
    );
};

export default Education;