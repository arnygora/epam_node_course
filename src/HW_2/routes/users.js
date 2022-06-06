const express = require('express');
const {v4: uuidv4} = require('uuid');
const schema = require('../validators/validator.js');
const validator = require('express-joi-validation').createValidator({});

const router = express.Router();

const usersList = [];

const getAutoSuggestUsers = (loginSubstring, limit) => {
    return usersList.filter(user => user.login.includes(loginSubstring))
        .sort((a, b) => a.login.localeCompare(b.login))
        .slice(0, limit);
};

router.get('/users', (req, res) => {
    const { loginSubstring = '', limit = 20 } = req.query;
    const filteredUsers = getAutoSuggestUsers(loginSubstring, limit);

    if (!filteredUsers) {
        res.status(404).send('No users found');
    } else {
        res.status(200).send(filteredUsers);
    }
});

router.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = usersList.find(user => user.id === userId);

    if (!user) {
        res.status(404).send('User does not exist');
    } else {
        res.status(200).send(user);
    }
});

router.post('/user', validator.body(schema), (req, res) => {
    const newUser = req.body;
    newUser.id = uuidv4();
    newUser.isDeleted = false;
    usersList.push(newUser);
    res.status(201).send(newUser);
});

router.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    const { login, password, age } = req.body;
    const user = usersList.find(user => user.id === userId);

    if (!user) {
        res.status(404).send('User does not exist');
    } else {
        user.login = login;
        user.password = password;
        user.age = age;

        res.status(204).send('User has been updated');
    }
});

router.delete('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = usersList.find(user => user.id === userId);

    if (!user) {
        res.status(404).send('User does not exist');
    } else {
        user.isDeleted = true;

        res.status(204).send('User has been deleted');
    }
});

module.exports = router;
