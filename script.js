
const express = require('express');
const ejs = require('ejs');

const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

const port = 3000;

app.get('/', (request, response)=>{
    response.status(200);
    response.render('pages/home');
});

app.get('/login', (request, response)=>{
    response.status(200);
    response.render('pages/login');
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