const express = require('express');
const schema = require('../validators/validator.js');
const validator = require('express-joi-validation').createValidator({});
const UserService = require('../services/userService');
const router = express.Router();

const getAutoSuggestUsers = (data) => {
    return data.sort((a, b) => a.login.localeCompare(b.login))
};

router.get('/users', (req, res) => {
    const {loginSubstring = '', limit = 20} = req.query;
    UserService.getAllUsers(loginSubstring, limit)
        .then(data => res.status(200).send(getAutoSuggestUsers(data)))
        .catch(error => res.status(404).send(error));
});

router.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    UserService.findUser(userId)
        .then(data => res.status(200).send(data))
        .catch(error => res.status(404).send(error))
});

router.post('/user', validator.body(schema), (req, res) => {
    const newUser = req.body;
    UserService.addUser(newUser)
        .then(data => res.status(201).send(data))
        .catch(err => res.status(500).send(err));
});

router.put('/user/:id', (req, res) => {
    const id = req.params.id;
    UserService.updateUser(id, req.body)
        .then(data => {
        const [user] = data[1];
        console.log(user.dataValues);
        res.status(204).send(user.dataValues)
    }).catch(err => res.status(500).send(err))
});

router.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    UserService.deleteUser(id)
        .then(data => {
        const [user] = data[1];
        console.log(user.dataValues);
        res.status(204).send(user.dataValues)
    }).catch(err => res.status(500).send(err))
});

module.exports = router;
