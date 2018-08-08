import Layout from '../components/Layout';

const pageSettings = {
    title: 'Home',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const Home = () => (
    <Layout pageSettings={pageSettings}>
        <div>
            <h1>Hello Home</h1>
        </div>
    </Layout>
);

export default Home;
