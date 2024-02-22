import {Avatar, Box, Typography} from "@mui/material";
import profilePicture from '../../../images/profile_picture.jpg';
import {socialMediaIcons} from "../util/SocialMediaIcons";
import MyLink from "../util/MyLink";


const Home = () => {
    return (
        <Box
            id='Home'
            mt='50px'
            display='flex'
            width='80%'
            sx={{
                scrollMargin: '130px',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: {xs: 'center', md: 'space-between'},
                alignItems: {xs: 'center', md: 'start'}
            }}>
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                sx={{width: {xs: '70%', md: '30%'}}}>
                <Avatar
                    alt='Nicolas Justen'
                    src={profilePicture}
                    sx={{width: 'auto', height: 'auto', maxWidth: '300px', mb: '10px'}}/>
                <Typography
                    color='text.primary'
                    m='8px'
                    sx={{typography: {xs: 'h5', lg: 'h4'}}}>
                    Nicolas Justen
                </Typography>
                <Typography
                    color='text.primary'
                    variant='h6'>
                    Software Developer
                </Typography>
                <Typography color='text.primary' variant='h6'>
                    <MyLink href='https://www.sivis.com/' text='SIVIS GmbH'/>
                </Typography>
                {socialMediaIcons}
            </Box>
            <Box
                sx={{
                    width: {xs: '100%', md: '65%'},
                    mt: {xs: '40px', md: '0px'}
                }}>
                <Typography
                    color='text.primary'
                    mb='20px'
                    sx={{typography: {xs: 'h5', md: 'h4'}}}>
                    Hello! 👋
                </Typography>
                <Typography
                    color='text.primary'
                    mb='20px'
                    sx={{typography: {xs: 'body1', md: 'h6'}}}>
                    I'm Nicolas, a passionate Software Developer with over two years of experience in engineering and
                    delivering core features and algorithms. At&nbsp;
                    <MyLink href='https://www.sivis.com/' text='SIVIS GmbH'/>
                    &nbsp;(part of&nbsp;
                    <MyLink href='https://www.pointsharp.com/' text='Pointsharp'/>
                    ) I'm focusing on enterprise-level identity & access management software within cybersecurity
                    solutions. Our software is deployed by over 3,000 corporations across Europe, where I play a pivotal
                    role in the development of our flagship product: the&nbsp;
                    <MyLink
                        href='https://www.sivis.com/en/product/sivis-authorization-robot'
                        text='Authorization Robot'/>
                    . This innovative tool is revolutionizing the way companies create and maintain ERP authorization
                    concepts by fully automating this process. My technical expertise centers around developing
                    full-stack web applications using mostly Java and Spring Boot.
                </Typography>
                <Typography
                    color='text.primary'
                    mb='20px'
                    sx={{typography: {xs: 'body1', md: 'h6'}}}>
                    Prior to joining SIVIS my academic path led me through the&nbsp;
                    <MyLink href={'https://www.h-ka.de/'} text={"University of Applied Sciences Karlsruhe"}/>
                    , where I earned both my Bachelor's and Master's degrees in Business Administration and Engineering
                    with a focus on digitization. A highlight part of my academic journey was a semester abroad at
                    the&nbsp;
                    <MyLink href={'https://tec.mx/en'} text={"Tecnológico de Monterrey"}/>
                    &nbsp;in Mexico, which not only expanded my global outlook but also enhanced my adaptability
                    and problem-solving skills in varied environments. My Master's thesis ventured into the exciting
                    world of Role Mining Problems, integrating evolutionary algorithms with user interactions — a
                    pursuit that culminated in a publication for the&nbsp;
                    <MyLink
                        href='https://www.scitepress.org/PublicationsDetail.aspx?ID=VO0asNCzymE=&t=1'
                        text='15th International Joint Conference on Computational Intelligence - ECTA'/>
                    .
                </Typography>
                <Typography
                    color='text.primary'
                    sx={{typography: {xs: 'body1', md: 'h6'}}}>
                    When I'm not immersed in code, I seek refuge in the rhythm of music and the vastness of nature.
                    Whether I'm strumming to the classics on my electric guitar, chasing the horizon running on forest
                    trails, or contributing as a volunteer skiing instructor at the&nbsp;
                    <MyLink
                        href='https://www.susss.de/home'
                        text='Ski- und Snowboardschule Schönbuch e. V.'/>
                    , a regional skiing club, life for me is all about making connections and enjoying every moment.
                    Traveling is another avenue where I satisfy my curiosity. Whether it's a long journey like
                    my work and travel year in Australia or a brief trip, immersing myself in diverse cultures and
                    collecting stories along the way fuels my creativity and broadens my understanding of the world.
                </Typography>
            </Box>
        </Box>
    );
};

export default Home;