import sivisLogo from '../../../images/sivis_logo.jpg';
import mercedesLogo from '../../../images/mercedes_benz_logo.png';
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import {MyTimelineItemProps} from "../util/MyTimelineItem";


const productionIcon = <PrecisionManufacturingIcon color='primary' fontSize='large'/>
const codeIcon = <CodeIcon color='primary' fontSize='large'/>

const softwareDeveloperSivis: MyTimelineItemProps = {
    id: 'softwareDeveloperSivis',
    logo: sivisLogo,
    icon: codeIcon,
    title: 'Software Developer',
    company: 'SIVIS GmbH · Karlsruhe, Germany',
    period: 'Oct. 2021 - Present',
    tasks: [
        `Engineered multiple core features including adaptation to SAP-systems and compliance conformity for an evolutionary algorithm in role mining, coordinating development with both internal and external stakeholders.`,
        `Achieved a 95% reduction in both runtime and memory for the role mining product through problem refactoring.`,
        `Optimized API response time for the role mining product from an average of 100ms to 9ms.`,
        `Designed and implemented a demonstrator for a research project in fraud detection for ERP-Systems.`,
        `Researched and evaluated technologies like GraphQL and RabbitMQ, contributing to decision-making processes.`,
        `Conducted impactful presentations, securing 5 major pilot clients for a new product.`
    ],
    isFirstItem: true,
};

const masterThesisSivis: MyTimelineItemProps = {
    id: 'masterThesisSivis',
    logo: sivisLogo,
    icon: codeIcon,
    title: 'Internship - Master\'s Thesis Software Development',
    company: 'SIVIS GmbH · Karlsruhe, Germany',
    period: 'Feb. 2021 - Aug. 2021',
    tasks: [
        `Engineered four user interactions, designed to integrate expert knowledge into evolutionary algorithms.`,
        `Devised four survival strategies to ensure the persistence of user interactions throughout the optimization process.`,
        `Evaluated the developed features, showcasing their potential to accelerate the optimization process by up to 50%.`,
    ],
};

const bachelorThesisMercedes: MyTimelineItemProps = {
    id: 'bachelorThesisMercedes',
    logo: mercedesLogo,
    icon: productionIcon,
    title: 'Internship - Bachelor\'s Thesis Production',
    company: 'Mercedes-Benz AG · Böblingen, Germany',
    period: 'Sept. 2019 - Feb. 2020',
    tasks: [
        `Conducted a value stream analysis of the current manufactory of interior components.`,
        `Conducted a space analysis of the new facility for the manufactory of interior components.`,
        `Developed a value stream oriented target layout for the manufactory of interior components.`,
    ],
};

const internshipMercedes: MyTimelineItemProps = {
    id: 'internshipMercedes',
    logo: mercedesLogo,
    icon: productionIcon,
    title: 'Internship - Production Planning',
    company: 'Mercedes-Benz AG · Sindelfingen, Germany',
    period: 'Sept. 2017 - Feb. 2018',
    tasks: [
        `Led the implementation of a new planning software for the paint shop.`,
        `Designed an in-line weighing station for the body shop.`,
    ],
    isLastItem: true,
};

export const experienceData: MyTimelineItemProps[] = [
    softwareDeveloperSivis,
    masterThesisSivis,
    bachelorThesisMercedes,
    internshipMercedes,
];