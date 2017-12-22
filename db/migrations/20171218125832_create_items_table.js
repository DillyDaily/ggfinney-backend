
exports.up = function(knex, Promise) {
    return knex.schema.createTable('items', (table)=>{
        table.increments();
        table.string('name');
        table.string('category');
        table.text('description');
        table.string('image');
        table.decimal('price');
        table.decimal('sales_tax');
        table.timestamps(true, true);
      });
    };

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('items');
};
