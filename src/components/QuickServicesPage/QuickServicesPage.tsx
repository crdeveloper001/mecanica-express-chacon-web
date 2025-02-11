import { Grid, Card, CardContent, Typography, Box, styled } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Build, LocalGasStation, CarRepair, Speed, VerifiedUser, Assessment } from '@mui/icons-material'; // Icons de Material UI
import './index.css';
import React from "react";

// Estilo de la tarjeta mejorado
const cardStyle = {
    height: 'auto',  // Altura automática para mejor ajuste con contenido
    width: '100%',   // Asegura que ocupe todo el espacio disponible
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', // Sombra más prominente
    borderRadius: '12px', // Bordes más redondeados
    border: '1px solid #e0e0e0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Transición suave para hover
    overflow: 'hidden', // Evitar que los elementos sobresalgan
};

const CardIconBox = styled(Box)(({ theme }) => ({
    fontSize: '50px',  // Tamaño de icono más grande
    marginTop: '20px',
    color: theme.palette.primary.main, // Usamos color primario de tema para el icono
    transition: 'color 0.3s ease',
    '&:hover': {
        color: theme.palette.secondary.main, // Cambio de color al hacer hover
    },
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

                <div className="DividerSection"></div>

                <Box sx={{ padding: 2 }}>
                    <Typography variant="h4" color="error" align="center" fontStyle={'italic'} fontWeight={'bold'} mt={5}>
                        SERVICIOS RÁPIDOS
                    </Typography>
                    <Grid container spacing={3} justifyContent="center">
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
                            <Grid item xs={10} sm={6} md={4} key={index}>
                                <Card
                                    sx={cardStyle}
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                                >
                                    <CardIconBox>
                                        {service.icon} {/* Icono dinámico */}
                                    </CardIconBox>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="primary">
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" fontSize={15}>
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </div>
        );
    }
);

export default QuickServicesPage;
