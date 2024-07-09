import {MyTimelineItemProps} from "../util/MyTimelineItem";
import SchoolIcon from '@mui/icons-material/School';


const schoolIcon = <SchoolIcon color='primary' fontSize='large'/>

const masterHka: MyTimelineItemProps = {
    id: 'masterHka',
    icon: schoolIcon,
    title: 'Master of Science in Business Administration and Engineering',
    company: 'University of Applied Sciences Karlsruhe',
    location: 'Karlsruhe, Germany',
    period: 'Mar. 2019 - Sep. 2021',
    tasks: [
        `Master\`s Thesis: Dynamic User Interaction for Role Mining with evolutionary Algorithms.`,
        `Specialized in digitalization.`,
        'Coursework: Computational Complexity and Formal Systems, Data Science, Modeling and Simulation of Dynamic Systems ...'
    ],
    isFirstItem: true,
};

const semesterAbroadMexico: MyTimelineItemProps = {
    id: 'bachelorTec',
    icon: schoolIcon,
    title: 'Semester abroad in Mexico',
    company: 'Tecnológico de Monterrey',
    location: 'Guadalajara, Mexico',
    period: 'Aug. 2018 - Dec. 2018',
    tasks: [],
};

const bachelorHka: MyTimelineItemProps = {
    id: 'bachelorHka',
    icon: schoolIcon,
    title: 'Bachelor of Science in Business Administration and Engineering',
    company: 'University of Applied Sciences Karlsruhe',
    location: 'Karlsruhe, Germany',
    period: 'Oct. 2015 - Feb. 2019',
    tasks: [
        `Bachelor\`s Thesis: Development of a value stream oriented target layout for the manufactory of interior components in the automotive industry.`,
        `Specialized in production management.`,
        `Coursework: Computer Science, Mathematics, Electrical and Automation Technology, Mechanical Engineering ...`,
    ],
    isLastItem: true,
};

export const educationData: MyTimelineItemProps[] = [
    masterHka,
    semesterAbroadMexico,
    bachelorHka,
];