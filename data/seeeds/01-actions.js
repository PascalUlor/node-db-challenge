exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          project_id: 1,
          description: "React Summit",
          notes: "This is my first react summit"
        },
        {
          project_id: 2,
          description: "Andela Hacker Challenge",
          notes: "Hackerank test it here again"
        },
        {
          project_id: 3,
          description: "Church Harvest",
          notes: "Raise funds for the poor"
        }
      ]);
    });
};
