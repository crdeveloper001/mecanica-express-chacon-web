import './index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Button, Typography, styled, Avatar, Stack, Card } from '@mui/material';
import iconWhatsapp from '../../assets/images/icons/whatsapp.png';
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import React from 'react';

// Estilo mejorado para los cards
const Item = styled(Card)(({ theme }) => ({
    backgroundColor: "#fff",
    borderRadius: '15px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease-in-out',
    ...theme.typography.body1,
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    },

    [theme.breakpoints.up("xs")]: {
        maxWidth: "90%",
        margin: "0 auto",
    },
    [theme.breakpoints.up("sm")]: {
        maxWidth: "75%",
    },
    [theme.breakpoints.up("md")]: {
        maxWidth: "60%",
    },
    [theme.breakpoints.up("lg")]: {
        maxWidth: "50%",
    },

    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

// Mejora estética de tipografía y colores
const StyledTypography = styled(Typography)(({ theme }) => ({
    fontWeight: '600',
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
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
                    <title>Porque Nosotros | Mecánica Express Chacón</title>
                    <meta name="description" content="En Mecánica Express Chacón, ofrecemos compromiso, confianza, respuesta inmediata y un servicio integral para todas las necesidades de tu vehículo. Estamos listos para ayudarte con mecánica rápida y asistencia en carretera." />
                    <meta name="keywords" content="Mecánica, Asistencia en carretera, Compromiso, Confianza, Servicio Automotriz, Reparación de vehículos, Talleres automotrices, Servicio 24/7, Neumáticos, Mantenimiento vehicular" />
                    <meta name="robots" content="index,follow" />
                    <meta name="author" content="Mecánica Express Chacón" />
                    <meta name="language" content="es" />
                    <meta property="og:title" content="Porque Nosotros | Mecánica Express Chacón" />
                    <meta property="og:description" content="Conoce el compromiso y profesionalismo de Mecánica Express Chacón, tu aliado en servicios de mecánica rápida, asistencia en carretera y más. ¡Te ayudamos 24/7!" />
                    <meta property="og:image" content="https://www.mecanicaexpresschacon.com/images/compromiso-servicios.jpg" />
                    <meta property="og:url" content="https://www.mecanicaexpresschacon.com/porque-nosotros" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Porque Nosotros | Mecánica Express Chacón" />
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

                <div ref={ref} {...props}>
                    <Typography variant="h3" align="center" mt={5} mb={5} color="black" fontWeight='bold' fontStyle="italic">
                        Porque Nosotros
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={{ xs: 2, sm: 5, md: 10 }}
                        justifyContent="center"
                        mt={4}
                    >
                        {sections.map((section, index) => (
                            <Item key={index} data-aos="zoom-in" data-aos-delay="500">
                                {section.icon}
                                <StyledTypography variant="h5">
                                    {section.title}
                                </StyledTypography>
                                <Typography variant="body1" sx={{ marginBottom: 2,textAlign:'justify' }} color="text.secondary">
                                    {section.description}
                                </Typography>
                                {section.button && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{
                                            borderRadius: '50px',
                                            padding: '10px 20px',
                                            fontWeight: 'bold',
                                            transition: 'background-color 0.3s ease',
                                            '&:hover': {
                                                backgroundColor: '#d32f2f',
                                            },
                                        }}
                                        href={section.button.href}
                                        aria-label={`Agendar cita por WhatsApp`}
                                    >
                                        {section.button.label}
                                        <Avatar src={iconWhatsapp} sx={{ marginLeft: 1, width: 30, height: 30 }} />
                                    </Button>
                                )}
                            </Item>
                        ))}
                    </Stack>
                </div>
            </HelmetProvider>
        );
    });

export default AboutPage;
