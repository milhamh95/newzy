const insertNewsSchema = {
    body: {
        type: 'object',
        required: ['title', 'topics'],
        properties: {
            title: { type: 'string' },
            content: { type: 'string' },
            slug: { type: 'string' },
            status: { type: 'string' },
            topics: { type: 'array' },
        }
    }
}

const updateNewsSchema = {
    params: {
        type: 'object',
        properties: {
            id: { type: 'integer' }
        }
    },
    body: {
        type: 'object',
        required: ['title', 'topics'],
        properties: {
            title: { type: 'string' },
            content: { type: 'string' },
            slug: { type: 'string' },
            status: { type: 'string' },
            topics: { type: 'array' },
        }
    }
}

const deleteNewsSchema = {
    params: {
        type: 'object',
        properties: {
            id: { type: 'integer' }
        }
    },
}

const getNewsSchema = {
    params: {
        type: 'object',
        properties: {
            ids: { type: 'string' },
            status: { type: 'string' },
            topic: { type: 'string' },
        }
    },
}

module.exports = {
    insertNewsSchema,
    updateNewsSchema,
    getNewsSchema,
    deleteNewsSchema,
}
