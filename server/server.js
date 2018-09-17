const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const router = require('./router');
const handlePost = require('./handle-post');

const dev = process.env.NODE_ENV !== 'production'; // TODO: Add .env support
const port = process.env.PORT || 4000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.get('*', (req, res) => {
        router(req, res, app, handle);
    });

    server.post('/post', (req, res) => {
        handlePost(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        // eslint-disable-next-line no-console
        console.log(`Server running on port ${port}`);
    });
});
