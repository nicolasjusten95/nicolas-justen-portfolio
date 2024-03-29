import MyLink, {MyLinkProps} from "./MyLink";
import {Box, Button, Chip, Paper, Typography} from "@mui/material";

export interface PaperItemProps {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    links: MyLinkProps[];
}

const PaperItem = (props: PaperItemProps) => {
    return (
        <Paper
            elevation={1}
            sx={{
                p: '20px',
                width: {xs: '80%', sm: '45%', md: '40%', lg: '45%'},
                my: {xs: '20px', md: '20px'}
        }}>
                <Box
                    width='100%'
                    sx={{height: {xs: '100px', sm: '150px', md: '200px'}}}>
                    <img src={props.image} alt={props.title} width='100%' height='100%'/>
                </Box>
                <Typography color='text.primary' variant='h6'>{props.title}</Typography>
                <Typography color='text.primary' variant='body1'>{props.description}</Typography>
                <Box my='10px'>
                    {props.technologies.map(tech => (
                        <Chip key={tech} label={tech} color='primary'/>
                    ))}
                </Box>
                {props.links.map(link => (
                    <Button key={link.text} color='secondary' variant='contained' sx={{mr: '10px', mt: '10px'}}>
                        <Typography>
                            <MyLink href={link.href} text={link.text} color='text.secondary'/>
                        </Typography>
                    </Button>
                ))}
        </Paper>
    );
};

export default PaperItem;