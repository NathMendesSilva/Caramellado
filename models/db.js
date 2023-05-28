const Sequelize = require('sequelize')

const sequelize = new Sequelize('mydb2', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        freezeTableName: true
    }
})

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!")
}).catch((erro) => {
    console.log("Falha ao se conectar "+erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}