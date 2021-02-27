const commentsRouter = require('express').Router();
const Comment = require('../models/comment');

commentsRouter.post('/', async (request, response) => {
    try {
        const body = request.body;
        if (body.name === 'Alex Lim') {
            throw new Error('ERROR TEST');
        }
        const comment = new Comment({
            name: body.name,
            email: body.email,
            comment: body.comment
        });
        await comment.save();
    } catch (e) {
        response.status(400).send(e.message);
    }
});

module.exports = commentsRouter;