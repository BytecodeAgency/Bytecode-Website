/* eslint-disable @typescript-eslint/camelcase */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import SEO from './SEO';
import Navbar from '../containers/Navbar/Navbar';
import Footer from './Footer';
import { GlobalStyles, TypographyClassStyling } from '../styles/global-css';
import HeadScripts from '../lib/GetHeadScripts';

const Main = styled.main`
    max-width: 100vw !important;
    overflow-x: hidden;
    padding-top: ${props => props.padded ? '15vh' : 0};
`;

const HeadElements = () => (
    <Helmet>
        <meta name="robots" content="index, follow" />
        <link type="text/plain" rel="author" href="/humans.txt" />
        <link
            href="https://fonts.googleapis.com/css?family=Cousine|Lato:300,400,700&display=swap"
            rel="stylesheet"
        />
    </Helmet>
);


const Layout = ({ children, pageSettings, padded }) => {
    const { title, description, keywords } = pageSettings;
    return (
        <>
            <HeadElements />
            <HeadScripts />
            <GlobalStyles />
            <SEO title={title} description={description} keywords={keywords} />
            <Navbar />
            <Main padded={padded} className="main">
                <TypographyClassStyling />
                {children}
            </Main>
            <Footer />
        </>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    pageSettings: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
    }).isRequired,
};
