import React, { useEffect, useState } from 'react';
import SEO from '../../../layouts/SEO/SEO';
import Navbar from '../../../containers/Navbar/Navbar';
import Footer from '../../containers/Footer/Footer';
import { GlobalStyles, TypographyClassStyling } from '../../styles/global-css';
import HeadScripts from '../../../lib/GetHeadScripts';
import NewsletterSubscribe from '../../../containers/NewsletterSubscribe/NewsletterSubscribe';
import { Main, HeadElements } from './StartupPageLayout.components';
import StartupPageLayoutProps from './StartupPageLayout.types';

const StartupPageLayout: React.FC<StartupPageLayoutProps> = ({
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
            <Main padded={padded}>
                <TypographyClassStyling />
                {children}
                <MaybeRenderPopup />
            </Main>
            <Footer />
        </>
    );
};

export default StartupPageLayout;
