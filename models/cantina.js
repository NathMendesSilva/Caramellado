const db = require('./db')

const Cantina = db.sequelize.define("cantina", {
    CNPJ: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    RazaoSocial: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    NomeFantasia: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    Email: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    // Escola: {
    //     type: db.Sequelize.STRING,
    //     allowNull: false
    // },
    // Endereco: {
    //     type: db.Sequelize.STRING,
    //     allowNull: false
    // },
    // Cidade: {
    //     type: db.Sequelize.STRING,
    //     allowNull: false
    // },
    // Estado: {
    //     type: db.Sequelize.STRING,
    //     allowNull: false
    // }
}, {
    tableName: 'cantina'
});

// Cantina.sync({force: true})

module.exports = Cantina