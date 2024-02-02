import {Box, Chip, Stack, Typography} from "@mui/material";

const Skills = () => {

    const chipSpacing = '15px';
    const chipColor = 'secondary';

    return (
        <Box
            id='Skills'
            mt='150px'
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            width='80%'
            sx={{scrollMargin: '130px'}}>
            <Box width='85%'>
                <Typography color='text.primary' variant='h6'>Programming Languages</Typography>
                <Stack spacing={chipSpacing} direction='row' m={chipSpacing}>
                    <Chip label='Java' color={chipColor}></Chip>
                    <Chip label='Typescript' color={chipColor}></Chip>
                </Stack>
                <Typography color='text.primary' variant='h6'>Frameworks, Tools and Technologies</Typography>
                <Stack spacing={chipSpacing} direction='row' m={chipSpacing}>
                    <Chip label='Spring Boot' color={chipColor}></Chip>
                    <Chip label='React' color={chipColor}></Chip>
                    <Chip label='SQL' color={chipColor}></Chip>
                    <Chip label='Git' color={chipColor}></Chip>
                    <Chip label='HTML' color={chipColor}></Chip>
                    <Chip label='CSS' color={chipColor}></Chip>
                    <Chip label='Docker' color={chipColor}></Chip>
                    <Chip label='Kubernetes' color={chipColor}></Chip>
                </Stack>
                <Typography color='text.primary' variant='h6'>Languages</Typography>
                <Stack spacing={chipSpacing} direction='row' m={chipSpacing}>
                    <Chip label='German' color={chipColor}></Chip>
                    <Chip label='English' color={chipColor}></Chip>
                </Stack>
            </Box>
            <Box width='15%'>
                <Typography color='text.primary' variant='h4'>Skills</Typography>
            </Box>
        </Box>
    );
};

export default Skills;