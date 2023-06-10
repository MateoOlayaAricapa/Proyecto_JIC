import React from "react";
import "../../Estilos/PaginaPrincipal/introduccion.css";

//Importando imágenes
import familia from "../../Multimedia/Familia.png";

//Esta componente contiene información sobre la introducción de la página
function SeccionIntroduccion(){

    return(<div className="o-contenedorIntroduccion">
        
        <div className="o-textoIntroduccion">
            <h1>Introducción al servicio de JIC</h1>
            <p>Este sitio web oficial permitirá a los padres de familia poder buscar información precisa y clara sobre el servicio que prestan diferentes jardines infantiles en la ciudad de Cali, lo cual encontrará datos como dirección, teléfonos, reseñas, costos, actividades, entre otros. </p>
        </div>

        <div className="o-contenedorImagenIntroduccion">
            <img src={familia} alt="Imagen principal sobre una madre con su hijo"/>
        </div>

    </div>);

}//Fin componente

export default SeccionIntroduccion;