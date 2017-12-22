
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {name: 'ocean-disk-beads', category: 'beads', description: 'lampwork beads', image: 'http://via.placeholder.com/350x350', price: '195.00', sales_tax: '.056'},
        {name: 'sister-beads', category: 'jewelry', description: 'incredible necklace', image: 'http://via.placeholder.com/350x350', price: '195.00', sales_tax: '.056'},
        {name: 'swirled', category: 'metal', description: 'pmc metalwork', image: 'http://via.placeholder.com/350x350', price: '195.00', sales_tax: '.056'}
      ]);
    });
};
