require('dotenv').config();
const express = require('express');// Importa o módulo 'express' e o atribui à variável 'express'.
const app = express();// Cria uma instância do Express e a atribui à variável 'app'.
const mongoose = require('mongoose')


mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));

const routes = require('./routes');// Importa o módulo './routes' e o atribui à variável 'routes'.
const path = require('path');// Importa o módulo 'path' para lidar com caminhos de arquivo e diretórios.
const { middlewareGlobal } = require('./src/middlewares/middleware');


app.use(express.urlencoded({ extended: true }));// Middleware para analisar dados de formulários enviados via POST.
app.use(express.static(path.resolve(__dirname, 'public')));// Middleware para servir arquivos estáticos, como imagens, CSS e JavaScript.
app.set('views', path.resolve(__dirname, 'src', 'views'));// Configura a pasta onde estão localizados os templates de visualização (views).
app.set('view engine', 'ejs'); //para poder executar comandos que o html por si só não faz, p. ex: for, if etc...

//Middleware
app.use(middlewareGlobal);
app.use(routes);// Usa as rotas definidas no módulo importado 'routes'.

app.on('pronto', () => {
    app.listen(3000, () => {// Inicia o servidor na porta 3000.
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});
