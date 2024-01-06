//Este archivo es el que se encarga de montar el index.css en el index.html
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';//Esto es para importar un archivo desde la ubicacion
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));//Metodo render
root.render(
  <React.StrictMode>
    
    <Provider store={store}>{/*Le pasamos la prop store dentro de un elemento que tiene el Provider llamado store */}

    <BrowserRouter >{/*Aca estamos anidando para que cualquier parte de mi app pueda usar las propiedades del contenedor 
    
    */}
        <App />
    </BrowserRouter>

    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

