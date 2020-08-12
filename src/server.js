const express = require('express');

const users = {
    1: {
        id: 1,
        name: "Sam",
        age: 29,
        sex: "male"
    },
    2: {
        id: 2,
        name: "Taylor",
        age: 10,
        sex: "male"
    },
    3: {
        id: 3,
        name: "Cleo",
        age: 11,
        sex: "male"
    }
};

const app = express();
app.get('/users', (req, res) => {
    res.json(users);
});
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    if (user) {
        res.json(user);
    }
    else {
        res.sendStatus(404);
    }
});

module.exports = app;