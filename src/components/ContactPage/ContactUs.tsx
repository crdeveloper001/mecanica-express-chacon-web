import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import './index.css'; // Import the CSS file

const ContactUs = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (_props, ref) => {
        return (
            <div ref={ref}>
                <Box className="contact-root">
                    <Container>
                        <Typography className="contact-heading">CONTACTANOS</Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6} className="contact-item">
                                <Typography className="contact-title">Direccion</Typography>
                                <Typography className="contact-content">
                                    Cuatro Reinas de Tibas, Urbanización Los Almendros
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} className="contact-item">
                                <Typography className="contact-title">Correo Electrónico</Typography>
                                <Typography className="contact-content">
                                    servicioautomotrizchaconcr@gmail.com
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6} className="contact-item">
                                <Typography className="contact-title">Teléfono</Typography>
                                <Typography className="contact-content">506+83662571</Typography>
                            </Grid>
                            <Grid item xs={12} md={6} className="contact-item">
                                <Typography className="contact-title">
                                    Síguenos en redes sociales
                                </Typography>
                                <Typography className="contact-content">
                                    Facebook: Mecánica Express Chacón <br />
                                    Instagram: servicio_automotriz_chacon
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

            </div>


        );

    });
export default ContactUs;
