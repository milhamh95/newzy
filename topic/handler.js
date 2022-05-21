const topicStorage = require('./storage')

async function createTopic(request, reply) {
    const topic = request.body
    const { res, err } = await topicStorage.createTopic(topic)
    if (err) {
        return reply.status(500).send({
            message: "failed to create a new topic",
        })
    }

    return reply.status(201).send({
        message: "success",
        data: res,
    })

}

async function updateTopic(request, reply) {
    const id = request.params.id
    const topic = request.body

    if (id === 0) {
        return reply.status(400).send({
            message: "invalid request",
        })
    }

    const { res, err } = await topicStorage.updateTopic(id, topic)
    if (err) {
        return reply.status(500).send({
            message: "failed to update a topic",
        })
    }

    topic.id = id
    return reply.status(200).send({
        message: "success",
        data: topic,
    })
}


async function getTopic(request, reply) {
    const ids = request.query.ids
    let tmpIds = []
    let newIds = []

    if (ids !== undefined) {
        tmpIds = ids.split(",")
        for (let id of tmpIds) {
            newIds.push(parseInt(id))
        }
    }

    const { topics, err } = await topicStorage.getTopic(newIds)
    if (err) {
        return reply.status(500).send({
            message: "failed to get topic"
        })
    }
    return reply.status(200).send({
        message: "success",
        data: topics,
    })
}


async function deleteTopic(request, reply) {
    const id = request.params.id
    if (id === 0) {
        return reply.status(400).send({
            message: "invalid id"
        })
    }

    const { numDeleted, err } = await topicStorage.deleteTopic(id)
    if (err) {
        return reply.status(500).send({
            message: err.message
        })
    }

    return reply.status(200).send({
        message: "success",
    })
}


module.exports = {
    createTopic,
    updateTopic,
    getTopic,
    deleteTopic,
}
