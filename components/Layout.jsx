import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({children, title='Bytecode Digital Agency B.V.', description, keywords}) => (
    <div>
        <Head>
            <title>{title}</title>
            {description ? <meta name="description" content={description}/> : ''}
            {keywords ? <meta name="keywords" content={keywords}/> : ''}
        </Head>
        <Navbar/>
        <main className="main">
            {children}
        </main>
        <Footer/>
    </div>
);
export default Layout;
