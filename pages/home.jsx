/* eslint-disable max-len */

import Layout from '../components/Layout';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col } from '../lib/Grid';

const pageSettings = {
    title: 'Home',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const TextBlockContent = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores itaque inventore sequi tempora amet dolore voluptas? Natus eius repellendus tempora reiciendis ea tempore dolorum temporibus quisquam fuga magni. Quis quam, recusandae, iste, deleniti cum esse distinctio omnis sequi nemo iusto tempore nobis hic nesciunt perspiciatis sunt laboriosam corrupti a mollitia?
`;

const Home = () => (
    <Layout pageSettings={pageSettings}>
        <Container style={{ marginTop: '10rem', marginBottom: '10rem' }}>
            <Row>
                <Col md={6} lg={7} />
                <Col md={6} lg={4}>
                    <TextBlock
                        subtitle="De subtitel komt hier"
                        title="De titel maar dan een hele erge fucking lange titel waar geen einde aan lijkt te komen"
                        href="//google.com"
                        button="Call to action"
                    >
                        {TextBlockContent}
                    </TextBlock>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Home;
