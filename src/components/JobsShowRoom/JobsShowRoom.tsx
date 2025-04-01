import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
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
    Box,
    Divider,
    IconButton,
    Paper,
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
    {
        id: 6,
        title: "Revision y cambio de pastillas de frenos",
        category: "Frenos",
        images: [
            "/images/trabajos/Cliente-Mercedes-glz-2017/VEHICULO.jpeg",
            "/images/trabajos/Cliente-Mercedes-glz-2017/ANTES1.jpeg",
            "/images/trabajos/Cliente-Mercedes-glz-2017/ANTES2.jpeg",
            "/images/trabajos/Cliente-Mercedes-glz-2017/DESPUES1.jpeg",

        ],
        description: "Se realiza el cambio de pastillas de frenos viejos que presentaban desgaste, y se reemplazan con los nuevos y se sincronizan mediante escaner."
    }
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
                    {/* ✅ Mejor título con palabras clave */}
                    <title>Portafolio de Mecánica - Reparación de Autos | Mecánica Express Chacón</title>

                    {/* ✅ Descripción más optimizada para buscadores */}
                    <meta
                        name="description"
                        content="Explora nuestro portafolio de trabajos mecánicos en Mecánica Express Chacón. Reparación de frenos, motores, transmisión y más. ¡Servicio confiable y de calidad!"
                    />

                    {/* ✅ Keywords relevantes para búsquedas */}
                    <meta
                        name="keywords"
                        content="reparación de autos, mecánica automotriz, frenos, motores, transmisión, alineación, taller mecánico, Mecánica Express Chacón"
                    />

                    {/* ✅ Indexación adecuada */}
                    <meta name="robots" content="index, follow" />

                    {/* ✅ Optimización para Open Graph (Facebook, LinkedIn) */}
                    <meta property="og:title" content="Portafolio de Trabajos - Mecánica Express Chacón" />
                    <meta property="og:description" content="Revisión, mantenimiento y reparación de vehículos en nuestro taller mecánico. Mira nuestros trabajos realizados." />
                    <meta property="og:image" content="/images/trabajos/Daniel/VEHICULO.jpeg" />
                    <meta property="og:url" content="https://www.mecanicaexpresschacon.com" />
                    <meta property="og:type" content="website" />

                    {/* ✅ Optimización para Twitter */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Portafolio de Trabajos - Mecánica Express Chacón" />
                    <meta name="twitter:description" content="Explora nuestros trabajos de mecánica automotriz. Servicio profesional y garantizado." />
                    <meta name="twitter:image" content="/images/trabajos/Daniel/VEHICULO.jpeg" />

                    {/* ✅ Datos estructurados para Google (Schema.org) */}
                    <script type="application/ld+json">
                        {`
        {
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Mecánica Express Chacón",
            "image": "/images/trabajos/Daniel/VEHICULO.jpeg",
            "url": "https://www.mecanicaexpresschacon.com",
            "description": "Servicio de mecánica automotriz en reparación de frenos, motores, transmisión y más. Calidad garantizada.",
            "address": {
                "@type": "11305",
                "streetAddress": "Cuatro Reinas de Tibas, San Jose",
                "addressLocality": "San Jose",
                "addressCountry": "Costa Rica"
            },
            "telephone": "+506 63422141",
            "openingHours": "Mo-Fr 08:00-18:00"
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

                        {filteredWorks.length === 0 ? (
                            <Grid item xs={12}>
                                <Card style={{ padding: 20, textAlign: "center" }}>
                                    <CardContent>
                                        <Typography variant="h6">No hay trabajos en esta categoría</Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            Por favor, selecciona otra categoría o revisa más tarde.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ) : (
                            filteredWorks.map((work) => (
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
                            ))
                        )}
                    </Grid>

                    {/* Modal con detalles del trabajo */}
                    {selectedWork && (

                        <Dialog
                            open={!!selectedWork}
                            onClose={() => setSelectedWork(null)}
                            maxWidth="md" // Ajuste de tamaño del modal
                            fullWidth // Hace que el diálogo use todo el ancho permitido
                        >
                            <DialogTitle>
                                {selectedWork.title}
                                <IconButton
                                    aria-label="close"
                                    onClick={() => setSelectedWork(null)}
                                    sx={{
                                        position: "absolute",
                                        right: 8,
                                        top: 8,
                                        color: (theme) => theme.palette.grey[500],
                                    }}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </DialogTitle>

                            <DialogContent>
                                {/* Carrusel con imágenes */}
                                <Box display="flex" justifyContent="center" mb={2}>
                                    <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 2, width: "100%", maxWidth: 550, mx: "auto" }}>
                                        <Slider {...settings}>
                                            {selectedWork.images.map((image, index) => (
                                                <div key={index} style={{ display: "flex", justifyContent: "center" }}>
                                                    <img
                                                        src={image}
                                                        alt={`${selectedWork.title} - Imagen ${index + 1}`}
                                                        style={{
                                                            width: "100%",       // Ocupar todo el ancho del contenedor
                                                            maxWidth: "500px",   // No sobrepasar un tamaño máximo
                                                            height: "300px",     // Tamaño uniforme para todas las imágenes
                                                            objectFit: "cover",  // Evitar distorsiones
                                                            borderRadius: "8px",
                                                        }}
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                    </Paper>


                                </Box>

                                <Divider sx={{ my: 2 }} />

                                {/* Descripción */}
                                <Typography variant="body1" textAlign="justify">
                                    {selectedWork.description}
                                </Typography>
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={() => setSelectedWork(null)} color="primary" variant="contained">
                                    Cerrar
                                </Button>
                            </DialogActions>
                        </Dialog>
                    )}

                </Container>
            </div>
        );
    }
);

export default JobsShowRoom;