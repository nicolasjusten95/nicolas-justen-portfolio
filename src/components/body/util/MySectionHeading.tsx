import {Box, Typography} from "@mui/material";

export interface MySectionHeadingProps {
    title: string;
}

const MySectionHeading = (props: MySectionHeadingProps) => {
    return (
        <Box sx={{width: {xs: '70%', md: '15%'}}}>
            <Typography color='text.primary' variant='h4' sx={{align: {xs: 'center', md: 'left'}}}>
                {props.title}
            </Typography>
        </Box>
    );
};

export default MySectionHeading;