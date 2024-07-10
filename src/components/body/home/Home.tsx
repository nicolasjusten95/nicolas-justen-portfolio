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
                    <MyLink href='https://www.pointsharp.com/' text='Pointsharp GmbH'/>
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
                    textAlign='justify'
                    sx={{typography: {xs: 'body1', md: 'h6'}}}>
                    I'm Nicolas, a passionate Software Developer with over two years of experience in engineering and
                    delivering core features and algorithms. At&nbsp;
                    <MyLink href='https://www.pointsharp.com/' text='Pointsharp GmbH'/>&nbsp;
                    (formerly&nbsp;
                    <MyLink href='https://www.sivis.com/' text='Sivis GmbH'/>
                    ) I'm focusing mainly on enterprise-level identity & access management software within cybersecurity
                    solutions. Our software is deployed by over 3,000 corporations across Europe, where I play a pivotal
                    role in the development of our flagship product: The&nbsp;
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
                    textAlign='justify'
                    sx={{typography: {xs: 'body1', md: 'h6'}}}>
                    Prior to joining SIVIS my academic path led me through the&nbsp;
                    <MyLink href={'https://www.h-ka.de/'} text={"University of Applied Sciences Karlsruhe"}/>
                    , where I earned both my Bachelor's and Master's degrees in Business Administration and Engineering
                    with a focus on digitization. A highlight part of my academic journey was a semester abroad at
                    the&nbsp;
                    <MyLink href={'https://tec.mx/en'} text={"Tecnológico de Monterrey"}/>
                    &nbsp;in Mexico, which not only expanded my global outlook but also enhanced my adaptability
                    and problem-solving skills in varied environments. My Master's thesis ventured into the exciting
                    world of Role Mining Problems, integrating evolutionary algorithms with user interactions. This
                    research resulted in publications at the prestigious&nbsp;
                    <MyLink
                        href='https://www.researchgate.net/publication/381649508_Survival_Strategies_for_Evolutionary_Role_Mining_Algorithms_Using_Expert_Knowledge'
                        text='GECCO 2024'/>
                    &nbsp;and&nbsp;
                    <MyLink
                        href='https://www.scitepress.org/PublicationsDetail.aspx?ID=VO0asNCzymE=&t=1'
                        text='ECTA 2023'/>
                    &nbsp;conferences.
                </Typography>
                <Typography
                    color='text.primary'
                    textAlign='justify'
                    sx={{typography: {xs: 'body1', md: 'h6'}}}>
                    When I'm not coding, you'll often find me lost in the rhythm of music or the serenity of nature. I
                    love strumming classics on my guitar and find incredible peace running through forest trails. On
                    snowy days, I'm thrilled to volunteer as a skiing instructor at the&nbsp;
                    <MyLink
                        href='https://www.susss.de/home'
                        text='Ski- und Snowboardschule Schönbuch e. V.'/>
                    , a regional skiing club. Travel is another passion of mine. Whether it' embarking on a lengthy
                    journey like my work and travel year in Australia, my semester abroad in Mexico, or just a quick
                    getaway, I thrive on immersing myself in new cultures and collecting stories. These experiences not
                    only fuel my creativity but also deepen my understanding of the world around me.
                </Typography>
            </Box>
        </Box>
    );
};

export default Home;