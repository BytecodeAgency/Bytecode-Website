import React from 'react';
import Layout from '../layouts/MainLayout';

import { Container, Row } from '../lib/Grid';

import PostThumbnail from '../containers/Thumbnails/PostThumbnail';

const pageSettings = {
    title: 'Work',
    description: 'Bekijk hier ons werk!',
    keywords: 'website,applicatie,portfolio',
};

const bredaImg = require('../images/img/cases/breda-actief/website-1.jpg');
const mooiwerkImg = require('../images/img/cases/mooiwerk/website-1.png');
const coteEtCielImage = require('../images/img/cases/cote-et-ciel/homepage.png');

const Cases = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <Row>
                <PostThumbnail
                    title="Hoge kwaliteit rugtassen"
                    category="Côte et ciel"
                    big
                    slug="/case/cote-et-ciel"
                    postImageUrl={coteEtCielImage}
                />
            </Row>
        </Container>
        <Container>
            <Row>
                <PostThumbnail
                    title="Brengt Breda dichter bij elkaar."
                    category="Mooiwerk"
                    slug="/case/mooiwerk"
                    postImageUrl={mooiwerkImg}
                />
                <PostThumbnail
                    title="Breda in beweging!"
                    category="Breda-Actief"
                    slug="/case/breda-actief"
                    postImageUrl={bredaImg}
                />
            </Row>
        </Container>
    </Layout>
);

export default Cases;
