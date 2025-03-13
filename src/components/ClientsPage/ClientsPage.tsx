import React from 'react';

import { Card, CardContent, Typography, Avatar, Grid, Container, Box } from '@mui/material';
import { Helmet } from "react-helmet-async";
import customerIcon from '../../assets/images/icons/customer.png';
import './index.css';

const reviews = [
    { name: "Freelancer Developer", review: "Excelente servicio, Jefry es un gran mecánico y fue bastante rapido con la solución a mi problema de distribución y me dio buenas recomendaciones de mantenimiento, lo recomiendo 👍🏼👍🏼" },
    { name: "Claudio", review: "Buen servicio la verdad!! Tuve una emergencia en carretera y llame por la medio de la pagina y me respondieron rápidamente y acudieron donde estaba, el técnico fue muy eficiente y el servicio tiene precios muy accesibles! Los recomiendo 100%" },
    { name: "Melissa", review: "Excelente servicio, es el que nos ve las 2 CRV muy detallista, ordenado y trabaja de forma cuidadosa y delicada y el que trabaje a domicilio es una ventaja lo mismo que la emergencia en carretera, un mecánico serio." },
    { name: "Diego", review: "Excelente servicio, muy rápido y eficiente! Súper recomendados" },
    { name: "Eduardo", review:'🌟🌟🌟🌟🌟' },
    { name: "Daniel", review:'Excelente servicio del tecnico Jefry, tuve problemas de frenado y me soluciono el problema a domicilio, muy bueno la verdad' },
    
];

const ClientReviewsGrid = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (props, ref) => {
        return (
            <div ref={ref} {...props}>
                <Helmet>
                    <title>Mecánica Express Chacón | Opiniones de Clientes </title>
                    <meta name="description" content="Descubre las opiniones y experiencias de nuestros clientes con los servicios de Mecánica Express Chacón. Confianza, rapidez y calidad en cada reparación y asistencia en carretera." />
                    <meta name="keywords" content="opiniones clientes, reseñas mecánica, mecánica express, asistencia en carretera, servicio automotriz, reparación de autos, confianza, taller automotriz" />
                    <meta name="robots" content="index,follow" />
                    <meta property="og:title" content="Opiniones de Clientes | Mecánica Express Chacón" />
                    <meta property="og:description" content="Lee lo que dicen nuestros clientes sobre los servicios de reparación y asistencia de Mecánica Express Chacón. Atención rápida y confiable." />
                    <meta property="og:image" content="https://www.mecanicaexpresschacon.com/images/reseñas-clientes.jpg" />
                    <meta property="og:url" content="https://www.mecanicaexpresschacon.com/opiniones-clientes" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Opiniones de Clientes | Mecánica Express Chacón" />
                    <meta name="twitter:description" content="Lee lo que dicen nuestros clientes sobre los servicios de reparación y asistencia de Mecánica Express Chacón. Atención rápida y confiable." />
                    <meta name="twitter:image" content="https://www.mecanicaexpresschacon.com/images/reseñas-clientes.jpg" />

                    {/* Estructura de Datos (Schema.org) para Reseñas */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Mecánica Express Chacón",
                            "url": "https://www.mecanicaexpresschacon.com",
                            "review": reviews.map(review => ({
                                "@type": "Review",
                                "author": {
                                    "@type": "Person",
                                    "name": review.name
                                },
                                "reviewBody": review.review,
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": "5",
                                    "bestRating": "5"
                                }
                            })),
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": "4.9",
                                "reviewCount": reviews.length
                            }
                        })}
                    </script>
                </Helmet>

                <Container sx={{ padding: '3rem 1rem', textAlign: 'center' }} data-aos="fade-down" data-aos-duration="1500">
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        Opiniones de nuestros clientes
                    </Typography>
                    <Typography variant="body1" color="textSecondary" mb={4}>
                        Descubre lo que dicen nuestros clientes sobre nuestros servicios y su experiencia con Mecánica Express Chacón.
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {reviews.map((review, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card
                                    sx={{
                                        backgroundColor: '#f9f9f9',
                                        borderRadius: '10px',
                                        boxShadow: 3,
                                        padding: 2,
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.05)',
                                            boxShadow: 5,
                                        }
                                    }}
                                    aria-label={`Reseña de ${review.name}`}
                                >
                                    <CardContent>
                                        <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                                            <Avatar
                                                src={customerIcon}
                                                alt={`Foto de perfil de ${review.name}`}
                                                sx={{ mb: 2, width: 56, height: 56 }}
                                            />
                                            <Typography variant="h6" fontWeight="bold">{review.name}</Typography>
                                            <Typography variant="body2" color="textSecondary" mt={1}>
                                                "📝{review.review}"
                                            </Typography>
                                        </Box>

                                        <hr />

                                      


                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    
                </Container>

                
            </div>
        );
    }
)

export default ClientReviewsGrid;
