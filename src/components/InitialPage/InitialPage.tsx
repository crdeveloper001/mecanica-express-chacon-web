import './index.css';
import imageBack from '../../assets/images/workshop/InitialPageBackground.png';
import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Helmet } from 'react-helmet-async';
import iconWhatsapp from '../../assets/images/icons/whatsapp.png';
import React from 'react';

const InitialPage = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (props, ref) => {
        return (
            <div ref={ref} {...props}>
                {/* SEO Metadata */}
                <Helmet>
                    <title>Asistencia en Carretera | Mecánica Express Chacón</title>
                    <meta name="description" content="Mecánica Express te ofrece asistencia mecánica en carretera en cualquier momento y lugar. Contáctanos ahora!" />
                    <meta name="keywords" content="asistencia en carretera, mecánico a domicilio, urgencias mecánicas, reparación de autos" />
                    <meta name="robots" content="index,follow" />
                    <link rel="canonical" href="https://www.mecanicaexpresschacon.com/" />

                    {/* Open Graph para Facebook */}
                    <meta property="og:title" content="Asistencia en Carretera | Mecánica Express Chacón" />
                    <meta property="og:description" content="Solicita asistencia mecánica en carretera con Mecánica Express. Servicio rápido y confiable." />
                    <meta property="og:image" content="https://www.mecanicaexpresschacon.com/assets/images/workshop/InitialPageBackground.png" />
                    <meta property="og:url" content="https://www.mecanicaexpresschacon.com/" />
                    <meta property="og:type" content="website" />

                    {/* Twitter Card */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Asistencia en Carretera | Mecánica Express Chacón" />
                    <meta name="twitter:description" content="Asistencia rápida en carretera. Solicita ayuda mecánica con un solo clic!" />
                    <meta name="twitter:image" content="https://www.mecanicaexpresschacon.com/assets/images/workshop/InitialPageBackground.png" />
                </Helmet>

                <Box
                    component="section"
                    aria-labelledby="hero-title"
                    sx={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '100%',
                        boxSizing: 'border-box',
                        overflowX: 'clip',
                        minHeight: { xs: '620px', md: '700px' },
                        backgroundImage: `linear-gradient(90deg, rgba(8, 15, 24, 0.92) 0%, rgba(8, 15, 24, 0.78) 55%, rgba(8, 15, 24, 0.4) 100%), url(${imageBack})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        textAlign: 'left',
                        px: { xs: 2, sm: 4, md: 8 },
                        py: { xs: 7, md: 10 },
                    }}
                >
                    <Grid container spacing={{ xs: 4, md: 8 }} alignItems="center" sx={{ width: '100%', maxWidth: '1200px' }}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <Box sx={{ maxWidth: '700px' }}>
                                <Box
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        mb: 2.5,
                                        px: 2,
                                        py: 0.8,
                                        border: '1px solid rgba(255,255,255,0.3)',
                                        borderRadius: '999px',
                                        backgroundColor: 'rgba(255,255,255,0.08)',
                                    }}
                                >
                                    <Box component="span" sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ff3737' }} />
                                    <Typography variant="body2" sx={{ fontWeight: 700, letterSpacing: '0.04em' }}>
                                        MECÁNICA EXPRESS CHACÓN
                                    </Typography>
                                </Box>
                                <Typography
                                    data-aos="fade-right"
                                    data-aos-delay="500"
                                    variant="h1"
                                    component="h1"
                                    id="hero-title"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5rem' },
                                        lineHeight: 1.02,
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                    }}
                                >
                                    ¿MECANICA EXPRESS? ESTAS EN EL LUGAR CORRECTO
                                </Typography>
                                <Typography
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    component="p"
                                    sx={{
                                        mt: 2,
                                        mb: 3,
                                        maxWidth: '590px',
                                        color: 'rgba(255,255,255,0.88)',
                                        fontSize: { xs: '1.1rem', md: '1.3rem' },
                                        lineHeight: 1.65,
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                    }}
                                >
                                   Realizamos servicios de mecanica rapida y asistencia en carretera, para que tu vehículo vuelva a la carretera de manera segura y eficiente.
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="success"
                                    endIcon={
                                        <img
                                            src={iconWhatsapp}
                                            alt=""
                                            style={{ width: '25px' }}
                                        />
                                    }
                                    href="https://wa.me/50663422141"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        minHeight: 56,
                                        px: 3,
                                        borderRadius: '12px',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                                        '&:hover': { backgroundColor: '#168c49' },
                                    }}
                                    aria-label="Solicitar asistencia en carretera por WhatsApp"
                                >
                                    <Typography component="span" sx={{ fontWeight: 700, fontSize: '1.05rem' }}>
                                        Solicitar Servicio por WhatsApp
                                    </Typography>
                                </Button>
                                <Typography component="p" variant="body2" sx={{ mt: 1.5, color: 'rgba(255,255,255,0.76)' }}>
                                    Comparte tu ubicación para que podamos orientarte.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Box
                                sx={{
                                    maxWidth: { xs: '100%', md: '390px' },
                                    ml: { md: 'auto' },
                                    p: { xs: 3, sm: 4 },
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: '20px',
                                    backgroundColor: 'rgba(12,18,26,0.76)',
                                    backdropFilter: 'blur(8px)',
                                }}
                            >
                                <Typography component="h2" variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                                    Para ayudarte más rápido
                                </Typography>
                                <Box component="ol" sx={{ m: 0, pl: 2.5, color: 'rgba(255,255,255,0.88)' }}>
                                    <Typography component="li" sx={{ pl: 0.5, mb: 1.5, lineHeight: 1.6 }}>
                                        Envíanos tu ubicación por WhatsApp.
                                    </Typography>
                                    <Typography component="li" sx={{ pl: 0.5, mb: 1.5, lineHeight: 1.6 }}>
                                        Cuéntanos qué sucedió con el vehículo.
                                    </Typography>
                                    <Typography component="li" sx={{ pl: 0.5, lineHeight: 1.6 }}>
                                        Te responderemos para coordinar la asistencia.
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        );
    }
);

export default InitialPage;
