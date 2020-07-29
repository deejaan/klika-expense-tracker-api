exports.up = function (knex) {
  return knex.schema.createTable('expenses', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('user_id').references('users.id').notNullable();
    table.integer('category_id').references('categories.id').notNullable();
    table.float('amount').notNullable();
    table.text('description', 'LONGTEXT');
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('expenses');
};
