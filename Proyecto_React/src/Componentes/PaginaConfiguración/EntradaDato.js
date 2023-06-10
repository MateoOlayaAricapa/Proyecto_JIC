import React, {useState} from "react";
import "../../Estilos/PaginaConfiguración/entradadato.css";
import Select from 'react-select';

//Componente que tiene la lógica de un input
export function InputDatoJardin({nombreCampo, valorPlaceHolder, largoCampo, setDato}){

    return(<div className="o-contenedorCampoEntradaDato" style={{width:largoCampo}}>
        
        <div className="o-tituloCampoEntrada">
            <h3>{nombreCampo}</h3>
        </div>

        <div className="o-entradaDato" >
            <input onChange={(e) => setDato(e.target.value)} type="text" placeholder={valorPlaceHolder}/>
        </div>

    </div>)

}//Fin componente

//Esta componente conserva la lógica de un campo de selección
export function InputSelectDatoJardin({largoCampoSeleccion, arregloValores, tamanoCampo, NombreCampoS, nombrePlaceHolder, setDatoSelect}){

    const opciones = arregloValores;

    const estilos = {

        //Estilos para los elementos a seleccionar
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: "#413543",
            fontFamily: 'Poppins',
            cursor:"pointer",
            backgroundColor: "white",
            fontWeight:"400",
            fontSize:"16px",
            transition: 'background-color 0.3s ease-in-out',
            '&:hover':{backgroundColor:"#FCD3D1"}
          }),
          
          //Estilos para seleccionar
          control: (defaultStyles) => ({
            ...defaultStyles,
            width: tamanoCampo,
            height: "70px",
            padding: "0em 1em 0em 1em",
            fontSize:"15px",
            border: "2px solid #FCCDCB",
            borderRadius: "10px",
            boxShadow: "none",
            fontFamily: 'Poppins',
            fontWeight: "500",
            color: "#4D3D3D",
            cursor:"pointer"
          }),
          
          //Estilos para la flecha
          dropdownIndicator: (provided, state) => ({
            ...provided,
            color: "#4D3D3D",
            padding: "8px"
          }),

    };

    return(<div className="o-contenedorCampoSeleccionDato" style={{width:largoCampoSeleccion}}>
        
        <div className="o-tituloCampoSeleccion">
            <h3>{NombreCampoS}</h3>
        </div>

        <div className="o-entradaSeleccion">
            
            <Select
                options={opciones}
                placeholder={nombrePlaceHolder}
                onChange={(e) => setDatoSelect(e.value)}
                isSearchable = {false}
                styles={estilos}
            />

        </div>

    </div>)

}//Fin componente

//Componente que tiene la lógica de un textarea para la descripción del jardín
export function CampoTextAreaDatoJardin({setDatoDescripcion}){

    return(<div className="o-contenedorCampoTextArea">
        
        <h3>Breve descripción del jardín infantil</h3>
        <textarea rows="9" 
        placeholder="Agrega una descripción a tu jardín infantil..."
        onChange={(e) => setDatoDescripcion(e.target.value)}/>

    </div>)

}//Fin componente

//Componente que regresar un input-select
export function InputReactSelectDatoJardin({TituloCampoSelect, arregloServicioNiveles, colorFondo, ColorTexto, setServicioNiveles}){

    const [selectedOptions, setSelectedOptions] = useState([]);
    
    const EstiloSelect = {

        //Estilos para los elementos a seleccionar
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: "#413543",
            fontFamily: 'Poppins',
            cursor:"pointer",
            backgroundColor: "white",
            fontWeight:"400",
            fontSize:"16px",
            transition: 'background-color 0.3s ease-in-out',
            '&:hover':{backgroundColor:"#FCD3D1"}
          }),
          
          //Estilos para seleccionar
          control: (defaultStyles) => ({
            ...defaultStyles,
            width: "441px",
            padding: "0.5em 1em 0.5em 1em",
            fontSize:"14px",
            border: "2px solid #FCCDCB",
            borderRadius: "10px",
            boxShadow: "none",
            fontFamily: 'Poppins',
            fontWeight: "400",
            color: "#4D3D3D",
            cursor:"pointer"
          }),
          
          //Estilos para la flecha
          dropdownIndicator: (provided, state) => ({
            ...provided,
            color: "#4D3D3D",
            padding: "8px"
          }),
          
          //Estilos para las opciones al ser seleccionadas de forma multiple
          multiValue: (provided) => ({
            ...provided,
            backgroundColor: colorFondo,
            borderRadius: "5px" 
          }),
          multiValueLabel: (provided) => ({
            ...provided,
            color: ColorTexto,
          }),
          multiValueRemove: (provided) => ({
            ...provided,
            color: ColorTexto, 
            ':hover': {
              backgroundColor: 'red', 
              color: 'white', 
            },
          }),

    };

    return(<div className="o-contenedorInputReactSelect">
        
        <h3>{TituloCampoSelect}</h3>
        <Select
            options={arregloServicioNiveles}
            isMulti
            value={selectedOptions}
            placeholder = {"Seleccione una o varias opciones"}
            onChange={(e) => {setSelectedOptions(e); setServicioNiveles(e)}}
            styles={EstiloSelect}
            isSearchable = {false}
        />

    </div>)

}//Fin componente