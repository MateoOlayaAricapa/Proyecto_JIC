import React from "react";
import "../../Estilos/VentanaModal/ventanamodal.css";

//Importando imagen de icono advertencia
import iconoAdvertencia from "../../Multimedia/signo.png";
import {MdClear} from "react-icons/md";

//Componente que contendrá la lógica para mostrar una ventana modal
function VentanaModal({set}){

    return(<div id="modal" className="o-contenedorVentanaModal">
       
       <div className="o-iconoventana">
           <img src={iconoAdvertencia} alt=""/>
       </div>

       <div className="o-textoventana">
            <h3>Algo salió mal</h3>
           <p>Revisa tu correo o contraseña.</p>
       </div>

       <div className="o-botonventana">
           <button onClick={() => set(false)}><MdClear style={{color: 'black', fontSize: '25px'}}/></button>
       </div>

   </div>);

}//Fin componente

export default VentanaModal;