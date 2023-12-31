require('dotenv').config();
const express = require('express');// Importa o módulo 'express' e o atribui à variável 'express'.
const app = express();// Cria uma instância do Express e a atribui à variável 'app'.
const mongoose = require('mongoose')// importa o módulo Mongoose 


mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');//emit -> permiter emitir um evento personalizado(pronto)
    })
    .catch(e => console.log(e));

    //importando os módulos necessarios 
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require ('connect-flash');
const routes = require('./routes');// Importa o módulo './routes' e o atribui à variável 'routes'.
const path = require('path');// Importa o módulo 'path' para lidar com caminhos de arquivo e diretórios.
const { middlewareGlobal } = require('./src/middlewares/middleware');



//middlewares
app.use(express.urlencoded({ extended: true }));// Middleware para analisar dados de formulários enviados via POST.
app.use(express.static(path.resolve(__dirname, 'public')));// Middleware para servir arquivos estáticos, como imagens, CSS e JavaScript.



//configurações das opções da sessão
const sessionOptions = session({
    secret: 'texto que ninguem vai saber',
    //store: new MongoStore({ mongooseConnection: mongooseConnection }),
    resave: false, // Se a opção 'resave' for definida como false, a sessão não será salva automaticamente se nenhuma alteração for feita durante a solicitação
    saveUninitialized: false, // Se for definida como false, as sessões não serão salvas para solicitações que não modificam a sessão
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,//tempo que o cookie vai durar (7dias)
        httpOnly: true// A opção 'httpOnly' impede que o cookie seja acessado por scripts do lado do cliente, tornando-o mais seguro.
    },
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING})// A URL de conexão com o MongoDB é obtida a partir de uma variável de ambient(process.env.CONNECTIONSTRING)
});

app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));// Configura a pasta onde estão localizados os templates de visualização (views).
app.set('view engine', 'ejs'); //para poder executar comandos que o html por si só não faz, p. ex: for, if etc...

//Middleware
app.use(middlewareGlobal);
app.use(routes);// Usa as rotas definidas no módulo importado 'routes'.

app.on('pronto', () => { //quando o evento pronto for emitido execute abaixo
    app.listen(3000, () => {// Inicia o servidor na porta 3000.
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});
