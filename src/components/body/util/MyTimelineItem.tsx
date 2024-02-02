import {ReactElement} from "react";
import {TimelineConnector, TimelineContent, TimelineDot, TimelineSeparator} from "@mui/lab";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

interface MyTimelineItemProps {
    data: ReactElement;
    icon: ReactElement;
    firstItem?: boolean;
    lastItem?: boolean;
}

const MyTimelineItem = (props: MyTimelineItemProps) => {
    return (
        <TimelineItem>
            <TimelineOppositeContent style={{flex: 0}}/>
            <TimelineSeparator>
                {props.firstItem ?
                    <TimelineConnector style={{backgroundColor: 'transparent'}}/> :
                    <TimelineConnector color='secondary'/>}
                <TimelineDot color='secondary'>
                    {props.icon}
                </TimelineDot>
                {props.lastItem ?
                    <TimelineConnector style={{backgroundColor: 'transparent'}}/> :
                    <TimelineConnector color='secondary'/>}
            </TimelineSeparator>
            <TimelineContent sx={{py: '15px'}}>{props.data}</TimelineContent>
        </TimelineItem>
    );
};

export default MyTimelineItem;