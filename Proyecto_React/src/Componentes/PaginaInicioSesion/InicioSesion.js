import React from "react";
import "../../Estilos/PaginaInicioSesion/iniciosesion.css";
import SeccionInicioSesion from "./SeccionInicioSesion";
import { useNavigate } from "react-router-dom";

//Importando imagen del logo
import LogoPlataforma from "../../Multimedia/Logo_exportar.png";

//Componente que contendrá toda la lógica para iniciar sesión
function PaginaInicioSesion(){

    const navigate = useNavigate();

    return(<div className="o-contenedorPaginaInicioSesion">
        
        <div onClick={() => navigate("/")} className="o-logoInicioSesion">
            <img src={LogoPlataforma} alt="Logo de la plataforma jardines"/>
        </div>

        <SeccionInicioSesion/>

    </div>)

}//Fin componente

export default PaginaInicioSesion;