const server = require('./app')({
    logger: {
        level: 'info',
        prettyPrint: true
    },
})

server.listen(3000, (err, address) => {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
})
