import React, { useState, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GetAppIcon from "@mui/icons-material/GetApp";
import ShareIcon from "@mui/icons-material/Share";
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
    useTheme,
    useMediaQuery,
    Chip,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import Slide from "@mui/material/Slide";
import Slider from "react-slick";

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

const Transition = React.forwardRef(function Transition(
    props: any,
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const JobsShowRoom = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    (props, ref) => {
        const theme = useTheme();
        const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

        const [selectedWork, setSelectedWork] = useState<{ id: number; title: string; category: string; images: string[]; description: string } | null>(null);
        const [categoryFilter, setCategoryFilter] = useState("");
        const [currentIndex, setCurrentIndex] = useState(0);
        const sliderRef = useRef<any>(null);

        const filteredWorks = categoryFilter ? trabajosMecanicos.filter(work => work.category === categoryFilter) : trabajosMecanicos;

        const settings = {
            dots: false,
            infinite: true,
            speed: 400,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: true,
            beforeChange: (_: number, next: number) => setCurrentIndex(next),
        };

        const openWork = (work: typeof trabajosMecanicos[0]) => {
            setSelectedWork(work);
            setCurrentIndex(0);
            setTimeout(() => {
                sliderRef.current?.slickGoTo(0);
            }, 0);
        };

        const handlePrev = () => {
            sliderRef.current?.slickPrev();
        };
        const handleNext = () => {
            sliderRef.current?.slickNext();
        };

        const handleDownload = () => {
            if (!selectedWork) return;
            const url = selectedWork.images[currentIndex];
            const a = document.createElement("a");
            a.href = url;
            a.download = url.split("/").pop() || "image.jpg";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };

        const handleShare = async () => {
            if (!selectedWork) return;
            const url = selectedWork.images[currentIndex];
            if ((navigator as any).share) {
                try {
                    await (navigator as any).share({
                        title: selectedWork.title,
                        text: selectedWork.description,
                        url,
                    });
                } catch (e) {
                    // user cancelled or errored
                }
            } else {
                // Fallback: copy link
                try {
                    await navigator.clipboard.writeText(url);
                    alert("Enlace copiado al portapapeles");
                } catch {
                    // ignore
                }
            }
        };

        return (
            <div ref={ref} {...props}>
                <Helmet>
                    <title>Portafolio de Mecánica - Reparación de Autos | Mecánica Express Chacón</title>
                    <meta name="description" content="Explora nuestro portafolio de trabajos mecánicos en Mecánica Express Chacón. Reparación de frenos, motores, transmisión y más. ¡Servicio confiable y de calidad!" />
                    <meta name="keywords" content="reparación de autos, mecánica automotriz, frenos, motores, transmisión, alineación, taller mecánico, Mecánica Express Chacón" />
                    <meta name="robots" content="index, follow" />
                    <meta property="og:title" content="Portafolio de Trabajos - Mecánica Express Chacón" />
                    <meta property="og:description" content="Revisión, mantenimiento y reparación de vehículos en nuestro taller mecánico. Mira nuestros trabajos realizados." />
                    <meta property="og:image" content="/images/trabajos/Daniel/VEHICULO.jpeg" />
                </Helmet>

                <Container data-aos="fade-up" data-aos-duration="1500">
                    <Typography variant="h4" gutterBottom>Portafolio de Trabajos de nuestros clientes</Typography>

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
                                    <Card onClick={() => openWork(work)} style={{ cursor: "pointer" }}>
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

                    {selectedWork && (
                        <Dialog
                            open={!!selectedWork}
                            onClose={() => setSelectedWork(null)}
                            maxWidth="lg"
                            fullWidth
                            fullScreen={fullScreen}
                            TransitionComponent={Transition}
                            aria-labelledby="work-dialog-title"
                            onKeyDown={(e) => {
                                if (e.key === "ArrowLeft") handlePrev();
                                if (e.key === "ArrowRight") handleNext();
                            }}
                        >
                            <DialogTitle id="work-dialog-title" sx={{ pr: 6 }}>
                                <Box display="flex" alignItems="center" justifyContent="space-between">
                                    <Box>
                                        <Typography variant="h6">{selectedWork.title}</Typography>
                                        <Chip label={selectedWork.category} size="small" sx={{ mt: .5 }} />
                                    </Box>
                                    <IconButton
                                        aria-label="close"
                                        onClick={() => setSelectedWork(null)}
                                        sx={{ position: "absolute", right: 8, top: 8 }}
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </Box>
                            </DialogTitle>

                            <DialogContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={7}>
                                        <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 2 }}>
                                            <Box position="relative">
                                                <Box sx={{ position: "absolute", left: 8, top: "50%", transform: "translateY(-50%)", zIndex: 10 }}>
                                                    <IconButton onClick={handlePrev} aria-label="previous image" size="small">
                                                        <ArrowBackIosNewIcon />
                                                    </IconButton>
                                                </Box>

                                                <Box sx={{ position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", zIndex: 10 }}>
                                                    <IconButton onClick={handleNext} aria-label="next image" size="small">
                                                        <ArrowForwardIosIcon />
                                                    </IconButton>
                                                </Box>

                                                <Box p={2}>
                                                    <Slider ref={sliderRef} {...settings}>
                                                        {selectedWork.images.map((image, index) => (
                                                            <div key={index} style={{ display: "flex", justifyContent: "center" }}>
                                                                <img
                                                                    src={image}
                                                                    alt={`${selectedWork.title} - Imagen ${index + 1}`}
                                                                    style={{
                                                                        width: "100%",
                                                                        maxHeight: fullScreen ? "60vh" : 420,
                                                                        objectFit: "cover",
                                                                        borderRadius: 6,
                                                                    }}
                                                                    loading="lazy"
                                                                />
                                                            </div>
                                                        ))}
                                                    </Slider>

                                                    <Box display="flex" justifyContent="center" alignItems="center" mt={1} gap={1} flexWrap="wrap" sx={{ px: 1 }}>
                                                        {selectedWork.images.map((thumb, i) => (
                                                            <Box
                                                                key={i}
                                                                component="button"
                                                                onClick={() => {
                                                                    sliderRef.current?.slickGoTo(i);
                                                                    setCurrentIndex(i);
                                                                }}
                                                                aria-label={`Ver miniatura ${i + 1}`}
                                                                style={{
                                                                    border: currentIndex === i ? `2px solid ${theme.palette.primary.main}` : "1px solid #ddd",
                                                                    padding: 0,
                                                                    background: "transparent",
                                                                    cursor: "pointer",
                                                                    borderRadius: 4,
                                                                }}
                                                            >
                                                                <img
                                                                    src={thumb}
                                                                    alt={`Miniatura ${i + 1}`}
                                                                    style={{ width: 72, height: 48, objectFit: "cover", display: "block", borderRadius: 4 }}
                                                                    loading="lazy"
                                                                />
                                                            </Box>
                                                        ))}
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Paper>
                                    </Grid>

                                    <Grid item xs={12} md={5}>
                                        <Typography variant="subtitle2" color="textSecondary">Descripción</Typography>
                                        <Typography variant="body1" paragraph sx={{ textAlign: "justify" }}>
                                            {selectedWork.description}
                                        </Typography>

                                        <Divider sx={{ my: 1 }} />

                                        <Box display="flex" alignItems="center" justifyContent="space-between" mb={2} mt={1}>
                                            <Typography variant="caption" color="textSecondary">
                                                Imagen {currentIndex + 1} de {selectedWork.images.length}
                                            </Typography>

                                            <Box>
                                                <IconButton aria-label="descargar imagen" onClick={handleDownload}>
                                                    <GetAppIcon />
                                                </IconButton>
                                                <IconButton aria-label="compartir imagen" onClick={handleShare}>
                                                    <ShareIcon />
                                                </IconButton>
                                            </Box>
                                        </Box>

                                        <Button variant="contained" color="primary" fullWidth onClick={() => setSelectedWork(null)}>
                                            Cerrar
                                        </Button>
                                    </Grid>
                                </Grid>
                            </DialogContent>

                            <DialogActions>
                                <Button onClick={() => setSelectedWork(null)} color="inherit">Cerrar</Button>
                            </DialogActions>
                        </Dialog>
                    )}
                </Container>
            </div>
        );
    }
);

export default JobsShowRoom;