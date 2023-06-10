import React, { useState } from "react";
import "../../Estilos/PaginaPrincipal/paginaInicio.css";
import SeccionEncabezado from "./Encabezado";
import SeccionIntroduccion from "./Introduccion";
import SeccionPaginaCreador from "./Creador";
import SeccionPaginaQuieneSomos from "./QuieneSomos";

//Creando la componente principal de la página inicial
function PaginaInicio(){

    const [EstadoInicio, setEstadoInicio] = useState(true);
    const [EstadoQuieneSomos, setEstadoQuieneSomos] = useState(false);
    const [EstadotCreadores, setEstadotCreadores] = useState(false);

    return(<div className="o-contenedorPrincipal">

        <SeccionEncabezado setInicio={setEstadoInicio} setQuienes={setEstadoQuieneSomos} setCreador={setEstadotCreadores}/>
        {EstadoInicio && <SeccionIntroduccion/>}
        {EstadotCreadores && <SeccionPaginaCreador/>}
        {EstadoQuieneSomos && <SeccionPaginaQuieneSomos/>}

    </div>);

}//Fin componente

export default PaginaInicio;