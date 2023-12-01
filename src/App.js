//Funcion nativa de js 
//import logo from './logo.svg';//Importaciones 
import './App.css';
//Importando el componente Saludo
import Gretting from './components/Gretting';
import Button from './components/Button';
import Users from "./components/Users.jsx";
import USERS_DATA from "./data/users.json"; //Creando un archivo.json hemos hecho un array y lo importamos desde este archivo
//Para aplicaciones grandes no se usa de esta manera sino que lo hacemos con un API


function App() {
  // const age = 16;
  //Esto no es html es conocido como jsx

  return (

    <div className="App">
      <Gretting text="¿Hola que tal?"/>{/*Aqui pasamos props con un array */}
     
      <Button text="Click me"/>
      <hr />

{/*Aqui empieza el children que enviamos a app.js */}
      <Gretting text="Hello world">
        
      <hr /> {/*Linea horizontal*/}
      <strong>Trabajando con react!</strong>
      </Gretting>
      {/*Aqui termina el children */}
    <Users usersList={USERS_DATA}/>

    </div>
  );
}

export default App;
