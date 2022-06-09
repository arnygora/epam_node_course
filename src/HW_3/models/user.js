const Sequelize = require('sequelize');

const sequelize = require('../config/database');

const User = sequelize.define('user', {
    login: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },
})

module.exports = User;