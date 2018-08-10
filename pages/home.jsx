import Layout from '../components/Layout';
import TextBlock from '../components/TextBlock';

const pageSettings = {
    title: 'Home',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const Home = () => (
    <Layout pageSettings={pageSettings}>
        <div style={{ margin: '10rem', maxWidth: '40rem' }}>
            <TextBlock
                subtitle="De subtitel komt hier"
                title="De titel maar dan een hele erge fucking lange titel waar geen einde aan lijkt te komen"
                href="//google.com"
                button="Call to action"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                nostrum architecto cum exercitationem, numquam commodi quasi
                voluptatem adipisci cumque sed, rerum molestias eius dicta
                aliquam tempora facere laudantium deserunt reprehenderit
                quibusdam.
            </TextBlock>
        </div>
    </Layout>
);

export default Home;
