const newsModel = require('./model')

// async function createNews(newsReq) {
//     try {
//         const topics = await topicModel.query().findByIds(newsReq.topics)
//         if (topics.length === 0) {
//             return "topics is not found"
//         }

//         const news = await newsModel.relatedQuery('topic').for()

//     } catch (err) {
//         return { err }
//     }
// }

async function deleteNews(id) {
    try {
        let numDeleted = await newsModel.query().deleteById(id)

        if (numDeleted === 0) {
            throw new Error("news is not found")
        }

        return { numDeleted };
    } catch (err) {
        return { err }
    }
}

module.exports = {
    deleteNews,
}
