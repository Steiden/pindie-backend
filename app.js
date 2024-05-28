const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const api = require('./routes/api');

const connectToDatabase = require('./database/connect');

const cors = require('./middlewares/cors');
const cookieParser = require('cookie-parser');
const pagesRouter = require('./routes/page');

const PORT = process.env.PORT || 3001;
const app = express();

connectToDatabase();

app.use(
    cors,
    cookieParser(),
    bodyParser.json(),
    pagesRouter,
    api,
    express.static(path.join(__dirname, 'public')),
)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} http://localhost:${PORT}`);
});