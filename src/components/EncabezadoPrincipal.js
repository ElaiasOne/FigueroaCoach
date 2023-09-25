// src/components/EncabezadoPrincipal.js
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const EncabezadoPrincipal = () => {
  return (
    <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', marginBottom: '20px' }}>
      <Typography variant="h4">IFBB INTERNATIONAL PERSONAL TRAINER</Typography>
      <Typography variant="body1">
        Hoy es el momento de llegar a vos que estás en algún lugar del mundo necesitando respuestas y asesoramiento serio, confiable y por sobre todas las cosas 100% REAL. Estoy convencido que puedo darte lo que necesitas para transformar tu cuerpo. ¡Contáctame y empecemos a trabajar juntos! Ayer dijiste mañana. ¡No más! Hoy es el mejor día para empezar a cambiar tu vida. ¡MUEVETE!
      </Typography>
    </Paper>
  );
};

export default EncabezadoPrincipal;
