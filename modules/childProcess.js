const { exec, spawn } = require('child_process');
/* 
exec('node console.js',(err, stdout, sterr) => {
    if(err){
        console.error(err);
        return false;
    }
    console.log(stdout);
}) */

let proceso = spawn('ls', ['-la']);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log(dato.toString())
})

proceso.on('exit', function (){
    console.log('exit');
    console.log(proceso.killed)
})