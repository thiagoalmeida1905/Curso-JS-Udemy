const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); //para poder executar comandos que o html por si só não faz, p. ex: for, if etc...

app.use(routes);

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});