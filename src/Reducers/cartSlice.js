import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalCount:0,
    products: [],//Estos seran los productos del carrito
    // unaPrueba: "Definitivamente es una prueba" //Cualquier cosa que pongamos aca quedara fijada como un valor inicial
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToProductToCart: (state, action) =>{//mi reducer va a tomar el state y el action 
            state.totalCount += 1;//tomamos el contador y le sumamos uno. Va a actualizar
            state.products = [...state.products, action.payload]//Va a actualizar y hago un spread de state 
            //y sumo lo que viene del action payload, es la informacion que viene ahi que queremos agregar.
        },
        removeProductFromtCart: (state, action) => {
            const productID = action.payload;
            state.totalCount -=1;
            state.products = state.products.filter(product=>product.id !== action.payload);
        }
    }
})

export const { addToProductToCart,removeProductFromtCart } = cartSlice.actions;//Esta funcion devuelve varias cosas que podremos acceder desde 
//cualquier parte de la app.

export default cartSlice.reducer;//La libreria unira todos los reducers que creemos de forma
//automatica y estos los exportaremos.