import {MyTimelineItemProps} from "./MyTimelineItem";
import {Box, Paper, Typography} from "@mui/material";

const MyTimelinePaperItem = (props: MyTimelineItemProps) => {
    return (
        <Paper
            elevation={1}
            sx={{
                p: '20px',
                mb: {xs: '20px', md: '0px'}
        }}>
            <Box display='flex' flexDirection='column' ml='15px' mr='15px'>
                <Box display='flex' flexDirection='row' width='100%' alignItems='center'>
                    <Box sx={{width: {xs: '80%', sm: '85%', md: '90%'}}} display='flex' flexDirection='column' alignItems='left'>
                        <Typography
                            color='text.primary'
                            sx={{typography: {xs: 'body1', md: 'h6'}}}>
                            {props.title}
                        </Typography>
                        <Typography
                            color='text.primary'
                            sx={{typography: {xs: 'body2', md: 'body1'}}}>
                            {props.company}
                        </Typography>
                        <Typography
                            color='text.primary'
                            sx={{typography: {xs: 'body2', md: 'body1'}}}>
                            {props.location}
                        </Typography>
                        <Typography
                            color='text.primary'
                            sx={{typography: {xs: 'body2', md: 'body1'}}}>
                            {props.period}
                        </Typography>
                    </Box>
                </Box>
                <Box mt='10px'>
                    <Typography
                        color='text.primary'
                        sx={{typography: {xs: 'body2', md: 'body1'}}}>
                        <ul>
                            {props.tasks.map((task, index) => (
                                <li key={index}>{task}</li>
                            ))}
                        </ul>
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default MyTimelinePaperItem;