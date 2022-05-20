/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('news_topic').del()
  await knex('news').del()
  await knex('topic').del()

  await knex('topic').insert([
    { id: 1, name: 'sport', description: 'sport tag' },
    { id: 2, name: 'game', description: 'game tag' },
    { id: 3, name: 'automotive', description: 'automotive tag' },
  ]);

  await knex('news').insert([
    {
      id: 1,
      title: 'EV battery costs could spike 22% by 2026 as raw material shortages drag on',
      content: 'The cost to produce electric vehicles is primed to surge over the next four years, according to a new report, the result of scarcity in key raw materials needed to make EV battery cells.',
      slug: "ev-battery-costs-could-spike-22-percent-by-2026",
      status: "published",
    },
    {
      id: 2,
      title: 'PSG star Kylian Mbappe to announce his future in LeBron James-style show amid Real Madrid transfer interest',
      content: 'KYLIAN MBAPPE will reportedly announce his eagerly-anticipated next move this weekend.',
      slug: "kylian-mbappe-will-reportedly-announce-his-next-move",
      status: "draft",
    },
  ])

  await knex("news_topic").insert([
    {
      news_id: 1,
      topic_id: 3,
    },
    {
      news_id: 2,
      topic_id: 1,
    }
  ])
};

