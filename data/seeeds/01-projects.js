exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        { name: "rowValue1", description: "some text about project" },
        { name: "rowValue2", description: "some text about project" },
        { name: "rowValue3", description: "some text about project" }
      ]);
    });
};
