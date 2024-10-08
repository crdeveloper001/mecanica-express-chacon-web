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
                <Helmet>
                    <title>Mecánica Express - Asistencia en Carretera</title>
                    <meta name="description" content="Mecánica Express ofrece asistencia en carretera siempre a tu lado. Solicita ayuda ahora!" />
                </Helmet>

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: '300px', sm: '400px', md: '1000px' },
                        backgroundImage: `url(${imageBack})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        textAlign: 'left',
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Typography
                                    data-aos="fade-right"
                                    data-aos-delay="500"
                                    variant="h4"
                                    component="h1"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: { xs: '3rem', md: '7rem' },
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
                                    component="h1"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#ff0000',
                                        fontSize: { xs: '2rem', md: '7rem' },
                                        fontStyle: 'italic',
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        textAlign: 'left',
                                    }}
                                >
                                    SIEMPRE A TU LADO
                                </Typography>

                                <Button
                                    variant="contained"
                                    color="error"
                                    endIcon={
                                        <img src={iconWhatsapp} alt="WhatsApp" style={{ width: '25px', marginLeft: '8px' }} />
                                    }
                                    href="https://wa.link/ure23v"
                                    sx={{
                                        borderRadius: '25px',
                                        display: 'flex',
                                    }}
                                >
                                    <Typography variant="subtitle1" color="white" sx={{ marginTop: '15px' }}>SOLICITAR YA</Typography>
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
