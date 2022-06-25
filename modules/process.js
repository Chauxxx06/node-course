// const process = require('process');

process.on('beforeexit', () => {
    console.log('se va a jodio el programa');
});

process.on('exit', () => {
    console.log('chale, se jodio el programa');
    setTimeout(()=>{
        console.log('esto no va a salir nunca')
    }, 1200);
});

/* process.on('uncaughtException', (err, origen) => {
    console.log('vaya, se nos olvido captuirar un error');
    console.error(err);
});

const a = b + c; */
console.log('si el error nos e recoje no sale');