// src/App.js
import React from 'react';
import Planes from './components/Planes';
import Encabezado from './components/Encabezado';
import PieDePagina from './components/PieDePagina';
import EncabezadoPrincipal from './components/EncabezadoPrincipal'; // Importa el encabezado principal
import AcercaDeMi from './components/AcercaDeMi';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Encabezado />
        <div style={{ textAlign: 'center' }}>
          <EncabezadoPrincipal /> {/* Centra el encabezado principal */}
        </div>
        <main style={{ textAlign: 'center' }}>
          <Planes />
          <AcercaDeMi /> {/* Agrega el componente AcercaDeMi aquí */}
        </main>
        <PieDePagina />
      </div>
    </ThemeProvider>
  );
}

export default App;
