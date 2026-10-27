import React from 'react';

import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Rating,
    Stack,
    Typography,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import customerIcon from '../../assets/images/icons/customer.png';
import googleOpinions from './GoogleOpinions.json';
import './index.css';

const ratingValues: Record<string, number> = {
    FIVE: 5,
    FOUR: 4,
    THREE: 3,
    TWO: 2,
    ONE: 1,
};

const reviews = googleOpinions.reviews.map((review) => ({
    name: review.reviewer.displayName,
    rating: ratingValues[review.starRating] ?? 0,
    comment: review.comment?.split('\n\n(Translated by Google)')[0] ?? '',
    date: review.createTime,
    reply: review.reviewReply?.comment,
}));

const averageRating = reviews.reduce((total, review) => total + review.rating, 0) / reviews.length;
const formatReviewDate = (date: string) =>
    new Intl.DateTimeFormat('es-CR', { year: 'numeric', month: 'long' }).format(new Date(date));

const ClientReviewsGrid = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (props, ref) => {
        return (
            <div ref={ref} {...props}>
                <Helmet>
                    <title>Mecánica Express Chacón | Opiniones de Clientes</title>
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

                    {/* Datos estructurados basados en las opiniones de Google */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "name": "Mecánica Express Chacón",
                            "url": "https://www.mecanicaexpresschacon.com",
                            "review": reviews.filter(review => review.rating > 0).map(review => ({
                                "@type": "Review",
                                "author": {
                                    "@type": "Person",
                                    "name": review.name
                                },
                                ...(review.comment ? { "reviewBody": review.comment } : {}),
                                "reviewRating": {
                                    "@type": "Rating",
                                    "ratingValue": review.rating,
                                    "bestRating": "5"
                                }
                            })),
                            "aggregateRating": {
                                "@type": "AggregateRating",
                                "ratingValue": averageRating.toFixed(1),
                                "reviewCount": reviews.length
                            }
                        })}
                    </script>
                </Helmet>

                <Box sx={{
                    py: { xs: 6, md: 9 },
                    background: 'linear-gradient(180deg, #f3f7fb 0%, #ffffff 48%)',
                    minHeight: '100vh',
                }}>
                    <Container maxWidth="lg">
                        <Stack alignItems="center" textAlign="center" spacing={2} sx={{ mb: 5 }}>
                            <Chip label="OPINIONES DE GOOGLE" color="primary" variant="outlined" />
                            <Typography variant="h3" component="h1" fontWeight={800} sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
                                Experiencias reales, confianza comprobada
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680 }}>
                                Conoce las experiencias que nuestros clientes han compartido en Google sobre la atención y el servicio de Mecánica Express Chacón.
                            </Typography>
                            <Stack direction="row" spacing={1.5} alignItems="center" sx={{ pt: 1 }}>
                                <Typography variant="h4" fontWeight={800}>{averageRating.toFixed(1)}</Typography>
                                <Box textAlign="left">
                                    <Rating value={averageRating} precision={0.1} readOnly size="large" />
                                    <Typography variant="body2" color="text.secondary">
                                        Basado en {reviews.length} opiniones
                                    </Typography>
                                </Box>
                            </Stack>
                        </Stack>

                        <Box
                            role="region"
                            aria-label="Opiniones de clientes; desplázate horizontalmente para ver más"
                            tabIndex={0}
                            sx={{ overflowX: 'auto', pb: 2, scrollSnapType: 'x mandatory' }}
                        >
                            <Box sx={{ display: 'flex', gap: 3, width: '100%' }}>
                        {reviews.map((review, index) => (
                            <Box
                                key={`${review.name}-${index}`}
                                sx={{
                                    flex: {
                                        xs: '0 0 100%',
                                        sm: '0 0 calc(50% - 12px)',
                                        md: '0 0 calc(33.333% - 16px)',
                                    },
                                    scrollSnapAlign: 'start',
                                }}
                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        border: '1px solid',
                                        borderColor: 'grey.200',
                                        borderRadius: 3,
                                        boxShadow: '0 8px 24px rgba(25, 50, 75, 0.06)',
                                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 14px 32px rgba(25, 50, 75, 0.12)',
                                        }
                                    }}
                                    aria-label={`Opinión de ${review.name}, ${review.rating} de 5 estrellas`}
                                >
                                    <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                                        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: 2 }}>
                                            <Avatar
                                                src={customerIcon}
                                                alt=""
                                                sx={{ width: 46, height: 46 }}
                                            />
                                            <Box sx={{ minWidth: 0, flexGrow: 1 }}>
                                                <Typography variant="subtitle1" fontWeight={700} noWrap>{review.name}</Typography>
                                                <Typography variant="caption" color="text.secondary">{formatReviewDate(review.date)}</Typography>
                                            </Box>
                                            <Typography variant="caption" color="text.secondary" aria-label="Opinión de Google">Google</Typography>
                                        </Stack>
                                        <Rating value={review.rating} readOnly size="small" />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mt: 1.5, minHeight: 72, whiteSpace: 'pre-line', lineHeight: 1.7 }}
                                        >
                                            {review.comment || 'El cliente dejó una calificación sin comentario.'}
                                        </Typography>
                                        {review.reply && (
                                            <>
                                                <Divider sx={{ my: 2 }} />
                                                <Typography variant="caption" fontWeight={700} color="text.primary" display="block" gutterBottom>
                                                    Respuesta del negocio
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                                    {review.reply}
                                                </Typography>
                                            </>
                                        )}
                                    </CardContent>
                                </Card>
                            </Box>
                        ))}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </div>
        );
    }
)

export default ClientReviewsGrid;
