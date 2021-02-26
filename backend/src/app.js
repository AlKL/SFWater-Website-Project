const express = require('express');
const app = express();
const cors = require('cors');

const commentsRouter = require('./controllers/comments');
const middleware = require('./utils/middleware');

app.use(cors());
app.use(express.static('build'));
app.use(express.json());

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/comments', commentsRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;