import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material'; 


export const PageNotFound = () => {
    return (
        <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                <Typography variant="h2" gutterBottom>
                    Explora productos 
                </Typography>
                <Typography variant="body1" gutterBottom>
                    mira una de las mejores ofertas 
                </Typography>
                <Typography variant="body1" gutterBottom>
                    busca , pide , y compra , lo que quieras 
                </Typography>
                <Typography variant="body1" gutterBottom>
                    pagina para  mi trabajo de react . mira profe lo que logre , para decirte verdad tuve 
                    que buscar un poco de ayuda , pero gracias profe eres el mejor , me enseñastes demaciado, 
                    para mi eres uno de los mejores profes , me encata tu metodologia 
                </Typography>
            </Box>
            <Button
                component={Link}
                to="/"
                variant="contained"
                color="primary"
                size="large"
                sx={{ marginTop: 2 }}
            >
                compra 
            </Button>
        </Container>
    );
};