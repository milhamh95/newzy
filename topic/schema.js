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
    params: {
        type: 'object',
        properties: {
            id: { type: 'integer' }
        }
    },
    body: {
        type: 'object',
        required: ['name'],
        properties: {
            name: { type: 'string' },
            description: { type: 'string' },
        }
    }
}

const deleteTopicSchema = {
    params: {
        type: 'object',
        properties: {
            id: { type: 'integer' }
        }
    },
}

const getTopicSchema = {
    params: {
        type: 'object',
        properties: {
            ids: { type: 'string' },
        }
    },
}

module.exports = {
    insertTopicSchema,
    updateTopicSchema,
    getTopicSchema,
    deleteTopicSchema,
}
