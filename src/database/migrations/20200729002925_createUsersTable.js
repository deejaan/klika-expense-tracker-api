exports.up = function (knex) {
  knex.schema
    .createTable('Users', table => {
      table.increments('id');
      table.string('email');
      table.integer('password');
      table.string('first_name');
      table.string('last_name');
    })
    .then(() => {});
};

exports.down = function (knex) {
  return knex.schema.dropTable('Users');
};
