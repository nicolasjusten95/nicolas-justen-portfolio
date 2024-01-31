import {Avatar, Box, Link, Stack, Typography} from "@mui/material";
import profilePicture from '../../../images/profile_picture.jpg';
import {
    currentCompany,
    currentCompanyLink,
    heading,
    jobTitle,
    name,
    paragraph1,
    paragraph2
} from "../../../data/HomeData";
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
                    alt={name}
                    src={profilePicture}
                    sx={{width: 'auto', height: 'auto'}}/>
                <Typography color='text.primary' variant='h4' p='8px'>{name}</Typography>
                <Typography color='text.primary' variant='h6'>{jobTitle}</Typography>
                <Typography color='text.primary' variant='h6'>
                    <Link
                        href={currentCompanyLink}
                        color='text.primary'
                        underline='hover'
                        target="_blank"
                        rel="noreferrer">
                        {currentCompany}
                    </Link>
                </Typography>
                <Stack direction='row' p='8px'>
                    {mailIcon}
                    {linkedInIcon}
                    {githubIcon}
                </Stack>
            </Box>
            <Box width='70%'>
                <Typography color='text.primary' variant='h4' pb='15px'>{heading}</Typography>
                <Typography color='text.primary' variant='h6' pb='15px'>{paragraph1}</Typography>
                <Typography color='text.primary' variant='h6'>{paragraph2}</Typography>
            </Box>
        </Box>
    );
};

export default Home;