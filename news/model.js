const { Model } = require('objection')
const Topic = require('../topic/model')

class NewsModel extends Model {
    static get tableName() {
        return "news"
    }

    static get relationMappings() {
        return {
            topic: {
                modelClass: Topic,
                relation: Model.ManyToManyRelation,
                join: {
                    from: "news.id",
                    through: {
                        from: "news_topic.news_id",
                        to: "news_topic.topic_id",
                    },
                    to: "topic.id",
                }
            }
        }
    }
}

module.exports = NewsModel
