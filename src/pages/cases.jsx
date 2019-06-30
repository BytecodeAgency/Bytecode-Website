import React from 'react';
import Layout from '../layouts/MainLayout';

import { Container, Row, Col } from '../lib/Grid';

import CaseThumbnail from '../components/CaseThumbnail';

const pageSettings = {
    title: 'Cases',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const Cases = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <Row>
                <h1>Cases</h1>
            </Row>
            <Row>
                <CaseThumbnail
                    title="How we made breda collaborate"
                    category="Test"
                    big
                    url="#"
                />
            </Row>
        </Container>
        <Container>
            <Row>
                <CaseThumbnail
                    title="How we made breda collaborate"
                    img="../images/img/content/team.png"
                    category="Test"
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
                    img={require('../images/img/content/team.png')}
                    category="Test"
                />
                <CaseThumbnail />
                <CaseThumbnail />
            </Row>
        </Container>
    </Layout>
);

export default Cases;
