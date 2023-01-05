import React, { useState } from 'react';
import propTypes from 'prop-types';
import {
    AppBar,
    Box,
    Button,
    Container,
    css,
    CssBaseline,
    IconButton,
    Menu,
    Menu as MenuIcon,
    MenuItem,
    ThemeProvider,
    Toolbar,
    Typography
} from '@mui/material';
import styled from '@emotion/styled';

import logo from '../assets/images/logo.svg';
import theme from '../theme';

const pages = [
    {
        text: 'Accueil',
        link: '/'
    },
    {
        text: 'A propos',
        link: '/about'
    },
    {
        text: 'Portfolio',
        link: '/portfolio'
    },
    {
        text: 'Services',
        link: '/services'
    },
    {
        text: 'Contact',
        link: '/contact'
    }
];

const Layout = ({ children }) => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppBar position="static" color="text">
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={{ py: 1 }}>
                        <Img src={logo} alt="Lucas Hubert SASU" />

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }
                                }}
                            >
                                {pages.map(({ text, link }) => (
                                    <MenuItem key={link} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{text}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map(({ text, link }) => (
                                <Button
                                    key={link}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    {text}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>{children}</main>
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: propTypes.node.isRequired
};

const Img = styled('img')(
    () => css`
        height: 100%;
        max-height: 50px;
        margin-right: ${theme.spacing(2)};
    `
);

export default Layout;
