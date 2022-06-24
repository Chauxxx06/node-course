function hola(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('hola, ' + nombre);
            resolve();
        },1000);
    });
}

function hablar() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('Bla, bla, bla ... ');
            resolve();
        }, 1000);
    });
}

function adios(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('chau, ' + nombre);
            resolve();
            /* reject(); */
        },2000);
    });  
}

// ---
console.log('Iniciando el proceso');
hola('Duck')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(()=>{
        return adios('Duck');
    })
    .then(() => {
        console.log('Terminado el proceso');
    })
    .catch(error => {
        console.log('ha habido un eror');
        console.error(error)
    })