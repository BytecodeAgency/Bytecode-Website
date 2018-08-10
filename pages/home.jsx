import Layout from '../components/Layout';
import TextBlock from '../components/TextBlock';

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
        {/* <Button href="//google.com">TEKST</Button> */}
        <TextBlock
            subtitle="De subtitel"
            title="De titel"
            href="//google.com"
            button="Call to action"
        >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            nostrum architecto cum exercitationem, numquam commodi quasi
            voluptatem adipisci cumque sed, rerum molestias eius dicta aliquam
            tempora facere laudantium deserunt reprehenderit quibusdam. A,
            corrupti nemo libero molestias aliquam fugiat suscipit unde ut neque
            consequuntur expedita beatae ex cum numquam quas vel rem est
            assumenda nam optio in placeat!
        </TextBlock>
    </Layout>
);

export default Home;
