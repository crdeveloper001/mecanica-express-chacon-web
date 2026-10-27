import { Card, CardContent, Typography, Box, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Helmet } from "react-helmet-async";
import { Build, LocalGasStation, CarRepair, Speed, VerifiedUser, Assessment } from '@mui/icons-material'; // Icons de Material UI
import './index.css';
import React from "react";

const CardIconBox = styled(Box)(({ theme }) => ({
    width: 58,
    height: 58,
    display: 'grid',
    placeItems: 'center',
    flexShrink: 0,
    borderRadius: 16,
    fontSize: 30,
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.action.hover,
}));

const QuickServicesPage = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (_props, ref) => {

        return (
            <div ref={ref}>
                <Helmet>
                    <title>Mecánica Express Chacón - Servicios Rápidos</title>
                    <meta
                        name="description"
                        content="Conoce nuestros servicios rápidos, desde asistencia en carretera hasta reparaciones de llantas y revisión vehicular. Siempre listos para ayudarte cuando más lo necesitas."
                    />
                    <meta
                        name="keywords"
                        content="Servicios rápidos, mecánica rápida, asistencia en carretera, reparación de llantas, revisión vehicular, mecánica express, servicios mecánicos rápidos, emergencias vehiculares"
                    />
                    <meta name="robots" content="index,follow" />
                    <meta name="author" content="Mecánica Express Chacón" />
                    <meta name="language" content="es" />
                    <meta property="og:title" content="Servicios Rápidos | Mecánica Express Chacón" />
                    <meta property="og:description" content="Descubre nuestros servicios rápidos y emergencias vehiculares. Conoce nuestra asistencia en carretera, mecánica rápida y mucho más." />
                    <meta property="og:image" content="https://www.mecanicaexpresschacon.com/images/servicios-rapidos.jpg" />
                    <meta property="og:url" content="https://www.mecanicaexpresschacon.com/servicios-rapidos" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Servicios Rápidos | Mecánica Express Chacón" />
                    <meta name="twitter:description" content="Conoce nuestros servicios rápidos, desde asistencia en carretera hasta reparaciones de llantas y revisión vehicular." />
                    <meta name="twitter:image" content="https://www.mecanicaexpresschacon.com/images/servicios-rapidos.jpg" />

                    {/* Schema.org Structured Data */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Automotive Services",
                            "provider": {
                                "@type": "Organization",
                                "name": "Mecánica Express Chacón",
                                "url": "https://www.mecanicaexpresschacon.com",
                                "sameAs": [
                                    "https://www.facebook.com/profile.php?id=100086288028221",
                                    "https://www.instagram.com/servicio_automotriz_chacon/"
                                ]
                            },
                            "areaServed": {
                                "@type": "Place",
                                "name": "San José, Costa Rica"
                            },
                            "offers": [
                                {
                                    "@type": "Offer",
                                    "name": "Asistencia en carretera",
                                    "description": "Asistencia inmediata en caso de averías, ponchaduras o emergencias en la vía.",
                                    "url": "https://www.mecanicaexpresschacon.com/servicios-rapidos"
                                },
                                {
                                    "@type": "Offer",
                                    "name": "Mecánica Rápida",
                                    "description": "Servicios rápidos para mantener tu vehículo en condiciones óptimas.",
                                    "url": "https://www.mecanicaexpresschacon.com/servicios-rapidos"
                                },
                                {
                                    "@type": "Offer",
                                    "name": "Reparación de llantas",
                                    "description": "Reparación y cambio de llantas con rapidez y calidad.",
                                    "url": "https://www.mecanicaexpresschacon.com/servicios-rapidos"
                                },
                                {
                                    "@type": "Offer",
                                    "name": "Revisión vehicular",
                                    "description": "Revisión para pasar la inspección vehicular y cumplir con los requisitos técnicos.",
                                    "url": "https://www.mecanicaexpresschacon.com/servicios-rapidos"
                                },
                            ]
                        })}
                    </script>
                </Helmet>

                <Box
                    component="main"
                    sx={{
                        px: { xs: 2, sm: 3 },
                        py: { xs: 7, md: 11 },
                        background: 'linear-gradient(180deg, #f7f9fc 0%, #ffffff 48%, #f7f9fc 100%)',
                    }}
                >
                    <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                        <Box sx={{ maxWidth: 760, mx: 'auto', mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
                            <Typography
                                component="p"
                                sx={{ color: 'error.main', fontWeight: 700, letterSpacing: 2, fontSize: 13, mb: 1.5 }}
                            >
                                MECÁNICA EXPRESS CHACÓN
                            </Typography>
                            <Typography
                                component="h1"
                                sx={{
                                    color: 'text.primary',
                                    fontWeight: 800,
                                    fontSize: { xs: '2.1rem', sm: '2.8rem', md: '3.25rem' },
                                    lineHeight: 1.12,
                                    letterSpacing: '-0.04em',
                                    mb: 2,
                                }}
                            >
                                Soluciones confiables para seguir en camino
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', fontSize: { xs: 16, md: 18 }, lineHeight: 1.75 }}>
                                Desde una atención rápida hasta una evaluación completa, cuidamos tu vehículo con
                                experiencia, claridad y un servicio pensado para tu tranquilidad.
                            </Typography>
                        </Box>

                        <Grid container spacing={2.5} justifyContent="center">
                        {[
                            {
                                title: "Asistencia en carretera",
                                description:
                                    "Siempre a tu lado cuando más lo necesitas. Te brindamos ayuda inmediata en caso de averías, ponchaduras o emergencias en la vía.",
                                icon: <Build fontSize="inherit" />,
                            },
                            {
                                title: "Mecánica Rápida",
                                description:
                                    "Servicios rápidos para mantener tu vehículo en óptimas condiciones: cambio de aceite y filtro, revisión y reemplazo de frenos, reemplazo de batería, alineación y balanceo de ruedas, cambio de filtros de aire y habitáculo, y revisión del sistema de luces.",
                                icon: <Speed fontSize="inherit" />,
                            },
                            {
                                title: "Mecánica Automotriz",
                                description:
                                    "Servicios integrales de reparación y mantenimiento para que tu vehículo siempre esté en óptimas condiciones.",
                                icon: <CarRepair fontSize="inherit" />,
                            },
                            {
                                title: "Revisión y Preparación vehicular para Dekra",
                                description:
                                    "Asegúrate de pasar la revisión vehicular con éxito. Preparamos tu coche para cumplir con todos los requisitos técnicos.",
                                icon: <VerifiedUser fontSize="inherit" />,
                            },
                            {
                                title: "Reparación de llantas",
                                description:
                                    "Reparamos y cambiamos tus llantas con rapidez y calidad, para que sigas conduciendo con seguridad.",
                                icon: <LocalGasStation fontSize="inherit" />,
                            },
                            {
                                title: "Evaluación y revisión de compras de vehículos",
                                description:
                                    "Te ayudamos a tomar la mejor decisión antes de comprar un auto. Revisamos el estado mecánico y te damos un informe detallado para que compres con confianza.",
                                icon: <Assessment fontSize="inherit" />,
                            },
                        ].map((service, index) => (
                            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        minHeight: 250,
                                        border: '1px solid',
                                        borderColor: 'divider',
                                        borderRadius: 3,
                                        backgroundColor: 'background.paper',
                                        transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            borderColor: 'primary.light',
                                            boxShadow: '0 16px 38px rgba(20, 35, 60, 0.10)',
                                        },
                                    }}
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                >
                                    <CardContent sx={{ p: { xs: 2.5, md: 3 }, '&:last-child': { pb: { xs: 2.5, md: 3 } } }}>
                                        <CardIconBox sx={{ mb: 2.5 }}>
                                            {service.icon}
                                        </CardIconBox>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                            sx={{ color: 'text.primary', fontWeight: 700, fontSize: 20, lineHeight: 1.35 }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography sx={{ color: 'text.secondary', fontSize: 15, lineHeight: 1.75 }}>
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                        </Grid>
                    </Box>
                </Box>
            </div>
        );
    }
);

export default QuickServicesPage;
