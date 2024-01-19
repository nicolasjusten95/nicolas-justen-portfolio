import {
    AppBar,
    Box,
    Button,
    IconButton,
    ListItemText,
    Menu,
    MenuItem,
    MenuList,
    Stack,
    Toolbar,
    Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, {MouseEvent, useState} from "react";
import {Page} from "../../api/NavBarApi";
import {pages, title} from "../../data/HeaderData";


interface HeaderProps {
}

const Header = (props: HeaderProps) => {

    const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);

    const onOpenMenu = (event: MouseEvent<HTMLElement>): void => {
        setAnchorNav(event.currentTarget);
    };

    const onCloseMenu = (): void => {
        setAnchorNav(null);
    };

    const getButtonFromPage = (page: Page): React.ReactElement => {
        return <Button
            key={page.key}
            onClick={page.onClick}
            color='inherit'>
            <Typography>{page.name}</Typography>
        </Button>;
    };

    const getMenuItemFromPage = (page: Page): React.ReactElement => {
        return <MenuItem
            key={page.key}
            onClick={page.onClick}>
            <ListItemText>
                <Typography>{page.name}</Typography>
            </ListItemText>
        </MenuItem>
    };

    return (
        <AppBar
            position='static'
            sx={{mb: 2}}>
            <Toolbar>
                <Typography
                    variant='h6'
                    component='div'
                    sx={{flexGrow: 1}}>
                    {title}
                </Typography>
                {/*Desktop*/}
                <Stack
                    sx={{display: {xs: 'none', md: 'flex'}}}
                    direction='row'
                    spacing={2}>
                    {pages.map((page) => getButtonFromPage(page))}
                </Stack>
                {/*Mobile*/}
                <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        onClick={onOpenMenu}>
                        <MenuIcon/>
                    </IconButton>
                    <Menu
                        open={Boolean(anchorNav)}
                        onClose={onCloseMenu}
                        anchorEl={anchorNav}
                        sx={{display: {xs: 'flex', md: 'none'}}}>
                        <MenuList>
                            {pages.map((page) => getMenuItemFromPage(page))}
                        </MenuList>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;