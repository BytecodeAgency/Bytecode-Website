/* eslint-disable */

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import theme from '../styles/theme';
import { getHeadScripts, getNoscriptTag } from '../lib/GetHeadScripts';
import { GlobalStyles, setContainerWidths } from '../styles/global-css';

setContainerWidths();

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
                    <link type="text/plain" rel="author" href="/humans.txt" />
                    <meta name="revisit-after" content="1 day"/>
                    <meta name="googlebot" content="noodp"/>
                    <meta name="theme-color" content={theme.colors.primary}/>
                    <link rel="shortcut icon" href="/static/icons/favicon.png" />
                    <link rel="apple-touch-icon" href="/static/icons/favicon.png" />
                    <link rel="manifest" href="/manifest.json" />
                    <link rel="stylesheet" href="https://use.typekit.net/kcu2skl.css"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space+Mono"/>
                    <GlobalStyles/>
                    { styleTags }
                    { getHeadScripts() }
                </Head>
                <body>
                    { getNoscriptTag() }
                    <div className="root">{main}</div>
                    <NextScript />
                    { /* service-worker conflict with serving pdf file. will fix when we implement PWA. <script src="/register-service-worker.js"/> */ }
                </body>
            </html>
        );
    }
}
