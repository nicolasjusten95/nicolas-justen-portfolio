import {Box, Paper, Typography} from "@mui/material";
import {ReactElement} from "react";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator} from "@mui/lab";
import TimelineItem from "@mui/lab/TimelineItem";


export interface MyTimelineItemProps {
    id: string;
    logo: string;
    icon: ReactElement;
    title: string;
    company: string;
    period: string;
    tasks: string[];
    isFirstItem?: boolean;
    isLastItem?: boolean;
}

const ExperienceItem = (props: MyTimelineItemProps) => {

    const content = <Paper elevation={1} sx={{px: '10px'}}>
        <Box display='flex' flexDirection='column'>
            <Box display='flex' flexDirection='row' width='100%' alignItems='center'>
                <Box display='flex' mx='30px' height='120px' alignItems='center'>
                    <img src={props.logo} alt={props.company} width='100px'/>
                </Box>
                <Box>
                    <Typography color='text.primary' variant='h6'>{props.title}</Typography>
                    <Typography color='text.primary' variant='body1'>{props.company}</Typography>
                    <Typography color='text.primary' variant='body1'>{props.period}</Typography>
                </Box>
            </Box>
            <Box mb='20px'>
                <Typography color='text.primary' variant='body1'>
                    <ul>
                        {props.tasks.map((task, index) => (
                            <li key={index}>{task}</li>
                        ))}
                    </ul>
                </Typography>
            </Box>
        </Box>
    </Paper>;

    return (
        <TimelineItem id={props.id}>
            <TimelineOppositeContent style={{flex: 0}}/>
            <TimelineSeparator>
                {props.isFirstItem ?
                    <TimelineConnector style={{backgroundColor: 'transparent'}}/> :
                    <TimelineConnector color='secondary'/>}
                <TimelineDot color='secondary'>
                    {props.icon}
                </TimelineDot>
                {props.isLastItem ?
                    <TimelineConnector style={{backgroundColor: 'transparent'}}/> :
                    <TimelineConnector color='secondary'/>}
            </TimelineSeparator>
            <TimelineContent sx={{py: '15px', textAlign: 'left'}}>{content}</TimelineContent>
        </TimelineItem>
    );
};

export default ExperienceItem;