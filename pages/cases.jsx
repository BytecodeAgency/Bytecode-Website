import Layout from '../components/Layout';

const pageSettings = {
    title: 'Cases',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const Cases = () => (
    <Layout pageSettings={pageSettings}>
        <div>
            <h1>Hello Cases</h1>
        </div>
    </Layout>
);

export default Cases;
