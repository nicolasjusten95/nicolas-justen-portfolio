import {MyTimelineItemProps} from "../util/MyTimelineItem";
import hkaLogo from "../../../images/hka_logo.png";
import tecMonterreyLogo from "../../../images/tec_monterrey_logo.jpg";
import SchoolIcon from '@mui/icons-material/School';

const schoolIcon = <SchoolIcon color='primary' fontSize='large'/>

export const educations: MyTimelineItemProps[] = [
    {
        id: 'masterHka',
        logo: hkaLogo,
        icon: schoolIcon,
        title: 'Master of Science in Business Administration and Engineering',
        company: 'University of Applied Sciences Karlsruhe · Karlsruhe, Germany',
        period: 'Mar. 2019 - Sep. 2021',
        tasks: [
            `Master\`s Thesis: Dynamic User Interaction for Role Mining with evolutionary Algorithms.`,
            `Specialized in digitalization.`,
            'Coursework: Computational Complexity and Formal Systems, Data Science, Modeling and Simulation of Dynamic Systems ...'
        ],
        isFirstItem: true,
    },
    {
        id: 'bachelorTec',
        logo: tecMonterreyLogo,
        icon: schoolIcon,
        title: 'Semester abroad in Mexico',
        company: 'Tecnológico de Monterrey, Guadalajara, Mexico',
        period: 'Aug. 2018 - Dec. 2018',
        tasks: [
        ],
    },
    {
        id: 'bachelorHka',
        logo: hkaLogo,
        icon: schoolIcon,
        title: 'Bachelor of Science in Business Administration and Engineering',
        company: 'University of Applied Sciences Karlsruhe · Karlsruhe, Germany',
        period: 'Oct. 2015 - Feb. 2019',
        tasks: [
            `Bachelor\`s Thesis: Development of a value stream oriented target layout for the manufactory of interior components in the automotive industry.`,
            `Specialized in production management.`,
            `Coursework: Computer Science, Mathematics, Electrical and Automation Technology, Mechanical Engineering ...`,
        ],
        isLastItem: true,
    },
];