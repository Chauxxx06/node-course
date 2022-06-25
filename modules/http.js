const http = require('http');

http.createServer(router).listen(3000);

function router(req, resp) {
    console.log('nueva peticion');
    console.log(req.url);
    switch (req.url){
        case '/hola':
            resp.write('hola que haces');
            resp.end();
            break;
        default:
            resp.write('Error 404');
            resp.end();
    } 
   /*  resp.writeHead(201, { 'content-Type': 'text/plain' });
    resp.write('hola, ya se utilizar http en nodejs')
    resp.end(); */
    }


console.log("listening in port 3000");