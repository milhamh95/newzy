const { expect } = require("chai");
const { stub } = require("sinon");

const topicStorage = require('../../topic/storage')

let topics = [
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

describe('test topic storage', function () {
    afterEach(() => {
        topicStorage.getTopic.restore()
    })

    describe("get topic", function () {
        it("success", async function () {
            stub(topicStorage, "getTopic").returns(topics)

            const { res, err } = await topicStorage.getTopic([1])

            console.log("res", res)
            console.log("err", err)

            expect(res).to.be.deep.equal(topics)
        })
    })
})
