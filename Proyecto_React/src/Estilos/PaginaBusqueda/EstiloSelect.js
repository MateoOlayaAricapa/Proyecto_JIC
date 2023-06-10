export const estilos = {

    //Estilos para los elementos a seleccionar
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        color: "#413543",
        fontFamily: 'Poppins',
        cursor:"pointer",
        backgroundColor: "white",
        fontWeight:"400",
        fontSize:"15px",
        transition: 'background-color 0.3s ease-in-out',
        '&:hover':{backgroundColor:"#FDE2CA"}
      }),
      
      //Estilos para seleccionar
      control: (defaultStyles) => ({
        ...defaultStyles,
        padding: "0em 0em 0em 1em",
        width: "197px",
        backgroundColor: "#FDE2CA",
        margin: "0em 0.2em 0em 0.2em",
        fontSize:"15px",
        boxShadow: "0px 3px 7px rgba(151, 151, 151, 0.25)",
        borderRadius: "20px",
        fontFamily: 'Poppins',
        fontWeight: "400",
        color: "#413543",
        cursor:"pointer",
        border: "none"
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
