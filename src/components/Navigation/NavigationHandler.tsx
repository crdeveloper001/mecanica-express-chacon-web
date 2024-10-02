import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import useResponsiveNavBar from './hooks/useResponsiveNavbar';
import Avatar from '@mui/material/Avatar';
import LogoPage from '../../assets/images/PageLogo.png';
import { Helmet } from 'react-helmet-async';
import { Button, Drawer, List, ListItem } from '@mui/material';

const pages = [
    { name: 'Inicio', href: '#inicio', title: 'Inicio - Mecánica Express Chacón' },
    { name: 'Acerca', href: '#acerca', title: 'Acerca - Mecánica Express Chacón' },
    { name: 'Servicios', href: '#servicios', title: 'Servicios - Mecánica Express Chacón' },
    { name: 'Servicios Automotrices', href: '#servicios-especializados', title: 'Servicios Especializados - Mecánica Express Chacón' },
    { name: 'Clientes', href: '#clientes', title: 'Clientes - Mecánica Express Chacón' },
    { name: 'Contáctanos', href: '#contactanos', title: 'Contáctanos - Mecánica Express Chacón' },
];

const NavigationHandler: React.FC = () => {
    const { currentTitle, drawerOpen, toggleDrawer, handleLinkClick } = useResponsiveNavBar();

    return (
        <>
            <Helmet>
                <title>{currentTitle}</title>
            </Helmet>
            <AppBar position="relative" color='default'>

                <Toolbar disableGutters>
                    {/* Logo on the left */}
                    <Avatar src={LogoPage} alt="Logo" sx={{ width: 200, height: 100, ml: 0 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            ml: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >

                    </Typography>

                    {/* Spacer to push buttons to the right */}
                    <Box sx={{ flexGrow: 1 }} />

                    {/* Buttons for larger screens */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => handleLinkClick(page.title)}
                                sx={{
                                    my: 2,
                                    mx: 1.5,
                                    color: 'black',
                                    display: 'block',
                                    fontWeight: 500,
                                }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>

                    {/* Drawer Menu Icon for smaller screens */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Drawer */}
                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <List>
                                {pages.map((page) => (
                                    <ListItem key={page.name} onClick={() => handleLinkClick(page.title)}>
                                        <Button sx={{ textAlign: 'left', width: '100%' }}>
                                            {page.name}
                                        </Button>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </Toolbar>

            </AppBar>
        </>
    );
};

export default NavigationHandler;
