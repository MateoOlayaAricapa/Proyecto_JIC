import React from "react";
import "../../Estilos/PaginaInfoJardin/componentesadicionales.css";

//Importando imágenes
import ImagenPrueba from "../../Multimedia/ImagenPruebaJardin.jpg";
import ImagenDireccion from "../../Multimedia/IconoDireccion.png";
import ImagenVerificado from "../../Multimedia/Seguro.png";
import IconoCupo from "../../Multimedia/ImagenCupo.png";
import IconoId from "../../Multimedia/identificador.png"
import IconoUbicacion from "../../Multimedia/ubicacion.png";

//Se crearan una serie de componentes pequeñas que permitirán segmentar el código
export function CarruselFotos(){

    return(<div className="o-carruselImagenesJardin">
        <img src={ImagenPrueba} alt="Foto que muestra las instalaciones del jardín infantil"/>
    </div>)

}//Fin componente

export function InfosecundariaJardin({direccionJ, DNIJ, CupoJ, CiudadJ, DepartamentoJ}){

    return(<div className="o-contenedorDatosDetalle">
        
        <div className="o-direccionJardin">
            
            <div className="o-contenedorImagenTextoDireccion">
                <img id="imagendireccion" src={ImagenDireccion} alt="Icono que representa la dirección del jardín"/>
                <h2>Dirección</h2>
                <img id="imagenseguro" src={ImagenVerificado} alt="Icono que indica que la dirección es segura y verificada"/>
            </div>

            <div className="o-contenedorTextoDireccion">
                <h2>{direccionJ}</h2>
            </div>

        </div>

        <div className="o-separadorDatosDetalle"/>

        <div className="o-DniCuposUbicacionJardin">
            
            <div className="o-DNI">
                <img src={IconoId} alt="DNI que identifica y certifica al jardín infantil"/>
                <h3>DNI: {DNIJ}</h3>
            </div>

            <div className="o-Cupo">
                <img src={IconoCupo} alt="Icono que indica si hay cupo disponible en el jardín"/>
                <h3>Cupo: {CupoJ}</h3>
            </div>

            <div className="o-Ubicacion">
                <img src={IconoUbicacion} alt="Icono que señala la ciudad y departamento donde está el jardín"/>
                <h3>{CiudadJ + ", " + DepartamentoJ}</h3>
            </div>

        </div>

    </div>)

}//Fin componente

export function DescripcionJardin(){

    return(<div className="o-textoDescripcionJardin">
        
        <div className="o-tituloDescripcion">
            <h2>Descripción</h2>
        </div>

        <div className="o-parrafoDescripcion">
            <p>Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.</p>
        </div>

    </div>)

}//Fin componente