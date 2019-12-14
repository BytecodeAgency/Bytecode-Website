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
const coteEtCielImage = require('../images/img/cases/cote-et-ciel/homepage.png');

const Cases = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <Row>
                <PostThumbnail
                    big
                    title="Modern functiewaarderingsplatform"
                    category="STYR"
                    slug="/case/styr"
                    postImageUrl={styrImg}
                />
            </Row>
        </Container>
        <Container>
            <Row>
                <PostThumbnail
                    title="Brengt Breda dichter bij elkaar"
                    category="Mooiwerk Breda"
                    slug="/case/mooiwerk"
                    postImageUrl={mooiwerkImg}
                />
                <PostThumbnail
                    title="Hoge kwaliteit rugtassen"
                    category="côte&ciel"
                    slug="/case/cote-et-ciel"
                    postImageUrl={coteEtCielImage}
                />
                <PostThumbnail
                    title="Breda in beweging!"
                    category="Breda Actief"
                    slug="/case/breda-actief"
                    postImageUrl={bredaImg}
                />
            </Row>
        </Container>
    </Layout>
);

export default Cases;
