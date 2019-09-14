/* eslint-disable @typescript-eslint/camelcase */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import pageSettingsPropTypes from './pageSettings.proptypes';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import theme from '../styles/theme';
import { GlobalStyles, TypographyClassStyling } from '../styles/global-css';

const Main = styled.main`
    max-width: 100vw !important;
    overflow-x: hidden;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        padding-top: 5rem;
    }
`;

const Head = () => (
    <Helmet>
        <meta name="robots" content="index, follow" />
        <link type="text/plain" rel="author" href="/humans.txt" />
        <link rel="stylesheet" href="https://use.typekit.net/kcu2skl.css" />
        <link
            href="https://fonts.googleapis.com/css?family=Cousine"
            rel="stylesheet"
        />
    </Helmet>
);

const Layout = ({ children, pageSettings }) => {
    const { title, description, keywords } = pageSettings;
    return (
        <div>
            <Head />
            <GlobalStyles />
            <SEO title={title} description={description} keywords={keywords} />
            <Navbar />
            <Main className="main">
                <TypographyClassStyling />
                {children}
            </Main>
            <Footer />
        </div>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    pageSettings: pageSettingsPropTypes.isRequired,
};
