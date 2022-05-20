const topicHandler = require('./handler')
const topicReqResSchema = require('./schema')

async function routes(fastify) {
    fastify.post('/topic', {
        schema: topicReqResSchema.insertTopicSchema,
        handler: topicHandler.createTopic,
    })
    fastify.get('/topic', topicHandler.getTopic)
    fastify.put('/topic/:id', {
        schema: topicReqResSchema.updateTopicSchema,
        handler: topicHandler.updateTopic,
    })
    fastify.delete('/topic/:id', topicHandler.deleteTopic)
}

module.exports = {
    routes
}
