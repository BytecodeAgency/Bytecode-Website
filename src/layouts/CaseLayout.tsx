import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import SEO from './SEO';
import Navbar from '../containers/Navbar/Navbar';
import Footer from './Footer';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Header' was resolved to '/ho... Remove this comment to see the full error message
import Header from '../containers/Header';
import theme from '../styles/theme';
import { GlobalStyles, TypographyClassStyling } from '../styles/global-css';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../lib/GetHeadScripts' was resolved to '/h... Remove this comment to see the full error message
import HeadScripts from '../lib/GetHeadScripts';

const Main = styled.main`
    max-width: 100vw !important;
    overflow-x: hidden;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        padding-top: 5rem;
    }
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

type LayoutProps = {
    children: React.ReactNode,
    pageSettings: {
        title: string,
        description: string,
        keywords: string,
        client: string,
        image: string,
    },
};

const Layout = ({ children, pageSettings }: LayoutProps) => {
    const { title, description, client, image, keywords } = pageSettings;
    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <HeadElements />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <HeadScripts />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <GlobalStyles />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <SEO title={title} description={description} keywords={keywords} />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Navbar background />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Header
                title={title}
                subtitle={client}
                tagline={description}
                img={image}
            />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Main className="main">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <TypographyClassStyling />
                {children}
            </Main>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Footer />
        </div>
    );
};

export default Layout;
