import {Box, IconButton, Stack, Typography} from "@mui/material";
import {GitHub, LinkedIn, Mail} from "@mui/icons-material";
import {title} from "../../data/FooterData";
import {githubIcon, linkedInIcon, mailIcon} from "../../data/SocialMediaIcons";


const Footer = () => {
    return (
        <Box
            component='footer'
            width='100%'
            bgcolor={'primary.main'}
            mt={2}
            display='flex'
            flexDirection='column'
            alignItems='center'
            p={2}>
            <Typography color='text.primary'>
                {title}
            </Typography>
            <Stack direction='row'>
                {mailIcon}
                {linkedInIcon}
                {githubIcon}
            </Stack>
        </Box>
    );
};

export default Footer;