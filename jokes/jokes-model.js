const db = require('../database/db-config');

const getJokes = filter => {
    if (!filter) {
      return db("jokes");
    } else {
      return db("jokes").where(filter);
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
      .then(() => getJoke(id));
  };
  
  const remove = id => {
    return db("jokes")
      .where({ id })
      .del();
  };
  
  module.exports = {
    getJokes,
    getJoke,
    add,
    update,
    remove
  };
  