const logger = require('./logger');

const requestLogger = (request, response, next) => {
    logger.info('Method:', request.method);
    logger.info('Path:  ', request.path);
    logger.info('Body:  ', request.body);
    logger.info('---');
    next();
};

const unknownEndpoint = (request, response) => {
    response.status(404).sendFile(__dirname + '/404.html');
    // response.send('404 Page', 404);
    // response.sendFile(__dirname + '/404.html');
};

// if (error.name === 'CastError') {
//     return response.status(400).send({
//         error: 'malformatted id'
//     });
// } else

const errorHandler = (error, request, response, next) => {
    if (error.name === 'ValidationError') {
        // return response.status(400).json({
        //     error: error.message
        // });
        return response.send(error.message, 400);
    }
    logger.error(error.message);

    next(error);
};

module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler
};