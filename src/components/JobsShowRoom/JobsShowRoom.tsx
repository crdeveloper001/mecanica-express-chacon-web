import React, { useState } from "react";
import {
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Select,
    MenuItem,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Slider from "react-slick"; // Importa react-slick

const trabajosMecanicos = [
    {
        id: 1,
        title: "Reparación de Frenos",
        category: "Frenos",
        images: [
            "/images/trabajos/Daniel/VEHICULO.jpeg",
            "/images/trabajos/Daniel/ANTES.jpeg",
            "/images/trabajos/Daniel/ANTES 2.jpeg",
            "/images/trabajos/Daniel/DESPUES 1.jpeg",
            "/images/trabajos/Daniel/DESPUES 2.jpeg",
            "/images/trabajos/Daniel/DESPUES 3.jpeg",
        ],
        description: "Se realizo la rectificacion de discos y tambores, cambio de balatas y ajuste de frenos traseros y delanteros."
    },
    {
        id: 2,
        title: "Cambio de conjunto de embrague",
        category: "Transmisiones",
        images: [
            "/images/trabajos/Diego/VEHICULO.jpg",
            "/images/trabajos/Diego/ANTES.jpg",
            "/images/trabajos/Diego/DESPUES1.jpg",
            "/images/trabajos/Diego/DESPUES2.jpg",
            "/images/trabajos/Diego/DESPUES3.jpg",
        ],
        description: "Se realizo el cambio de conjunto de embrague y reajuste del mismo, se rectifico volante y se realizo un lavado de motor."
    },
    {
        id: 3,
        title: "Cambio de conjunto de embrague",
        category: "Frenos",
        images: [
            "/images/trabajos/Claudio/ANTES 1.jpg",
            "/images/trabajos/Claudio/ANTES 2.jpg",
            "/images/trabajos/Claudio/DESPUES.jpg",

        ],
        description: "Revision, limpieza y ajuste de frenos delantes y traseros con ligero desgaste al igual que cambio de aceite de motor"
    },
    {
        id: 4,
        title: "Cambio de bobinas de encendido y limpieza de cuerpo de aceleracion",
        category: "Motores",
        images: [
            "/images/trabajos/Diego/VEHICULO.jpg",
            "/images/trabajos/Diego/MOTORES/ANTES.jpg",
            "/images/trabajos/Diego/MOTORES/ANTES2.jpg",
            "/images/trabajos/Diego/MOTORES/DESPUES1.jpg",
            "/images/trabajos/Diego/MOTORES/DESPUES2.jpg",
            "/images/trabajos/Diego/MOTORES/DESPUES3.jpg",
        ],
        description: "Se realizo un diagnostico, revision y el cambio de bobinas de encendido y limpieza de cuerpo de aceleracion."
    },
    {
        id: 5,
        title: "Reparación, limpieza y ajuste de frenos",
        category: "Frenos",
        images: [
            "/images/trabajos/ClienteMitsubichi/VEHICULO.jpg",
            "/images/trabajos/ClienteMitsubichi/ANTES1.jpg",
            "/images/trabajos/ClienteMitsubichi/ANTES2.jpg",
            "/images/trabajos/ClienteMitsubichi/DESPUES1.jpg",
            "/images/trabajos/ClienteMitsubichi/DESPUES2.jpg",
            "/images/trabajos/ClienteMitsubichi/DESPUES3.jpg",
        ],
        description: "Se realiza el cambio de discos delanteros y pastillas de tope de gama. Además, asegura un rendimiento óptimo con la limpieza y ajuste de frenos traseros."
    },
];

const JobsShowRoom = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (props, ref) => {
        const [selectedWork, setSelectedWork] = useState<{ id: number; title: string; category: string; images: string[]; description: string } | null>(null);
        const [categoryFilter, setCategoryFilter] = useState("");
        const filteredWorks = categoryFilter ? trabajosMecanicos.filter(work => work.category === categoryFilter) : trabajosMecanicos;
        // Configuración de react-slick para el carrusel
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768, // Para dispositivos móviles
                    settings: {
                        arrows: true, // Desactivar flechas en móviles si no se quieren mostrar
                        dots: true,    // Mostrar puntos de navegación
                    }
                },
            ]
        };

        return (
            <div ref={ref} {...props}>
                <Helmet>
                    <title>Portafolio de Mecánica | Mecánica Express Chacón</title>
                    <meta name="description" content="Mecánica Express Chacón ofrece servicios de reparación de motores, frenos y alineación. Explora nuestro portafolio de trabajos realizados." />
                    <meta name="keywords" content="Mecánica Express Chacón, reparación de autos, mecánico en [tu ciudad], frenos, motores, suspensión" />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:title" content="Portafolio de Trabajos de Mecánica Express Chacón" />
                    <meta property="og:description" content="Explora los trabajos de reparación y mantenimiento de vehículos realizados por Mecánica Express Chacón. Desde frenos hasta motores, tenemos lo que necesitas." />
                    <meta property="og:image" content="/images/trabajos/Daniel/VEHICULO.jpeg" />
                    <meta property="og:type" content="website" />
                    <script type="application/ld+json">
                        {`
                        {
                            "@context": "https://schema.org",
                            "@type": "Service",
                            "serviceType": "Reparación de vehículos",
                            "provider": {
                                "@type": "Organization",
                                "name": "Mecánica Express Chacón",
                                "url": "https://www.mecanicaexpresschacon.com"
                            },
                            "description": "Mecánica Express Chacón ofrece servicios de reparación de motores, frenos, alineación y más.",
                            "offers": {
                                "@type": "Offer",
                                "url": "https://www.mecanicaexpresschacon.com",
                                "priceCurrency": "CRC",
                                "price": "Consulta el precio en el sitio web"
                            }
                        }
                        `}
                    </script>
                </Helmet>

                <Container data-aos="fade-up" data-aos-duration="1500">

                    <Typography variant="h4" gutterBottom>Portafolio de Trabajos de nuestros clientes</Typography>

                    {/* Filtro por categoría */}
                    <Select
                        value={categoryFilter}
                        onChange={(e) => setCategoryFilter(e.target.value)}
                        displayEmpty
                        style={{ marginBottom: 20 }}
                    >
                        <MenuItem value="">Todas las Categorías</MenuItem>
                        <MenuItem value="Motores">Motores</MenuItem>
                        <MenuItem value="Frenos">Frenos</MenuItem>
                        <MenuItem value="Suspensión">Suspensión</MenuItem>
                        <MenuItem value="Transmisiones">Transmisiones</MenuItem>
                        <MenuItem value="Liquidos">Liquidos</MenuItem>
                    </Select>

                    {/* Galería de Trabajos */}
                    <Grid container spacing={3}>
                        {filteredWorks.map((work) => (
                            <Grid item xs={12} sm={6} md={4} key={work.id}>
                                <Card onClick={() => setSelectedWork(work)} style={{ cursor: "pointer" }}>
                                    <CardMedia component="img" height="200" image={work.images[0]} alt={work.title} />
                                    <CardContent>
                                        <Typography variant="h6">{work.title}</Typography>
                                        <Typography variant="subtitle2" color="textSecondary">{work.category}</Typography>
                                        <Typography variant="body2">{work.description}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    {/* Modal con detalles del trabajo */}
                    {selectedWork && (
                        <Dialog open={!!selectedWork} onClose={() => setSelectedWork(null)}>
                            <DialogTitle>{selectedWork.title}</DialogTitle>
                            <DialogContent>
                                {/* Carrusel con las imágenes del trabajo */}
                                <Slider {...settings}>
                                    {selectedWork.images.map((image, index) => (
                                        <div key={index}>
                                            <img
                                                src={image}
                                                alt={`${selectedWork.title} - Imagen ${index + 1}`}
                                                style={{
                                                    width: "100%",
                                                    borderRadius: 10,
                                                    objectFit: "cover", // Asegura que las imágenes no se deformen
                                                    height: "auto" // Permite que las imágenes se ajusten al tamaño sin perder proporción
                                                }}
                                            />
                                        </div>
                                    ))}
                                </Slider>
                                <hr />
                                <Typography variant="body1" style={{ marginTop: 10 }}>{selectedWork.description}</Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setSelectedWork(null)} color="primary">Cerrar</Button>
                            </DialogActions>
                        </Dialog>
                    )}

                </Container>
            </div>
        );
    }
);

export default JobsShowRoom;