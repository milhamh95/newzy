const newsStorage = require('./storage')

async function createNews(request, reply) {
    const newsReq = request.body

    if (!Array.isArray(newsReq.topics)) {
        return reply.status(400).send({
            message: "invalid request",
        })
    }

    if (newsReq.topics.length === 0) {
        return reply.status(400).send({
            message: "invalid request",
        })
    }

    const { news, err } = await newsStorage.createNews(newsReq)
    if (err) {
        return reply.status(500).send({
            message: "failed to create a new news",
        })
    }

    return reply.status(201).send({
        message: "success",
        data: news,
    })

}

async function updateNews(request, reply) {
    const id = request.params.id
    const newsReq = request.body

    if (!Array.isArray(newsReq.topics)) {
        return reply.status(400).send({
            message: "invalid request",
        })
    }

    if (newsReq.topics.length === 0) {
        return reply.status(400).send({
            message: "invalid request",
        })
    }

    if (id === 0) {
        return reply.status(400).send({
            message: "invalid id",
        })
    }

    const { news, err } = await newsStorage.updateNews(id, newsReq)
    if (err) {
        return reply.status(500).send({
            message: "failed to update a news",
        })
    }

    news.id = id
    return reply.status(200).send({
        message: "success",
        data: news,
    })
}


async function getNews(request, reply) {
    const ids = request.query.ids
    let tmpIds = []
    let newIds = []

    if (ids !== undefined) {
        tmpIds = ids.split(",")
        for (let id of tmpIds) {
            newIds.push(parseInt(id))
        }
    }
    const topic = request.query.topic
    const status = request.query.status

    const { news, err } = await newsStorage.getNews(newIds, topic, status)
    if (err) {
        return reply.status(500).send({
            message: "failed to get news"
        })
    }
    return reply.status(200).send({
        message: "success",
        data: news,
    })
}


async function deleteNews(request, reply) {
    const id = request.params.id
    const { res, err } = await newsStorage.deleteNews(id)
    if (err) {
        return reply.status(500).send({
            message: "failed to delete a news"
        })
    }

    return reply.status(200).send({
        message: "success",
    })
}


module.exports = {
    createNews,
    updateNews,
    getNews,
    deleteNews,
}
