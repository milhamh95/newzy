const topicStorage = require('./storage')

async function createTopic(request, reply) {
    const topic = request.body
    const [res, err] = await topicStorage.createTopic(topic)
    if (err != null) {
        return reply.status(500).send({
            message: "failed to create a new topic",
        })
    }

    return reply.status(200).send({
        message: "success",
        data: res,
    })

}

async function updateTopic() {
    topicStorage.updateTopic()
    return
}


async function getTopic() {
    topicStorage.getTopic()
    return
}


async function deleteTopic() {
    topicStorage.deleteTopic()
    return
}


module.exports = {
    createTopic,
    updateTopic,
    getTopic,
    deleteTopic,
}
