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
import Gallery from "../../containers/Gallery";
import PostThumbnail from "../../containers/Thumbnails/PostThumbnail";

// section for image imports in the form of const img = require(url);
const useCase = require('../../images/img/cases/youngpwr/case-youngpwr-teamfoto.png');
const match = require('../../images/img/cases/youngpwr/its-a-match.svg');
const research = require('../../images/img/cases/youngpwr/youngpwr-desktop-heatmap.png');
const fundering = require('../../images/img/cases/youngpwr/youngpwr-desktop-login.png');
const pipeline = require('../../images/img/cases/youngpwr/dev1-database-test-omgeving.png');
const integration = require('../../images/img/cases/youngpwr/infographic.svg');

const dawny = require('../../images/img/cases/dawny/usecase.png');
const coteetciel = require('../../images/img/cases/cote-et-ciel/homepage.png');
const sungevity = require('../../images/img/cases/sungevity/header.jpg');

const pageSettings = {
    title: 'Platform voor een door jongeren',
    client: 'youngpwr',
    clientBio: '', // TODO: add client bio
    description:
        'Met een nieuw platform ondersteunen we de ontplooiing van scholieren en studenten met een wens om te werken of ondernemen.',
    keywords: '', // TODO: add keywords
    image: useCase,
};

const creditColumnOne = [
    {
        title: 'Partner',
        content: ['Youngpwr'],
    },
    {
        title: 'Jaar',
        content: ['2020'],
    },
];

const creditColumnTwo = [
    {
        title: 'UX Design',
        content: ['Chris Färber'],
    },
    {
        title: 'Back-end developer',
        content: ['Luciano Nooijen'],
    },
    {
        title: 'Front-end developer',
        content: ['Luciano Nooijen', 'Chris Färber'],
    },
];

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage padded img={match} alt="Match tussen CEO en youngpwr">
            <h3>Van leren naar matchen</h3>
            <p className="Paragraph Big (introduction)">
                Als partner van <a href="https://youngpwr.nl/">Youngpwr</a>{' '}
                ontwikkelen we een platform waar jongeren terecht kunnen voor
                informatie over ondernemen en werken. Dit platform is bedoeld om
                tractie te genereren en als opstapje voor een uitgebreider
                platform waar jongeren en bedrijven met elkaar “gematcht”
                worden. We willen jongeren in staat stellen om werk te kunnen
                vinden en meer te leren over ondernemen. Via het
                contentplatform, dat nu live staat, kunnen ze alvast kennis
                opdoen en een account aanmaken.
            </p>
        </TextAndImage>
        <Deliverables
            deliverables={[
                'Strategie',
                'UX Design',
                'Ontwikkeling',
                'Infrastructuur',
                'Doorgroeiplan',
            ]}
        />

        <Section>
            <Introduction>
                <h3>Ondersteuning bij werk en ondernemen</h3>
                <p className="Paragraph Big (introduction)">
                    Een plek waar jongeren hun ondernemende kant kunnen
                    ontwikkelen en opdrachten kunnen vinden: dat is het doel van
                    Youngpwr. Wij hebben ons als partner aangesloten, omdat we
                    weten hoe lastig het opzetten van een eigen bedrijf kan
                    zijn. We zijn er zeker van dat Youngpwr veel jongeren kan
                    gaan helpen. Om dit te realiseren is het belangrijk dat het
                    platform zo efficient mogelijk wordt opgezet. Wij hebben nu
                    een basis ontwikkeld, bestaande uit een CMS, het content
                    platform en een database.
                </p>
            </Introduction>
            <TextAndImage
                img={research}
                alt="Onderzoek over waar mensen klikken op de website"
                padded
            >
                <p className="subtitle">Research</p>
                <h2>Een platform dat aansluit</h2>
                <p className="big">
                    Tijdens de ontwikkeling en livegang is het contentplatform
                    getest met gebruikers, onder andere via een pilot. Met
                    kwalitatief en kwantitatief onderzoek is data verzameld. Op
                    basis van de bevindingen is het design gemaakt en verbeterd.
                    Ook nu blijven we testen. Zo weten we zeker dat het platform
                    op de jongeren aansluit.
                </p>
            </TextAndImage>
        </Section>
        <Section>
            <TextAndImage
                img={fundering}
                alt="Fundering voor het opzetten van een platform"
                reverse
                padded
            >
                <p className="subtitle">Research</p>
                <h3>Efficiëntie voorop</h3>
                <p className="big">
                    Omdat het matchingplatform niet direct gebouwd kon worden,
                    is het belangrijk om wel tractie te genereren, terwijl we
                    efficient met het beschikbare budget omgaan. Door een sterke
                    fundering voor het uiteindelijke platform te bouwen hebben
                    we nu een waardevol contentplatform dat later uitgebreid kan
                    worden.
                </p>
            </TextAndImage>
            <TextAndImage
                img={pipeline}
                alt="Automatisering van pipeline"
                padded
            >
                <p className="subtitle">Development</p>
                <h3>Een duurzame oplossing</h3>
                <p className="big">
                    Tijdens de ontwikkeling hebben we gezorgd dat de codebase
                    ook gebruikt kan worden voor de doorontwikkeling naar het
                    matching platform. Ook is het configureren van de servers en
                    deployments volledig geautomatiseerd. Dit scheelt
                    ontwikkelingstijd en voorkomt fouten.
                </p>
            </TextAndImage>
        </Section>
        <Section>
            <TextAndImage
                img={integration}
                alt="Continu ontwikkeling"
                padded
                reverse
            >
                <p className="subtitle">Development</p>
                <h3>De technische kant</h3>
                <p className="big">
                    We hebben de achterkant van het matchingplatform al volledig
                    opgezet en solide gemaakt, zodat we bij de volgende
                    ontwikkelingsronde direct kunnen beginnen met ontwikkeling,
                    in plaats van met de fundering. We maken gebruik van
                    microservices die <strong>test-driven</strong> zijn
                    ontwikkeld. Dit betekent dat de achterkant van het platform
                    opgedeeld is in kleinere onderdelen die individueel
                    aangepast kunnen worden en direct ook als basis dienen voor
                    de doorontwikkeling.
                </p>
            </TextAndImage>
            <ResultsAndNumbers
                subtitles={[
                    'Platform laadtijd in seconden',
                    'Aantal minuten van code review naar productie',
                    'Gemiddelde sessieduur',
                ]}
                numbers={['1.0', '30', '3:30']}
                numberTypes={['s', 'm', 'min']}
                title="Cijfers tot nu toe"
            />
        </Section>
        <Credits
            columnOne={creditColumnOne}
            columnTwo={creditColumnTwo}
            special={['Youngpwr']}
            resources={['Youngpwr Website']}
            resourceLinks={['https://youngpwr.nl/']}
        />
        <Gallery padded sm={33}>
            <PostThumbnail
                title="Valpreventie voor ouderen"
                category="Reinier de Graaf ziekenhuis"
                slug="/case/dawny"
                postImageUrl={dawny}
            />
            <PostThumbnail
                title="Hoge kwaliteit rugtassen"
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
    </Layout>
);

export default Case;
