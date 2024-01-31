import {Box, IconButton, Stack, Typography} from "@mui/material";
import {GitHub, LinkedIn, Mail} from "@mui/icons-material";
import {title} from "../../data/FooterData";


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
                <IconButton href={'mailto:nicolas.justen95@gmail.com'}>
                    <Mail fontSize='large' color='secondary'/>
                </IconButton>
                <IconButton href={'https://de.linkedin.com/in/nicolas-justen-232324178'}>
                    <LinkedIn fontSize='large' color='secondary'/>
                </IconButton>
                <IconButton href={'https://github.com/nicolasjusten95'}>
                    <GitHub fontSize='large' color='secondary'/>
                </IconButton>
            </Stack>
        </Box>
    );
};

export default Footer;