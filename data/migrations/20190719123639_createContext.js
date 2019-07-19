exports.up = function(knex) {
  return knex.schema.createTable("context", table => {
    table.increments();
    table.text("name", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("context");
};
