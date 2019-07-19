exports.up = function(knex) {
  return knex.schema.createTable("contextactions", table => {
    table.increments();
    table
      .integer("action_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("actions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table
      .integer("context_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("context")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("contextactions");
};
