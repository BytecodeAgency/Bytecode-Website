import React from 'react';
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
    ResultsAndNumbers,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables';
import Credits from '../../containers/Credits/Credits';
import Gallery from '../../containers/Gallery';
import PostThumbnail from '../../containers/Thumbnails/PostThumbnail';

const header = require('../../images/img/cases/fantescy/header.png');
const app = require('../../images/img/cases/fantescy/intro.png');
const research = require('../../images/img/cases/fantescy/research.png');
const payment = require('../../images/img/cases/fantescy/dev1.png');
const userexperience = require('../../images/img/cases/fantescy/dev2.gif');

const url = 'https://www.fantescy.com/';
const appStoreUrl = 'https://apps.apple.com/nl/app/fantescy/id1500152267';
const playStoreUrl =
    'https://play.google.com/store/apps/details?id=com.fantescyprod';

const dawny = require('../../images/img/cases/dawny/usecase.png');
const youngpwr = require('../../images/img/cases/youngpwr/case-youngpwr-teamfoto.png');
const sungevity = require('../../images/img/cases/sungevity/header.jpg');

const creditsColumnOne = [
    {
        title: 'Beheerpaneel',
        content: ["T'iko Alarcon Rivero", 'Julian van Dijk', 'Luciano Nooijen'],
    },
    {
        title: 'App',
        content: ['Christiaan Farber', 'Luciano Nooijen', 'Jeroen van Steijn'],
    },
];
const creditsColumnTwo = [
    {
        title: 'Back-end',
        content: ['Luciano Nooijen', 'Jeroen van Steijn'],
    },
    {
        title: 'Infrastructuur',
        content: ['Luciano Nooijen', 'Jeroen van Steijn'],
    },
];

const pageSettings = {
    title: 'Spel voor Songfestival fans',
    client: 'Fantescy',
    description:
        'We hebben de eerste interactieve Eurovisie Songfestival app ontwikkeld, ' +
        'waarmee fans van over de hele wereld elkaar ontmoeten en het tegen elkaar opnemen.',
    image: header,
    keywords: '', // TODO: add keywords
};
const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage img={app} alt="Fantescy applicatie" padded>
            <h3>Stemmen en jureren</h3>
            <p className="Paragraph Bi (introduction)">
                <a href={url}>FantESCy</a> is een mobiele app voor iOS en
                Android, waarmee fans van het Songfestival in groepen
                maandelijks kunnen stemmen en jureren in een gesimuleerde
                Songfestivaleditie. Het doel is om zo veel mogelijk punten te
                halen en de beste van een groep, het land of zelfs de wereld te
                worden.
            </p>
        </TextAndImage>
        <Deliverables
            deliverables={[
                'iOS en Andriod development',
                'Cloud infrastructuur',
                'Beheerpaneel',
                'In-app betalingen',
                'API',
            ]}
        />
        <Section>
            <Introduction>
                <h3>De uitdaging</h3>
                <p className="Paragraph Big (introduction)">
                    Het originele plan was dat FantESCy gebruikt kon worden om
                    fans tijdens het Songfestival te laten raden welke optredens
                    de finale zouden halen of zouden winnen. We moesten vanwege
                    de Coronacrisis omschakelen, en hebben een oplossing bedacht
                    waarmee fans dit jaar digitaal toch zelf een
                    Songfestival-ervaring hebben. Nu wordt de winnaar van een
                    editie van het festival bepaald door de stemmen van de
                    gebruikers, als een “fantasy” spel.
                </p>
            </Introduction>
            <TextAndImage img={research} alt="Marktonderzoek" reverse>
                <p className="subtitle">Research</p>
                <h2>Strategie</h2>
                <p className="big">
                    We hebben advies gegeven over marktonderzoek,
                    verdienmodellen en eventuele kosten voor gebruikers, zodat
                    de app optimaal op de doelgroep aan kon sluiten. Op dit
                    moment ligt veel focus op de marketing. Inmiddels is
                    FantESCy onder andere genoemd op de{' '}
                    <a href={url}>grootste fanwebsite</a> van het Eurovisie
                    Songfestival!
                </p>
            </TextAndImage>
        </Section>
        <Section>
            <TextAndImage small img={payment} alt="Betalingen in de app">
                <p className="subtitle">Development</p>
                <h2>Berekeningen en betalingen</h2>
                <p className="big">
                    Omdat de scoreberekening complex kan zijn en veel spelers
                    verwacht worden, was het nodig om de berekeningen te
                    optimaliseren. Zo kan iedere gebruiker op elk moment
                    zijn/haar score zien. Ook hebben we gezorgd voor een veilige
                    en stabiele manier om in-app payments mogelijk te maken.
                </p>
            </TextAndImage>
            <TextAndImage
                small
                img={userexperience}
                alt="Gebruikservaring"
                reverse
            >
                <p className="subtitle">User Experience</p>
                <h2>Een betere gebruikservaring</h2>
                <p className="big">
                    Om de app snel en gemakkelijk te kunnen delen hebben we
                    gebruik gemaakt van <strong>deep linking</strong> en{' '}
                    <strong>universal linking</strong>. Met het gebruik van deze
                    links kan de app sneller verspreid en gedownload worden,
                    wordt de gebruikerservaring verbeterd en kunnen webpagina’s
                    ook direct in de app geopend worden.
                </p>
            </TextAndImage>
        </Section>
        <Section>
            <ResultsAndNumbers
                subtitles={['Downloads', 'Groepen aangemaakt', 'Votes']}
                numbers={['3.500', '280', '22.000']}
                numberTypes={['+', '+', '+']}
                title="Cijfers tot nu toe"
            />
            <Introduction>
                <p className="subtitle">Download de app</p>
                <h3>
                    FantESCy is te downloaden via de{' '}
                    <a href={appStoreUrl}>Apple App Store</a> of{' '}
                    <a href={playStoreUrl}>Google Play Store</a>.
                </h3>
            </Introduction>
        </Section>
        <Credits
            columnTwo={creditsColumnTwo}
            resourceLinks={[url]}
            resources={['FantESCy Website']}
            columnOne={creditsColumnOne}
            special={['Levent Akkaya']}
        />
        <Gallery padded sm={33}>
            <PostThumbnail
                title="Valpreventie voor ouderen"
                category="Reinier de Graaf ziekenhuis"
                slug="/case/dawny"
                postImageUrl={dawny}
            />
            <PostThumbnail
                title="Platform voor jong ondernemen"
                category="youngpwr"
                slug="/case/youngpwr"
                postImageUrl={youngpwr}
            />
            <PostThumbnail
                title="Een digitale omgeving voor zonnepanelen op huurdaken"
                category="Sungevity"
                slug="/case/sungevity"
                postImageUrl={sungevity}
            />
        </Gallery>
    </Layout>
);

export default Case;
