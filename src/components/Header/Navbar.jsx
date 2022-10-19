import React from 'react'
import Button from '../Button/Button';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Navbar = ({isInHeader}) => {
  if(isInHeader){
    return(
    <nav className='navbar'>
      <h1>Comision 45060</h1>
          <ul>
            <li>Nosotros</li>
            <li>Contacto</li>
          </ul>
          
          <div style={{display:'flex', alignItems: 'center'}}>
            <span className="material-symbols-outlined">
            shopping_cart_checkout
            </span>
            <Button text="Login" />
            <AiOutlineShoppingCart size={27} color={'red'}/>
          </div>
    </nav>
    ) 
  }
else{
  return (
    <nav className='footer'>
          <ul>
            <li>Instragram</li>
            <li>Facebook</li>
          </ul>
    </nav>

  )  
}
}

export default Navbar; 