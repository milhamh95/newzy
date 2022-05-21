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

async function getTopic(ids) {
    try {
        if (Array.isArray(ids) && ids.length !== 0) {
            const topics = await topicModel.query().findByIds(ids)
            return { topics }
        }

        const topics = await topicModel.query().orderBy('id', 'desc')
        return { topics }
    } catch (err) {
        return { err }
    }
}

async function deleteTopic(id) {
    try {
        let numDeleted = await topicModel.query().deleteById(id)

        if (numDeleted === 0) {
            throw new Error("topic is not found")
        }

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
