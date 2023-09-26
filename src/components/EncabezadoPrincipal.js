// src/components/EncabezadoPrincipal.js
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const EncabezadoPrincipal = () => {
  return (
    <div>
            <img
        draggable="false"
        src={require('../assets/profile.jfif')} // Utiliza require para la ruta
        alt=""
        style={{border: '1px solid #000' ,borderRadius: '50%' ,marginTop: '30px', width: '30%', height: '30%', draggable: 'false'}}
      />
    <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', marginBottom: '100px', marginTop: '30px', marginLeft:'10%' , marginRight: '10%' }}>
      <Typography variant="h4">IFBB INTERNATIONAL PERSONAL TRAINER</Typography>
      <Typography variant="body1">
        Hoy es el momento de llegar a vos que estás en algún lugar del mundo necesitando respuestas y asesoramiento serio, confiable y por sobre todas las cosas 100% REAL. Estoy convencido que puedo darte lo que necesitas para transformar tu cuerpo. ¡Contáctame y empecemos a trabajar juntos! Ayer dijiste mañana. ¡No más! Hoy es el mejor día para empezar a cambiar tu vida. ¡MUEVETE!
      </Typography>
    </Paper>
    </div>
  );
};

export default EncabezadoPrincipal;
