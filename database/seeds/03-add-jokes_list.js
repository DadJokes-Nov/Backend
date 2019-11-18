exports.seed = function(knex) {
  return knex("jokes_list")
    .truncate()
    .then(function() {
      return knex("jokes_list").insert([
        {
          users_id: 1,
          jokes_id: 1
        },
        {
          users_id: 1,
          jokes_id: 2
        },
        {
          users_id: 2,
          jokes_id: 3
        },
        {
          users_id: 1,
          jokes_id: 4
        },
        {
          users_id: 1,
          jokes_id: 5
        },
        {
          users_id: 2,
          jokes_id: 6
        }
      ]);
    });
};
