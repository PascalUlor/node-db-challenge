exports.seed = function(knex) {
  return knex("context").insert([
    { name: "work" },
    { name: "home" },
    { name: "church" }
  ]);
};
