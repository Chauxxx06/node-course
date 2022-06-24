function hola(nombre, micallback){
    /* console.log('Hola, funcion async'); */
    setTimeout(() => {
        console.log('hola, ' + nombre);
        micallback();
    },1000);
}

function hablar(callbackhablar) {
    setTimeout(()=>{
        console.log('Bla, bla, bla ... ');
        callbackhablar();
    }, 1000);
}

function adios(nombre, otrocallback){
    setTimeout(() => {
        console.log('chau, ' + nombre);
        otrocallback();
    },2000);
}

function conversacion(nombre, veces, callback){
    if (veces>0){
        hablar(()=>{
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
    
};

hola('Tales', () => {
    conversacion('Tales',5,()=>{
        console.log('Proceso terminado...');
    });
});

// -- Callback Hell !!!!!!!!!!!!!!
/* console.log('Iniciando proceso..');
hola('Tales',() => {
    console.log('que hace');
    hablar(()=>{
        hablar(()=>{
            adios('Tales', () => {
                console.log('Temrinando Proceso ...');
            });
        });
    });
}); */