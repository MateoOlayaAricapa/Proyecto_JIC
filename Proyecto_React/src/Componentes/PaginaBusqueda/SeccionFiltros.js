import React, { useState } from "react";
import "../../Estilos/PaginaBusqueda/seccionfiltros.css";
import Select from "react-select";
import { estilos } from "../../Estilos/PaginaBusqueda/EstiloSelect";

//Componente que contendrá la lógica de los botones de filtro
function SeccionFiltroBotones({setJardines, setError, setTarjetas}){

    const [valorComuna, setValorComuna] = useState(0);

    const opciones_comunas = [
        {value: "todos", label:"Comuna: Todas"},
        {value: "1", label:"Comuna 1"},
        {value: "2", label:"Comuna 2"},
        {value: "3", label:"Comuna 3"},
        {value: "4", label:"Comuna 4"},
        {value: "5", label:"Comuna 5"},
        {value: "6", label:"Comuna 6"},
        {value: "7", label:"Comuna 7"},
        {value: "8", label:"Comuna 8"},
        {value: "9", label:"Comuna 9"},
        {value: "10", label:"Comuna 10"},
        {value: "11", label:"Comuna 11"},
        {value: "12", label:"Comuna 12"},
        {value: "13", label:"Comuna 13"},
        {value: "14", label:"Comuna 14"},
        {value: "15", label:"Comuna 15"},
        {value: "16", label:"Comuna 16"},
        {value: "17", label:"Comuna 17"},
        {value: "17", label:"Comuna 18"},
        {value: "19", label:"Comuna 19"},
        {value: "20", label:"Comuna 20"},
        {value: "21", label:"Comuna 21"}
    ]

    const opciones_servicios = [
        {value: "natación", label:"Natación"},
        {value: "danzas", label:"Danzas"},
        {value: "psicología", label:"Psicología"}
    ]

    const opciones_precios = [
        {value: "150 mil", label:"150 mil"},
        {value: "250 mil", label:"250 mil"},
        {value: "350 mil", label:"350 mil"}
    ]

    //Function que ejecutará una consulta a la base de datos
    function consultaDB(){

        if(valorComuna === "todos"){
        
            fetch("http://localhost:1234/datosJardinesInfantiles")
            .then(respuestaTodos => respuestaTodos.json())
            .then(resultadoTodos => setJardines(resultadoTodos));

            setError(false); 
            setTarjetas(true)

        }else{

            fetch(`http://localhost:1234/datosJardinesComuna/${valorComuna}`)
            .then(respuestaComuna => respuestaComuna.json())
            .then(resultadoComuna => {

                if (resultadoComuna.mensaje === "No encontrado comunas"){
                    
                    setError(true); 
                    setTarjetas(false);
               
                } else{
                   
                    setJardines(resultadoComuna); 
                    setError(false); 
                    setTarjetas(true)
                
                }//Fin condición
                
            });

        }//Fin condicional

    }//Fin función

    return(<div className="o-contenedorSeccionFiltros">
        
        <Select 
                options={opciones_comunas}  
                placeholder={'Comuna: Todos'}
                styles={estilos}
                onChange={(e) => setValorComuna(e.value)}
                isSearchable={false}
                />

        <Select 
                options={opciones_servicios}  
                placeholder={'Servicios: Todos'}
                styles={estilos}
                onChange={(e) => console.log(e.value)}
                isSearchable={false}
                />

        <Select 
                options={opciones_precios}  
                placeholder={'Precios: Todos'}
                styles={estilos}
                onChange={(e) => console.log(e.value)}
                isSearchable={false}
                />

        <button onClick={consultaDB}>FILTRAR</button>

    </div>)
}//Fin componente

export default SeccionFiltroBotones;