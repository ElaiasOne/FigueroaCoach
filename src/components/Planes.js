import React from 'react';
import Grid from '@mui/material/Grid';
import DetallePlan from './DetallePlan';
import { Typography } from '@mui/material';

const planesData = [
  {
    titulo: 'Plan Completo',
    descripcion: 'Nuestro plan más completo que abarca todos los aspectos del entrenamiento.',
    precio: 5000,
    ventajas: ['Rutina de entrenamiento', 'Guía de alimentación', 'Guía de suplementación deportiva', 'Seguimientos semanales', 'Soporte vía WhatsApp 24/7'],
    showCheckIconIndices: [0, 1, 2, 3, 4], // Índices de las ventajas que deben mostrar el icono de check
  },
  {
    titulo: 'Rutina de Entrenamiento',
    descripcion: 'Plan diseñado para enfocarse en la rutina de ejercicios y el desarrollo físico.',
    precio: 3000,
    ventajas: ['Rutina de entrenamiento', 'Guía de alimentación', 'Guía de suplementación deportiva', 'Seguimientos semanales', 'Soporte vía WhatsApp 24/7'],
    showCheckIconIndices: [0], // Solo el primer índice muestra el icono de check
  },
  {
    titulo: 'Suplementación Deportiva',
    descripcion: 'Plan centrado en la suplementación y la nutrición deportiva.',
    precio: 2000,
    ventajas: ['Rutina de entrenamiento', 'Guía de alimentación', 'Guía de suplementación deportiva', 'Seguimientos semanales', 'Soporte vía WhatsApp 24/7'],
    showCheckIconIndices: [2], // Solo el tercer índice muestra el icono de check
  },
];

const Planes = () => {
  return (
    <div id='Planes' className="planes" style={{ marginBottom: '100px', marginLeft:'2%' , marginRight: '2%' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        PLANES
      </Typography>
      <Grid container spacing={10}>
        {planesData.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <DetallePlan {...plan} style={{ marginBottom: '20px' }} /> {/* Establece un margen inferior para las tarjetas */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Planes;
