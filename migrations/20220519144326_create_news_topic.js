/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.
        createTable("news", table => {
            table.increments("id").notNullable();
            table.string("title");
            table.string("content");
            table.string("slug");
            table.enum("status", ['draft', 'published', 'deleted']);
        }).
        createTable("topic", table => {
            table.increments("id").notNullable()
            table.string("name")
            table.string("description")
        }).
        createTable("news_topic", table => {
            table.increments("id").notNullable()
            table.integer("news_id").references("id").inTable("news")
            table.integer("topic_id").references("id").inTable("topic")
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
