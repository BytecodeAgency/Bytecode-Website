import React from 'react';
import Layout from '../layouts/MainLayout';

import { Container, Row, Col } from '../lib/Grid';

import CaseThumbnail from '../components/CaseThumbnail';

const pageSettings = {
    title: 'Cases',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const testImg = require('../images/img/content/team.png');
const testImg2= require('../images/img/cases/sample.webp');

const Cases = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <Row>
                <CaseThumbnail
                    title="How we made breda collaborate"
                    category="Test"
                    big
                    url="/case"
                    img={testImg2}
                />
            </Row>
        </Container>
        <Container>
            <Row>
                <CaseThumbnail
                    title="How we made breda collaborate"
                    category="Test"
                    img={testImg}
                />
                <CaseThumbnail />
                <CaseThumbnail />
            </Row>
        </Container>
        <Container>
            <Row>
                <CaseThumbnail
                    title="How we made breda collaborate"
                    category="Test"
                    big
                />
            </Row>
        </Container>
        <Container>
            <Row>
                <CaseThumbnail
                    title="How we made breda collaborate"
                    category="Test"
                    img={testImg}
                />
                <CaseThumbnail />
                <CaseThumbnail />
            </Row>
        </Container>
    </Layout>
);

export default Cases;
