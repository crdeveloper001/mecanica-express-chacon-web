/* eslint-disable */

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import useResponsiveNavBar from './hooks/useResponsiveNavbar';
import Avatar from '@mui/material/Avatar';
import LogoPage from '../../assets/images/icons/PageLogo.png';
import { Helmet } from 'react-helmet-async';
import { Button, Drawer, List, ListItem } from '@mui/material';

const pages = [
    { name: 'Inicio', title: 'Inicio - Mecánica Express Chacón', description: 'Bienvenido a Mecánica Express Chacón, su solución para servicios automotrices.' },
    { name: 'Acerca', title: 'Acerca - Mecánica Express Chacón', description: 'Conoce más sobre Mecánica Express Chacón y nuestro compromiso con la calidad.' },
    { name: 'Servicios Rapidos', title: 'Servicios - Mecánica Express Chacón', description: 'Descubre todos los servicios que ofrecemos para tu vehículo.' },
    { name: 'Servicios Automotrices', title: 'Servicios Especializados - Mecánica Express Chacón', description: 'Explora nuestros servicios especializados para el cuidado de tu vehículo.' },
    { name: 'Clientes', title: 'Clientes - Mecánica Express Chacón', description: 'Conoce las historias de nuestros clientes satisfechos.' },
    { name: 'Contáctanos', title: 'Contáctanos - Mecánica Express Chacón', description: 'Estamos aquí para ayudarte. Contáctanos para más información.' },
];

const NavigationHandler = ({ refs }) => {
    const { currentTitle, drawerOpen, toggleDrawer } = useResponsiveNavBar();

    // Find the current page based on title
    const currentPage = pages.find(page => page.title === currentTitle);

    // Function to handle link click
    const handleLinkClick = (name: string) => {
        const ref = refs[name];  // Use name directly to find the corresponding ref
        if (ref) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Helmet>
                <title>{currentPage ? currentPage.title : 'Mecánica Express Chacón'}</title>
                <meta name="description" content={currentPage ? currentPage.description : 'Mecánica Express Chacón - Servicios automotrices.'} />
                <meta name="keywords" content="Mecánica Express Chacón, servicios automotrices, mecánica rápida, asistencia en carretera" />
                <meta name="robots" content="index,follow" />
            </Helmet>
            <AppBar position="sticky" color='default'>
                <Toolbar disableGutters>
                    <Avatar src={LogoPage} alt="Logo" sx={{ width: 'auto', height: 100, ml: 0 }} />
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
                    />

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => handleLinkClick(page.name)}  // Use page.name directly
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

                    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                        <Box
                            sx={{ width: 250 }}
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <List>
                                {pages.map((page) => (
                                    <ListItem key={page.name} onClick={() => handleLinkClick(page.name)}>
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
