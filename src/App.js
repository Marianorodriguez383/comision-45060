import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Contador from './components/Main/Contador';
import EjemploState from './components/Main/EjemploState';
import ItemListConteiner from './components/Main/ItemListConteiner';
import ItemCount from './components/Main/ItemCount';

// import Main from './components/Main/Main';


const App = () => {
  // const saludar = () =>{
  //   console.log("Bienvenidos")
  // }
    const agregar = () =>{
      console.log('Item Agregado')
    }
  
  return (
    <>
    <Header/>
    <EjemploState/>
    <ItemListConteiner/>
    {/* <Main 
    saludo="Bienvenidos a la clase de React gatos" 
    edad={27} 
    datos={{nombre: "Eric", comision:"45060"}}
    saludar={saludar}
    /> */}
    <Contador stock={10}/>
    <ItemCount stock={20} inicial={0} agregar={agregar} />
    
    <Footer/>
    
    </>
  );
}

export default App;

