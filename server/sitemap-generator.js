/* eslint-disable max-len */
const staticRoutes = require('./routes');

const indentString = '    ';
const indent = level => indentString.repeat(level);

const baseUrl = 'https://bytecode.nl';
const genUrl = url => baseUrl + url;

const createStaticPageEntry = page => {
    let entry = '';
    entry += `${indent(1)}<url>\n`;
    entry += `${indent(2)}<loc>${genUrl(page)}</loc>\n`;
    entry += `${indent(2)}<changefreq>weekly</changefreq>\n`;
    entry += `${indent(1)}</url>\n`;
    return entry;
};

const getStaticPageEntries = () => {
    let staticPages = '';
    const staticRoutesArray = Object.keys(staticRoutes);
    staticRoutesArray.forEach(page => {
        staticPages += createStaticPageEntry(page);
    });
    return staticPages;
};

const getSitemap = () => {
    let sitemap = '';
    sitemap += '<?xml version="1.0" encoding="utf-8"?>\n';
    sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n`;
    sitemap += getStaticPageEntries();
    sitemap += '</urlset>\n';
    return sitemap;
};

const sitemapRoute = (req, res) => {
    res.type('application/xml');
    res.send(getSitemap());
};

module.exports = sitemapRoute;
