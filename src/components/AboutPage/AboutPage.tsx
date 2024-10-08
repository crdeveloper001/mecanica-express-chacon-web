import './index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Button, Typography, styled, Avatar, Stack, Card } from '@mui/material';
import TickIcon from '../../assets/images/icons/tick.png';
import iconWhatsapp from '../../assets/images/icons/whatsapp.png';
import React from 'react';

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body1,
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),
    margin: theme.spacing(1),

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

interface Section {
    title: string;
    description: string;
    button?: {
        label: string;
        href: string;
    };
}

const sections: Section[] = [
    {
        title: "COMPROMISO Y CONFIANZA",
        description: "En Mecánica Express Chacón, nuestro compromiso es ofrecerte un servicio rápido y confiable, para que puedas volver a la carretera sin preocupaciones. Brindamos soluciones efectivas y personalizadas para cada situación.",
    },
    {
        title: "RESPUESTA INMEDIATA",
        description: "Estamos disponibles 24/7 para asistirte en carretera. Ya sea una avería o un cambio de neumáticos, nuestro equipo está listo para ayudarte de inmediato y llevar tranquilidad a tu camino.",
        button: {
            label: "AGENDAR CITA YA",
            href: "https://wa.link/ure23v",
        },
    },
    {
        title: "SERVICIO INTEGRAL Y PROFESIONALISMO",
        description: "Nuestro equipo de expertos se encarga de todas las necesidades de tu vehículo, ofreciendo un enfoque integral, transparencia y honestidad en cada servicio. Tu seguridad y satisfacción son nuestras prioridades.",
    },
];

const AboutPage = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (_props, ref) => {
        return (
            <HelmetProvider>
                <Helmet>
                    <title>Porque Nosotros | Mecánica Express Chacón</title>
                    <meta name="description" content="En Mecánica Express Chacón, ofrecemos compromiso, confianza, respuesta inmediata y un servicio integral para todas las necesidades de tu vehículo." />
                    <meta name="keywords" content="Mecánica, Asistencia en carretera, Compromiso, Confianza, Servicio Automotriz" />
                </Helmet>

                <div ref={ref}>
                    <Typography variant="h4" align="center" mt={5} color="red" fontStyle='italic' fontWeight='bold'>
                        Porque nosotros
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', md: 'row' }}
                        spacing={{ xs: 1, sm: 10, md: 20 }}
                        justifyContent="center"
                    >
                        {sections.map((section, index) => (
                            <Item key={index} data-aos="zoom-in" data-aos-delay="500">
                                <img
                                    alt={`Icono de ${section.title}`}
                                    src={TickIcon}
                                    style={{ width: 150, height: 'auto', marginBottom: '30px' }}
                                />
                                <Typography variant="h4" color="initial">
                                    {section.title}
                                </Typography>
                                <Typography variant="body1" className="Descriptions">
                                    {section.description}
                                </Typography>
                                {section.button && (
                                    <Button
                                        variant="contained"
                                        color="error"
                                        sx={{
                                            borderRadius: '25px',
                                        }}
                                        href={section.button.href}
                                        aria-label={`Agendar cita por WhatsApp`}
                                    >
                                        {section.button.label}
                                        <Avatar src={iconWhatsapp} sx={{ marginLeft: 2 }} />
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
