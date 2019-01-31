exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", user => {
    user.increments();

    user.string("name", 144).notNullable();
    user.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
