const fastify = require('fastify')
const topicRoutes = require('./topic/routes')
const newsRoutes = require('./news/routes')

function build(opts = {}) {
    const app = fastify(opts)

    app.register(topicRoutes.routes)
    app.register(newsRoutes.routes)

    app.get('/', function (request, reply) {
        return reply.status(200).send({ hello: "world" })
    })

    return app
}

module.exports = build
