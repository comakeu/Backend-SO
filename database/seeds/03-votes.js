exports.seed = function(knex) {
  return knex("votes")
    .truncate()
    .then(function() {
      return knex("votes").insert([
        {
          issue_id: 1,
          user_id: 1
        },
        {
          issue_id: 1,
          user_id: 2
        },
        {
          issue_id: 1,
          user_id: 3
        },
        {
          issue_id: 2,
          user_id: 1
        },
        {
          issue_id: 3,
          user_id: 2
        },
        {
          issue_id: 4,
          user_id: 1
        },
      ]);
    });
};
