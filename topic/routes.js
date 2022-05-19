const topicHandler = require('./handler')

async function routes(fastify) {
    fastify.post('/topic', topicHandler.createTopic)
    fastify.get('/topic', topicHandler.getTopic)
    fastify.put('/topic/:id', topicHandler.updateTopic)
    fastify.delete('/topic/:id', topicHandler.deleteTopic)
}

module.exports = {
    routes
}
