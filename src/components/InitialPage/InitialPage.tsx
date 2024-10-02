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
                                variant="h4"
                                component="h1"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '2rem', md: '7rem' },
                                    fontStyle: 'italic',
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                }}
                            >
                                ASISTENCIA EN CARRETERA
                            </Typography>
                            <Typography
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
                                variant="contained"
                                color="error"
                                endIcon={<WhatsAppIcon />}
                                href="https://wa.link/0q4wcv" // Replace with the actual WhatsApp link
                                sx={{ mt: 2, fontSize: { xs: '0.8rem', md: '1.2rem' }, padding: { xs: '6px 12px', md: '8px 16px' }, borderRadius: '25px' }}
                            >
                                SOLICITAR YA
                            </Button>

                        </Box>
                    </Grid>

                    {/* <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>

                    </Grid> */}
                </Grid>
            </Box>
        </>
    );
};

export default InitialPage;
