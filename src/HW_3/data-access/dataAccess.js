const {Op} = require("sequelize");

const User = require('../models/user');
const {v4: uuidv4} = require("uuid");

class DataAccess {
    static getUsersList(loginSubstring, limit) {
        return User.findAll({
            where: {
                login: {
                    [Op.substring]: loginSubstring,
                },
            },
            limit
        });
    }

    static getUserById(id) {
        return User.findByPk(id);
    }

    static createUser(user) {
        return User.create({
            ...user,
            id: uuidv4(),
            isDeleted: false,
        });
    }

    static updateUser(id, user) {
        return User.update(user, {
            where: {id},
            returning: true
        });
    }

    static deleteUser(id) {
        return User.update({isDeleted: true}, {
            where: {id},
            returning: true
        });
    }
}

module.exports = DataAccess;