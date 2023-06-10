import React from "react";
import "../../Estilos/PaginaRegistro/entradasregistro.css";

//Componente sencilla de las entradas que tendrá el registro
export function InputRegistro({nombreInput, set, tipo, alto, ancho}){

    return(<div className="o-input">
        <h2>{nombreInput}</h2>
        <input onChange={(e) => set(e.target.value)} type={tipo} style={{width: ancho, height: alto}}/>
    </div>)

}//Fin componente

