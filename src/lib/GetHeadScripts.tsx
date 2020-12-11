// This file is not part of the AGPL license
// Copyright: (c) Bytecode Digital Agency B.V.

/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import { Helmet } from 'react-helmet';

const enableTagManager = true;
const tagManagerCode = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-W4GHHL2');
`;

const NoscriptTag = () => {
    if (enableTagManager) {
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

const HeadScripts = () => (
    <Helmet>
        <script type="text/javascript">
            {enableTagManager && tagManagerCode}
        </script>
        <NoscriptTag />
    </Helmet>
);

export default HeadScripts;
