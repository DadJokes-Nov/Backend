exports.seed = async function(knex) {
  await knex("jokes").del();
  // await knex.raw('ALTER SEQUENCE jokes_id_seq RESTART WITH 1');
  await knex("jokes").insert([
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
        },
        {
          punchline: "pun it",
          jokes_description: "A steak pun is a rare medium well done."
        },
        {
          punchline: "tomato blush",
          jokes_description:
            "Why did the tomato blush? Because it saw the salad dressing."
        },
        {
          punchline: "have you ever heard a joke? try the catholic!",
          jokes_description:
            "Did you hear the joke about the wandering nun? She was a roman catholic."
        },
        {
          punchline: "parrots are smart!",
          jokes_description:
            "What creature is smarter than a talking parrot? A spelling bee."
        },
        {
          punchline: "look deeply",
          jokes_description:
            "I'll tell you what often gets over looked... garden fences."
        },
        {
          punchline: "can you play like a kid?",
          jokes_description:
            "Why did the kid cross the playground? To get to the other slide."
        },
        {
          punchline: "birds do fly",
          jokes_description:
            "Why do birds fly south for the winter? Because it's too far to walk."
        },
        {
          punchline: "uaaaaaahhhhh!!!!!",
          jokes_description:
            "What is a centipedes's favorite Beatle song?  I want to hold your hand, hand, hand, hand..."
        },
        {
          punchline: "use the stairs?",
          jokes_description:
            "My first time using an elevator was an uplifting experience. The second time let me down."
        },
        {
          punchline: "nameless",
          jokes_description: "To be Frank, I'd have to change my name."
        },
        {
          punchline: "dogs don't sleep",
          jokes_description:
            "Slept like a log last night … woke up in the fireplace."
        },
        {
          punchline: "Moon-rocks",
          jokes_description:
            "Why does a Moon-rock taste better than an Earth-rock? Because it's a little meteor."
        }
      ]);
};
