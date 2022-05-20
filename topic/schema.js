const topic = {
    id: { type: 'number' },
    name: { type: 'string' },
    description: { type: 'description' },
}

const insertTopicSchema = {
    body: {
        type: 'object',
        required: ['name'],
        properties: {
            name: { type: 'string' },
            description: { type: 'string' },
        }
    }
}

module.exports = {
    insertTopicSchema,
}
