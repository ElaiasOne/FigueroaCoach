import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

// Importa los componentes LoginForm.js y RegistrationForm.js
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

const Encabezado = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLogin, setShowLogin] = useState(false); // Estado para mostrar el formulario de inicio de sesión
  const [showRegistration, setShowRegistration] = useState(false); // Estado para mostrar el formulario de registro

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      handleMenuClose();
    }
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowRegistration(false); // Asegúrate de ocultar el formulario de registro
    handleMenuClose();
  };

  const toggleRegistration = () => {
    setShowRegistration(!showRegistration);
    setShowLogin(false); // Asegúrate de ocultar el formulario de inicio de sesión
    handleMenuClose();
  };

  const reloadPage = () => {
    window.location.reload();
    handleMenuClose(); // Cierra el menú después de recargar la página
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography onClick={reloadPage} variant="h6" sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
          Figueroa Coach
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={reloadPage}>Inicio</MenuItem>
          <MenuItem onClick={() => scrollToSection('Planes')}>Planes</MenuItem>
          <MenuItem onClick={() => scrollToSection('AcercaDeMi')}>Sobre Mí</MenuItem>
          {/* Agrega opciones para Iniciar Sesión y Registrarse */}
          <MenuItem onClick={toggleLogin}>Iniciar Sesión</MenuItem>
          <MenuItem onClick={toggleRegistration}>Registrarse</MenuItem>
        </Menu>
      </Toolbar>
      {/* Muestra el formulario de inicio de sesión si showLogin es true */}
      {showLogin && <LoginForm />}
      {/* Muestra el formulario de registro si showRegistration es true */}
      {showRegistration && <RegistrationForm />}
    </AppBar>
  );
};

export default Encabezado;
