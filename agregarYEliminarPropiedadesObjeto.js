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

