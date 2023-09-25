import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Importa el icono de check
import CancelIcon from '@mui/icons-material/Cancel'; // Importa el icono de cancel

const renderVentajas = (ventajas, showCheckIconIndices) => {
  const listStyle = {
    listStyleType: 'none', // Elimina los puntos negros de la lista
    padding: 0, // Elimina el espacio entre elementos de lista
    textAlign: 'left', // Alinea la lista a la izquierda
  };

  return (
    <ul style={listStyle}>
      {ventajas.map((ventaja, index) => (
        <li key={index}>
          {showCheckIconIndices.includes(index) ? (
            /* Cambia el color a verde */
            <CheckCircleIcon sx={{ color: 'success' }} />
          ) : (
            <CancelIcon sx={{ color: 'error' }} />
          )}{' '}
          {ventaja}
        </li>
      ))}
    </ul>
  );
};

const DetallePlan = ({ titulo, descripcion, precio, ventajas, showCheckIconIndices }) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <CardContent>
        <Typography variant="h5">{titulo}</Typography>
        <Typography variant="body2">{descripcion}</Typography>
        {renderVentajas(ventajas, showCheckIconIndices)}
        <Typography variant="h6" color="primary">
          ${precio}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DetallePlan;
