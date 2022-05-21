const fastify = require('fastify')
const topicRoutes = require('./topic/routes')
const newsRoutes = require('./news/routes')

function build(opts = {}) {
    const app = fastify(opts)

    app.register(topicRoutes.routes)
    app.register(newsRoutes.routes)

    return app
}

module.exports = build
