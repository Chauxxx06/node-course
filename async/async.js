async function hola(nombre){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('hola, ' + nombre);
            resolve();
        },1000);
    });
}

async function hablar() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            console.log('Bla, bla, bla ... ');
            resolve();
        }, 1000);
    });
}

async function adios(nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log('chau, ' + nombre);
            resolve();
            /* reject(); */
        },2000);
    });  
}

async function main(){
    await hola('Tales');
    await hablar();
    await adios('Tales');
};

console.log('buenas...');
main();
console.log('chau');