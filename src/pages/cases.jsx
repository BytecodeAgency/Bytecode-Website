import React from 'react';
import Layout from '../layouts/MainLayout';

import { Container, Row } from '../lib/Grid';

import PostThumbnail from '../containers/Thumbnails/PostThumbnail';

const pageSettings = {
    title: 'Cases',
    description: 'Bekijk hier ons werk!',
    keywords: 'website,applicatie,portfolio',
};

const styrImg = require('../images/img/cases/styr/login.png');
const bredaImg = require('../images/img/cases/breda-actief/website-1.jpg');
const mooiwerkImg = require('../images/img/cases/mooiwerk/website-1.png');

const Cases = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <Row>
                <PostThumbnail
                    title="Modern functiewaarderingsplatform"
                    category="STYR"
                    big
                    slug="/case/styr"
                    postImageUrl={styrImg}
                />
            </Row>
        </Container>
        <Container>
            <Row>
                <PostThumbnail
                    title="Breda in beweging!"
                    category="Breda-Actief"
                    slug="/case/breda-actief"
                    postImageUrl={bredaImg}
                />
                <PostThumbnail
                    title="Brengt Breda dichter bij elkaar."
                    category="Mooiwerk"
                    slug="/case/mooiwerk"
                    postImageUrl={mooiwerkImg}
                />
            </Row>
        </Container>
    </Layout>
);

export default Cases;
