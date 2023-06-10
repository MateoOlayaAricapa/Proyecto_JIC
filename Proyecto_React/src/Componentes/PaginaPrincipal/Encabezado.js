import React from "react";
import "../../Estilos/PaginaPrincipal/encabezado.css";
import { useNavigate } from "react-router-dom";

//Importando imágenes
import LogoWeb from "../../Multimedia/Logo_exportar.png";

//Esta componente contendrá la barra inicial de la página
function SeccionEncabezado({setInicio, setQuienes, setCreador}){

    const navigate = useNavigate();

    return(<div className="o-encabezado">
        
        <div className="o-contenedorLogo">
            <img src={LogoWeb} alt="Logo principal del sitio web"/>
        </div>

        <div className="o-contenedorBotonesMedio">
            <button onClick={() => {setInicio(true); setQuienes(false); setCreador(false)}}>Inicio</button>
            <button onClick={() => {setInicio(false); setQuienes(true); setCreador(false)}}>Quiénes somos</button>
            <button onClick={() => {setInicio(false); setQuienes(false); setCreador(true)}}>Creador</button>
        </div>

        <div className="o-contenedorBotonesRegistro">
            <button onClick={() => navigate("/PaginaRegistro")}>Registrate</button>
            <button onClick={() => navigate("/PaginaInicioSesion")} id="o-botonInicioSesion">Inicia sesión</button>
        </div>

    </div>);

}//Fin componente

export default SeccionEncabezado;