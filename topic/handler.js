const topicStorage = require('./storage')

async function createTopic() {
    topicStorage.createTopic()
    return
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
