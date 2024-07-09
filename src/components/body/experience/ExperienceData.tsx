import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import {MyTimelineItemProps} from "../util/MyTimelineItem";


const productionIcon = <PrecisionManufacturingIcon color='primary' fontSize='large'/>
const codeIcon = <CodeIcon color='primary' fontSize='large'/>

const softwareDeveloperPointsharp: MyTimelineItemProps = {
    id: 'softwareDeveloperPointsharp',
    icon: codeIcon,
    title: 'Software Developer',
    company: 'Pointsharp GmbH (formerly Sivis GmbH)',
    location: 'Karlsruhe, Germany',
    period: 'Oct. 2021 - Present',
    tasks: [
        `Engineered multiple core features for an evolutionary algorithm in role mining including adaptation to SAP-systems and compliance conformity, coordinating development with both internal and external stakeholders.`,
        `Achieved a 95% reduction in both runtime and memory usage and optimized the API response times for the role mining product.`,
        `Designed and implemented a demonstrator for a research project in fraud detection for ERP-Systems.`,
        `Installed and configured the software solutions in both cloud and on-premise environments.`,
        `Researched and evaluated technologies like GraphQL and RabbitMQ, contributing to decision-making processes.`,
        `Conducted impactful presentations, securing 5 major pilot clients for a new product.`
    ],
    isFirstItem: true,
};

const masterThesisSivis: MyTimelineItemProps = {
    id: 'masterThesisSivis',
    icon: codeIcon,
    title: 'Master\'s Thesis Software Development',
    company: 'Sivis GmbH',
    location: 'Karlsruhe, Germany',
    period: 'Feb. 2021 - Aug. 2021',
    tasks: [
        `Engineered four user interactions, designed to integrate expert knowledge into evolutionary algorithms.`,
        `Devised four survival strategies to ensure the persistence of user interactions throughout the optimization process.`,
        `Evaluated the developed features, showcasing their potential to accelerate the optimization process by up to 50%.`,
    ],
};

const bachelorThesisMercedes: MyTimelineItemProps = {
    id: 'bachelorThesisMercedes',
    icon: productionIcon,
    title: 'Bachelor\'s Thesis Production Planning',
    company: 'Mercedes-Benz AG',
    location: 'Böblingen, Germany',
    period: 'Sept. 2019 - Feb. 2020',
    tasks: [
        `Conducted a value stream analysis of the current manufactory of interior components.`,
        `Conducted a space analysis of the new facility for the manufactory of interior components.`,
        `Developed a new value stream oriented target layout for the manufactory of interior components.`,
    ],
};

const internshipMercedes: MyTimelineItemProps = {
    id: 'internshipMercedes',
    icon: productionIcon,
    title: 'Internship Production Planning',
    company: 'Daimler AG',
    location: 'Sindelfingen, Germany',
    period: 'Sept. 2017 - Feb. 2018',
    tasks: [
        `Led the implementation of a new planning software for the paint shop.`,
        `Designed an in-line weighing station for the body shop.`,
    ],
    isLastItem: true,
};

export const experienceData: MyTimelineItemProps[] = [
    softwareDeveloperPointsharp,
    masterThesisSivis,
    bachelorThesisMercedes,
    internshipMercedes,
];