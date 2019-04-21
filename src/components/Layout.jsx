import React from 'react';
import styled from 'styled-components';
import SEO from './SEO';
import Navbar from './Navbar';
import Footer from './Footer';
import theme from '../styles/theme';

const Main = styled.main`
    @media (max-width: ${theme.breakpointMobileMenu}) {
        padding-top: 7rem;
    }
`;

// const description = descriptionInput => {
//     if (descriptionInput) {
//         return <meta name="description" content={descriptionInput} />;
//     }
// };

// const keywords = keywordsInput => {
//     if (keywordsInput) {
//         return <meta name="keywords" content={keywordsInput} />;
//     }
// };

const Layout = ({ children, pageSettings }) => {
    const { title, description, keywords } = pageSettings;
    return (
        <div>
            <SEO title={title} description={description} keywords={keywords} />
            {/* <Head>
                <title>{pageSettings.title}</title>
                {description(pageSettings.description)}
                {keywords(pageSettings.keywords)}
            </Head> */}
            <Navbar />
            <Main className="main">{children}</Main>
            <Footer />
        </div>
    );
};
export default Layout;
