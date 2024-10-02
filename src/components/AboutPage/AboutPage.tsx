
import './index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Button, Typography, styled, Avatar, Stack, Card } from '@mui/material';
import TickIcon from '../../assets/images/tick.png';
import iconWhatsapp from '../../assets/images/whatsapp.png';

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body1,
    textAlign: "center",
    color: theme.palette.text.secondary,
    padding: theme.spacing(2),

    // Define styles for different breakpoints
    [theme.breakpoints.up("xs")]: {
        maxWidth: "90%",
        margin: "0 auto",
    },
    [theme.breakpoints.up("sm")]: {
        maxWidth: "75%",
    },
    [theme.breakpoints.up("md")]: {
        maxWidth: "60%",
    },
    [theme.breakpoints.up("lg")]: {
        maxWidth: "50%",
    },

    ...theme.applyStyles("dark", {
        backgroundColor: "#1A2027",
    }),
}));

const AboutPage = () => {
    return (
        <HelmetProvider>
            <>
                <Helmet>
                    <title>Porque Nosotros | Mecánica Express Chacón</title>
                    <meta name="description" content="En Mecánica Express Chacón, ofrecemos compromiso, confianza, respuesta inmediata y un servicio integral para todas las necesidades de tu vehículo." />
                    <meta name="keywords" content="Mecánica, Asistencia en carretera, Compromiso, Confianza, Servicio Automotriz" />
                </Helmet>


                <Typography variant="h1" align="center" mt={5} mb={5} color="error">
                    Porque nosotros?
                </Typography>
                <Stack
                    direction={{ xs: 'column', md: 'row', sm: 'row' }}
                    spacing={{ xs: 1, sm: 10, md: 20 }}
                >
                    <Item>
                        <img
                            alt="trust"
                            src={TickIcon}
                            style={{ width: 150, height: 'auto', justifyItems: 'center', marginBottom: '30px' }}
                        />
                        <Typography variant="h4" color="initial">
                            COMPROMISO Y CONFIANZA
                        </Typography>
                        <p className="Descriptions">
                            En Mecánica Express Chacón, entendemos lo importante que es tu vehículo para ti. Por eso,
                            nuestro compromiso es brindarte un servicio rápido, seguro y confiable, para que puedas volver
                            a la carretera sin preocupaciones. Nuestra experiencia y pasión por la mecánica automotriz nos
                            permiten ofrecer soluciones efectivas y personalizadas para cada situación.
                        </p>
                    </Item>
                    <Item>
                        <img
                            alt="trust"
                            src={TickIcon}
                            style={{ width: 150, height: 'auto', justifyItems: 'center', marginBottom: '30px' }}
                        />
                        <Typography variant="h4" color="initial">
                            RESPUESTA INMEDIATA
                        </Typography>
                        <p className="Descriptions">
                            Ofrecemos asistencia en carretera cuando más lo necesitas. Ya sea que te enfrentes a una avería
                            inesperada o simplemente necesites ayuda con un cambio de neumáticos, nuestro equipo está
                            siempre listo para atenderte de forma inmediata y llevar la tranquilidad a tu camino. Estamos
                            disponibles 24/7 para asegurarnos de que nunca estés solo.
                        </p>
                        <Button
                            variant="contained"
                            color="error"
                            sx={{ fontSize: 30, borderRadius: 25 }}
                            href="https://wa.link/0q4wcv"
                        >
                            AGENDAR CITA YA
                            <Avatar src={iconWhatsapp} sx={{ marginLeft: 2.3 }} />
                        </Button>
                    </Item>
                    <Item>
                        <img
                            alt="trust"
                            src={TickIcon}
                            style={{ width: 150, height: 'auto', justifyItems: 'center', marginBottom: '30px' }}
                        />
                        <Typography variant="h4" color="initial">
                            SERVICIO INTEGRAL Y PROFESIONALISMO
                        </Typography>
                        <p className="Descriptions">
                            Nuestro equipo está formado por expertos altamente capacitados que entienden todas las
                            necesidades de tu vehículo, desde el mantenimiento regular hasta reparaciones complejas. Nos
                            destacamos por nuestro enfoque integral, cuidando cada detalle y ofreciéndote transparencia y
                            honestidad en cada servicio. En Mecánica Express Chacón, tu seguridad y satisfacción son
                            nuestras prioridades.
                        </p>
                    </Item>
                </Stack>

            </>
        </HelmetProvider>
    );
};

export default AboutPage;
