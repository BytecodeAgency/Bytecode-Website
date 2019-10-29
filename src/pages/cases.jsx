import React from 'react';
import Layout from '../layouts/MainLayout';

import { Container, Row } from '../lib/Grid';

import PostThumbnail from '../containers/Thumbnails/PostThumbnail';

const pageSettings = {
    title: 'Work',
    description: 'Bekijk hier ons werk!',
    keywords: 'website,applicatie,portfolio',
};

const mooiwerkImg = require('../images/img/cases/styr/sample.webp');
const styrImg = require('../images/img/cases/styr/sample.webp');
const bredaImg = require('../images/img/cases/styr/sample.webp');

const Cases = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <Row>
                <PostThumbnail
                    title="Hoe we Breda dichter bij elkaar brachten"
                    category="Website"
                    big
                    slug="/case/mooiwerkbreda"
                    postImageUrl={mooiwerkImg}
                />
            </Row>
        </Container>
        <Container>
            <Row>
                <PostThumbnail
                    title="Functiewaardering in 2019"
                    category="Website"
                    slug="/case/styr"
                    postImageUrl={styrImg}
                />
                <PostThumbnail
                    title="Breda in beweging!"
                    category="Website"
                    slug="/case/breda-actief"
                    postImageUrl={bredaImg}
                />
            </Row>
        </Container>
    </Layout>
);

export default Cases;
