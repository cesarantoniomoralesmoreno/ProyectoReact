
import {Link} from "react-router-dom";
import { addToProductToCart,removeProductFromtCart } from "../Reducers/cartSlice";
import { useDispatch,useSelector } from "react-redux"; //Este es un hook que se usa para agregar 

export const ProductsList = ({products= []}) =>{//En el mundo real no se hace de esta manera pero para ejemplificar le decimos simplemente 
    //que products sera un array vacio, en realidad se usa todo el mapeo que siempre usamos
    const  { products: productsInCart } = useSelector(state => state.cart);//Aca le decimos
    //que los products que  tenemos en el state cart le ponga un alias en este caso productsInCart 
    //para no tener conflicto con la variable de este componente products.
    
    const addProductHandler = (id) =>{
        
        //console.log(id);
        const productFinded = products.find(oneProduct => oneProduct.id  === id); //De OneProduct dame el id y si ese id es igual
        //al que le estamos pasando
       // console.log(productFinded);
       //if(productsInCart.find(product=> product.id ===id)){
       if(productsInCart.find(product=> product.id ===productFinded.id)){//Esto devuelve un valor booleano llamado truety
            dispatch(removeProductFromtCart(id));
            return; //Esto para que no se agregue el producto que esta repetido en el carrito,corto la ejecucion
       }
       dispatch(addToProductToCart(productFinded));
    }
    const dispatch = useDispatch();
    return (
    <>
        <h2>Products page</h2>
        {/* <button onClick={() => {dispatch (
            addToProductToCart({
            title: "Prueba",
            id: 123
        })
        )}}>
            Agregar un Producto
            
            </button> */}
    <ul>
        
        {products.map(product =>{
            return (
                <li key={product.id}>
                    <p>El ID es: {product.id}</p>
                    <h4>{product.title}</h4>
                    <img src={product.thumbnail} alt={product.title} style={{width:"100px", marginBottom:"10px"}}/>
                    <br/>
                    <Link 
                    to={`/products/${product.id}`} className="btn btn-primary">
                        Ver detalle
                    </Link>
                    <button className={`btn ${productsInCart.find(pdt=> pdt.id ===product.id) ? "btn-danger" : "btn-warning"}`} onClick={()=> addProductHandler(product.id)}>
                        
                     {productsInCart.find(pdt=> pdt.id ===product.id) ? "Remover del carrito" : "Agregar al carrito"}
                        </button>
                    
                    <hr/>
                </li>
                
            )
        })}
            
            </ul>
    </>
    )
}