/* eslint-disable consistent-return, prettier/prettier, max-len */

import Head from 'next/head';
// import Navbar from './Navbar';
import Footer from './Footer';

const description = descriptionInput => {
    if (descriptionInput) {
        return (
            <meta name="description" content={descriptionInput} />
        );
    }
};

const keywords = keywordsInput => {
    if (keywordsInput) {
        return (
            <meta name="keywords" content={keywordsInput} />
        );
    }
};

const Layout = ({ children, pageSettings }) => (
    <div>
        <Head>
            <title>{pageSettings.title}</title>
            { description(pageSettings.description) }
            { keywords(pageSettings.keywords) }
        </Head>
        <Navbar />
        <main className="main">{children}</main>
        <Footer />
    </div>
);
export default Layout;
