exports.seed = function(knex) {
  return knex("actions").insert([
    {
      description: "React Summit",
      notes: "This is my first react summit",
      project_id: 1
    },
    {
      description: "React Summit",
      notes: "This is my first react summit",
      project_id: 1
    },
    {
      description: "Node",
      notes: "This is my first react summit",
      project_id: 2
    },
    {
      description: "Laravel",
      notes: "This is my first react summit",
      project_id: 2
    },
    {
      description: "Vue",
      notes: "This is my first react summit",
      project_id: 3
    },
    {
      description: "Kotlin",
      notes: "This is my first react summit",
      project_id: 4
    },
    {
      description: "Angular",
      notes: "This is my first react summit",
      project_id: 5
    },
    {
      description: "React Summit",
      notes: "This is my first react summit",
      project_id: 5
    }
  ]);
};
