import React from 'react';
import Layout from '../layouts/MainLayout';
import Container from '../containers/Container';
import Gallery from '../containers/Gallery';

import PostThumbnail from '../containers/Thumbnails/PostThumbnail';

const pageSettings = {
    title: 'Cases',
    description: 'Bekijk hier ons werk!',
    keywords: 'website,applicatie,portfolio',
};

const styr = require('../images/img/cases/styr/login.png');
const breda = require('../images/img/cases/breda-actief/featured.svg');
const mooiwerk = require('../images/img/cases/mooiwerk/home.png');
const coteetciel = require('../images/img/cases/cote-et-ciel/homepage.png');
const dawny = require('../images/img/cases/dawny/usecase.png');
const sungevity = require('../images/img/cases/sungevity/header.jpg');

const Cases = () => (
    <Layout padded pageSettings={pageSettings}>
        <Container>
            <Gallery>
                <PostThumbnail
                    big
                    title="Brengt Breda in beweging!"
                    category="Breda Actief"
                    slug="/case/breda-actief"
                    postImageUrl={breda}
                />
            </Gallery>
            <Gallery padded sm={33}>
                <PostThumbnail
                    title="Een digitale omgeving voor zonnepanelen op huurdaken"
                    category="Sungevity"
                    slug="/case/sungevity"
                    postImageUrl={sungevity}
                />
                <PostThumbnail
                    title="Brengt Breda dichter bij elkaar"
                    category="Mooiwerk Breda"
                    slug="/case/mooiwerk"
                    postImageUrl={mooiwerk}
                />
                <PostThumbnail
                    title="Valpreventie voor ouderen"
                    category="Reinier de Graaf ziekenhuis"
                    slug="/case/dawny"
                    postImageUrl={dawny}
                />
            </Gallery>
            <Gallery>
                <PostThumbnail
                    title="Modern functiewaarderingsplatform"
                    category="STYR"
                    slug="/case/styr"
                    postImageUrl={styr}
                    big
                />
            </Gallery>
            <Gallery padded sm={33}>
                <PostThumbnail
                    title="Hoge kwaliteit rugtassen"
                    category="côte&ciel"
                    slug="/case/cote-et-ciel"
                    postImageUrl={coteetciel}
                />
            </Gallery>
        </Container>
    </Layout>
);

export default Cases;
