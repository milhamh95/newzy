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

module.exports = {
    insertNewsSchema,
    updateNewsSchema,
}
