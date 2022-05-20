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

    const { res, err } = topicStorage.updateTopic(id, topic)
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


async function getTopic() {
    topicStorage.getTopic()
    return
}


async function deleteTopic(request, reply) {
    const id = request.params.id
    const { res, err } = await topicStorage.deleteTopic(id)
    console.log(err)
    if (err) {
        return reply.status(500).send({
            message: "failed to delete a topic"
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
