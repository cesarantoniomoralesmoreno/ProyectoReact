import { Route, Routes} from "react-router-dom"; //el elemento link esta en Layout ya no se pasa al import
import { Home } from "./Pages/Home";
import { AboutUs } from "./Pages/AboutUs";
import { Products } from "./Pages/Products";
import { Layout } from "./Components/Layout";
import { NotFound404 } from "./Pages/NotFound404";
import { Cart } from "./Pages/Cart"; 

function App() {
 //Una de las caracteristicas al usar esta libreria es poder interactuar con elementos que no 
 //se recarguen al momento de interactuar con ellos ya que se pierde la informacion es lo que queremos 
 //de una SPA que contenga

  return (
    <>
      {/*Aqui anteriormente estaba el elemento nav, lo colocamos en el component Layout */}
      
      <Routes>
        <Route path="/" element={<Layout />}>{/*De esta manera centralizamos el control de cada route*/}
            <Route index element={<Home />} />{/*Con el index y la ruta en element definimos que cuando estemos 
            en el path "/" se cargara la pagina en este caso "Home" por defecto */}
            <Route path="about-us" element={<AboutUs />} />
            <Route path="products/*" element={<Products />} />{/*Aca le pasamos un asterisco para hacerlo dinamico y darle acceso a todos los productos */}
            <Route path="cart" element={<Cart/>} />
        </Route>
        <Route path="*" element={<NotFound404 />} />{/*Cuando No encuentre "*" llevame a NotFound404 */}
      </Routes>
      
    </>
  );
}

export default App;
