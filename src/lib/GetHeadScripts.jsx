// This file is not part of the AGPL license
// Copyright: (c) Bytecode Digital Agency B.V.

/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const enableTagManager = process.env.ENABLE_TAGMANAGER === 'true';
const enableDrift = process.env.ENABLE_DRIFT === 'true';

const tagManagerCode = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W4GHHL2');
`;

const driftCode = `
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

const getHeadScriptContents = () => {
    let headScriptContents = '';
    if (enableTagManager) {
        headScriptContents += tagManagerCode;
    }
    if (enableDrift) {
        headScriptContents += driftCode;
    }
    return headScriptContents;
};

const HeadScripts = () => (
    // eslint-disable-next-line react/no-danger
    <script dangerouslySetInnerHTML={{ __html: getHeadScriptContents() }} />
);

const NoscriptTag = () => {
    if (process.env.ENABLE_TAGMANAGER === 'true') {
        return (
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-W4GHHL2"
                    height="0"
                    width="0"
                    style={{ display: 'none', visibility: 'hidden' }}
                />
            </noscript>
        );
    }
    return null;
};

export { HeadScripts, NoscriptTag };
