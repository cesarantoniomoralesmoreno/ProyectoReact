class Persona {
    constructor(name,lastName){
        this.firstName = name;
        this.lastName = lastName;
    }

    saludar(){
        return `Hola que tal, mi nombre es: ${this.firstName} ${this.lastName}`;
    }

}



// const javi = new Persona("Cesar","Morales");
// // console.log(javi.firstName+ " " +javi.lastName);
// const victoria = new Persona("Victoria","Morales");
// console.log(javi.saludar());
// console.log(victoria.saludar());

class Estudiante extends Persona {
    constructor(name,lastName,email){
        super(name,lastName);
        this.email = email;
    }
    irAClase(nombreCurso){
        return `Hola, soy ${this.firstName} ${this.lastName}, y estoy yendo al curso de ${nombreCurso}`;
    }

}

const javi = new Estudiante("Javi","Molano","jMolano@mail.com");
// console.log(javi.saludar());
// console.log(javi.irAClase("JavaScript"));
console.log(javi)

