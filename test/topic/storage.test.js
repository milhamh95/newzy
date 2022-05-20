const { assert } = require("chai");
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
            const getTopicFn = stub(topicStorage, "getTopic").returns(topics)

            const { res, err } = topicStorage.getTopic
            console.log(res)
            assert.equal(res, topics)
            // assert.deepEqual(res, topics)
            // assert.isDefined(err)
        })
    })
})
