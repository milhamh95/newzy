const server = require('./app')({
    logger: {
        level: 'info',
    },
})

const start = async () => {
    try {
        await server.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
