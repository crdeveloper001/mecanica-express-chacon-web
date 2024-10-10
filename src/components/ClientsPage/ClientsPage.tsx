import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Box, Container } from '@mui/material';
import { Helmet } from "react-helmet-async"; // Import Helmet for SEO
import customerIcon from '../../assets/images/icons/customer.png';

const reviews = [
    {
        name: "Claudio Gonzalez",
        review: "Excelente servicio, ofrecen servicios de alta calidad y con una buena comunicación, y el mecánico Jefry es muy profesional y eficiente con la solución al problema.",
    },
    {
        name: "Luis García",
        review: "Excelente servicio. Llegaron en menos de 20 minutos y arreglaron el problema en mi coche rápidamente. Muy recomendados para cualquier emergencia en carretera.",
    },
    {
        name: "María Fernández",
        review: "El servicio de mecánica rápida es increíble. Mi auto no encendía y en cuestión de minutos me resolvieron el problema. 100% recomendable.",
    },
    {
        name: "Ana Pérez",
        review: "Gran servicio de emergencia en carretera. Llegaron mucho más rápido de lo que esperaba y solucionaron todo sin complicaciones. Totalmente satisfecha.",
    },
    {
        name: "Jorge Ramírez",
        review: "Nunca había tenido un servicio tan rápido y eficiente. Desde la llamada hasta la reparación, todo fue perfecto. ¡Me salvaron el día!",
    },
    {
        name: "Pedro Martínez",
        review: "La asistencia en carretera fue de primera. El mecánico identificó y solucionó el problema de mi coche en poco tiempo. Gran experiencia y buen precio.",
    },
    // Add more reviews as needed
];

const ClientsPage = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (_props, ref) => {
        return (
            <div ref={ref}>
                <Helmet>
                    <title>Mecánica Express Chacón - Opiniones de Clientes</title>
                    <meta
                        name="description"
                        content="Descubre las opiniones de nuestros clientes sobre el servicio de Mecánica Express Chacón. Lee sus experiencias y recomendaciones sobre asistencia en carretera y mecánica rápida."
                    />
                    <meta
                        name="keywords"
                        content="opiniones clientes, Mecánica Express Chacón, servicio mecánico, asistencia en carretera, mecánica rápida, reseñas"
                    />
                    <meta name="robots" content="index,follow" />
                    <meta name="author" content="Mecánica Express Chacón" />
                    <meta name="language" content="es" />
                    <link rel="canonical" href="https://www.mecanicaexpresschacon.com/opiniones" />
                </Helmet>
                <Container fixed sx={{ padding: '2rem', marginTop: 10 }}>
                    <Typography variant="h4" gutterBottom textAlign="center">
                        NUESTROS CLIENTES Y REVIEWS
                    </Typography>
                    <Grid container spacing={3}>
                        {reviews.map((review, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card sx={{ height: '100%' }}>
                                    <CardContent>
                                        <Box display="flex" alignItems="center" mb={2}>
                                            <Avatar src={customerIcon} alt={review.name} sx={{ mr: 2 }} />
                                            <Typography variant="h6">{review.name}</Typography>
                                        </Box>
                                        <Typography variant="body2" color="textSecondary">
                                            {review.review}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </div>
        );
    }
);

export default ClientsPage;
