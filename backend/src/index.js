const express = require('express');
// import diagnosisRouter from './routes/diagnosisRoute';
// import patientRouter from './routes/patientRoute';
const app = express();
app.use(express.json());
const cors = require('cors');
app.use(cors());
const middleware = require('./utils/middleware');

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});



// app.use('/api/diagnoses', diagnosisRouter);
// app.use('/api/patients', patientRouter);

app.use(middleware.requestLogger);
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});