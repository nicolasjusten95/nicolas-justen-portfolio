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
            <Box display='flex' flexDirection='column'>
                <Box display='flex' flexDirection='row' width='100%' alignItems='center'>
                    <Box
                        display='flex'
                        alignItems='center'
                        width='20%'
                        sx={{
                            mx: {xs: '10px', md: '30px'},
                            width: {xs: '20%', sm: '15%', md: '10%'}
                        }}>
                        <img src={props.logo} alt={props.company} width='100%'/>
                    </Box>
                    <Box sx={{width: {xs: '80%', sm: '85%', md: '90%'}}}>
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