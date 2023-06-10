import React from "react";
import "../../Estilos/PaginaRegistro/registro.css";
import SeccionRegistro from "./SeccionRegistro";
import { useNavigate } from "react-router-dom";

//Importando imágenes
import LogoPlataforma from "../../Multimedia/Logo_exportar.png";

//Creando la componente de la página para registrarse en la plataforma
function PaginaRegistro(){

    const navigate = useNavigate();

    return(<div className="o-paginaRegistro">

            <div onClick={() => navigate("/")} className="o-contenedorLogoRegistro">
                <img src={LogoPlataforma} alt="Logo que representa la marca de la plataforma"/>
            </div>

            <SeccionRegistro/>

    </div>)

}//Fin componente

export default PaginaRegistro;