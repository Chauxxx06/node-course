function hola(nombre, micallback){
    /* console.log('Hola, funcion async'); */
    setTimeout(() => {
        console.log('hola, ' + nombre);
        micallback();
    },1000);
}

function adios(nombre, otrocallback){
    setTimeout(() => {
        console.log('chau, ' + nombre);
        otrocallback();
    },2000);
}

console.log('Iniciando proceso..');
hola('Tales',() => {
    console.log('que hace');
    adios('Tales', () => {
        console.log('Temrinando Proceso ...');
    });
});