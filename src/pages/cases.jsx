import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout';
import Container from '../containers/Container';

import PostThumbnail from '../containers/Thumbnails/PostThumbnail';

const pageSettings = {
    title: 'Cases',
    description: 'Bekijk hier ons werk!',
    keywords: 'website,applicatie,portfolio',
};

const styrImg = require('../images/img/cases/styr/login.png');
const bredaImg = require('../images/img/cases/breda-actief/featured.svg');
const mooiwerkImg = require('../images/img/cases/mooiwerk/website-1.png');
const coteEtCielImage = require('../images/img/cases/cote-et-ciel/homepage.png');
const dawnyImage = require('../images/img/cases/dawny/dashboard.png');
const sungevityImg = require('../images/img/cases/sungevity/woco.png');
const vrsImg = require('../images/img/cases/vrs/cover.svg');


const Cases = () => (
    <Layout padded pageSettings={pageSettings}>
        <Container>
            <PostThumbnail
                big
                title="Modern functiewaarderingsplatform"
                category="STYR"
                slug="/case/styr"
                postImageUrl={styrImg}
            />
        </Container>


        <Container>
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
                    title="Valpreventie voor ouderen"
                    category="Reinier de Graaf ziekenhuis"
                    slug="/case/dawny"
                    postImageUrl={dawnyImage}
                />
        </Container>
        <Container>
                <PostThumbnail
                    title="Duurzaam met zonnepanelen"
                    category="Sungevity"
                    slug="/case/sungevity"
                    postImageUrl={sungevityImg}
                />
                <PostThumbnail
                    title="Breda in beweging!"
                    category="Breda Actief"
                    slug="/case/breda-actief"
                    postImageUrl={bredaImg}
                />
                <PostThumbnail
                    title="Hulpverlening op de weg"
                    category="Van Eijck International Car Rescue"
                    slug="/case/vrs"
                    postImageUrl={vrsImg}
                />
        </Container>
    </Layout>
);

export default Cases;
