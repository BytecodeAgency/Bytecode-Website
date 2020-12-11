import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../layouts/MainLayout' was resolved to '/h... Remove this comment to see the full error message
import Layout from '../layouts/MainLayout';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Container' was resolved to '... Remove this comment to see the full error message
import Container from '../containers/Container';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Gallery' was resolved to '/h... Remove this comment to see the full error message
import Gallery from '../containers/Gallery';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/TextBlock/TextBlock' was res... Remove this comment to see the full error message
import TextBlock from '../containers/TextBlock/TextBlock';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Thumbnails/PostThumbnail' wa... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout padded pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextBlock title="Onze recente projecten" subtitle="Cases" />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Gallery sm={33}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <PostThumbnail
                    slug="/case/youngpwr"
                    title="Platform voor jonge ondernemers"
                    postImageUrl={youngpwr}
                    category="Youngpwr"
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <PostThumbnail
                    slug="/case/fantescy"
                    title="Interactieve app voor Songfestival fans"
                    postImageUrl={fantescy}
                    category="Fantescy"
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <PostThumbnail
                    title="Veilig ouder worden door valpreventie"
                    category="Reinier de Graaf ziekenhuis"
                    slug="/case/dawny"
                    postImageUrl={dawny}
                />
            </Gallery>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Gallery sm={33}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <PostThumbnail
                    title="Webshop met designer backpacks"
                    category="côte&ciel"
                    slug="/case/cote-et-ciel"
                    postImageUrl={coteetciel}
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <PostThumbnail
                    title="Brengt Breda in beweging!"
                    category="Breda Actief"
                    slug="/case/breda-actief"
                    postImageUrl={breda}
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <PostThumbnail
                    title="Brengt Breda dichter bij elkaar"
                    category="Mooiwerk Breda"
                    slug="/case/mooiwerk"
                    postImageUrl={mooiwerk}
                />
            </Gallery>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Gallery sm={33}>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <PostThumbnail
                    title="Een digitale omgeving voor zonnepanelen op huurdaken"
                    category="Sungevity"
                    slug="/case/sungevity"
                    postImageUrl={sungevity}
                />
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
