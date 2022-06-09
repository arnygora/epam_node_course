const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false // пришлось добавить т.к. не хочет коннектиться к базе
        }
    },
    host: 'ec2-52-212-228-71.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'd9mmq1rimur50p',
    username: 'tpkbhkxbzmaqad',
    password: 'eddd7700a7c2f81cd46cc728c8139d755d5c0a70baa726b514855cd0b76d09f1',
});

module.exports = sequelize;