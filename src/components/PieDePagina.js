import React from 'react';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const PieDePagina = () => {
  const instagramUrl = 'https://www.instagram.com/eliasfigueroaifbb/';
  const whatsappUrl = 'https://wa.link/pgg9n3';

  const footerStyle = {
    backgroundColor: '#333', // Cambia el color de fondo
    color: '#fff', // Texto blanco
    padding: '10px', // Espaciado interior
  };

  return (
    <footer style={footerStyle}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
          <InstagramIcon color="action" fontSize="large" /> {/* Cambia el color de los iconos */}
        </a>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon color="action" fontSize="large" /> {/* Cambia el color de los iconos */}
        </a>
      </div>
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginBottom: '10px', color: '#fff' }}>
        Todos los derechos reservados &copy; {new Date().getFullYear()} Figueroa Coach
      </Typography>
    </footer>
  );
};

export default PieDePagina;
