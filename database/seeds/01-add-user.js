const bcrypt = require("bcryptjs");
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1');
  await knex("users").insert([
    {
      username: "ayormeday",
      email: "ayormeday@gmail.com",
      password: bcrypt.hashSync("test", 10),
    },
    {
      username: "newman",
      email: "newman@gmail.com",
      password: bcrypt.hashSync("test", 10),
    }
  ]);
};
