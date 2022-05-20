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

        return { news }

    } catch (err) {
        console.log(err)
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
}
