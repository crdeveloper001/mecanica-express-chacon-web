import React, { useMemo } from 'react';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, Typography, Box, CardMedia, styled } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import image1 from '../../assets/images/cars/inyeccion.png';
import image2 from '../../assets/images/cars/enfriamiento.png';
import image3 from '../../assets/images/cars/afinamientoMotor.png';
import image4 from '../../assets/images/cars/lubricacion.png';
import image5 from '../../assets/images/cars/suspension.png';
import image6 from '../../assets/images/cars/frenos.png';

// Lista de servicios memoizada

// Estilos mejorados
const StyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: '15px',
    boxShadow: theme.shadows[5],
    transition: 'transform 0.3s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: theme.shadows[10],
    },
    maxWidth: 320,
    minHeight: 370,
}));

// Configuración del slider
const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
};

const ServicesPage = React.forwardRef<HTMLDivElement>((_props, ref) => {

    const mechanicServices = useMemo(() => [
        { id: 1, title: 'SISTEMA DE INYECCIÓN', description: 'Optimización del sistema de inyección para mejorar el rendimiento y consumo.', currentImage: image1 },
        { id: 2, title: 'SISTEMA DE ENFRIAMIENTO', description: 'Prevención del sobrecalentamiento con revisión del sistema de enfriamiento.', currentImage: image2 },
        { id: 3, title: 'AFINAMIENTO DE MOTORES', description: 'Ajuste profesional de motores a gasolina, incluyendo bujías y filtros.', currentImage: image3 },
        { id: 4, title: 'SISTEMA DE LUBRICACIÓN', description: 'Cambio de aceite y lubricación para prolongar la vida útil del motor.', currentImage: image4 },
        { id: 5, title: 'SISTEMA DE SUSPENSIÓN', description: 'Ajustes y reparación de suspensión para una conducción más estable.', currentImage: image5 },
        { id: 6, title: 'SISTEMA DE FRENOS', description: 'Mantenimiento y revisión de frenos para mayor seguridad en carretera.', currentImage: image6 },
    ], []);
    
    return (
        <div ref={ref}>
            <Helmet>
                <title>Servicios Especializados | Mecánica Express Chacón</title>
                <meta name="description" content="Descubre nuestros servicios especializados en inyección, frenos, lubricación, suspensión y más. Calidad garantizada." />
                <meta name="keywords" content="mecánica, inyección, frenos, lubricación, suspensión, mantenimiento automotriz" />
                <meta name="robots" content="index,follow" />
                <link rel="canonical" href="https://www.mecánicaexpresschacon.com/servicios" />
            </Helmet>

            <Box sx={{ padding: 2, marginTop: 10 }}>
                <Typography variant="h4" color="error" align="center" fontStyle="italic" fontWeight="bold">
                    SERVICIOS ESPECIALIZADOS
                </Typography>
                <Slider {...settings}>
                    {mechanicServices.map((service) => (
                        <StyledCard key={service.id}>
                            <CardMedia
                                component="img"
                                alt={service.title}
                                height="200"
                                src={service.currentImage}
                                title={service.title}
                                sx={{ objectFit: 'contain', borderRadius: '10px', marginBottom: '15px' }}
                                loading="lazy"
                            />
                            <CardContent>
                                <Typography variant="h6" fontWeight="bold" color="text.primary">
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    ))}
                </Slider>
            </Box>
        </div>
    );
});

export default ServicesPage;
