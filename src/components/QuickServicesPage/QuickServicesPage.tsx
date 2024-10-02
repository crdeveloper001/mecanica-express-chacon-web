import { Grid, Card, CardContent, CardMedia, Typography, Box } from "@mui/material"
import ToolIcon from '../../assets/images/repairing-service.png'
import './index.css'
const QuickServicesPage = () => {
    return (
        <>
            <div className="DividerSection"></div>
            <Typography variant="h3" color="error" align="center" fontStyle={'italic'} fontWeight={'bold'} mt={5}>
                SERVICIOS RAPIDOS
            </Typography>
            <Box sx={{ padding: 2 }}>
                <Grid container spacing={2} justifyContent="center">
                    {[
                        {
                            title: "Asistencia en carretera",
                            description:
                                "Siempre a tu lado cuando más lo necesitas. Te brindamos ayuda inmediata en caso de averías, ponchaduras o emergencias en la vía.",
                        },
                        {
                            title: "Mecanica Rapida",
                            description:
                                "¡Mantenimiento express! Cambios de aceite, revisión de frenos y más, para que sigas tu camino sin demoras.",
                        },
                        {
                            title: "Mecanica Automotriz",
                            description:
                                "Servicios integrales de reparación y mantenimiento para que tu vehículo siempre esté en óptimas condiciones.",
                        },
                        {
                            title: "Revision y Preparacion vehicular para Dekra",
                            description:
                                "Asegúrate de pasar la revisión vehicular con éxito. Preparamos tu coche para cumplir con todos los requisitos técnicos.",
                        },
                        {
                            title: "Reparacion de llantas",
                            description:
                                "Reparamos y cambiamos tus llantas con rapidez y calidad, para que sigas conduciendo con seguridad.",
                        },
                        {
                            title: "Evaluacion y revision de compras de vehiculos",
                            description:
                                "Te ayudamos a tomar la mejor decisión antes de comprar un auto. Revisamos el estado mecánico y te damos un informe detallado para que compres con confianza.",
                        },
                    ].map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card data-aos="fade-up"
                                data-aos-duration="2000">
                                <CardMedia
                                    component="img"
                                    alt={`Image ${index + 1}`}
                                    image={ToolIcon}
                                    style={{
                                        objectFit: 'cover',
                                        width: '30%',
                                        display: 'block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2" color="red" align="center">
                                        {service.title}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary" component="p" fontSize={15} fontFamily={''}>
                                        {service.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default QuickServicesPage