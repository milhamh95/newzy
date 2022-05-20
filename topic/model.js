const { Model } = require('objection')
const knex = require('../db/db')

Model.knex(knex)

class TopicModel extends Model {
    static get tableName() {
        return "topic";
    }

    static get relationMappings() {
        const News = require('../news/model')
        return {
            news: {
                modelClass: News,
                relation: Model.ManyToManyRelation,
                join: {
                    from: "topic.id",
                    through: {
                        from: "news_topic.topic_id",
                        to: "news_topic.news_id",
                    },
                    to: "news.id",
                }
            }
        }
    }
}

module.exports = TopicModel
