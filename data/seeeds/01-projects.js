exports.seed = function(knex) {
  return knex("projects").insert([
    { name: "Project 1", description: "some text about project" },
    { name: "Project 2", description: "some text about project" },
    { name: "Project 3", description: "some text about project" },
    { name: "Project 4", description: "some text about project" },
    { name: "Project 5", description: "some text about project" }
  ]);
};
