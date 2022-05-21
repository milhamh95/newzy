const { default: fastify } = require('fastify')
const supertest = require('supertest')
const buildFastify = require('../../../app')

describe('GET "/topic"', async function () {
    const fastify = buildFastify()

    await fastify.ready()
    it("success get topic", async function () {

        const response = await supertest(fastify.server)
            .get('/topic?ids=1')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
    })

    after(function () {
        fastify.close()
    })
})

describe('DELETE "/topic"', async function () {
    const fastify = buildFastify()

    await fastify.ready()
    it("success delete topic", async function () {
        const response = await supertest(fastify.server)
            .delete('/topic/7')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')
    })

    after(function () {
        fastify.close()
    })
})

describe('CREATE "/topic"', async function () {
    const fastify = buildFastify()

    await fastify.ready()
    it("success create topic", async function () {
        const data = {
            name: "phone",
            description: "phone tag",
        }

        const response = await supertest(fastify.server)
            .post('/topic')
            .send(data)
            .expect(201)
            .expect('Content-Type', 'application/json; charset=utf-8')
    })

    after(function () {
        fastify.close()
    })
})




