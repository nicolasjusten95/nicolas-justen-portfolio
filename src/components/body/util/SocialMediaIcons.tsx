import {GitHub, LinkedIn, Mail} from "@mui/icons-material";
import {IconButton, Stack} from "@mui/material";

const mailIcon = <IconButton
    href={'mailto:nicolas.justen95@gmail.com'}
    target="_blank"
    rel="noreferrer">
    <Mail fontSize='large' color='secondary'/>
</IconButton>;

const linkedInIcon = <IconButton
    href={'https://de.linkedin.com/in/nicolas-justen-232324178'}
    target="_blank"
    rel="noreferrer">
    <LinkedIn fontSize='large' color='secondary'/>
</IconButton>;

const githubIcon = <IconButton
    href={'https://github.com/nicolasjusten95'}
    target="_blank"
    rel="noreferrer">
    <GitHub fontSize='large' color='secondary'/>
</IconButton>;

export const socialMediaIcons = <Stack direction='row' p='8px'>
    {mailIcon}
    {linkedInIcon}
    {githubIcon}
</Stack>;