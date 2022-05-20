/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.
        createTable("news", table => {
            table.increments("id").notNullable();
            table.text("title");
            table.text("content");
            table.text("slug");
            table.enum("status", ['draft', 'published', 'deleted']);
        }).
        createTable("topic", table => {
            table.increments("id").notNullable()
            table.text("name")
            table.text("description")
        }).
        createTable("news_topic", table => {
            table.integer("news_id").references("id").inTable("news").onDelete('CASCADE')
            table.integer("topic_id").references("id").inTable("topic").onDelete('SET NULL')
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema
        .dropTable("news_topic")
        .dropTable("topic")
        .dropTable("news")
};
