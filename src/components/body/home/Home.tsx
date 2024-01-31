import {Avatar, Box, Link, Stack, Typography} from "@mui/material";
import profilePicture from '../../../images/profile_picture.jpg';
import {currentCompany, currentCompanyLink, jobTitle, name} from "../../../data/HomeData";
import {githubIcon, linkedInIcon, mailIcon} from "../../../data/SocialMediaIcons";


const Home = () => {
    return (
        <Box
            display='flex'
            flexDirection='column'
        alignItems='center'>
            <Avatar
                alt={name}
                src={profilePicture}
                sx={{ width: 256, height: 256 }}/>
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
            <Stack direction='row'>
                {mailIcon}
                {linkedInIcon}
                {githubIcon}
            </Stack>
        </Box>
    );
};

export default Home;