const db = require("../database/dbConfig");

const getJokes = filter => {
  if (!filter) {
    return db("jokes");
  } else {
    return db("jokes").where(filter);
  }
};

const getJokesbyUserId = filter => {
  if (!filter) {
    return db("jokes");
  } else {
    return db("jokes as j")
      .join("jokes_list as jl", "jl.jokes_id", "j.id")
      .where(filter)
      .select("j.id", "j.punchline", "j.jokes_description", "jl.users_id");
  }
};

const getJoke = filter => {
  return db("jokes")
    .where(filter)
    .first();
};

const add = joke => {
  return db("jokes")
    .insert(joke, "id")
    .then(ids => getJoke({ id: ids[0] }));
};

const update = (changes, id) => {
  return db("jokes")
    .where({ id })
    .update(changes)
    .then(() => getJoke({ id }));
};

const remove = id => {
  return db("jokes")
    .where({ id })
    .del();
};

module.exports = {
  getJokes,
  getJokesbyUserId,
  getJoke,
  add,
  update,
  remove
};
