import './index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Button, Typography, styled, Avatar, Stack, Card, Box, Chip, Container } from '@mui/material';
import iconWhatsapp from '../../assets/images/icons/whatsapp.png';
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import React from 'react';

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    borderRadius: '20px',
    border: `1px solid ${theme.palette.divider}`,
    boxShadow: '0 12px 32px rgba(15, 23, 42, 0.06)',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    ...theme.typography.body1,
    textAlign: 'left',
    color: theme.palette.text.secondary,
    padding: theme.spacing(4),
    flex: '0 0 auto',
    [theme.breakpoints.up('md')]: {
        flex: '1 1 0',
    },
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: '0 18px 40px rgba(15, 23, 42, 0.12)',
    },
    ...theme.applyStyles("dark", {
        backgroundColor: '#1A2027',
    }),
}));

interface Section {
    icon: JSX.Element;
    title: string;
    description: string;
    button?: {
        label: string;
        href: string;
    };
}

const sections: Section[] = [
    {
        icon: <MdWork size={70}/>,
        title: "COMPROMISO Y CONFIANZA",
        description: "En Mecánica Express Chacón, nuestro compromiso es ofrecerte un servicio rápido y confiable, para que puedas volver a la carretera sin preocupaciones. Brindamos soluciones efectivas y personalizadas para cada situación.",
    },
    {
        icon: <RiCustomerService2Fill size={70}/>,
        title: "RESPUESTA INMEDIATA",
        description: "Estamos disponibles 24/7 para asistirte en carretera. Ya sea una avería o un cambio de neumáticos, nuestro equipo está listo para ayudarte de inmediato y llevar tranquilidad a tu camino.",
        button: {
            label: "AGENDAR CITA YA",
            href: "https://wa.me/50663422141",
        },
    },
    {
        icon: <FaTools size={70}/>,
        title: "SERVICIO INTEGRAL Y PROFESIONALISMO",
        description: "Nuestro equipo de expertos se encarga de todas las necesidades de tu vehículo, ofreciendo un enfoque integral, transparencia y honestidad en cada servicio. Tu seguridad y satisfacción son nuestras prioridades.",
    },
];

const AboutPage = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (props, ref) => {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>¿Por qué elegirnos? | Mecánica Express Chacón</title>
                    <meta name="description" content="En Mecánica Express Chacón, ofrecemos compromiso, confianza, respuesta inmediata y un servicio integral para todas las necesidades de tu vehículo. Estamos listos para ayudarte con mecánica rápida y asistencia en carretera." />
                    <meta name="keywords" content="Mecánica, Asistencia en carretera, Compromiso, Confianza, Servicio Automotriz, Reparación de vehículos, Talleres automotrices, Servicio 24/7, Neumáticos, Mantenimiento vehicular" />
                    <meta name="robots" content="index,follow" />
                    <meta name="author" content="Mecánica Express Chacón" />
                    <meta name="language" content="es" />
                    <meta property="og:title" content="¿Por qué elegirnos? | Mecánica Express Chacón" />
                    <meta property="og:description" content="Conoce el compromiso y profesionalismo de Mecánica Express Chacón, tu aliado en servicios de mecánica rápida, asistencia en carretera y más. ¡Te ayudamos 24/7!" />
                    <meta property="og:image" content="https://www.mecanicaexpresschacon.com/images/compromiso-servicios.jpg" />
                    <meta property="og:url" content="https://www.mecanicaexpresschacon.com/porque-nosotros" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="¿Por qué elegirnos? | Mecánica Express Chacón" />
                    <meta name="twitter:description" content="Conoce el compromiso y profesionalismo de Mecánica Express Chacón, tu aliado en servicios de mecánica rápida, asistencia en carretera y más." />
                    <meta name="twitter:image" content="https://www.mecanicaexpresschacon.com/images/compromiso-servicios.jpg" />
                    
                    {/* Estructura de datos (Schema.org) */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "name": "Mecánica Express Chacón",
                            "url": "https://www.mecanicaexpresschacon.com",
                            "logo": "https://www.mecanicaexpresschacon.com/images/logo.jpg",
                            "sameAs": [
                                "https://www.facebook.com/mecanicaexpresschacon",
                                "https://www.instagram.com/mecanicaexpresschacon"
                            ],
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+50612345678",
                                "contactType": "customer service",
                                "areaServed": "CR",
                                "availableLanguage": "Spanish"
                            }
                        })}
                    </script>
                </Helmet>

                <Box ref={ref} {...props} sx={{ py: { xs: 7, md: 11 }, backgroundColor: 'background.default' }}>
                    <Container maxWidth="lg">
                        <Box sx={{ maxWidth: 760, mx: 'auto', mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
                            <Chip
                                label="MECÁNICA EXPRESS CHACÓN"
                                color="primary"
                                variant="outlined"
                                sx={{ mb: 2, fontWeight: 700, letterSpacing: '0.08em' }}
                            />
                            <Typography variant="h2" component="h1" sx={{ fontWeight: 800, letterSpacing: '-0.04em', fontSize: { xs: '2.25rem', md: '3.5rem' }, mb: 2 }}>
                                ¿Por qué elegirnos?
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.7 }}>
                                Tu tranquilidad en carretera comienza con un servicio confiable, atención oportuna y profesionales que cuidan de tu vehículo.
                            </Typography>
                        </Box>

                        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 3 }} alignItems="stretch">
                            {sections.map((section, index) => (
                                <Item key={section.title} data-aos="fade-up" data-aos-delay={index * 100}>
                                    <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                                        <Box sx={{
                                            width: 64,
                                            height: 64,
                                            flexShrink: 0,
                                            display: 'grid',
                                            placeItems: 'center',
                                            borderRadius: '18px',
                                            color: 'primary.main',
                                            backgroundColor: 'action.hover',
                                            '& svg': { width: 34, height: 34 },
                                        }}>
                                            {section.icon}
                                        </Box>
                                        <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 700, letterSpacing: '0.12em' }}>
                                            {String(index + 1).padStart(2, '0')} / VENTAJAS
                                        </Typography>
                                    </Stack>
                                    <Typography
                                        variant="h5"
                                        component="h2"
                                        sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.25, mb: 1.5 }}
                                    >
                                        {section.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75, mb: section.button ? 3 : 0 }}>
                                        {section.description}
                                    </Typography>
                                    {section.button && (
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            href={section.button.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Agendar cita por WhatsApp"
                                            sx={{ alignSelf: 'flex-start', borderRadius: '50px', px: 2.5, py: 1, fontWeight: 700, mt: 'auto' }}
                                        >
                                            {section.button.label}
                                            <Avatar src={iconWhatsapp} sx={{ ml: 1, width: 26, height: 26 }} />
                                        </Button>
                                    )}
                                </Item>
                            ))}
                        </Stack>
                    </Container>
                </Box>
            </HelmetProvider>
        );
    });

export default AboutPage;
