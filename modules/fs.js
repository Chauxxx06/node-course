const fs = require('fs');

const leer = async(route, cb ) => {
    fs.readFile(route, (err, data)=>{
        console.log(data.toString());
    });
};

const escribir = async (route, contenido, cb) => {
    fs.writeFile(route, contenido, (err)=>{
       if (err){
            console.log('no pude escribir');
       }else{
            console.log('se escribio');
       }
    });
}

const eliminar = async (route) => {
    fs.unlink(route);
};

/* leer(__dirname + '/file.txt');
escribir(__dirname + '/file1.txt', 'soy un nuevo archivo') */
/* eliminar(__dirname + '/file1.txt') */