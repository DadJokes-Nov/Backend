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
          users_id: 1,
          jokes_id: 6
        },
        {
          users_id: 2,
          jokes_id: 7
        },
        {
          users_id: 2,
          jokes_id: 8
        },
        {
          users_id: 2,
          jokes_id: 9
        },
        {
          users_id: 2,
          jokes_id: 10
        },
        {
          users_id: 2,
          jokes_id: 11
        },
        {
          users_id: 2,
          jokes_id: 12
        },
        {
          users_id: 2,
          jokes_id: 14
        },
        {
          users_id: 2,
          jokes_id: 15
        },
        {
          users_id: 2,
          jokes_id: 16
        },
      ]);
    });
};
