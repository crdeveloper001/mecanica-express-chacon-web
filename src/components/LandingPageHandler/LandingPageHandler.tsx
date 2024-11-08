import { useRef } from 'react';
import AboutPage from '../AboutPage/AboutPage';
import InitialPage from '../InitialPage/InitialPage';
import NavigationHandler from '../Navigation/NavigationHandler';
import QuickServicesPage from '../QuickServicesPage/QuickServicesPage';
import ServicesPage from '../ServicesPage/ServicesPage';
import ClientsPage from '../ClientsPage/ClientsPage';
import ContactUs from '../ContactPage/ContactUs';
import FlotingWhatsappButton from '../../utils/FlotingWhatsappButton/FlotingWhatsappButton';

const LandingPageHandler = () => {
    const initialPageRef = useRef(null);
    const aboutRef = useRef(null);
    const quickServicesRef = useRef(null);
    const especialServicesRef = useRef(null);
    const clientRef = useRef(null);
    const contactUsRef = useRef(null);
    return (
        <>
            <NavigationHandler refs={{
                'Inicio': initialPageRef,
                'Acerca': aboutRef,
                'Servicios Rapidos': quickServicesRef,
                'Servicios Automotrices': especialServicesRef,
                'Clientes': clientRef,
                'Contáctanos': contactUsRef
            }} />
            <InitialPage ref={initialPageRef} />
            <br />
            <AboutPage ref={aboutRef} />
            <br />
            <QuickServicesPage ref={quickServicesRef} />
            <br />
            <ServicesPage ref={especialServicesRef} />
            <br />
            <ClientsPage ref={clientRef} />
            <ContactUs ref={contactUsRef} />
            <FlotingWhatsappButton />
        </>
    );
};

export default LandingPageHandler;
