//PARAMETROS DA URL


// Importando e configurando o Express
const express = require('express');
const app = express();

// /profiles/12345?
// campanha=googleleads&
// nome_campanha=qualquernome

//req -> request
//res -> response

app.use(express.urlencoded({ extended: true }));// Configurando o middleware para analisar dados de formulários POST

app.get("/", (req, res) => { // Rota GET para a página inicial (http://localhost:3000/)
    res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="qualquercoisa"><br>
    Outro campo: <input type="text" name="aquioutrocampo">
    <button>Olá mundo</button>
    </form>
    `);
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
    // /profiles/3 -> re.params
    // /profiles/?chave1=valor1&chave2=valor2&chave3=valor3 -> req.query
    //
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.facebookprofile);
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.qualquercoisa}`);
});


app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});