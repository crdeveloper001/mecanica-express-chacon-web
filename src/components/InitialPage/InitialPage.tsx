import './index.css';
import imageBack from '../../assets/images/workshop/InitialPageBackground.png';
import { Box, Typography, Button, Grid } from '@mui/material';
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
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: '300px', sm: '400px', md: '800px' },
                        backgroundImage: `url(${imageBack})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        color: '#fff',
                        textAlign: 'left',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography
                                    data-aos="fade-right"
                                    data-aos-delay="500"
                                    variant="h3"
                                    component="h1"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '2rem', md: '5rem' },
                                        fontStyle: 'italic',
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                    }}
                                >
                                    ASISTENCIA EN CARRETERA
                                </Typography>
                                <Typography
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    variant="h4"
                                    component="h2"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#ff0000',
                                        fontSize: { xs: '1.8rem', md: '4.5rem' },
                                        fontStyle: 'italic',
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                    }}
                                >
                                    SIEMPRE A TU LADO
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="error"
                                    endIcon={
                                        <img 
                                            src={iconWhatsapp} 
                                            alt="WhatsApp" 
                                            loading="lazy" 
                                            style={{ width: '25px', marginLeft: '8px' }} 
                                        />
                                    }
                                    href="https://wa.me/message/CFX5E7A5ZSSTA1"
                                    sx={{
                                        borderRadius: '25px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        marginTop: '1rem',
                                    }}
                                    aria-label="Solicitar asistencia en carretera por WhatsApp"
                                >
                                    <Typography variant="h5" color="white" sx={{ fontWeight: 'bold' }}>
                                        SOLICITAR YA
                                    </Typography>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        );
    }
);

export default InitialPage;
