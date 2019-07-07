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
                    img={testImg}
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
                    img="https://mir-s3-cdn-cf.behance.net/project_modules/fs/3dec5682356855.5d1b51509448a.jpg"
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
