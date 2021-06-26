import styled from 'styled-components';
import Helmet from 'react-helmet';
import React from 'react';

export const Main = styled.main<{ padded?: boolean }>`
    max-width: 100vw !important;
    overflow-x: hidden !important;
    padding-top: ${(props) => (props.padded ? '15vh' : 0)};
`;

export const HeadElements: React.FC<Record<string, never>> = () => (
    <Helmet>
        <meta name="robots" content="index, follow" />
        <link type="text/plain" rel="author" href="/humans.txt" />
        <link
            href="https://fonts.googleapis.com/css?family=Cousine|Lato:300,400,700&display=swap"
            rel="stylesheet"
        />
    </Helmet>
);
