// Load env vars
require('dotenv').config();

// Setup Sqreen
if (process.env.ENABLE_SQREEN === 'true' && process.env.SQREEN_TOKEN) {
    require('sqreen'); // eslint-disable-line global-require
}

const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const next = require('next');
const router = require('./router');
const handlePost = require('./handle-post');
const apiHandler = require('./api-handler');

const dev = process.env.NODE_ENV !== 'PRODUCTION';
const port = process.env.PORT || 4000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(helmet());
    server.use('/api', apiHandler);
    server.get('*', (req, res) => router(req, res, app, handle));
    server.post('/post', (req, res) => handlePost(req, res));
    server.listen(port, err => {
        if (err) throw err;
        // eslint-disable-next-line no-console
        console.log(`Server running on port ${port}`);
    });
});
