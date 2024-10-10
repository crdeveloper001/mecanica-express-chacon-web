import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import './index.css'; // Import the CSS file

const ContactUs = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (_props, ref) => {
        return (
            <div ref={ref}>
                {/* SEO Meta Tags */}
                <Helmet>
                    <title>Contáctanos | Mecánica Express Chacón</title>
                    <meta
                        name="description"
                        content="Contáctenos en Mecánica Express Chacón. Dirección: Cuatro Reinas de Tibas, Urbanización Los Almendros. Teléfono: 506+83662571. Correo electrónico: servicioautomotrizchaconcr@gmail.com"
                    />
                    <meta
                        name="keywords"
                        content="contacto, mecánica, servicios automotrices, asistencia en carretera, teléfono, correo"
                    />
                    <meta name="robots" content="index, follow" />

                    {/* Schema.org Structured Data */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "AutoRepair",
                            "name": "Mecánica Express Chacón",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Cuatro Reinas de Tibas, Urbanización Los Almendros",
                                "addressLocality": "San José",
                                "addressRegion": "San José",
                                "postalCode": "10101",
                                "addressCountry": "CR"
                            },
                            "email": "servicioautomotrizchaconcr@gmail.com",
                            "telephone": "+506 8366 2571",
                            "sameAs": [
                                "https://www.facebook.com/profile.php?id=100086288028221",
                                "https://www.instagram.com/servicio_automotriz_chacon/"
                            ],
                            "url": "https://www.mecanicaexpresschacon.com",
                            "contactPoint": {
                                "@type": "ContactPoint",
                                "telephone": "+506 8366 2571",
                                "contactType": "Customer Service"
                            }
                        })}
                    </script>
                </Helmet>

                {/* Contact Us Content */}
                <Box className="contact-root">
                    <Container>
                        <Typography className="contact-heading">CONTACTANOS</Typography>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6} className="contact-item">
                                <Typography className="contact-title">Dirección</Typography>
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
                                <Typography className="contact-title">Síguenos en redes sociales</Typography>
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
    }
);

export default ContactUs;
