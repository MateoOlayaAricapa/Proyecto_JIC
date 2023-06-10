import React from "react";
import "../../Estilos/PaginaBusqueda/tarjetajardin.css";
import { useNavigate } from "react-router-dom";

//Importando imagen
import FondoJardinImagen from "../../Multimedia/FondoJardin.jpg";
import iconoJardin from "../../Multimedia/jardinInfantil.png";
import iconoUbicacion from "../../Multimedia/ubicacion.png"

//Componente que tendrá la lógica de la tarjeta jardín
function SeccionTarjetaJardin({nombreJardin, direccion, dniJardin}){
    
    const navegacion = useNavigate();

    return(<div onClick={() => navegacion(`/PaginaInformacionJardin/${dniJardin}`)} className="o-TarjetaJardin">

        <div className="o-imagenTarjeta">
            <img src={FondoJardinImagen} alt="Fondo jardín"/>
        </div>

        <div className="o-contenedorInformacionTarjeta">
            <div className="o-nombrejardinTarjeta">
                <img src={iconoJardin} alt="Icono que representa un jardín infantil"/>
                <h4>{nombreJardin}</h4>
            </div>

            <div className="o-direccionjardinTarjeta">
                <img src={iconoUbicacion} alt="Icono que representa la ubicación"/>
                <h4>{direccion}</h4>
            </div>
        </div>

    </div>)

}//Fin función

export default SeccionTarjetaJardin;