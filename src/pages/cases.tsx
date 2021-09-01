import React from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
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

const dearly = require('../images/img/cases/dearly/header.png');
const airchip = require('../images/img/cases/airchip/header.png');
const eneco = require('../images/img/cases/eneco/header.png');
const styr = require('../images/img/cases/styr/allocator.png');
const coteetciel = require('../images/img/cases/cote-et-ciel/homepage.png');
const dawny = require('../images/img/cases/dawny/usecase.png');
const sungevity = require('../images/img/cases/sungevity/header.jpg');
const youngpwr = require('../images/img/cases/youngpwr/case-youngpwr-teamfoto.png');
const fantescy = require('../images/img/cases/fantescy/thumbnail.png');

const Cases: React.FC<Record<string, never>> = () => (
    <Layout padded pageSettings={pageSettings}>
        <Container>
            <TextBlock title="Onze recente projecten" subtitle="Cases" />
            <Gallery sm={33}>
                <PostThumbnail
                    title="Ondersteund rouwenden in hun verwerkingsproces"
                    slug="/case/dearly"
                    postImageUrl={dearly}
                    category="Dearly"
                />
                <PostThumbnail
                    slug="/case/airchip"
                    title="Festival barman in je broekzak"
                    postImageUrl={airchip}
                    category="Airchip"
                />
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
                    title="Veilig ouder worden door valpreventie en lifestyle coaching"
                    category="Reinier de Graaf ziekenhuis"
                    slug="/case/dawny"
                    postImageUrl={dawny}
                />
                <PostThumbnail
                    title="Moderne en eerlijke functiewaardering door digitalisering van het Styr model"
                    category="STYR"
                    slug="/case/styr"
                    postImageUrl={styr}
                />
                <PostThumbnail
                    slug="/case/eneco"
                    title="Omschakelen met Eneco"
                    postImageUrl={eneco}
                    category="Eneco"
                />
                <PostThumbnail
                    title="Webshop met designer backpacks"
                    category="côte&ciel"
                    slug="/case/cote-et-ciel"
                    postImageUrl={coteetciel}
                />
                <PostThumbnail
                    title="Een digitale omgeving voor zonnepanelen op huurdaken"
                    category="Sungevity"
                    slug="/case/sungevity"
                    postImageUrl={sungevity}
                />
            </Gallery>
        </Container>
    </Layout>
);

export default Cases;
