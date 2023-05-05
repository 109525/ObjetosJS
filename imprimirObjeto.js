let persona = {
    nombre: 'juan',
    apellido: 'Perez',
    email: 'Jperez@gmail.com',
    edad: 28,
    nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
    }
}
persona.tel = '4357865';
persona.tel = '4237811';

delete(persona.tel);
console.log(persona);

//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido);

//for in
for (nombrePropiedad in persona) {
        console.log(persona[nombrePropiedad]);
    }

let personaArray = Object.values( persona );
console.log(personaArray)

let personaString = JSON.stringify(persona);
console.log(personaString);