import Head from 'next/head';
import Navbar from './Navbar';

const Layout = props => (
    <div>
        <Head>
            <title></title>
        </Head>
        <Navbar/>
        <div className="main">
            {props.children}
        </div>
    </div>
);

export default Layout;
