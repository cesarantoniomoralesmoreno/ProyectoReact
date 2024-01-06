//Para acceder a los parametros que estan en el API usamos el hook:
import { Link,useParams } from "react-router-dom"//Me permite leer los parametros que existen en la ruta por ejemplo:
//productID de products.jsx
import { useEffect,useState } from "react";//Esto para poder hacer el llamado a la API


export const ProductDetail = ()=>{
    const {productID} = useParams();//Accedemos al productID a traves 
    //console.log(productID);

    const [product,setProduct] = useState(null); //Esto es nulo al principio.
    useEffect(()=>{
        (async() =>{
            const API_URL = `https://dummyjson.com/products/${productID}`;//URL dinamica, conseguimos que se 
            //muestre cada llamado a la API segun el ID del producto
            const productsResponse = await fetch(API_URL).then(response => response.json());
            //console.log(API_URL);
            setProduct(productsResponse); //Aca como al hacer el llamado por ID me da un objeto especifico lo paso asi nada mas y no de forma 
            //especifica por el array como en Products.jsx
        })();
    },[productID]);//Aca le pasamos productID porque como esta dependencia la estamos usando para armar la URL a donde 
    //vamos con la API, y asi si esta cambia la funcion vuelva a hacerse para traer la nueva respuesta
    console.log(product);
return(
    <>
    <h2>Detalle del producto</h2>
    {product && (
        <div>
            <h3>{product.title}</h3>
            <img src={product.thumbnail} 
            alt={product.title} 
            style={{
            width:"200px", 
            marginBottom:"10px"}}/>
            <p>{product.description}</p>
            <p>price: {product.price}</p>
            <p>Brand: {product.brand}</p>
            <p>Discount: {product.discountPercentage}</p>
            <Link to="/products">Volver</Link>
        </div>
        )}
    </>
)
}