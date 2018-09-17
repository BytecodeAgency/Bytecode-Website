const express = require('express');
const next = require('next');
const router = require('./router');


const dev = process.env.NODE_ENV !== 'production'; // TODO: Add .env support
const port = process.env.PORT || 4000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();
    server.get('*', (req, res) => {
        router(req, res, app, handle);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`Server running on port ${port}`); // eslint-disable-line no-console
    });
});
