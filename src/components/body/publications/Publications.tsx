import {Box, Chip, Stack, Typography} from "@mui/material";
import MyLink from "../util/MyLink";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MySectionHeading from "../util/MySectionHeading";


const citeEcta = `@conference{ecta23,
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

const citeGecco = `Anderer, Simon & Justen, N. & Scheuermann, Bernd & Mostaghim, Sanaz. (2024). Survival Strategies for Evolutionary Role Mining Algorithms Using Expert Knowledge. `;

const Publications = () => {

    const link = <MyLink href='https://doi.org/10.5220/0012153000003595' text='DOI' color='primary'/>;

    const onClickCiteEcta = () => {
        navigator.clipboard.writeText(citeEcta)
    };

    const onClickCiteGecco = () => {
        navigator.clipboard.writeText(citeGecco)
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
                sx={{width: {xs: '85%', md: '80%'}}}>
                <Box mt='30px'>
                    <Typography color='text.primary' sx={{typography: {xs: 'body1', md: 'h6'}}} textAlign='justify'>
                        🗎 Anderer, Simon; Justen, Nicolas; Scheuermann, Bernd and Mostaghim, Sanaz (2024).&nbsp;
                        <MyLink
                            href={'https://www.researchgate.net/publication/381649508_Survival_Strategies_for_Evolutionary_Role_Mining_Algorithms_Using_Expert_Knowledge'}
                            text={'Survival Strategies for Evolutionary Role Mining Algorithms Using Expert Knowledge'}/>
                        . In <i>The Genetic and Evolutionary Computation Conference (GECCO)</i>.
                    </Typography>
                    <Stack mt='10px' spacing='10px' direction='row' mb='50px'>
                        <Chip icon={<FileCopyIcon/>} label={'Cite'} color='secondary' clickable onClick={onClickCiteGecco}/>
                        {/*<Chip label={link} color='secondary' clickable/>*/}
                    </Stack>
                    <Typography color='text.primary' sx={{typography: {xs: 'body1', md: 'h6'}}} textAlign='justify'>
                        🗎 Anderer, Simon; Justen, Nicolas; Scheuermann, Bernd and Mostaghim, Sanaz (2023).&nbsp;
                        <MyLink
                            href={'https://www.scitepress.org/PublicationsDetail.aspx?ID=VO0asNCzymE=&t=1'}
                            text={'Interactive Role Mining Including Expert Knowledge into Evolutionary Algorithms'}/>
                        . In <i>Proceedings of the 15th International Joint Conference on Computational Intelligence - ECTA</i>.
                    </Typography>
                    <Stack mt='10px' spacing='10px' direction='row'>
                        <Chip icon={<FileCopyIcon/>} label={'Cite'} color='secondary' clickable onClick={onClickCiteEcta}/>
                        <Chip label={link} color='secondary' clickable/>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Publications;