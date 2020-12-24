import React from 'react';
import SEO from '../SEO/SEO';
import Navbar from '../../containers/Navbar/Navbar';
import Footer from '../Footer/Footer';
import Header from '../../containers/Header/Header';
import { GlobalStyles, TypographyClassStyling } from '../../styles/global-css';
import HeadScripts from '../../lib/GetHeadScripts';
import LayoutProps from './CaseLayout.types';
import { HeadElements, Main } from './CaseLayout.components';

const Layout: React.FC<LayoutProps> = ({ children, pageSettings }) => {
    const { title, description, client, image, keywords } = pageSettings;
    return (
        <div>
            <HeadElements />
            <HeadScripts />
            <GlobalStyles />
            <SEO title={title} description={description} keywords={keywords} />
            <Navbar background />
            <Header
                title={title}
                subtitle={client}
                tagline={description}
                img={image}
            />
            <Main>
                <TypographyClassStyling />
                {children}
            </Main>
            <Footer />
        </div>
    );
};

export default Layout;
