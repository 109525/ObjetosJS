let persona = {
    nombre: 'juan',
    apellido: 'Perez',
    email: 'Jperez@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
       this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}
//console.log(persona.nombreCompleto);
console.log(persona.lang)
//persona.lang = 'en';
console.log(persona.idioma)