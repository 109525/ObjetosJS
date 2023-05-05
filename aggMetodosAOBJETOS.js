let persona = {
    nombre: 'juan',
    apellido: 'Perez',
    email: 'Jperez@gmail.com',
    edad: 28,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
        }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);
console.log(persona.email);
console.log(persona.nombreCompleto());

console.log(persona);
