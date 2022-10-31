import React, { useEffect, useState } from 'react'

const ItemListConteiner = () => {
    const [count, setCount] = useState(0);
    const [texto,setTexto] = useState('Vero');

    useEffect(()=>{
        // se va a ejecutar LUEGO del render y siempre que se renderice el componente (LO VAMOS A USAR POCO Y NADA)// 
        console.log('Me renderizo siempre');
    })
    
    useEffect(()=>{
        // puedo tener la cantidad de useEffect que quiera dentro de un componente, [] hace que se renderice solo una vez, sirve para hacer llamadas asincronicas (SE USA MUCHO)
        console.log('Me renderizo 1 sola vez ');
    },[])

    useEffect(()=>{
        // puedo tener la cantidad de useEffect que quiera dentro de un componente, [] hace que se renderice solo una vez y cada vez que se renderice la dependencia, sirve para hacer llamadas asincronicas (SE USA MUCHO) 
        console.log('Me renderizo 1 vez y cada vez que cambie el texto ');
    },[texto]);

    const cambiarTexto = () =>{
        setTexto('Marian')
    }

    const sumar = () =>{
        setCount(count + 1)
    }

  return (
    <div>
        <p onClick={sumar}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ipsam optio maxime suscipit temporibus quidem laborum, impedit quia voluptatibus minima sapiente, similique dolor eveniet nisi doloribus debitis commodi reiciendis non!   
        </p>
        <h1>{texto}</h1>
        <button onClick={cambiarTexto}>Cambiar Texto</button>
    </div>
  )
}

export default ItemListConteiner