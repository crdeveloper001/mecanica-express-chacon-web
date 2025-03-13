import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google"; // Ícono de Google

const placeId = "ChIJXVbKu_7loI8R2kspj1o1WxA"; // Reemplaza con tu Place ID real
const googleReviewsUrl = `https://search.google.com/local/reviews?placeid=${placeId}`;

const GoogleReviews = () => {
    return (
        <Card sx={{ maxWidth: 400, textAlign: "center", mx: "auto", p: 2, boxShadow: 3 }}>
            <CardContent>
                <GoogleIcon sx={{ fontSize: 50, color: "#4285F4" }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                    Opiniones de nuestros clientes
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
                    Consulta las opiniones reales de nuestros clientes en Google.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    href={googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ mt: 1 }}
                >
                    Ver Opiniones
                </Button>
            </CardContent>
        </Card>
    );
};

export default GoogleReviews;
