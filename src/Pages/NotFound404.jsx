import NotFoundImg from "../Assets/NotFound404.png";
import { Link } from "react-router-dom";

export const NotFound404 = () =>{
    return(
        <>
        <h2>Error 404...No se encuentra la página</h2>
        <img src={NotFoundImg} style={{width:"500px "}} alt="Not Found"/>
        <br/>
        <Link to="/">Volver al inicio</Link>
        </>
    )
}