const supertest = require('supertest')
const buildFastify = require('../../app.js')


describe('GET "/"', async function () {
    const fastify = buildFastify()

    await fastify.ready()
    it("success", async function () {

        const response = await supertest(fastify.server)
            .get('/')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
    })

    after(function () {
        fastify.close()
    })
})


