const knex = require("../db/knex.js");

module.exports = {
    
getAll: function (req, res, next) {
    knex('items').select().then(item => res.json(item))
  },

addItem: function (req, res) {
    knex('items').insert(req.body).then(() => {
      knex('items').select().then(item => res.json(item))
    });
  },

editItem: function (req, res) {
    knex('items').update(req.body).where('name', req.params.name).then(function () {
      knex('items').select().then(item => res.json(item))
    });
  },

deleteItem: function (req, res) {
    knex('items').del().where('id', req.params.id).then(function () {
      knex('items').select().then(item => res.json(item))
    });
  }

}