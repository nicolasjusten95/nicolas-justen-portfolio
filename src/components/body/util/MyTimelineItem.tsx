import {Box, Paper, Typography} from "@mui/material";
import {ReactElement} from "react";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator} from "@mui/lab";
import TimelineItem from "@mui/lab/TimelineItem";
import MyTimelinePaperItem from "./MyTimelinePaperItem";


export interface MyTimelineItemProps {
    id: string;
    icon: ReactElement;
    title: string;
    company: ReactElement;
    location: string;
    period: string;
    tasks: string[];
    isFirstItem?: boolean;
    isLastItem?: boolean;
}

const ExperienceItem = (props: MyTimelineItemProps) => {
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
            <TimelineContent sx={{py: '15px', textAlign: 'left'}}>
               <MyTimelinePaperItem {...props}/>
            </TimelineContent>
        </TimelineItem>
    );
};

export default ExperienceItem;