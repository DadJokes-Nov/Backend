exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments();

      tbl
        .string("username", 255)
        .notNullable()
        .unique();
      tbl
        .string("email", 128)
        .notNullable()
        .unique();
      tbl.string("password", 255).notNullable();
    })

    .createTable("jokes", tbl => {
      tbl.increments();
      tbl
        .string("punchline", 255)
        .notNullable()
        .unique();
      tbl.string("jokes_description", 500).notNullable();
    })

    .createTable("jokes_list", tbl => {
      tbl.increments();
      // foreign key for user id
      tbl
        .integer("users_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      // Foreign Key for joke id

      tbl
        .integer("jokes_id")
        .unsigned()
        .references("id")
        .inTable("jokes")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("jokes")
    .dropTableIfExists("jokes_list");
};
