import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import LogoPage from '../../assets/images/icons/PageLogo.png'
// WhatsApp number and default message

const FlotingWhatsappButton: React.FC = () => {

    return (
        <>

            <FloatingWhatsApp
                phoneNumber='50663422141'
                accountName='Mecanica Express Chacon'
                chatMessage='Hola! escribenos si necesitas ayudas en carretera o por algun servicio de mecanica rapida'
                statusMessage='Respuestas segun la cola de mensajes'
                avatar={LogoPage}

            />

        </>
    );
};


export default FlotingWhatsappButton;
