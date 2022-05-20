const fastify = require('fastify')({ logger: true })
const topicRoutes = require('./topic/routes')
const newsRoutes = require('./news/routes')


fastify.register(topicRoutes.routes)
fastify.register(newsRoutes.routes)

fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
})

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()
