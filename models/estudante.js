const db = require('./db')
const Cantina = require('./cantina')

const Estudante = db.sequelize.define("estudante", {
    Nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    Sobrenome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    // Telefone: {
    //     type: db.Sequelize.STRING,
    //     allowNull: false
    // },
    // Sexo: {
    //     type: db.Sequelize.STRING,
    //     allowNull: false
    // },
    Email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    Senha: {
        type: db.Sequelize.STRING,
        allowNull: false
    }

    // Tinha esquecido de colocar a senha.

}, {
    tableName: 'estudante'
});

// Estudante.sync({force: true})

Cantina.hasMany(Estudante);
Estudante.belongsTo(Cantina);


module.exports = Estudante