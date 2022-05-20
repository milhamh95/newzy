const newsHandler = require('./handler')
const newsReqResSchema = require('./schema')

async function routes(fastify) {
    fastify.post('/news', {
        schema: newsReqResSchema.insertNewsSchema,
        handler: newsHandler.createNews,
    })
    fastify.get('/news', newsHandler.getNews)
    fastify.put('/news/:id', {
        schema: newsReqResSchema.updateNewsSchema,
        handler: newsHandler.updateNews,
    })
    fastify.delete('/news/:id', newsHandler.deleteNews)
}

module.exports = {
    routes
}
