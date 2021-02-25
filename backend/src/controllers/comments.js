const commentsRouter = require('express').Router();

commentsRouter.post('/', async (request, response) => {
    try {
        const body = request.body;
        if (body.name === 'Alex Lim') {
            throw new Error('ERROR TEST');
        }
        console.log(body);
        response.json(body);
    } catch (e) {
        response.status(400).send(e.message);
    }
});

module.exports = commentsRouter;