const dataAccess = require('../data-access/dataAccess');

class UserService {
    static getAllUsers(loginSubstring, limit) {
        return dataAccess.getUsersList(loginSubstring, limit);
    }

    static findUser(id) {
        return dataAccess.getUserById(id);
    }

    static addUser(user) {
        return dataAccess.createUser(user);
    }

    static updateUser(id, user) {
        return dataAccess.updateUser(id, user);
    }

    static deleteUser(id) {
        return dataAccess.deleteUser(id);
    }
}

module.exports = UserService;