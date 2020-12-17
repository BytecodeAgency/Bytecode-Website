import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import SEO from './SEO';
import Navbar from '../containers/Navbar/Navbar';
import Footer from './Footer';
import { GlobalStyles, TypographyClassStyling } from '../styles/global-css';
import HeadScripts from '../lib/GetHeadScripts';
import NewsletterSubscribe from '../containers/NewsletterSubscribe/NewsletterSubscribe';

interface MainProps {
    padded?: boolean;
}
const Main =
    styled.main <
    MainProps >
    `
    max-width: 100vw !important;
    overflow-x: hidden;
    padding-top: ${(props) => (props.padded ? '15vh' : 0)};
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

interface LayoutProps {
    children: React.ReactNode;
    padded?: boolean;
    pageSettings: {
        title: string,
        description: string,
        keywords: string,
    };
    newsLetter?: number;
}
const Layout: React.FC<LayoutProps> = ({
    children,
    pageSettings,
    padded = false,
    newsLetter = 0,
}) => {
    const { title, description, keywords } = pageSettings;
    const [popup, setPopup] = useState(false);
    const [popupClosed, setPopupClosed] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        const pageHeight = window.document.body.scrollHeight;
        const windowHeight = window.innerHeight;
        if ((position + windowHeight) / pageHeight > newsLetter) {
            setPopup(true);
        }
    };
    const closePopup = () => {
        setPopupClosed(true);
    };
    const MaybeRenderPopup = () => {
        if (popup && !popupClosed && newsLetter)
            return <NewsletterSubscribe popup closePopup={closePopup} />;
        return null;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);
    return (
        <>
            <HeadElements />
            <HeadScripts />
            <GlobalStyles />
            <SEO title={title} description={description} keywords={keywords} />
            <Navbar background />
            <Main padded={padded} className="main">
                <TypographyClassStyling />
                {children}
                <MaybeRenderPopup />
            </Main>
            <Footer />
        </>
    );
};

export default Layout;
