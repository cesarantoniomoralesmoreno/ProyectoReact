import { useSelector, useDispatch } from "react-redux";
import { removeProductFromtCart } from "../Reducers/cartSlice";
export const Cart = () =>{
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.cart);
    const removeProductHandler= (id) => dispatch(removeProductFromtCart(id));
    return(
        <>
                <h3>Cart</h3>{/*Un mapping de products donde voy a tomar un product y vamos
                a hacer un reddering  */}
                {products.map((product)=>{
                    return(
                        <div key={product.id}>
                            {/* <h3>{product.title}</h3> */}
                            <hr/>
                           <img src={product.thumbnail}  alt={product.title} style= {{width: "100px"}}/>
                           <span>{product.title}{" "}</span>
                           <span style={{ marginRight: "8px" }}></span>
                            || <button className="btn btn-danger" onClick={()=> removeProductHandler(product.id)}>Remover del carrito</button>{/*Se le pasa un arrow function para que retorne la ejecucion de la funcion */}

                    </div>
                    )
                })}
        </>
    )
}