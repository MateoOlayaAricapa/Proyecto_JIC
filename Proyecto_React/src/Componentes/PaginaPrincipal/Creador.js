import React from "react";
import "../../Estilos/PaginaPrincipal/creador.css";

//Importando iconos o imágenes al espacio de trabajo
import FotoCreador from "../../Multimedia/FotoCreador.png";

//Esta componente tendrá la lógica para mostrar información del creador del proyecto
function SeccionPaginaCreador(){

    return(<div className="o-contenedorPaginaCreador">
        
        <div className="o-informacionCreador">
            
            <div id="contenedorTextoTitulo" className="o-tituloCreador">
                <h1>SOBRE MÍ</h1>
                <h2>DÉJAME CONTARTE</h2>
                <div className="o-separadorCreador"/>
            </div>

            <div id="contenedorTextoTitulo" className="o-textoCreador">
                <p>Soy un Ingeniero Multimedia que tiene una gran pasión por el desarrollo de aplicaciones web y móviles. Además de buscar las herramientas necesarias para integrar el diseño creativo. <br/><br/> Por otro lado, desarrollé este proyecto con el objetivo de poner en práctica mis conocimientos aprendidos en mi carrera, y ciertamente solucionar una problemática relacionada con la búsqueda de información sobre los jardínes infantiles que prestan diferentes servicios a la ciudadanía.</p>
            </div>

        </div>

        <div className="o-imagenCreador">
            <img src={FotoCreador} alt="Foto del ingeniero multimedia que desarrollo el proyecto"/>
        </div>

    </div>)

}//Fin componente

export default SeccionPaginaCreador;