import {Avatar, Box, Link, Stack, Typography} from "@mui/material";
import profilePicture from '../../../images/profile_picture.jpg';
import {githubIcon, linkedInIcon, mailIcon} from "../../../data/SocialMediaIcons";


const Home = () => {
    return (
        <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            width='80%'>
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                width='20%'>
                <Avatar
                    alt={"Nicolas Justen"}
                    src={profilePicture}
                    sx={{width: 'auto', height: 'auto'}}/>
                <Typography color='text.primary' variant='h4' p='8px'>Nicolas Justen</Typography>
                <Typography color='text.primary' variant='h6'>Software Developer</Typography>
                <Typography color='text.primary' variant='h6'>
                    <Link
                        href='https://www.sivis.com/'
                        color='text.primary'
                        target="_blank"
                        rel="noreferrer">
                        SIVIS GmbH
                    </Link>
                </Typography>
                <Stack direction='row' p='8px'>
                    {mailIcon}
                    {linkedInIcon}
                    {githubIcon}
                </Stack>
            </Box>
            <Box width='70%'>
                <Typography color='text.primary' variant='h4' pb='15px'>Biography</Typography>
                <Typography color='text.primary' variant='h6' pb='15px'>
                    I am a Software Developer with over two years of experience in shipping core features and
                    algorithms. My current employer
                    {<Link href='https://www.sivis.com/'
                           color='text.primary'
                           target="_blank"
                           rel="noreferrer">
                        &nbsp;SIVIS GmbH&nbsp;
                    </Link>}
                    {<Link href='https://www.pointsharp.com/'
                           color='text.primary'
                           target="_blank"
                           rel="noreferrer">
                        &nbsp;(part of Pointsharp)&nbsp;
                    </Link>}
                    is focusing on enterprise-level identity & access management software in cyber security solutions
                    that is being deployed by over 3,000 corporations across Europe. In my role I am developing full
                    stack web applications, mostly using Spring Boot and React. My main work is on the
                    {<Link href='https://www.sivis.com/en/product/sivis-authorization-robot'
                           color='text.primary'
                           target="_blank"
                           rel="noreferrer">
                        &nbsp;Authorization Robot
                    </Link>}
                    , a product that automizes the creation of ERP authorization concepts.
                </Typography>
                <Typography color='text.primary' variant='h6'>
                    Prior to joining SIVIS, I got my Master of Science as well as my Bachelor of Science in Business
                    Administration and Engineering from the
                    {<Link href='https://www.h-ka.de/en/'
                           color='text.primary'
                           target="_blank"
                           rel="noreferrer">
                        &nbsp;University of Applied Sciences Karlsruhe
                    </Link>}
                    , where I focused mainly on digitalisation. During my Master's thesis I focused on the integration
                    of user interactions for the Role Mining Problem into Evolutionary Algorithms and published the
                    results in the
                    {<Link href='https://www.scitepress.org/PublicationsDetail.aspx?ID=VO0asNCzymE=&t=1'
                           color='text.primary'
                           target="_blank"
                           rel="noreferrer">
                        &nbsp;Proceedings of the 15th International Joint Conference on Computational Intelligence -
                        ECTA
                    </Link>}
                    .
                </Typography>
            </Box>
        </Box>
    );
};

export default Home;