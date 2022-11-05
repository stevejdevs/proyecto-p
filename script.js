
const express = require('express');
const app = express();

const port = 3000;

app.get('/', (request, response)=>{
    response.status(200);
    response.send("Pagina Principal");
});

app.get('/contacto', (request, response)=>{
    response.status(200);
    response.send("Pagina de contacto");
});

app.get('/productos', (request, response)=>{
    response.status(200);
    response.send("Pagina de productos");
});
  
app.listen(port, (error) =>{
    console.log(`Servidor Iniciado`);
});