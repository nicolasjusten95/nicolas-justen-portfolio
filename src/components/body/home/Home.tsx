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
            flexDirection='row'
            justifyContent='space-between'
            width='80%'
            sx={{scrollMargin: '130px'}}>
            <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                width='20%'>
                <Avatar
                    alt={"Nicolas Justen"}
                    src={profilePicture}
                    sx={{width: 'auto', height: 'auto'}}/>
                <Typography color='text.primary' variant='h4' m='8px'>Nicolas Justen</Typography>
                <Typography color='text.primary' variant='h6'>Software Developer</Typography>
                <Typography color='text.primary' variant='h6'>
                    <MyLink href='https://www.sivis.com/' text='SIVIS GmbH'/>
                </Typography>
                {socialMediaIcons}
            </Box>
            <Box width='70%'>
                <Typography color='text.primary' variant='h4' mb='15px'>Biography</Typography>
                <Typography color='text.primary' variant='h6' mb='15px'>
                    I am a Software Developer with over two years of experience in shipping core features and
                    algorithms. My current employer&nbsp;
                    <MyLink href='https://www.sivis.com/' text='SIVIS GmbH'/>
                    &nbsp;
                    <MyLink href='https://www.pointsharp.com/' text='(part of Pointsharp)'/>
                    &nbsp;is focusing on enterprise-level identity & access management software in cyber security
                    solutions that is being deployed by over 3,000 corporations across Europe. In my role I am
                    developing full stack web applications, mostly using Spring Boot and React. My main work is on
                    the&nbsp;
                    <MyLink
                        href='https://www.sivis.com/en/product/sivis-authorization-robot'
                        text='Authorization Robot'/>
                    , a product that automizes the creation of ERP authorization concepts.
                </Typography>
                <Typography color='text.primary' variant='h6'>
                    Prior to joining SIVIS, I got my Master of Science as well as my Bachelor of Science in Business
                    Administration and Engineering from the&nbsp;
                    <MyLink href={'https://www.h-ka.de/'} text={"University of Applied Sciences Karlsruhe"}/>
                    , where I focused mainly on digitalisation. During my Master's thesis I focused on the integration
                    of user interactions for the Role Mining Problem into Evolutionary Algorithms and published the
                    results in the&nbsp;
                    <MyLink
                        href='https://www.scitepress.org/PublicationsDetail.aspx?ID=VO0asNCzymE=&t=1'
                        text='Proceedings of the 15th International Joint Conference on Computational Intelligence - ECTA'/>
                    .
                </Typography>
            </Box>
        </Box>
    );
};

export default Home;