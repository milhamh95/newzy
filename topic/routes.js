const topicHandler = require('./handler')
const topicReqResSchema = require('./schema')

async function routes(fastify) {
    fastify.post('/topic', {
        schema: topicReqResSchema.insertTopicSchema,
        handler: topicHandler.createTopic,
    })
    fastify.get('/topic', {
        schema: topicReqResSchema.getTopicSchema,
        handler: topicHandler.getTopic,
    })
    fastify.put('/topic/:id', {
        schema: topicReqResSchema.updateTopicSchema,
        handler: topicHandler.updateTopic,
    })
    fastify.delete('/topic/:id', {
        schema: topicReqResSchema.deleteTopicSchema,
        handler: topicHandler.deleteTopic,
    })
}

module.exports = {
    routes
}
