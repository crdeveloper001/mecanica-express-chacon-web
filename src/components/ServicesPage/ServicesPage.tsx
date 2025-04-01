import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, Typography, Box, CardMedia, Grid, Button, styled, Container, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import image1 from '../../assets/images/cars/inyeccion.png';
import image2 from '../../assets/images/cars/enfriamiento.png';
import image3 from '../../assets/images/cars/afinamientoMotor.png';
import image4 from '../../assets/images/cars/lubricacion.png';
import image5 from '../../assets/images/cars/suspension.png';
import image6 from '../../assets/images/cars/frenos.png';

const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '10px',
    boxShadow: theme.shadows[3],
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[8],
    },
    backgroundColor: '#fff',
    paddingBottom: theme.spacing(2),
}));

const ServicesPage = React.forwardRef<HTMLDivElement>((_props, ref) => {
    const [open, setOpen] = useState(false);
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
                <Container>
                    <Typography variant="h3" color="primary" align="center" fontWeight="bold" gutterBottom>
                        Nuestros Servicios de Mecánica Automotriz
                    </Typography>
                    <Typography variant="h6" color="textSecondary" align="center" marginBottom={4}>
                        Mantenimiento y reparación profesional para optimizar el rendimiento de tu vehículo
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {mechanicServices.map((service) => (
                            <Grid item key={service.id} xs={12} sm={6} md={4}>
                                <StyledCard>
                                    <CardMedia
                                        component="img"
                                        alt={service.title}
                                        height="200"
                                        src={service.currentImage}
                                        title={service.title}
                                        sx={{ objectFit: 'cover', borderRadius: '10px 10px 0 0' }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6" fontWeight="bold" color="text.primary" gutterBottom>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" marginBottom={2}>
                                            {service.description}
                                        </Typography>
                                        <Button variant="contained" color="primary" fullWidth onClick={() => handleOpen(service)}>
                                            Más información
                                        </Button>
                                    </CardContent>
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{selectedService?.title}</DialogTitle>
                <DialogContent>
                    <Typography>{selectedService?.details}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Cerrar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

export default ServicesPage;