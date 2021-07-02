//Manera correcta de hacer un contructor
function Persona(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
}

var persona = new Persona('Juan', 'Juaréz');
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellidos);

//Lo mismo, pero sintaxis diferente (Lo nuevo y en tendencia)
class Person {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

var person = new Person('Vick', 'Fuentes');

console.log(person);
console.log(person.name);
console.log(person.lastName);