import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({children, title='Bytecode Digital Agency B.V.'}) => (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar/>
        <main className="main">
            {children}
        </main>
    </div>
);

export default Layout;
