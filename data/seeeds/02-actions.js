exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex("actions")
  //   .del()
  //   .then(function() {
  // Inserts seed entries
  return knex("actions").insert([
    {
      description: "React Summit",
      notes: "This is my first react summit",
      project_id: 1
    }
  ]);
  // });
};
