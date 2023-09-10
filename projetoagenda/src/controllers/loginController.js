const Login = require('../models/loginModel'); // Importa o modelo Login para interagir com os dados de login no banco de dados

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado'); // Verifica se o usuário está autenticado e renderiza a página 'login-logado'
    return res.render('login'); // Se não estiver autenticado, renderiza a página 'login'
};

exports.register = async function(req, res) {
    try {
        const login = new Login(req.body); // Cria uma nova instância do modelo Login com os dados do corpo da requisição
        await login.register(); // Chama a função de registro no modelo Login

        if(login.errors.length > 0 ){
            req.flash('errors', login.errors); // Se houver erros, adiciona-os à mensagem de erro flash
            req.session.save(function(){
                return res.redirect('/login/index'); // Redireciona de volta para a página de registro
            });
            return;
        }

        req.flash('success', 'Seu usuário foi criado com sucesso.'); // Adiciona uma mensagem de sucesso à mensagem flash
        req.session.save(function(){
            return res.redirect('/login/index'); // Redireciona de volta para a página de registro
        });
    } catch(e) {
        console.log(e); // Se houver um erro, loga-o no console
        return res.render('404'); // Renderiza a página de erro 404
    }
};

exports.login = async function(req, res) {
    try {
        const login = new Login(req.body); // Cria uma nova instância do modelo Login com os dados do corpo da requisição
        await login.login(); // Chama a função de login no modelo Login

        if(login.errors.length > 0 ){
            req.flash('errors', login.errors); // Se houver erros, adiciona-os à mensagem de erro flash
            req.session.save(function(){
                return res.redirect('/login/index'); // Redireciona de volta para a página de login
            });
            return;
        }

        req.flash('success', 'Você entrou no sistema.'); // Adiciona uma mensagem de sucesso à mensagem flash
        req.session.user = login.user; // Define a propriedade 'user' na sessão como o usuário autenticado
        req.session.save(function(){
            return res.redirect('/login/index'); // Redireciona de volta para a página de login
        });
    } catch(e) {
        console.log(e); // Se houver um erro, loga-o no console
        return res.render('404'); // Renderiza a página de erro 404
    }
};

exports.logout = function (req, res) {
    req.session.destroy(); // Destrói a sessão, efetivamente deslogando o usuário
    res.redirect('/'); // Redireciona para a página inicial
};
