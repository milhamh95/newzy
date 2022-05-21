const tap = require('tap')
const supertest = require('supertest')
const buildFastify = require('../../app')

tap.test('GET `/news` route', async (t) => {
    const fastify = buildFastify({
        logger: {
            level: 'info',
        },
    })

    t.teardown(() => fastify.close())

    await fastify.ready()

    const response = await supertest(fastify.server)
        .get('/topic')
        .expect(200)
        .expect('Content-Type', 'application/json; charset=utf-8')
    t.same(response.body, { hello: 'world' })
})
