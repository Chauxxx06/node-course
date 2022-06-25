let suma = 0;

console.time("temporizator");
for(let i = 0; i < 1000000000; i++){
    suma += 1;
}
asincrona ().then();
console.timeEnd("temporizator");

function asincrona () {
    return  new Promise((resolve) => {
        setTimeout(()=>{
            console.log('termina el proceso asincrono');
            resolve();
        }, 2500);
    });
}