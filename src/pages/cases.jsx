import React from 'react';
import Layout from '../layouts/MainLayout';
import Container from '../containers/Container';
import Gallery from '../containers/Gallery';
import TextBlock from '../containers/TextBlock/TextBlock';
import PostThumbnail from '../containers/Thumbnails/PostThumbnail';

const pageSettings = {
    title: 'Softwareprojecten door Bytecode',
    description:
        'Benieuwd naar de waarde die we reeds voor onze klanten hebben kunnen leveren? Bekijk onze cases over strategie, platforms, webapps, automatisering, websites en meer!',
    keywords: 'cases',
};

const styr = require('../images/img/cases/styr/allocator.png');
const breda = require('../images/img/cases/breda-actief/featured.svg');
const mooiwerk = require('../images/img/cases/mooiwerk/home.png');
const coteetciel = require('../images/img/cases/cote-et-ciel/homepage.png');
const dawny = require('../images/img/cases/dawny/usecase.png');
const sungevity = require('../images/img/cases/sungevity/header.jpg');
const youngpwr = require('../images/img/cases/youngpwr/case-youngpwr-teamfoto.png');
const fantescy = require('../images/img/cases/fantescy/thumbnail.png');

const Cases = () => (
    <Layout padded pageSettings={pageSettings}>
        <Container>
            <TextBlock title="Onze recente projecten" subtitle="Cases" />
            <Gallery sm={33}>
                <PostThumbnail
                    slug="/case/youngpwr"
                    title="Platform voor jonge ondernemers"
                    postImageUrl={youngpwr}
                    category="Youngpwr"
                />
                <PostThumbnail
                    slug="/case/fantescy"
                    title="Interactieve app voor Songfestival fans"
                    postImageUrl={fantescy}
                    category="Fantescy"
                />
                <PostThumbnail
                    title="Veilig ouder worden door valpreventie"
                    category="Reinier de Graaf ziekenhuis"
                    slug="/case/dawny"
                    postImageUrl={dawny}
                />
            </Gallery>
            <Gallery sm={33}>
                <PostThumbnail
                    title="Webshop met designer backpacks"
                    category="côte&ciel"
                    slug="/case/cote-et-ciel"
                    postImageUrl={coteetciel}
                />
                <PostThumbnail
                    title="Brengt Breda in beweging!"
                    category="Breda Actief"
                    slug="/case/breda-actief"
                    postImageUrl={breda}
                />
                <PostThumbnail
                    title="Brengt Breda dichter bij elkaar"
                    category="Mooiwerk Breda"
                    slug="/case/mooiwerk"
                    postImageUrl={mooiwerk}
                />
            </Gallery>
            <Gallery sm={33}>
                <PostThumbnail
                    title="Een digitale omgeving voor zonnepanelen op huurdaken"
                    category="Sungevity"
                    slug="/case/sungevity"
                    postImageUrl={sungevity}
                />
                <PostThumbnail
                    title="Modern functiewaarderingsplatform"
                    category="STYR"
                    slug="/case/styr"
                    postImageUrl={styr}
                />
            </Gallery>
        </Container>
    </Layout>
);

export default Cases;
