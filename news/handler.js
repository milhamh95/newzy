const newsStorage = require('./storage')

async function createNews(request, reply) {
    const news = request.body

    if (!Array.isArray(news.topics)) {
        return reply.status(400).send({
            message: "invalid request",
        })
    }

    if (news.topics.length === 0) {
        return reply.status(400).send({
            message: "invalid request",
        })
    }

    const { res, err } = await newsStorage.createNews(news)
    if (err) {
        return reply.status(500).send({
            message: "failed to create a new news",
        })
    }

    return reply.status(201).send({
        message: "success",
        data: res,
    })

}

async function updateNews(request, reply) {
    const id = request.params.id
    const news = request.body

    const { res, err } = await newsStorage.updateNews(id, news)
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
            console.log(parseInt(id))
            newIds.push(parseInt(id))
        }
    }

    const { Newss, err } = await newsStorage.getNews(newIds)
    if (err) {
        return reply.status(500).send({
            message: "failed to get news"
        })
    }
    return reply.status(200).send({
        message: "success",
        data: Newss,
    })
}


async function deleteNews(request, reply) {
    const id = request.params.id
    console.log(id)
    const { res, err } = await newsStorage.deleteNews(id)
    console.log("===err===")
    console.log(err)
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
