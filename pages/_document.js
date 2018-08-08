/* eslint-disable */

import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import '../styles/global-css';

export default class SiteDocument extends Document {
    render() {
        const sheet = new ServerStyleSheet();
        const main = sheet.collectStyles(<Main />);
        const styleTags = sheet.getStyleElement();
        return (
            <html>
                <Head>
                    <meta charSet='UTF-8' />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                    <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
                    <meta name='robots' content='index, follow'/>
                    <meta name='revisit-after' content='1 day'/>
                    <meta name='googlebot' content='noodp'/>
                    {styleTags}
                </Head>
                <body>
                    <div className='root'>{main}</div>
                    <NextScript />
                </body>
            </html>
        );
    }
}
