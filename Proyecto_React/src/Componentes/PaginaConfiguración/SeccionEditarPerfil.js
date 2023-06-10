import React, { useState, useContext } from "react";
import "../../Estilos/PaginaConfiguración/seccioneditarperfil.css";
import InputDatosUsuario from "./CasillasDatosPerfil";
import ActualizarFotoPerfil from "./ActualizarFotoPerfil";
import { DataContexto } from "../../ContextAPI/contextAPI";

//Importando icono de correcto
import IconoCorrecto from "../../Multimedia/correcto.png";
import IconoEditar from "../../Multimedia/editar.png";

//Componente que conserva la lógica para editar o actualizar datos del perfil usuario
function SeccionEditarPerfilUsuario({datosUsuario}){

    const [NombreUsuario, setNombreUsuario] = useState(datosUsuario.nombre);
    const [ApellidoUsuario, setApellidoUsuario] = useState(datosUsuario.apellido);
    const [ContraseñaUsuario, setContraseñaUsuario] = useState(datosUsuario.contraseña);
    const [RutaImagenUsuario, setRutaImagenUsuario] = useState(datosUsuario.foto_usuario);
    const {setarchivoUsuarioJson} = useContext(DataContexto);

    const [OpenVerificacion, setOpenVerificacion] = useState(false);
    const [OpenVentanaFoto, setOpenVentanaFoto] = useState(false);

    //Función que realizará una petición al servidor
    function peticionActualizarDB(){

        //Nuevo archivoJson con los datos actualizados para modificar el archivo encontrado en el contextAPI
        const NuevoArchivoJson = {
            "id_usuario": datosUsuario.id_usuario,
            "nombre": NombreUsuario,
            "apellido": ApellidoUsuario,
            "correo": datosUsuario.correo,
            "contraseña": ContraseñaUsuario,
            "departamento": datosUsuario.departamento,
            "ciudad": datosUsuario.ciudad,
            "foto_usuario": RutaImagenUsuario
        }

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombreUsuarioN: NombreUsuario, 
                                    apellidoUsuarioN: ApellidoUsuario, 
                                    passwordUsuario: ContraseñaUsuario,
                                    url: RutaImagenUsuario, 
                                    id: datosUsuario.id_usuario })
        };

        fetch(`http://localhost:1234/ActualizarDatosUsuario`, requestOptions)
            .then(respuestaAC => respuestaAC.json())
            .then(resultadoAC => {

                if(resultadoAC !== "datos no actualizados"){

                    setOpenVerificacion(true);

                    //En esta parte se llama la función set que tiene el context API para modificar el archivoJSON
                    setarchivoUsuarioJson(NuevoArchivoJson);

                }else{

                    setOpenVerificacion(false);

                }//Fin condición

            }); 

    }//Fin función

    return(<div className="o-contenedorEditarPerfil">

        {OpenVentanaFoto && <ActualizarFotoPerfil setVentana={setOpenVentanaFoto} setRutaImagen={setRutaImagenUsuario}/>}
        
        <div className="o-ImagenPerfilUsuario">
        
            <div className="o-Fotoperfil">
                <button onClick={() => setOpenVentanaFoto(true)}>
                    <img className="o-icoe" src={IconoEditar} alt="Icono que representa la opción de editar la foto perfil"/>
                </button>
                <img className="o-imgfpu" src={RutaImagenUsuario} alt="foto perfil del usuario"/>
            </div>
            
            <div className="o-titulosImagenPerfil">
                <h1>{NombreUsuario + " " + ApellidoUsuario}</h1>
                <h3>{datosUsuario.correo}</h3>
                <h3>{datosUsuario.ciudad + ", " + datosUsuario.departamento}</h3>
            </div>

        </div>

        <div className="o-DatosUsuario">
            
            <div className="o-inputs">
                <InputDatosUsuario nombreInput={"Nombre del usuario"} datoInput={NombreUsuario} setValor={setNombreUsuario} valorDisabled={false}/>
                <InputDatosUsuario nombreInput={"Apellido del usuario"} datoInput={ApellidoUsuario} setValor={setApellidoUsuario} valorDisabled={false}/>
                <InputDatosUsuario nombreInput={"Correo electrónico"} datoInput={datosUsuario.correo} valorDisabled={true}/>
                <InputDatosUsuario nombreInput={"Contraseña"} datoInput={ContraseñaUsuario} setValor={setContraseñaUsuario} valorDisabled={false}/>
            </div>

            <div className="o-botonGuardarMensaje">
                <button onClick={peticionActualizarDB}>Guardar</button>
                {OpenVerificacion && 
                <div className="o-contenedorDatosFuncionaCorrectamente">
                    <img src={IconoCorrecto} alt="Icono que indica que funcionó correctamente el proceso"/>
                    <h3>Información guardada con éxito</h3>
                </div>}
            </div>

        </div>

    </div>);

}//Fin componente

export default SeccionEditarPerfilUsuario;