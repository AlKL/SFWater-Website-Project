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
        const savedComment = await comment.save();
        response.json(savedComment);
    } catch (e) {
        if (e.message.includes('`name`')) {
            response.status(400).send('Please leave your name');
        } else if (e.message.includes ('`comment`')) {
            response.status(400).send('Please leave a comment');
        } else {
            response.status(400).send(e.message);
        }
    }
});

module.exports = commentsRouter;