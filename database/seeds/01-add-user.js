const bcrypt = require("bcryptjs");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "ayormeday",
          email: "ayormeday@gmail.com",
          password: bcrypt.hashSync("test", 10)
        },
        {
          username: "newman",
          email: "newman@gmail.com",
          password: bcrypt.hashSync("test", 10)
        }
      ]);
    });
};
