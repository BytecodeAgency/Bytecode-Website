import React from 'react';
import Layout from '../layouts/MainLayout';
import Container from '../containers/Container';
import Gallery from '../containers/Gallery';

import PostThumbnail from '../containers/Thumbnails/PostThumbnail';

const pageSettings = {
    title: 'Softwareprojecten door Bytecode',
    description:
        'Benieuwd naar de waarde die we reeds voor onze klanten hebben kunnen leveren? Bekijk onze cases over strategie, platforms, webapps, automatisering, websites en meer!',
    keywords: 'cases',
};

const styr = require('../images/img/cases/styr/login.png');
const breda = require('../images/img/cases/breda-actief/featured.svg');
const mooiwerk = require('../images/img/cases/mooiwerk/home.png');
const coteetciel = require('../images/img/cases/cote-et-ciel/homepage.png');
const dawny = require('../images/img/cases/dawny/usecase.png');
const sungevity = require('../images/img/cases/sungevity/header.jpg');
const youngpwr = require('../images/img/cases/youngpwr/case-youngpwr-teamfoto.png');
const fantescy = require('../images/img/cases/fantescy/header.png');

const Cases = () => (
    <Layout padded pageSettings={pageSettings}>
        <Container>
            <h1>Ons werk</h1>
            <Gallery>
                <PostThumbnail
                    big
                    slug="/case/youngpwr"
                    title="Platform voor en door jongeren"
                    postImageUrl={youngpwr}
                    category="Youngpwr"
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
                    title="Hoge kwaliteit rugtassen"
                    category="côte&ciel"
                    slug="/case/cote-et-ciel"
                    postImageUrl={coteetciel}
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
                    title="Brengt Breda dichter bij elkaar"
                    category="Mooiwerk Breda"
                    slug="/case/mooiwerk"
                    postImageUrl={mooiwerk}
                />
                <PostThumbnail
                    slug="/case/fantescy"
                    title="Spel voor Songfestival fans"
                    postImageUrl={fantescy}
                    category="Fantescy"
                />
                <PostThumbnail
                    title="Brengt Breda in beweging!"
                    category="Breda Actief"
                    slug="/case/breda-actief"
                    postImageUrl={breda}
                />
            </Gallery>
        </Container>
    </Layout>
);

export default Cases;
