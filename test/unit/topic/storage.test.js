const { expect } = require("chai");
const { stub } = require("sinon");

const topicStorage = require('../../../topic/storage')

let topicsData = [
    {
        id: 1,
        name: "sport",
        description: "sport tag",
    },
    {
        id: 2,
        name: "car",
        description: "car tag",
    },
]

describe('get topic storage', function () {
    afterEach(() => {
        topicStorage.getTopic.restore()
    })

    describe("get topic", function () {
        it("success", async function () {
            stub(topicStorage, "getTopic").returns(topicsData)

            const topics = await topicStorage.getTopic([1])

            expect(topics).to.be.deep.equal(topicsData)
        })
    })
})

describe("insert topic storage", function () {
    afterEach(() => {
        topicStorage.createTopic.restore()
    })

    it("success", async function () {
        stub(topicStorage, "createTopic").returns(topicsData[0])

        const topic = await topicStorage.createTopic(topicsData[0])

        expect(topic).to.be.deep.equal(topicsData[0])
    })
})


describe("delete topic storage", function () {
    afterEach(() => {
        topicStorage.deleteTopic.restore()
    })

    it("success", async function () {
        stub(topicStorage, "deleteTopic").returns(1)

        const res = await topicStorage.deleteTopic(1)

        expect(res).to.be.equal(1)
    })
})

describe("update topic storage", function () {
    afterEach(() => {
        topicStorage.updateTopic.restore()
    })

    it("success", async function () {
        let expectedTopic = {
            id: 1,
            name: "computer",
            description: "computer tag",
        }

        let newTopic = {
            name: "computer",
            description: "computer tag",
        }

        stub(topicStorage, "updateTopic").returns(expectedTopic)

        const res = await topicStorage.updateTopic(expectedTopic.id, newTopic)

        expect(res).to.be.equal(expectedTopic)
    })
})

