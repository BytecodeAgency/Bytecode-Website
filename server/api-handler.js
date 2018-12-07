/* eslint-disable object-curly-newline */

const express = require('express');
// const nodeblog = require('nodejs-blog');
// const { articles } = require('nodejs-blog');

const router = express.Router();

const client = process.env.BLOG_CLIENT;
const host = process.env.BLOG_HOST;
const database = process.env.BLOG_DATBASE;
const user = process.env.BLOG_USER;
const password = process.env.BLOG_PASSWORD;
const debug = process.env.BLOG_DEBUG === 'true';

// const blog = nodeblog(client, host, database, user, password, debug);

// router.get('/', (req, res) => res.sendStatus('200'));
// router.get('/blog/list', (req, res) => res.json(articles.list(blog)));

module.exports = router;
