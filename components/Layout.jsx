import Head from 'next/head';
import Navbar from './Navbar';

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
    </div>
);
export default Layout;
