import { useState } from "react";
import "../../Estilos/PaginaConfiguración/ventanaModal.css";

//Esta componente es una ventana modal que solicitará datos de la imagen de perfil
function ActualizarFotoPerfil({setVentana, setRutaImagen}){
    
    const [valorURLImagen, setvalorURLImagen] = useState("");

    return(<div className="o-ventanaModal">
        
        <div className="o-tituloVentana">
            <h2>Inserta una nueva imagen para tu perfil</h2>
        </div>

        <div className="o-inputsVentana">
            <h3>URL</h3>
            <input onChange={(e) => setvalorURLImagen(e.target.value)} type="text" placeholder="Introduce la ruta de la imagen"/>
        </div>

        <div className="o-lineaseparadora"/>

        <div className="o-botonesVentana">
            <button onClick={() => setVentana(false)}>Cerrar</button>
            <button onClick={() => { if(valorURLImagen !== "") {
                setRutaImagen(valorURLImagen); setVentana(false)
            }}}>Confirmar</button>
        </div>

    </div>)

}//Fin componente

export default ActualizarFotoPerfil;