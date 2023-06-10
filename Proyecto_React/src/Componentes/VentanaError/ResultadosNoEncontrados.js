import React from "react";
import "../../Estilos/ResultadosNoEncontrados/resultadosnoencontrados.css";

//Importando imagen
import IconoError from "../../Multimedia/IconoError.png";

//Componente que conserva la lógica de mostrar un mensaje de resultados no encontrados
function SeccionResultadosNoEncontrados(){

    return(<div className="o-contenedorMensajeError">
        
        <div className="o-IconoMensajeError">
            <img src={IconoError} alt="Icono que representa un error de búsqueda"/>
        </div>

        <div className="o-TextosMensajeError">
            <h1>RESULTADOS NO ENCONTRADOS</h1>
            <h3>Nosotros no podemos buscar lo que quieres encontrar</h3>
            <h3>Intenta buscar de nuevo, por favor</h3>
        </div>

    </div>)

}//Fin componente

export default SeccionResultadosNoEncontrados;