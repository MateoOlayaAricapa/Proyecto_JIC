import React from "react";
import "../../Estilos/PaginaConfiguración/casillasdatosperfil.css";

//Esta componente tiene la lógica de input donde mostrarán los datos del usuario
function InputDatosUsuario({nombreInput, datoInput, setValor, valorDisabled}){

    return(<div className="o-contenedorInputDatos">

            <h2>{nombreInput}</h2>

            <div className="o-contenedorInput">
                <input 
                onChange={(e) => setValor(e.target.value)} 
                type="text" 
                value={datoInput} 
                onFocus={() => setValor("")}
                disabled = {valorDisabled}/>
            </div>

    </div>)

}//Fin componente

export default InputDatosUsuario;