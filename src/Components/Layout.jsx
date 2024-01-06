import {Outlet,Link} from "react-router-dom";
import { useSelector } from "react-redux";

export const Layout = () =>{
  //const temp = useSelector(state => state);
  const{totalCount} = useSelector(state => state.cart);
  console.log(totalCount);
    return (
      <>
        <div className="container">
        <h2>React Router</h2>

              <p>Productos en el carrito: <strong>{totalCount}</strong></p>

          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About US</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
            <hr/>
          </nav>
         <Outlet />
                <footer>
                <hr/>
                     <p>Copyright - 2023</p>
                </footer>
        </div>
      </>
    )
}