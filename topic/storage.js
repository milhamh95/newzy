const topicModel = require('./model')

async function createTopic(topicReq) {
    try {
        let topic = await topicModel.query().insert({
            name: topicReq.name,
            description: topicReq.description,
        })

        return topic
    } catch (err) {
        return err
    }
}

async function updateTopic() {
    return
}

async function getTopic() {
    return
}

async function deleteTopic() {
    return
}

module.exports = {
    createTopic,
    updateTopic,
    getTopic,
    deleteTopic,
}
