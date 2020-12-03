/* eslint-disable @typescript-eslint/camelcase */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import SEO from './SEO';
import Navbar from '../containers/Navbar/Navbar';
import Footer from './Footer';
import { GlobalStyles, TypographyClassStyling } from '../styles/global-css';
import HeadScripts from '../lib/GetHeadScripts';
import NewsletterSubscribe from '../containers/NewsletterSubscribe/NewsletterSubscribe';

const Main = styled.main`
    max-width: 100vw !important;
    overflow-x: hidden;
    padding-top: ${props => (props.padded ? '15vh' : 0)};
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

const Layout = ({ children, pageSettings, padded, newsLetter }) => {
    const { title, description, keywords } = pageSettings;
    const [popup, setPopup] = useState(false);
    const [popupClosed, setPopupClosed] = useState(false);

    const handleScroll = () => {
        // eslint-disable-next-line no-undef
        const position = window.pageYOffset;
        // eslint-disable-next-line no-undef
        const pageHeight = window.document.body.scrollHeight;
        // eslint-disable-next-line no-undef
        const windowHeight = window.innerHeight;
        if ((position + windowHeight) / pageHeight > newsLetter) setPopup(true);
    };
    const closePopup = () => {
        setPopupClosed(true);
    };
    useEffect(() => {
        // eslint-disable-next-line no-undef
        window.addEventListener('scroll', handleScroll, { passive: true });
        // eslint-disable-next-line no-undef
        window.addEventListener('resize', handleScroll);
        return () => {
            // eslint-disable-next-line no-undef
            window.removeEventListener('scroll', handleScroll);
            // eslint-disable-next-line no-undef
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
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
                {popup && !popupClosed && newsLetter && (
                    <NewsletterSubscribe popup closePopup={closePopup} />
                )}
            </Main>
            <Footer />
        </>
    );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    padded: PropTypes.bool,
    pageSettings: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        keywords: PropTypes.string.isRequired,
    }).isRequired,
    newsLetter: PropTypes.number,
};

Layout.defaultProps = {
    padded: false,
    newsLetter: 0,
};
