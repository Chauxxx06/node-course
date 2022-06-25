const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';
let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

/* readableStream.on('data', (chunk) =>{
    data += chunk;
});

readableStream.on('end', () => {
    console.log(data)
});

process.stdout.write('hola');
process.stdout.write('que');
process.stdout.write('tal'); */

const ttransform = stream.Transform;

function Mayus(){
    ttransform.call(this);
}

util.inherits(Mayus, ttransform);

Mayus.prototype._transform = (chunck, codif, cd) => {
    chunckMayus = chunck.toString().toUpperCase();
    this.push(chunckMayus);
    cb();
}

let mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);
