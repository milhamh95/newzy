const topicStorage = require('./storage')

async function createTopic(request, reply) {
    topicStorage.createTopic()
    reply
        .code(200)
        .header('Content-Type', 'application/json; charset=utf-8')
        .send({
            "id": 1,
            "name": "sport",
            "description": "sport tag"
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
