import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, Typography, Box, CardMedia, Button, styled, Container, Dialog, DialogTitle, DialogContent, DialogActions, Chip, Stack, useMediaQuery, useTheme } from '@mui/material';
import image1 from '../../assets/images/cars/inyeccion.png';
import image2 from '../../assets/images/cars/enfriamiento.png';
import image3 from '../../assets/images/cars/afinamientoMotor.png';
import image4 from '../../assets/images/cars/lubricacion.png';
import image5 from '../../assets/images/cars/suspension.png';
import image6 from '../../assets/images/cars/frenos.png';

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    borderRadius: '16px',
    overflow: 'hidden',
    border: '1px solid',
    borderColor: theme.palette.divider,
    boxShadow: theme.shadows[1],
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.shadows[6],
    },
    backgroundColor: '#fff',
    paddingBottom: theme.spacing(2),
}));

const ServicesPage = React.forwardRef<HTMLDivElement>((_props, ref) => {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    interface Service {
        id: number;
        title: string;
        description: string;
        details: string;
        currentImage: string;
    }
    
    const [selectedService, setSelectedService] = useState<Service | null>(null);
    
    const handleOpen = (service: Service) => {
        setSelectedService(service);
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const mechanicServices = useMemo(() => [
        { id: 1, title: 'Sistema de Inyección', description: 'Optimización del sistema de inyección para mejorar el rendimiento y consumo.', details: 'El sistema de inyección de combustible es clave para la eficiencia del motor. Un mantenimiento adecuado mejora el consumo y reduce emisiones contaminantes.', currentImage: image1 },
        { id: 2, title: 'Sistema de Enfriamiento', description: 'Prevención del sobrecalentamiento con revisión del sistema de enfriamiento.', details: 'Este sistema mantiene la temperatura del motor estable y evita daños por sobrecalentamiento. Se revisa el radiador, termostato y líquido refrigerante.', currentImage: image2 },
        { id: 3, title: 'Afinamiento de Motores', description: 'Ajuste profesional de motores a gasolina, incluyendo bujías y filtros.', details: 'El afinamiento de motor incluye cambio de filtros, bujías y revisión de inyectores para mejorar el rendimiento y reducir consumo de combustible.', currentImage: image3 },
        { id: 4, title: 'Sistema de Lubricación', description: 'Cambio de aceite y lubricación para prolongar la vida útil del motor.', details: 'El aceite del motor reduce la fricción entre las piezas y prolonga su vida útil. Se recomienda cambiarlo cada cierto kilometraje.', currentImage: image4 },
        { id: 5, title: 'Sistema de Suspensión', description: 'Ajustes y reparación de suspensión para una conducción más estable.', details: 'La suspensión garantiza estabilidad y comodidad en la conducción. Se revisan amortiguadores, bujes y alineación.', currentImage: image5 },
        { id: 6, title: 'Sistema de Frenos', description: 'Mantenimiento y revisión de frenos para mayor seguridad en carretera.', details: 'El sistema de frenos es fundamental para la seguridad. Se revisan pastillas, discos y líquido de frenos para asegurar una frenada efectiva.', currentImage: image6 },
    ], []);
    
    return (
        <div ref={ref}>
            <Helmet>
                <title>Servicios Especializados en Mecánica Automotriz | Mecánica Express Chacón</title>
                <meta name="description" content="Descubre nuestros servicios de mecánica automotriz: inyección, frenos, lubricación, suspensión y más. Mantenimiento y reparación con calidad garantizada." />
                <meta name="keywords" content="mecánica automotriz, inyección de combustible, reparación de frenos, lubricación de motor, suspensión automotriz, afinamiento de motores" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.mecanicaexpresschacon.com/servicios" />
                <meta property="og:title" content="Servicios Especializados en Mecánica Automotriz | Mecánica Express Chacón" />
                <meta property="og:description" content="Expertos en mecánica automotriz: revisamos y reparamos sistemas de inyección, frenos, suspensión y más. Confía en nuestra experiencia." />
                <meta property="og:url" content="https://www.mecanicaexpresschacon.com/servicios" />
                <meta property="og:type" content="website" />
            </Helmet>

            <Box sx={{ backgroundColor: '#f8f9fa', paddingY: 5 }}>
                <Box sx={{ backgroundColor: '#f5f7fa', minHeight: '100vh', pb: { xs: 6, md: 9 } }}>
                    <Box
                        sx={{
                            color: 'text.primary',
                            backgroundColor: 'common.white',
                            pt: { xs: 7, md: 10 },
                            pb: { xs: 8, md: 11 },
                        }}
                    >
                        <Container maxWidth="lg">
                            <Stack spacing={2} alignItems="center" textAlign="center">
                                <Chip label="MECÁNICA EXPRESS CHACÓN" sx={{ color: 'common.white', bgcolor: 'primary.main', fontWeight: 700, letterSpacing: 1 }} />
                                <Typography component="h1" variant="h2" fontWeight={800} sx={{ fontSize: { xs: '2.1rem', sm: '2.8rem', md: '3.5rem' }, maxWidth: 850 }}>
                                    Mantenimiento experto para tu vehículo
                                </Typography>
                                <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: 680, fontSize: { xs: '1rem', sm: '1.2rem' } }}>
                                    Soluciones confiables para cuidar el rendimiento, la seguridad y la vida útil de tu auto.
                                </Typography>
                            </Stack>
                        </Container>
                    </Box>

                    <Container maxWidth="lg" sx={{ mt: { xs: -4, md: -5 }, position: 'relative' }}>
                        <Box sx={{ bgcolor: 'background.paper', borderRadius: 3, p: { xs: 2.5, sm: 4 }, boxShadow: 3, mb: { xs: 4, md: 6 } }}>
                            <Typography component="h2" variant="h4" color="text.primary" fontWeight={750} textAlign="center" sx={{ fontSize: { xs: '1.65rem', sm: '2.125rem' } }}>
                                Nuestros servicios
                            </Typography>
                            <Typography color="text.secondary" textAlign="center" sx={{ mt: 1, maxWidth: 680, mx: 'auto' }}>
                                Atención profesional y mantenimiento especializado para que conduzcas con tranquilidad.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: { xs: 2, md: 3 },
                                overflow: 'visible',
                                pb: 1,
                            }}
                        >
                            {mechanicServices.map((service) => (
                                <Box
                                    key={service.id}
                                    sx={{
                                        flex: { xs: '0 0 100%', sm: '0 0 calc(50% - 8px)', md: '0 0 calc(33.333% - 16px)' },
                                        minWidth: 0,
                                    }}
                                >
                                    <StyledCard>
                                        <CardMedia
                                            component="img"
                                            height="190"
                                            image={service.currentImage}
                                            alt={service.title}
                                            sx={{ objectFit: 'cover', height: { xs: 155, sm: 190 } }}
                                        />
                                        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', flexGrow: 1, p: { xs: 2, md: 3 } }}>
                                            <Typography component="h3" variant="h6" fontWeight={700} color="text.primary" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }}>
                                                {service.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1, lineHeight: 1.6, fontSize: { xs: '0.8rem', sm: '0.875rem' } }}>
                                                {service.description}
                                            </Typography>
                                            <Button variant="outlined" color="primary" fullWidth onClick={() => handleOpen(service)} sx={{ borderRadius: 2, py: { xs: 0.75, sm: 1 }, fontWeight: 700 }}>
                                                Más información
                                            </Button>
                                        </CardContent>
                                    </StyledCard>
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </Box>
            </Box>

            <Dialog open={open} onClose={handleClose} fullScreen={isMobile} fullWidth maxWidth="sm">
                <DialogTitle sx={{ fontWeight: 700, pr: 6 }}>{selectedService?.title}</DialogTitle>
                <DialogContent>
                    {selectedService && (
                        <>
                            <CardMedia
                                component="img"
                                image={selectedService.currentImage}
                                alt={selectedService.title}
                                sx={{ height: { xs: 220, sm: 260 }, objectFit: 'cover', borderRadius: 2, mb: 2.5 }}
                            />
                            <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                                {selectedService.details}
                            </Typography>
                        </>
                    )}
                </DialogContent>
                <DialogActions sx={{ p: 2 }}>
                    <Button onClick={handleClose} color="primary" variant="contained" fullWidth={isMobile} sx={{ borderRadius: 2 }}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

export default ServicesPage;