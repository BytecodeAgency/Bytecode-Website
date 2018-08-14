/* eslint-disable */

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import '../styles/global-css';

// The contents of the Drift code cannot be reused under AGPL license, please remove.
// You can of course add your own livechat code in there, but not ours ;)
const enableDrift = false;
const driftCode =  `
    "use strict";
    !function() {
    var t = window.driftt = window.drift = window.driftt || [];
    if (!t.init) {
        if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
        t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ],
        t.factory = function(e) {
        return function() {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(e), t.push(n), t;
        };
        }, t.methods.forEach(function(e) {
        t[e] = t.factory(e);
        }), t.load = function(t) {
        var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(o, i);
        };
    }
    }();
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load('bbh8h2v73h4n');
`;
const getDriftCode = () => {
    if (enableDrift) {
        return (
            <script dangerouslySetInnerHTML={{__html: driftCode}}/>
        );
    }
}

export default class SiteDocument extends Document {
    render() {
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main />);
        const styleTags = sheet.getStyleElement();
        return (
            <html lang="nl">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                    <meta name="robots" content="index, follow"/>
                    <meta name="revisit-after" content="1 day"/>
                    <meta name="googlebot" content="noodp"/>
                    <meta name="theme-color" content="#6ca57b"/>
                    <link rel="shortcut icon" href="/static/icons/favicon.png" />
                    <link rel="apple-touch-icon" href="/static/icons/favicon.png" />
                    <link rel="manifest" href="/static/manifest.json" />
                    {styleTags}
                    {getDriftCode()}
                </Head>
                <body>
                    <div className="root">{main}</div>
                    <NextScript />
                    <script src="/static/register-service-worker.js"/>
                </body>
            </html>
        );
    }
}
