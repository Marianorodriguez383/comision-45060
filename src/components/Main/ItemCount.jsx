import React, {useState} from 'react'



const ItemCount = ({stock,inicial,agregar}) => {
    const [count,setCount] = useState(inicial);
    

    const sumar = () =>{
        if(count <= stock ){
            setCount(count + 1);
        }
         
    }

    const restar = ()=>{
        if (count > inicial){
            setCount(count - 1);
        }
    }


    return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh'
    }}>
        <button disabled={count === stock} onClick={sumar}>+</button>
        <p>{count}</p>
        <button disabled={count <= inicial} onClick={restar}>-</button>
        <button onClick={()=>agregar(count)}>Agregar</button>
        
    </div>
  )
}

export default ItemCount