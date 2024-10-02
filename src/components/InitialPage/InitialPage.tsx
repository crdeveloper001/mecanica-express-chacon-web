import './index.css';
import NavigationHandler from '../Navigation/NavigationHandler';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import imageBack from '../../assets/images/InitialPageBackground.png';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const InitialPage = () => {
    return (
        <>
            <Helmet>
                <title>Mecánica Express - Asistencia en Carretera</title>
                <meta name="description" content="Mecánica Express ofrece asistencia en carretera siempre a tu lado. Solicita ayuda ahora!" />
            </Helmet>
            <NavigationHandler />

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
                                    textAlign: 'left'
                                }}
                            >
                                SIEMPRE A TU LADO
                            </Typography>
                            <Button
                                data-aos="fade-left"
                                data-aos-delay="500"
                                variant="contained"
                                color="error"
                                endIcon={<WhatsAppIcon />}
                                href="https://wa.link/ure23v" // Replace with the actual WhatsApp link
                                sx={{ mt: 2, fontSize: { xs: '0.8rem', md: '1.2rem' }, padding: { xs: '6px 12px', md: '20px 40px' }, borderRadius: '25px' }}
                            >
                                SOLICITAR YA
                            </Button>

                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default InitialPage;
