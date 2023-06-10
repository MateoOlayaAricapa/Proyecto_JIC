import React from "react";
import "../../Estilos/PaginaConfiguración/tarjetaintegrante.css";
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from "@mui/material";

//Componente que conserva la información de un integrante del jardín infantil
function TablaDatoIntegranteJardin({arregloDatosCompletos}){

    const JsonIntegrantes = arregloDatosCompletos;

    return(<div className="o-datoIntegrante">

        <TableContainer component={Paper} sx={{maxHeight:"20em", boxShadow:"0px 10px 15px -3px rgba(0,0,0,0.1)"}}>

            <Table>

                <TableHead sx={{background:"#FCCDCB"}}>

                    <TableRow>

                        <TableCell align="center" sx={{fontFamily:'Poppins', fontWeight:"600"}}>Foto Perfil</TableCell>
                        <TableCell align="center" sx={{fontFamily:'Poppins', fontWeight:"600"}}>Nombre integrante</TableCell>
                        <TableCell align="center" sx={{fontFamily:'Poppins', fontWeight:"600"}}>Licenciatura</TableCell>
                        <TableCell align="center" sx={{fontFamily:'Poppins', fontWeight:"600"}}>Experiencia</TableCell>
                        
                    </TableRow>

                </TableHead>

                <TableBody>

                    {
                        JsonIntegrantes.map((dato, i) => <TableRow key={i}>
                            
                            <TableCell align="center" sx={{fontFamily:'Poppins', fontWeight:"400"}}><img src={dato.FotoI} alt="Foto de perfil del integrante del jardín infantil"/></TableCell>
                            <TableCell align="center" sx={{fontFamily:'Poppins', fontWeight:"400"}}>{dato.NombreI}</TableCell>
                            <TableCell align="center" sx={{fontFamily:'Poppins', fontWeight:"400"}}>{dato.LicenciaturaI}</TableCell>
                            <TableCell align="center" sx={{fontFamily:'Poppins', fontWeight:"400"}}>{dato.ExperienciaI}</TableCell>

                        </TableRow>)
                    }

                </TableBody>

            </Table>

        </TableContainer>

    </div>)

}//Fin componente

export default TablaDatoIntegranteJardin;