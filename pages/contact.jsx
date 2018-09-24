import Layout from '../components/Layout';

const pageSettings = {
    title: 'Cases',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const Contact = () => (
    <Layout pageSettings={pageSettings}>
        <div>
            <h1>Hello Contact</h1>
        </div>
    </Layout>
);

export default Contact;
