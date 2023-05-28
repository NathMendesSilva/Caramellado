const express = require('express')
const routes = express.Router()
const session = require('express-session');
// Adicionei esse session, tem q baixar no cmd.
const bcrypt = require('bcryptjs');
// Adicionei esse bcrypt, tem q baixar no cmd (baixar o bcryptjs).
// Inclusive o erro que estava dando era sobre esse bcryptjs.


routes.use(session({secret:'57988798465'}))
// O vídeo explica oq é isso, não entendi direito pra ser sincero.

const cantina = require('./models/cantina')
const estudante = require('./models/estudante')

routes.get('/', async (req, res) => {
    await res.render('logado')
})

routes.get('/cadastro-cantina', async (req, res) => {
    await res.render('cadastro-cantina')
})

routes.get('/cadastro-estudante', async (req, res) => {
    await res.render('cadastro-estudante')
})

routes.get('/login-cantina', async (req, res) => {
    await res.render('login-cantina')
})

// let senha = '123';
// let email = 'jooj@gmail.com';

// As variáveis q eu criei AÍ EM CIMA.

routes.post('/login-estudante', async (req, res) => {
    // const Estudante = await estudante.findOne({
    //     attributes: ['Email', 'Senha'],
    //     where: {
    //         Email: req.body.email
    //     }
    // });

    // if(Estudante === null){
    //     console.log('Erro ao logar. Nenhum usuário com este email.')
    // }

    // // if(!(await bcrypt.compare(req.body.Senha, Estudante.Senha))){
    // //     return res.status(400).json({
    // //         erro: true,
    // //         messagem: "Erro, usuario ou senha incorretos"
    // //     });
    // // }

    

    // Essa parte DE CIMA eu criei quando estava tentando validar com os dados do nosso banco. (Deu erro cabuloso)
    // ATENÇÃO AQUI <%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // Essa parte DE BAIXO eu criei quando estava tentando validar com as variáveis q eu mesmo criei. (Deu certo)



    // if(req.body.email == email && req.body.senha == senha){
    //     req.session.email = email;

    //     res.render('logado',{email: email}) // Esse {email: email} é pra conseguir colocar o email no html. Vê lá o logado.html.
    // }else{
    //     res.render('login-estudante');
    // }
})
// Adicionei uma route com post e fiz essa confirmação para ver se o email e senha digitados eram enguais as que eu criei

// A única coisa q falta é um jeito de confirmar se o email digitado é igual a algum email do banco e sua respectiva senha.
// Imagino q isso seja o mais difícil.

routes.get('/login-estudante', async (req, res) => {
    if(req.session.email){
        res.render('logado', {email: email}); // Aqui tbm tem q adicionar (ou pelo menos o cara adicionou no vídeo).
    }else{
        res.render('login-estudante');
    }
})
// Usei o get q vc já tinha criado e adicionei essas coisas. Pra ser sincero tbm não entendi pq precisa dos (get e post) dois, mas tá aí

routes.get('/botoes-login', async (req, res) => {
    await res.render('botoes-login')
})

routes.get('/botoes-cadastrar', async (req, res) => {
    await res.render('botoes-cadastrar')
})

routes.post('/cadastro-cantina', async (req, res) => {
    if (req.body.senha != req.body.confirmarsenha) {
        await res.render('cadastro-cantina')
    } else {
        await cantina.create({
            CNPJ: req.body.cnpj,
            RazaoSocial: req.body.razao,
            NomeFantasia: req.body.nome,
            Email: req.body.email,
            Senha: req.body.senha
        }).then(() => {
            res.render('login-cantina')
        }).catch((err) => {
            console.log('Erro ao cadastrar' + err)
        })
    }
})

routes.post('/cadastro-estudante', async (req, res) => {
    if (req.body.senha != req.body.confirmarsenha) {
        await res.render('cadastro-estudante')
    } else {
        await estudante.create({
            Nome: req.body.nome,
            Sobrenome: req.body.sobrenome,
            Email: req.body.email,
            Senha: req.body.senha
        }).then(() => {
            res.render('login-estudante')
        }).catch((err) => {
            console.log('Erro ao cadastrar' + err)
        })
    }
})

module.exports = routes