import React from 'react';
import Slider from 'react-slick';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import image1 from '../../assets/images/cars/inyeccion.png';
import image2 from '../../assets/images/cars/enfriamiento.png';
import image3 from '../../assets/images/cars/afinamientoMotor.png';
import image4 from '../../assets/images/cars/lubricacion.png';
import image5 from '../../assets/images/cars/suspension.png';
import image6 from '../../assets/images/cars/frenos.png';

const mechanicServices = [
    { id: 1, title: 'SISTEMA DE INYECCION', description: 'Mantenimiento del sistema de inyección para mejorar el rendimiento y consumo de combustible.', currentImage: image1 },
    { id: 2, title: 'SISTEMA DE ENFRIAMIENTO', description: 'Revisión y reparación del sistema de enfriamiento para evitar el sobrecalentamiento del motor.', currentImage: image2 },
    { id: 3, title: 'AFINAMIENTO DE MOTORES A GASOLINA', description: 'Afinamiento de motores a gasolina para un rendimiento eficiente, incluyendo cambio de bujías y ajuste de componentes.', currentImage: image3 },
    { id: 4, title: 'SISTEMA DE LUBRICACION A GASOLINA', description: 'Cambio de aceite y revisión del sistema de lubricación para mejorar el funcionamiento del motor y prevenir daños.', currentImage: image4 },
    { id: 5, title: 'SISTEMA DE SUSPENSION', description: 'Inspección y reparación de la suspensión para una conducción segura y estable.', currentImage: image5 },
    { id: 6, title: 'SISTEMA DE FRENOS', description: 'Mantenimiento del sistema de frenos para garantizar una respuesta rápida y segura en carretera.', currentImage: image6 },
];

const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',

};

const ServicesPage = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (_props, ref) => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        };

        return (
            <div ref={ref}>
                {/* SEO Meta Tags */}
                <Helmet>
                    <title>Servicios Especializados de Mecánica | Mecánica Express Chacón</title>
                    <meta name="description" content="Conoce nuestros servicios especializados en sistemas de inyección, frenos, lubricación, y más. Garantizamos un mantenimiento completo para tu vehículo." />
                    <meta name="keywords" content="mecánica, inyección, frenos, lubricación, suspensión, mantenimiento automotriz" />
                    <meta name="robots" content="index,follow" />
                    <link rel="canonical" href="https://www.mecánicaexpresschacon.com/servicios" />

                    {/* Schema.org Structured Data */}
                    <script type="application/ld+json">
                        {JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Automotive Services",
                            "provider": {
                                "@type": "Organization",
                                "name": "Mecánica Express Chacón",
                                "url": "https://www.mecánicaexpresschacon.com",
                                "sameAs": [
                                    "https://www.facebook.com/profile.php?id=100086288028221",
                                    "https://www.instagram.com/servicio_automotriz_chacon/"
                                ]
                            },
                            "areaServed": {
                                "@type": "Place",
                                "name": "San José, Costa Rica"
                            },
                            "offers": mechanicServices.map(service => ({
                                "@type": "Offer",
                                "name": service.title,
                                "description": service.description,
                                "url": "https://www.mecánicaexpresschacon.com/servicios"
                            }))
                        })}
                    </script>
                </Helmet>

                {/* Services Content */}
                <div className="DividerSection"></div>
                <Box sx={{ padding: 2, marginTop: 10 }}>
                    <Typography variant="h4" color="error" align="center" fontStyle={'italic'} fontWeight={'bold'}>
                        SERVICIOS ESPECIALIZADOS
                    </Typography>
                    <Slider {...settings}>
                        {mechanicServices.map((service) => (
                            <Card key={service.id} sx={{ ...cardStyle, height: '350px', width: '300px' }}>
                                <CardMedia
                                    component="img"
                                    alt={service.title}
                                    height="200"
                                    src={service.currentImage}
                                    title={service.title}
                                    sx={{ objectFit: 'contain' }} // Ensures the image fits well
                                />
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>{service.title}</Typography>
                                    <Typography variant="body2" align='justify'>{service.description}</Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Slider>
                </Box>
                <div className="DividerSection" style={{ marginTop: 15 }}></div>
            </div>
        );
    }
);

export default ServicesPage;
