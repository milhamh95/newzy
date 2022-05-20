const topicModel = require('./model')

async function createTopic(topicReq) {
    try {
        let topic = await topicModel.query().insert({
            name: topicReq.name,
            description: topicReq.description,
        })

        return { topic };
    } catch (err) {
        return { err };
    }
}

async function updateTopic(id, topic) {
    try {
        let numUpdated = await topicModel.query().findById(id).patch({
            name: topic.name,
            description: topic.description,
        })

        return { numUpdated }
    } catch (err) {
        return { err }
    }
}

async function getTopic() {
    return
}

async function deleteTopic(id) {
    try {
        let numDeleted = await topicModel.query().deleteById(id)
        return { numDeleted };
    } catch (err) {
        return { err }
    }
}

module.exports = {
    createTopic,
    updateTopic,
    getTopic,
    deleteTopic,
}
