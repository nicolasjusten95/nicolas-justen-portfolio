import {Box, Paper, Typography} from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import MyTimelineItem from "../util/MyTimelineItem";
import sivisLogo from '../../../images/sivis_logo.jpg';
import mercedesLogo from '../../../images/mercedes_benz_logo.png';
import CodeIcon from '@mui/icons-material/Code';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

const Experience = () => {

    const productionIcon = <PrecisionManufacturingIcon color='primary' fontSize='large'/>
    const codeIcon = <CodeIcon color='primary' fontSize='large'/>

    const softwareDeveloperSivis = <Paper elevation={1}>
        <Box display='flex' flexDirection='column'>
            <Box display='flex' flexDirection='row' width='100%' alignItems='center'>
                <Box m='20px'>
                    <img src={sivisLogo} alt='SIVIS GmbH' width='100px'/>
                </Box>
                <Box>
                    <Typography color='text.primary' variant='h6'>Software Developer</Typography>
                    <Typography color='text.primary' variant='body1'>SIVIS GmbH · Karlsruhe, Germany</Typography>
                    <Typography color='text.primary' variant='body1'>Oct. 2021 - Present</Typography>
                </Box>
            </Box>
            <Box mb='20px'>
                <Typography color='text.primary' variant='body1'>
                    <ul>
                        <li>
                            Engineered multiple core features including adaptation to SAP-systems and compliance
                            conformity for an evolutionary algorithm in role mining, coordinating development with both
                            internal and external stakeholders.
                        </li>
                        <li>
                            Achieved a 95% reduction in both runtime and memory for the role mining product through
                            problem refactoring.
                        </li>
                        <li>
                            Optimized API response time for the role mining product from an average of 100ms to 9ms.
                        </li>
                        <li>
                            Designed and implemented a demonstrator for a research project in fraud detection for
                            ERP-Systems.
                        </li>
                        <li>
                            Researched and evaluated technologies like GraphQL and RabbitMQ, contributing to
                            decision-making processes.
                        </li>
                        <li>
                            Conducted impactful presentations, securing 5 major pilot clients for a new prpduct.
                        </li>
                    </ul>
                </Typography>
            </Box>
        </Box>
    </Paper>;

    const internMasterSivis = <Paper elevation={3}>
        <Box display='flex' flexDirection='column'>
            <Box display='flex' flexDirection='row' width='100%' alignItems='center'>
                <Box m='20px'>
                    <img src={sivisLogo} alt='SIVIS GmbH' width='100px'/>
                </Box>
                <Box>
                    <Typography color='text.primary' variant='h6'>Internship - Master's Thesis Software
                        Development</Typography>
                    <Typography color='text.primary' variant='body1'>SIVIS GmbH · Karlsruhe, Germany</Typography>
                    <Typography color='text.primary' variant='body1'>Feb. 2021 - Aug. 2021</Typography>
                </Box>
            </Box>
            <Box mb='20px'>
                <Typography color='text.primary' variant='body1'>
                    <ul>
                        <li>
                            Engineered four user interactions, designed to integrate expert knowledge into evolutionary
                            algorithms.
                        </li>
                        <li>
                            Devised four survival strategies to ensure the persistence of user interactions throughout
                            the optimization process.
                        </li>
                        <li>
                            Evaluated the developed features, showcasing their potential to accelerate the optimization
                            process by up to 50%.
                        </li>
                    </ul>
                </Typography>
            </Box>
        </Box>
    </Paper>;

    const internBachelorMercedes = <Paper elevation={1}>
        <Box display='flex' flexDirection='column'>
            <Box display='flex' flexDirection='row' width='100%' alignItems='center'>
                <Box m='20px'>
                    <img src={mercedesLogo} alt='Mercedes-Benz AG' width='100px'/>
                </Box>
                <Box>
                    <Typography color='text.primary' variant='h6'>Internship - Bachelor's Thesis Production
                        Planning</Typography>
                    <Typography color='text.primary' variant='body1'>Mercedes-Benz AG · Böblingen, Germany</Typography>
                    <Typography color='text.primary' variant='body1'>Sept. 2019 - Feb. 2020</Typography>
                </Box>
            </Box>
            <Box mb='20px'>
                <Typography color='text.primary' variant='body1'>
                    <ul>
                        <li>
                            Conducted a value stream analysis of the current manufactory of interior components.
                        </li>
                        <li>
                            Conducted a space analysis of the new facility for the manufactory of interior components.
                        </li>
                        <li>
                            Developed a value stream oriented target layout for the manufactory of interior components.
                        </li>
                    </ul>
                </Typography>
            </Box>
        </Box>
    </Paper>;

    const internMercedes = <Paper elevation={1}>
        <Box display='flex' flexDirection='column'>
            <Box display='flex' flexDirection='row' width='100%' alignItems='center'>
                <Box m='20px'>
                    <img src={mercedesLogo} alt='Mercedes-Benz AG' width='100px'/>
                </Box>
                <Box>
                    <Typography color='text.primary' variant='h6'>Internship - Production Planning</Typography>
                    <Typography color='text.primary' variant='body1'>Mercedes-Benz AG · Sindelfingen,
                        Germany</Typography>
                    <Typography color='text.primary' variant='body1'>Sept. 2017 - Feb. 2018</Typography>
                </Box>
            </Box>
            <Box mb='20px'>
                <Typography color='text.primary' variant='body1'>
                    <ul>
                        <li>Led the implementation of a new planning software for the paint shop.</li>
                        <li>Designed an in-line weighing station for the body shop.</li>
                    </ul>
                </Typography>
            </Box>
        </Box>
    </Paper>;

    return (
        <Box
            id='Experience'
            mt='150px'
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            width='80%'>
            <Box width='10%'>
                <Typography color='text.primary' variant='h4'>Experience</Typography>
            </Box>
            <Box width='85%' display='flex' flexDirection='column' justifyContent='start'>
                <Timeline>
                    <MyTimelineItem data={softwareDeveloperSivis} icon={codeIcon} firstItem={true}/>
                    <MyTimelineItem data={internMasterSivis} icon={codeIcon}/>
                    <MyTimelineItem data={internBachelorMercedes} icon={productionIcon}/>
                    <MyTimelineItem data={internMercedes} icon={productionIcon} lastItem={true}/>
                </Timeline>
            </Box>
        </Box>
    );
};

export default Experience;