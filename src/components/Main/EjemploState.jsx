import React, { useState } from 'react'

function EjemploState() {
    const [texto,setTexto] = useState('Erik');
    
    const cambiarTexto = () =>{
        if (texto === 'Erik'){
            setTexto('Hola Mundo');

        }else{
            setTexto('Erik');
        }
        // setTexto('Hola Mundo');
    }

    return (
    <div>
        <h1>{texto}</h1>
        <button onClick={cambiarTexto}>Cambiar texto </button>
    </div>
  )
}

export default EjemploState