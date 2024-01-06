import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "../Reducers/cartSlice";

export default configureStore({

    reducer: {
        cart: cartReducer//Esta key basicamente es la que vamos a conocer por fuera a nivel de todo 
        //el store, alli tendremos una prop cart que va a tener como base el totalCount y el products,
        //"cart"  es el nombre del reducer con el que podremos trabajar y lo que conoceremos en el navegador        
    }//Reducer es la funcion que se va a encargar de tomar el estado y retornar uno nuevo


});