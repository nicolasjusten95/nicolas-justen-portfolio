import {Box, Chip, Stack, Typography} from "@mui/material";
import MyLink from "../util/MyLink";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MySectionHeading from "../util/MySectionHeading";


const cite = `@conference{ecta23,
author={Simon Anderer. and Nicolas Justen. and Bernd Scheuermann. and Sanaz Mostaghim.},
title={Interactive Role Mining Including Expert Knowledge into Evolutionary Algorithms},
booktitle={Proceedings of the 15th International Joint Conference on Computational Intelligence - ECTA},
year={2023},
pages={151-162},
publisher={SciTePress},
organization={INSTICC},
doi={10.5220/0012153000003595},
isbn={978-989-758-674-3},
issn={2184-3236},
}`;

const Publications = () => {

    const link = <MyLink href='https://doi.org/10.5220/0012153000003595' text='DOI' color='primary'/>;
    const onClickCite = () => {
        navigator.clipboard.writeText(cite)
    };

    return (
        <Box
            id='Publications'
            mt='100px'
            display='flex'
            sx={{
                width: {xs: '100vw', md: '80%'},
                scrollMargin: '130px',
                flexDirection: {xs: 'column', md: 'row'},
                justifyContent: {xs: 'center', md: 'space-between'},
                alignItems: {xs: 'center', md: 'start'}
            }}>
            <MySectionHeading title='Publications'/>
            <Box
                display='flex'
                flexDirection='column'
                justifyContent='start'
                sx={{width: {xs: '85%', md: '70%'}}}>
                <Box mt='30px'>
                    <Typography color='text.primary' variant='h6'>
                        Anderer, Simon; Justen, Nicolas; Scheuermann, Bernd and Mostaghim, Sanaz (2023).&nbsp;
                        <MyLink
                            href={'https://www.scitepress.org/PublicationsDetail.aspx?ID=VO0asNCzymE=&t=1'}
                            text={'Interactive Role Mining Including Expert Knowledge into Evolutionary Algorithms'}/>
                        . In Proceedings of the 15th International Joint Conference on Computational Intelligence -
                        ECTA.
                    </Typography>
                    <Stack mt='10px' spacing='10px' direction='row'>
                        <Chip icon={<FileCopyIcon/>} label={'Cite'} color='secondary' clickable onClick={onClickCite}/>
                        <Chip label={link} color='secondary' clickable/>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Publications;