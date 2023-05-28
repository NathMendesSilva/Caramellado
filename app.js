const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const routes = require('./routes')
const session = require('express-session')
// Adicionei esse session, tem q baixar no cmd

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(routes)
app.use(session({secret:'57988798465'}))
// Coloquei ela em app.js e routes.js. Não sei se precisa colocar nas duas mas tá funcionando desse jeito.

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, '/views'))

app.listen(3000, (req, res) => {
    console.log("Server running!")
})