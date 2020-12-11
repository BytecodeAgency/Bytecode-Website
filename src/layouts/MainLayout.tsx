import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import SEO from './SEO';
import Navbar from '../containers/Navbar/Navbar';
import Footer from './Footer';
import { GlobalStyles, TypographyClassStyling } from '../styles/global-css';
import HeadScripts from '../lib/GetHeadScripts';

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
}
const Layout: React.FC<LayoutProps> = ({
    children,
    pageSettings,
    padded = false,
}) => {
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
