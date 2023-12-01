const Users = ({usersList}) =>{
    console.log(usersList);
    return (
        <>
        <h4>Listado de usuarios</h4>
        {/*Aqui no se puede colocar {usersList} para renderizar o mostrar los elementos para ello se debe iterar la lista o el array */}
        {/*Dentro de jsx no se pueden usar ni for, ni if, ni switch para esto ya contamos con algunos metodos que podemos llamar
        como el map para iterar */}

        <ul>
        {usersList.map(function (oneUser){//Aqui lo que se hace es iterar al array "userList" con .map y dentro de este se le pasa una funcion
        //que recibe a cada usuario.
            return (
                <li>
                    <h5>{oneUser.first_name} {oneUser.last_name}</h5>
                    <a href={oneUser.email}>{oneUser.email}</a>
                    </li>
                );
        })}
        </ul>
        </>
    )
}

/*
const Users = ({ usersList }) => { // Nota: Asegúrate de desestructurar usersList correctamente aquí
    console.log(usersList);
    
    return (
        <>
            <h4>Listado de usuarios</h4>
            
            {Array.isArray(usersList) && usersList.length > 0 ? (
                <ul>
                    {usersList.map(oneUser => (
                        <li key={oneUser.id}>{oneUser.email}</li>
                    ))}
                </ul>
            ) : (
                <p>No hay usuarios para mostrar.</p>
            )}
        </>
    );
};

export default Users;

 */

export default Users;