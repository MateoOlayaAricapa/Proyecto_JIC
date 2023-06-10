import React from "react";
import "../../Estilos/PaginaPrincipal/quienesomos.css";

//Importando imágenes
import ImagenMiembro1 from "../../Multimedia/Perfil_Hombre1.jpg";
import ImagenMiembro2 from "../../Multimedia/Perfil_Hombre2.jpg";
import ImagenMiembro3 from "../../Multimedia/Perfil_Mujer.jpg";

//Componente que conserva la lógica para presentar la información sobre quiénes somos
function SeccionPaginaQuieneSomos(){
    
    const ArregloDatosMiembros = [{fotoM:ImagenMiembro1, nombreM:"Carlos Aristizabal", cargoM:"CEO empresa"},
    {fotoM:ImagenMiembro2, nombreM:"Hector Fabian", cargoM:"CEO empresa"},
    {fotoM:ImagenMiembro3, nombreM:"Jennifer Mosquera", cargoM:"CEO empresa"}]

    return(<div className="o-contenedorDatosQuieneSomos">
        
        <div className="o-informacionInicialQuieneSomos">
            <h1>Sobre nosotros</h1>
            <p>Somos una empresa que se enfoca en presentar información detallada 
                y clara sobre los diferentes jardínes infantiles que prestan sus servicios 
                en la ciudad de Cali. Además de estar siempre a la vanguardia de la tecnología 
                emergente que permita proporcionarle a la ciudadanía una acceso fácil y seguro 
                a un sitio web donde logren encontrar datos confiables sobre lo que desean buscar.</p>
        </div>

        <div className="o-informacionMiembros">
            
            <div className="o-tituloMiembros">
                <h1>Nuestros miembros</h1>
            </div>

            <div className="o-imagenesMiembros">
                
                {ArregloDatosMiembros.map((dato, i) => 

                <div className="o-datoMiembro" key={i}>
                    <div className="o-fotoPersona">
                        <img src={dato.fotoM} alt="Foto de perfil miembro de la empresa"/>
                    </div>
                    <h3>{dato.nombreM}</h3>
                    <h4>{dato.cargoM}</h4>
                </div>
                
                )}

            </div>

        </div>

    </div>)

}//Fin componente

export default SeccionPaginaQuieneSomos;