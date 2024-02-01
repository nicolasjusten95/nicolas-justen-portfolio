import {Box, Typography} from "@mui/material";
import {title} from "../../data/FooterData";
import {socialMediaIcons} from "../../data/SocialMediaIcons";


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
            {socialMediaIcons}
        </Box>
    );
};

export default Footer;