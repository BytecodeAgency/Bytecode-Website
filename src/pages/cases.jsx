import React from 'react';
import Layout from '../layouts/MainLayout';

import { Container, Row } from '../lib/Grid';

import PostThumbnail from '../containers/Thumbnails/PostThumbnail';

const pageSettings = {
    title: 'Cases',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const testImg = require('../images/img/content/team.png');
const testImg2 = require('../images/img/content/cases/cote-et-ciel/website2.png');

const Cases = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <Row>
                <PostThumbnail
                    title="How we made breda collaborate"
                    category="Test"
                    big
                    slug="/case"
                    postImageUrl={testImg2}
                />
            </Row>
        </Container>
        <Container>
            <Row>
                <PostThumbnail
                    title="How we made breda collaborate"
                    category="Test"
                    postImageUrl={testImg}
                />
                <PostThumbnail />
                <PostThumbnail />
            </Row>
        </Container>
        <Container>
            <Row>
                <PostThumbnail
                    title="How we made breda collaborate"
                    category="Test"
                    big
                />
            </Row>
        </Container>
        <Container>
            <Row>
                <PostThumbnail
                    title="How we made breda collaborate"
                    category="Test"
                    postImageUrl={testImg}
                />
                <PostThumbnail />
                <PostThumbnail />
            </Row>
        </Container>
    </Layout>
);

export default Cases;
