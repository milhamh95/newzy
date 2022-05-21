const { expect } = require('chai')
const supertest = require('supertest')
const buildFastify = require('../../../app')

describe('GET "/news"', async function () {
    const fastify = buildFastify()

    await fastify.ready()
    it("success get news", async function () {

        const response = await supertest(fastify.server)
            .get('/news?ids=1')
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')

        expect(response.body.data.length).to.be.equal(1)
    })

    after(function () {
        fastify.close()
    })
})

describe('DELETE "/news"', async function () {
    const fastify = buildFastify()

    await fastify.ready()
    it("success delete news", async function () {
        await supertest(fastify.server)

        const data = {
            title: "news1",
            status: "published",
            topics: [1],
        }

        const news1Res = await supertest(fastify.server)
            .post('/news')
            .send(data)
            .expect(201)
            .expect('Content-Type', 'application/json; charset=utf-8')

        console.log("created news")
        console.log(news1Res)

        const res = await supertest(fastify.server)
            .delete(`/news/${news1Res.body.data.id}`)
            .expect(200)

        expect(res.body.message).to.be.equal("success")
    })

    after(function () {
        fastify.close()
    })
})

describe('CREATE "/news"', async function () {
    const fastify = buildFastify()

    await fastify.ready()
    it("success create news", async function () {
        const data = {
            title: "news1",
            status: "published",
            topics: [1],
        }

        const res = await supertest(fastify.server)
            .post('/news')
            .send(data)
            .expect(201)
            .expect('Content-Type', 'application/json; charset=utf-8')

        expect(res.body.data.title).to.be.equal("news1")
    })

    after(function () {
        fastify.close()
    })
})

describe('UPDATE "/news"', async function () {
    const fastify = buildFastify()

    await fastify.ready()
    it("success update news", async function () {
        const data = {
            title: "news1update",
            status: "published",
            topics: [1],
        }

        const res = await supertest(fastify.server)
            .put('/news/1')
            .send(data)
            .expect(200)
            .expect('Content-Type', 'application/json; charset=utf-8')

        expect(res.body.data.title).to.be.equal("news1update")
    })

    after(function () {
        fastify.close()
    })
})



