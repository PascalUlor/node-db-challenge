exports.seed = function(knex) {
  return knex("actions").insert([
    {
      description: "React Summit",
      notes: "This is my first react summit",
      project_id: 1
    }
  ]);
};
