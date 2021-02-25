const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');
const commentsRouter = require('./controllers/comments');
const middleware = require('./utils/middleware');
app.use(cors());

// const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});

app.use('/api/comments', commentsRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

module.exports = app;