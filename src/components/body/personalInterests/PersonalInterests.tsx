import {Box, Typography} from "@mui/material";
import {personalInterestsData} from "./PersonalInterestsData";
import PaperItem from "../util/PaperItem";

const PersonalInterests = () => {
    return (
        <Box
            id='PersonalInterests'
            mt='150px'
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            width='80%'
            sx={{scrollMargin: '130px'}}>
            <Box width='25%'>
                <Typography color='text.primary' variant='h4'>Personal Interests</Typography>
            </Box>
            <Box
                width='70%'
                display='flex'
                flexDirection='row'
                justifyContent='space-between'
                flexWrap='wrap'>
                {personalInterestsData.map(interest => <PaperItem {...interest}/>)}
            </Box>
        </Box>
    );
};

export default PersonalInterests;