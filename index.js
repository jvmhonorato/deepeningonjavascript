const express = require('express')
const path = require('path')
const app = express()

//configura o express pra gerar uma rotade acesso a um dirétorio views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//rota HOME  com o metodo res.send envia od dados do objeto
app.get('/', (req, res) => {
    res.send({ name: 'Victor'})
})
//rota USERS vai retornar o que está nessa rota
app.get('/users', (req, res)=> {
    res.send({ name: 'Victor'})
})

//Rota renderiza o conteúdo de "page" atraves do diretorio views, adicionar um objeto como segundo parâmentro para ser chamado com uma teg especial

app.get('/page',  (req, res) => {
    res.render('page', {name: 'Victor'})
})

app.listen(3000, err => {
    console.log(err)
})
