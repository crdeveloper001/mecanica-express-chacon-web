import React from 'react';
import { Container, Grid, Typography, Box, Link } from '@mui/material';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import './index.css';

const Footer = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (props, ref) => {
        return (
            <Box ref={ref} {...props} component="footer" role="contentinfo" sx={{
                backgroundColor: '#1a1a1a',
                color: '#ffffff',
                py: 4,
                mt: 5
            }}>
                {/* SEO Metadata */}
                <Helmet>
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            "name": "Mecánica Express Chacón",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Colima de Tibás",
                                "addressLocality": "San José",
                                "addressCountry": "Costa Rica"
                            },
                            "telephone": "+506 6342 2141",
                            "email": "servicioautomotrizchaconcr@gmail.com",
                            "sameAs": [
                                "https://www.facebook.com/profile.php?id=100086288028221",
                                "https://www.instagram.com/servicio_automotriz_chacon/"
                            ]
                        })}
                    </script>
                </Helmet>

                <Container>
                    <Grid container spacing={4} justifyContent="center" textAlign="center">
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                Mecánica Express Chacón
                            </Typography>
                            <Typography variant="body2">
                                Colima de Tibás, San José, Costa Rica
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                Contacto
                            </Typography>
                            <Typography variant="body2">
                                <Link href="tel:+50663422141" color="inherit" underline="none">
                                    Tel: +506 6342 2141
                                </Link>
                            </Typography>
                            <Typography variant="body2">
                                <Link href="mailto:servicioautomotrizchaconcr@gmail.com" color="inherit" underline="none">
                                    Email: servicioautomotrizchaconcr@gmail.com
                                </Link>
                            </Typography>
                        </Grid>
    
                        <Grid item xs={12} md={4}>
                            <Typography variant="h6" gutterBottom>
                                Síguenos
                            </Typography>
                            <Box display="flex" justifyContent="center" gap={2}>
                                <Link 
                                    href="https://www.facebook.com/profile.php?id=100086288028221" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    sx={{ color: '#ffffff' }}
                                    aria-label="Visita nuestra página de Facebook"
                                >
                                    <FaFacebook size={24} />
                                </Link>
                                <Link 
                                    href="https://www.instagram.com/servicio_automotriz_chacon/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    sx={{ color: '#ffffff' }}
                                    aria-label="Síguenos en Instagram"
                                >
                                    <FaInstagram size={24} />
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
    
                    <Box textAlign="center" mt={3}>
                        <Typography variant="body2" color="gray">
                            © {new Date().getFullYear()} Mecánica Express Chacón. Todos los derechos reservados.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        );
    }
);

export default Footer;
