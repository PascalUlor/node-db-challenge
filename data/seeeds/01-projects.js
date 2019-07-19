exports.seed = function(knex) {
  return knex("projects").insert([
    { name: "rowValue1", description: "some text about project" }
  ]);
};
