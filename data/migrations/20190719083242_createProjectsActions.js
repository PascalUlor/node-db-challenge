exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments();
      table.text("name", 128).notNullable();
      table.text("description").notNullable();
      table.boolean("completed").defaultTo(false);
    })
    .createTable("actions", table => {
      table.increments();
      table
        .integer("project_id")
        .unique()
        .inTable()
        .notNullable()
        .unsigned()
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table.text("notes", 128).notNullable();
      table.text("description").notNullable();
      table.boolean("completed").defaultTo(false);
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects").dropTableIfExists("actions");
};
