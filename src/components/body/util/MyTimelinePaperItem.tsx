import {MyTimelineItemProps} from "./MyTimelineItem";
import {Box, Paper, Typography} from "@mui/material";
import styles from './MyTimelinePaperItem.module.scss';

const MyTimelinePaperItem = (props: MyTimelineItemProps) => {
    return (
        <Paper
            elevation={1}
            sx={{
                p: '20px',
                mb: {xs: '20px', md: '0px'}
        }}>
            <Box display='flex' flexDirection='column' ml='15px' mr='15px'>
                <Box display='flex' flexDirection='row' width='100%'>
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
                            {props.period + ' · ' + props.location}
                        </Typography>
                    </Box>
                </Box>
                <Box mt='10px'>
                    <Typography
                        color='text.primary'
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