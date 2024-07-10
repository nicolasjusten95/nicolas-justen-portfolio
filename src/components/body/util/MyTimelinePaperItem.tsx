import {MyTimelineItemProps} from "./MyTimelineItem";
import {Box, Paper, Typography} from "@mui/material";
import styles from './MyTimelinePaperItem.module.scss';

const MyTimelinePaperItem = (props: MyTimelineItemProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: '20px',
        }}>
            <Box display='flex' flexDirection='column' mx='15px' sx={{mx: {xs: '0px', md: '10px'}}}>
                <Box display='flex' flexDirection='row' width='100%'>
                    <Box width='100%'>
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
                            {props.period + ' · ' + props.location}
                        </Typography>
                    </Box>
                </Box>
                <Box mt='0px'>
                    <Typography
                        color='text.primary'
                        textAlign='justify'
                        sx={{typography: {xs: 'body2', md: 'body1'}}}>
                        <ul className={styles.list}>
                            {props.tasks.map(task => (
                                <li key={task}>{task}</li>
                            ))}
                        </ul>
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default MyTimelinePaperItem;