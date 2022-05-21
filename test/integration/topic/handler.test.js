const { expect } = require('chai')
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
        await supertest(fastify.server)

        const data = {
            name: "audio",
            description: "audio tag",
        }

        const audioRes = await supertest(fastify.server)
            .post('/topic')
            .send(data)
            .expect(201)

        const res = await supertest(fastify.server)
            .delete(`/topic/${audioRes.body.data.id}`)
            .expect(200)

        expect(res.body.message).to.be.equal("success")
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

        const res = await supertest(fastify.server)
            .post('/topic')
            .send(data)
            .expect(201)
            .expect('Content-Type', 'application/json; charset=utf-8')

        expect(res.body.data.name).to.be.equal("phone")
    })

    after(function () {
        fastify.close()
    })
})

describe('UPDATE "/topic"', async function () {
    const fastify = buildFastify()

    await fastify.ready()
    it("success update topic", async function () {
        const data = {
            name: "phone",
            description: "phone tag",
        }

        const res = await supertest(fastify.server)
            .put('/topic/1')
            .send(data)
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')

        expect(res.body.data.name).to.be.equal("phone")
    })

    after(function () {
        fastify.close()
    })
})



