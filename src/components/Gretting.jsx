//Aqui crearemos un componente:
//una buena practica es que todo se llame en el mismo idioma a Saludo lo cambiaremos por Gretting

function Gretting({text, children}){//Aqui tambien podemos llamar directamente a la variable del props con una {}

    console.log(text);
    
    console.table(children);
   
    
    return (
        <>
    
     <h2 className="title">{text ? text : "Hi"}</h2>

            {children}
        </>

    )
}

export default Gretting;

//Para poder usarlo solo debemos importarlo a donde lo vayamos a reutilizar
