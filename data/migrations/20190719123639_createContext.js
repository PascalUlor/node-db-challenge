exports.up = function(knex) {
  return knex.schema.createTable("context", table => {
    table.increments();
    table
      .integer("action_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("actions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.text("name", 128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("context");
};
