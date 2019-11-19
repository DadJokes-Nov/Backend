const db = require('../database/dbConfig');

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
      return db("jokes_list as jl").join("jokes as j, jl.users_id, j.id ")
      .where({'jl.jokes_id' :filter});
    }
  };

  const getJoke = filter => {
    return db("jokes")
      .where(filter)
      .first();
  };

  const add = joke => {
    return db("jokes")
      .insert(joke)
      .then(ids => getJoke({ id: ids[0] }));
  };
  
  const update = (changes, id) => {
    return db("jokes")
      .where({ id })
      .update(changes)
      .then(() => getJoke({id}));
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
  