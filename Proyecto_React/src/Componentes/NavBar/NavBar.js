import React, { useRef, useState } from "react";
import "../../Estilos/NavBar/navbar.css";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

//Importando logo de la plataforma y otras imágenes
import LogoPlataforma from "../../Multimedia/Logo_exportar.png";
//import AvatarUsuario from "../../Multimedia/avatar.png";
import {MdSearch} from "react-icons/md";
import {MdRoom} from "react-icons/md";
import IconoConfiguracion from "../../Multimedia/configuraciones.png";
import IconoSalir from "../../Multimedia/salir.png";

//Componente que tendrá la lógica del navbar
function SeccionNavBar({valor, setQuery, setResultsNot, setOpenTarjetasJardin}){

    const navegate = useNavigate();

    const opciones = [
        {value: "Cali, Valle del Cauca", label:"Cali, Valle del Cauca"},
        {value: "Bogotá D.C, Bogotá", label:"Bogotá D.C, Bogotá"},
        {value: "Medellín, Antioquia", label:"Medellín, Antioquia"}
    ]

    const estilos = {

        //Estilos para los elementos a seleccionar
        option: (defaultStyles, state) => ({
            ...defaultStyles,
            color: "#413543",
            fontFamily: 'Poppins',
            cursor:"pointer",
            backgroundColor: "white",
            fontWeight:"400",
            fontSize:"18px",
            transition: 'background-color 0.3s ease-in-out',
            '&:hover':{backgroundColor:"#FDE2CA"}
          }),
          
          //Estilos para seleccionar
          control: (defaultStyles) => ({
            ...defaultStyles,
            padding: "5px",
            fontSize:"18px",
            border: "none",
            boxShadow: "none",
            fontFamily: 'Poppins',
            fontWeight: "400",
            color: "#413543",
            cursor:"pointer"
          }),
          
          //Estilos para la flecha
          dropdownIndicator: (provided, state) => ({
            ...provided,
            color: "#413543",
          }),

          //Estilos para la linea separadora de la flecha
          indicatorSeparator: () => ({
            display: 'none'
          }),

    };

    const Menu = [{"Nombre": "Configuración", "Imagen": IconoConfiguracion, "Link": "/PaginaConfiguracion"},
    {"Nombre": "Cerrar sesión", "Imagen": IconoSalir, "Link": "/PaginaInicioSesion"}];

    const [abrir, setabrir] = useState(false);
    const [nombreJardin, setnombreJardin] = useState("");
    //const [dniJardin, setdniJardin] = useState(null);
    
    const MenuNavBar = useRef();
    const IconoPerfil = useRef();

    window.addEventListener("click", (e) => {

       
        if(e.target !== IconoPerfil.current && e.target !== MenuNavBar.current)
            return setabrir(false);

    })
    
    //Función que realizará una petición al servidor
    function consultaDBjardin(){

        if(nombreJardin !== ""){
        
            fetch(`http://localhost:1234/datoNombreJardin/${nombreJardin}`)
            .then(respuestaNJ => respuestaNJ.json())
            .then(resultadoNJ => {

                if(resultadoNJ.mensaje === "jardín no encontrado"){
                    setResultsNot(true);
                    setOpenTarjetasJardin(false);
                }else{
                    setQuery(resultadoNJ);
                    setResultsNot(false);
                    setOpenTarjetasJardin(true);
                }//Fin condición

            }); 

        }else if(nombreJardin === ""){

            setResultsNot(true);
            setOpenTarjetasJardin(false);

        }//Fin condición

    }//Fin función

    return(<div className="o-contenedorNavBar">
        
        <div className="o-navBarLogo">
            <img src={LogoPlataforma} alt="Logo de la plataforma JIC"/>
        </div>

        <div className="o-contenedorUbicacionNavBar">
                <MdRoom style={{fontSize:'35px', color:'#413543'}}/>
                <Select 
                options={opciones}  
                placeholder={'Escoge tu ubicación'}
                onChange={(e) => console.log(e.value)}
                styles={estilos}
                isSearchable={false}
                />
        </div>

        <div className="o-contenedorBusquedadDividorFoto">

            <div className="o-contenedorBusquedaNavBar">
                <input onChange={(e) => setnombreJardin(e.target.value)} type="text" placeholder="Busca un jardín por su nombre..."/>
                <button onClick={consultaDBjardin} type="submit"><MdSearch style={{fontSize:'25px', color:'#413543'}}/></button>
            </div>

            <div className="o-dividorNavBar"/>

            <div className="o-contenedorFotoPerfilNavBar">
               
                <img onClick={() => setabrir(true)} ref={IconoPerfil} src={valor.foto_usuario} alt="foto perfil del usuario"/>
                
                {abrir && 
                <div ref={MenuNavBar} className="o-contenedorMenu">
                    <div className="o-datosUsuario">
                        <div className="o-contenedorfotopequeña">
                             <img src={valor.foto_usuario} alt="foto perfil"/>
                        </div>
                        <div className="o-infoUsuario">
                            <h3>{valor.nombre + " " + valor.apellido}</h3>
                            <h4>{valor.correo}</h4>
                        </div>
                    </div>
                    <ul className="o-listaMenu">
                        {Menu.map((valor, i) => <li key={i} onClick={() => {setabrir(false); navegate(valor.Link);}} className="o-item">
                           <img id="o-iconoMenuOpcion" src={valor.Imagen} alt=""/> {valor.Nombre}</li>)}
                    </ul>
                </div>}
           
            </div>

        </div>

    </div>);

}//Fin componente

export default SeccionNavBar;