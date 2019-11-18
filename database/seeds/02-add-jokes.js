exports.seed = function(knex) {
  return knex("jokes")
    .truncate()
    .then(function() {
      return knex("jokes").insert([
        {
          punchline: "No guts!!!",
          jokes_description:
            "Why didn’t the skeleton cross the road? Because he had no guts."
        },
        {
          punchline: "I'm a cashew!!",
          jokes_description:
            "What did one nut say as he chased another nut?  I'm a cashew!"
        },
        {
          punchline: "my chances ",
          jokes_description:
            "Chances are if you' ve seen one shopping center, you've seen a mall."
        },
        {
          punchline: "hahahaha",
          jokes_description:
            "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take."
        },
        {
          punchline: "the stadium man!",
          jokes_description:
            "How come the stadium got hot after the game? Because all of the fans left."
        },
        {
          punchline: "the dark ages!!!",
          jokes_description:
            "Why was it called the dark ages? Because of all the knights."
        }
      ]);
    });
};
