import Layout from '../components/Layout';

const pageSettings = {
    title: 'Cases',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const Over = () => (
    <Layout pageSettings={pageSettings}>
        <div>
            <h1>Hello Over</h1>
        </div>
    </Layout>
);

export default Over;
