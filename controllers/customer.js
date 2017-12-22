const knex = require("../db/knex.js");

module.exports = {

index: function(req, res, next) {
    res.render('index', { title: 'Express' });
    },

getAll: function (req, res, next) {
    knex('items').select().then(item => res.json(item))
    },

getCategory: function(req, res, next) {
    kenx('items').select().then(item => res.json(item))
    },

getOne: function (req, res, next) {
    knex('items').select().where('name', req.params.name).then(item => res.json(item))
    }

}