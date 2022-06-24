console.log('hola mundo');

let i = 0;


setInterval(function(){
    console.log(i);
    i++;
    if (i === 5){
        console.log('staaapp');
    }
    console.log('sigo activo');
},1000);
console.log('segunda insutriccion')