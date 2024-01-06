import { useEffect,useState } from "react"//Esto lo importamos para poder consumir la API
import {Link,Route,Routes} from "react-router-dom";
import { ProductDetail } from "../Components/ProductDetail";
import { ProductsList } from "../Components/ProductsList";

export const Products = () =>{
    const [productsState, setProducts ]= useState([]);
    useEffect(()=>{
        (async() =>{
            const API_URL = "https://dummyjson.com/products";
            const productsResponse = await fetch(API_URL).then(response => response.json());
            //console.log(productsResponse);
            setProducts(productsResponse.products);//Pasando de forma especifica
        })();
    },[]);
    console.log(productsState)
    return (
        <>
            
            
            <Routes>
                <Route index element={<ProductsList products={productsState}/>}/>
                <Route path=":productID" element={<ProductDetail/>}>Product Detail</Route>{/*Aca usamos un placeHolder 
                definido por el ":" "ProductDetail" es el nombre (Que puede ser cualquier nombre) que le ponemos a lo 
                que sea que le enviemos, ":" significa que es un parametro*/}
            </Routes>
        </>
    

    )
}