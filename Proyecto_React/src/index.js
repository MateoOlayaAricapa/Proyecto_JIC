import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PaginaInicio from './Componentes/PaginaPrincipal/PaginaPrincipal';
import PaginaRegistro from './Componentes/PaginaRegistro/Registro';
import PaginaInicioSesion from './Componentes/PaginaInicioSesion/InicioSesion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaBusquedaJardines from './Componentes/PaginaBusqueda/PaginaBusqueda';
import {DataContextProvider} from "./ContextAPI/contextAPI.js";
import PaginaConfiguracionPerfil from './Componentes/PaginaConfiguración/PaginaConfiguracion';
import PaginaInformacionJardin from './Componentes/PaginaInfoJardin/PaginaDatosJardin';

const root = ReactDOM.createRoot(document.getElementById('root'));

//Renderizando las componentes a crear en el navegador web
//Es necesario implementar React Router con el fin de establecer inicialmente las rutas
root.render(
  <React.StrictMode>
    
      <BrowserRouter>
        <DataContextProvider>
          <Routes>
      
              <Route path='/' element={<PaginaInicio/>}/>
              <Route path='/PaginaRegistro' element={<PaginaRegistro/>}/>
              <Route path='/PaginaInicioSesion' element={<PaginaInicioSesion/>}/>
              <Route path='/PaginaBusquedaJIC' element={<PaginaBusquedaJardines/>}/>
              <Route path='/PaginaConfiguracion' element={<PaginaConfiguracionPerfil/>}/>
              <Route path='/PaginaInformacionJardin/:codigodni' element={<PaginaInformacionJardin/>}/>
              
          </Routes>
        </DataContextProvider>
      </BrowserRouter>
    
  </React.StrictMode>
);

