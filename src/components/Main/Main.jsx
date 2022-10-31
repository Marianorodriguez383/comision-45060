import { Button } from "../Button/Button";


const Main = ({saludo,edad,datos,saludar}) =>{
  const {nombre,comision} =datos;  
  

  return (
    <main>
      <p onClick={saludar}>Hola! {saludo}</p>
      <p>Mi edad es: {edad} años ! </p>
      <p>
        {nombre}-{comision}
      </p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaWXsOCnSfy5LipFqK4mY7Sdyo-llDvHcwg&usqp=CAU" alt=""/>
      <Button text="Bienvenidos"/>
      
    </main>

    )
}

export default Main;