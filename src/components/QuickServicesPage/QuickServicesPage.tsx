/* eslint-disable */
import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { Helmet } from "react-helmet-async";
import ToolIcon from '../../assets/images/icons/repairing-service.png';
import './index.css';
import React from "react";
const cardStyle = {
    height: '350px',  // Fixed height for the card
    width: '100%',   // Ensure it fills the grid column
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
};

const cardMediaStyle = {
    objectFit: 'cover',
    width: '30%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
};
const QuickServicesPage = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (_props, ref) => {

        return (

            <div ref={ref}>
                <Helmet>
                    <title>Mecánica Express Chacón - Servicios Rápidos</title>
                    <meta
                        name="description"
                        content="Descubre nuestros servicios rápidos, incluyendo asistencia en carretera, mecánica rápida, reparación de llantas y más. Siempre listos para ayudarte en tus emergencias."
                    />
                    <meta
                        name="keywords"
                        content="Mecánica Express Chacón, servicios rápidos, asistencia en carretera, mecánica rápida, reparación de llantas, revisión vehicular"
                    />
                    <meta name="robots" content="index,follow" />
                </Helmet>
                <div className="DividerSection"></div>

                <Box sx={{ padding: 2, marginTop: 10 }}>
                    <Typography variant="h4" color="error" align="center" fontStyle={'italic'} fontWeight={'bold'} mt={5}>
                        SERVICIOS RÁPIDOS
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {[
                            {
                                title: "Asistencia en carretera",
                                description:
                                    "Siempre a tu lado cuando más lo necesitas. Te brindamos ayuda inmediata en caso de averías, ponchaduras o emergencias en la vía.",
                            },
                            {
                                title: "Mecánica Rápida",
                                description:
                                    "¡Mantenimiento express! Cambios de aceite, revisión de frenos y más, para que sigas tu camino sin demoras.",
                            },
                            {
                                title: "Mecánica Automotriz",
                                description:
                                    "Servicios integrales de reparación y mantenimiento para que tu vehículo siempre esté en óptimas condiciones.",
                            },
                            {
                                title: "Revisión y Preparación vehicular para Dekra",
                                description:
                                    "Asegúrate de pasar la revisión vehicular con éxito. Preparamos tu coche para cumplir con todos los requisitos técnicos.",
                            },
                            {
                                title: "Reparación de llantas",
                                description:
                                    "Reparamos y cambiamos tus llantas con rapidez y calidad, para que sigas conduciendo con seguridad.",
                            },
                            {
                                title: "Evaluación y revisión de compras de vehículos",
                                description:
                                    "Te ayudamos a tomar la mejor decisión antes de comprar un auto. Revisamos el estado mecánico y te damos un informe detallado para que compres con confianza.",
                            },
                        ].map((service, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={cardStyle} data-aos="fade-up" data-aos-duration="2000">
                                    <CardMedia
                                        component="img"
                                        alt={`Image ${index + 1}`}
                                        image={ToolIcon}
                                        sx={cardMediaStyle}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" color="red" align="center">
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body1" color="textSecondary" component="p" fontSize={15}>
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

    });

export default QuickServicesPage;