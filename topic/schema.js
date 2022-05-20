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

const updateTopicSchema = {
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
    updateTopicSchema,
}
