const newsModel = require('./model')
const topicModel = require('../topic/model')

async function createNews(newsReq) {
    try {
        const topics = await topicModel.query().findByIds(newsReq.topics)
        if (topics.length === 0) {
            throw new Error("topics are not found")

        }
        const news = await topicModel.relatedQuery('news')
            .for(newsReq.topics)
            .insert({
                title: newsReq.title,
                content: newsReq.content,
                slug: newsReq.slug,
                status: newsReq.status,
            })

        news.topics = topics

        return { news }

    } catch (err) {
        return { err }
    }
}

async function updateNews(id, newsReq) {
    try {
        const topics = await topicModel.query().findByIds(newsReq.topics)
        if (topics.length === 0) {
            throw new Error("topics are not found")
        }

        const knex = topicModel.knex()
        const newsTopicDeletedRes = await knex.raw(`delete from news_topic where news_id = ${id}`)

        const news = await topicModel.relatedQuery('news')
            .for(newsReq.topics)
            .patch({
                title: newsReq.title,
                content: newsReq.content,
                slug: newsReq.slug,
                status: newsReq.status,
            })
            .where('id', id)

        news.topics = topics

        return { news }

    } catch (err) {
        return { err }
    }
}

async function getNews(ids, topicParam, status) {
    try {
        if (topicParam !== "") {
            const topic = await topicModel.query().where("name", topicParam)
            if (topic.id === 0) {
                throw new Error("topic is not found")
            }

            const knex = topicModel.knex()

            let query = `select news.*,
            topic.id as topicid, topic."name" as topicname, topic.description as topicdescription
            from news_topic
            join news on news.id = news_topic.news_id
            join topic on topic.id = news_topic.topic_id
            WHERE topic.id = ${topic[0].id}`

            const res = await knex.raw(query)

            let news = []
            for (item of res.rows) {
                let topic = {
                    id: item.topicid,
                    name: item.topicname,
                    description: item.topicdescription,
                }
                let newsItem = {
                    id: item.id,
                    title: item.title,
                    content: item.content,
                    slug: item.slug,
                    status: item.status,
                    topics: [topic],
                }
                news.push(newsItem)
            }

            return { news }
        }

        if (status !== "") {
            const news = await newsModel.query()
                .withGraphFetched('topic')
                .where("status", status)
            return { news }
        }

        if (Array.isArray(ids) && ids.length !== 0) {
            const news = await newsModel.query()
                .withGraphFetched('topic')
                .findByIds(ids)
            return { news }
        }

        const news = await newsModel.query().withGraphFetched('topic').orderBy('id', 'desc')
        return { news }
    } catch (err) {
        return { err }
    }
}

async function deleteNews(id) {
    try {
        let numDeleted = await newsModel.query().deleteById(id)

        if (numDeleted === 0) {
            throw new Error("news is not found")
        }

        return { numDeleted };
    } catch (err) {
        return { err }
    }
}

module.exports = {
    createNews,
    deleteNews,
    updateNews,
    getNews,
}
