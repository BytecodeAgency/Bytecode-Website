/* eslint-disable @typescript-eslint/camelcase */

import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import Helmet from 'react-helmet';
// @ts-expect-error ts-migrate(6142) FIXME: Module './SEO' was resolved to '/home/tiko-ubuntu/... Remove this comment to see the full error message
import SEO from './SEO';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Navbar/Navbar' was resolved ... Remove this comment to see the full error message
import Navbar from '../containers/Navbar/Navbar';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Footer' was resolved to '/home/tiko-ubun... Remove this comment to see the full error message
import Footer from './Footer';
import { GlobalStyles, TypographyClassStyling } from '../styles/global-css';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../lib/GetHeadScripts' was resolved to '/h... Remove this comment to see the full error message
import HeadScripts from '../lib/GetHeadScripts';

const Main = styled.main`
    max-width: 100vw !important;
    overflow-x: hidden;
    padding-top: ${(props: any) => (props.padded ? '15vh' : 0)};
`;

const HeadElements = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Helmet>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <meta name="robots" content="index, follow" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <link type="text/plain" rel="author" href="/humans.txt" />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <link
            href="https://fonts.googleapis.com/css?family=Cousine|Lato:300,400,700&display=swap"
            rel="stylesheet"
        />
    </Helmet>
);

type OwnLayoutProps = {
    children: React.ReactNode,
    padded?: boolean,
    pageSettings: {
        title: string,
        description: string,
        keywords: string,
    },
};

// @ts-expect-error ts-migrate(2456) FIXME: Type alias 'LayoutProps' circularly references its... Remove this comment to see the full error message
type LayoutProps = OwnLayoutProps & typeof Layout.defaultProps;

// @ts-expect-error ts-migrate(7022) FIXME: 'Layout' implicitly has type 'any' because it does... Remove this comment to see the full error message
const Layout = ({ children, pageSettings, padded }: LayoutProps) => {
    const { title, description, keywords } = pageSettings;
    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <HeadElements />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <HeadScripts />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <GlobalStyles />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <SEO title={title} description={description} keywords={keywords} />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Navbar />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Main padded={padded} className="main">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TypographyClassStyling />
                {children}
            </Main>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Footer />
        </>
    );
};

export default Layout;

Layout.defaultProps = {
    padded: false,
};
