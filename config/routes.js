const express = require('express');
const router = express.Router();
const customer = require("../controllers/customer.js")
const admin = require("../controllers/admin.js")

//USER Experience: 
router.get('/', customer.index);

router.get('/shop', customer.getAll);

router.get('/shop/:category', customer.getCategory);

router.get('/shop/:category/:name', customer.getOne);


//ADMIN - Experience: 
router.get('/admin/items', admin.getAll);

router.post('/admin/item/new', admin.addItem);

router.patch('/admin/item/edit/:name', admin.editItem);

router.delete('/admin/delete/item/:id', admin.deleteItem);


module.exports = router;

// USER - Send a Message
// router.post('/contact', function (req, res) {
//       knex('messages').insert(req.body).then(() => {
//             knex('messages').select().then(message => res.json(message))
//           });
//         });

// ADMIN - Get All Messages
// router.get('/admin/messages', function (req, res, next) {
//       knex('messages').select().then(message => res.json(message))
//     });
        
// ADMIN - Delete One Message
//     router.delete('/delete/message/:id', function (req, res) {
//       knex('messages').del().where('id', req.params.id).then(function () {
//             knex('messages').select().then(messages => res.json(messages))
//           });
//         });