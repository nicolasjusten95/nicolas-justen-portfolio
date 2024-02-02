import {Box, Chip, Stack, Typography} from "@mui/material";
import MyLink from "../util/MyLink";
import FileCopyIcon from '@mui/icons-material/FileCopy';


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
    const onClickCite = () => {navigator.clipboard.writeText(cite)};

    return (
        <Box
            id='Publications'
            mt='150px'
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
            width='80%'
            sx={{scrollMargin: '130px'}}>
            <Box width='15%'>
                <Typography color='text.primary' variant='h4'>
                    Publications
                </Typography>
            </Box>
            <Box
                width='70%'
                display='flex'
                flexDirection='column'
                justifyContent='start'>
                <Box>
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