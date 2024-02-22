import {Box, Chip, Stack, Typography} from "@mui/material";
import {frameworksToolsTechnologies, ISkillData, languages, programmingLanguages} from "./SkillsData";
import MySectionHeading from "../util/MySectionHeading";

const Skills = () => {

    const getHeading = (title: string) => {
        return <Typography
            color='text.primary'
            variant='h6'>
            {title}
        </Typography>
    };

    const getChips = (data: ISkillData[]) => {
        return <Stack
            direction='row'
            my='15px'
            flexWrap='wrap'>
            {data.map(skill =>
                <Chip
                    label={skill.name}
                    color='secondary'
                    sx={{m: '5px'}}
                />)}
        </Stack>
    };

    return (
        <Box
            id='Skills'
            mt='100px'
            display='flex'
            maxWidth='100%'
            sx={{
                width: {xs: '100vw', md: '80%'},
                scrollMargin: '130px',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: {xs: 'center', md: 'space-between'},
                alignItems: {xs: 'center', md: 'start'}
            }}>
            <MySectionHeading title='Skills'/>
            <Box
                width='85%'
                sx={{
                    width: {xs: '85%', md: '85%'},
                    mt: {xs: '40px', md: '30px'}
                }}>
                {getHeading('Programming Languages')}
                {getChips(programmingLanguages)}
                {getHeading('Frameworks, Tools and Technologies')}
                {getChips(frameworksToolsTechnologies)}
                {getHeading('Languages')}
                {getChips(languages)}
            </Box>
        </Box>
    );
};

export default Skills;