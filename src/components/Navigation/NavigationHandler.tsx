import React, { useEffect } from 'react';
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
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const pages = [
    { name: 'Inicio', title: 'Inicio - Mecánica Express Chacón', description: 'Bienvenido a Mecánica Express Chacón, su solución para servicios automotrices.' },
    { name: 'Acerca', title: 'Acerca - Mecánica Express Chacón', description: 'Conoce más sobre Mecánica Express Chacón y nuestro compromiso con la calidad.' },
    { name: 'Servicios Rapidos', title: 'Servicios - Mecánica Express Chacón', description: 'Descubre todos los servicios que ofrecemos para tu vehículo.' },
    { name: 'Servicios Automotrices', title: 'Servicios Especializados - Mecánica Express Chacón', description: 'Explora nuestros servicios especializados para el cuidado de tu vehículo.' },
    { name: 'Clientes', title: 'Clientes - Mecánica Express Chacón', description: 'Conoce las historias de nuestros clientes satisfechos.' },
    { name: 'Contáctanos', title: 'Contáctanos - Mecánica Express Chacón', description: 'Estamos aquí para ayudarte. Contáctanos para más información.' },
    { name: 'Trabajos', title: 'Trabajos - Mecánica Express Chacón', description: 'Conoce algunos de los trabajos de nuestros clientes satisfechos.' }
];

const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100086288028221', icon: <FacebookIcon /> },
    { name: 'Instagram', url: 'https://www.instagram.com/servicio_automotriz_chacon/', icon: <InstagramIcon /> },
];

const NavigationHandler = ({ refs }: { refs: Record<string, React.RefObject<HTMLElement>> }) => {
    const { currentTitle, drawerOpen, toggleDrawer, handleLinkClick } = useResponsiveNavBar();

    useEffect(() => {
        console.log("Current title:", currentTitle);
    }, [currentTitle]);

    const currentPage = pages.find(page => page.title === currentTitle) || {
        title: 'Mecánica Express Chacón',
        description: 'Mecánica Express Chacón - Servicios automotrices.',
    };

    return (
        <>
            {/* SEO Metadata */}
            <Helmet>
                <title>{currentPage.title}</title>
                <meta name="description" content={currentPage.description} />
                <meta name="keywords" content="Mecánica Express Chacón, servicios automotrices, mecánica rápida, asistencia en carretera" />
                <meta name="robots" content="index,follow" />
                
                {/* Open Graph */}
                <meta property="og:title" content={currentPage.title} />
                <meta property="og:description" content={currentPage.description} />
                <meta property="og:image" content="https://www.mecanicaexpresschacon.com/assets/images/icons/PageLogo.png" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={currentPage.title} />
                <meta name="twitter:description" content={currentPage.description} />
            </Helmet>

            <AppBar position="sticky" color="default">
                <Toolbar disableGutters>
                    {/* Logo */}
                    <Avatar src={LogoPage} alt="Logo Mecánica Express" sx={{ width: 'auto', height: 100, ml: 0 }} />

                    <Box sx={{ flexGrow: 1 }} />

                    {/* Menú en pantallas grandes */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={() => {
                                    handleLinkClick(page.title);
                                    refs[page.name]?.current?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                sx={{ my: 2, mx: 1.5, color: 'black', fontWeight: 500 }}
                            >
                                {page.name}
                            </Button>
                        ))}
                        {socialLinks.map((social) => (
                            <IconButton
                                key={social.name}
                                component="a"
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ color: 'black', mx: 0.5 }}
                                aria-label={`Visitar nuestro ${social.name}`}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>

                    {/* Menú en dispositivos móviles */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="Abrir menú de navegación"
                            onClick={toggleDrawer(true)}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>

                    {/* Drawer para móviles */}
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
                                <ListItem>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                                        {socialLinks.map((social) => (
                                            <IconButton
                                                key={social.name}
                                                component="a"
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ color: 'black', mx: 0.5 }}
                                                aria-label={`Visitar nuestro ${social.name}`}
                                            >
                                                {social.icon}
                                            </IconButton>
                                        ))}
                                    </Box>
                                </ListItem>
                            </List>
                        </Box>
                    </Drawer>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavigationHandler;
