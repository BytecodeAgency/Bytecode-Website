import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../layouts/CaseLayout' was resolved to ... Remove this comment to see the full error message
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
    ResultsAndNumbers,
    // @ts-expect-error ts-migrate(6142) FIXME: Module '../../containers/ContentBlocks/ContentBloc... Remove this comment to see the full error message
} from '../../containers/ContentBlocks/ContentBlocks';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../containers/Deliverables' was resolve... Remove this comment to see the full error message
import Deliverables from '../../containers/Deliverables';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../containers/Credits/Credits' was reso... Remove this comment to see the full error message
import Credits from '../../containers/Credits/Credits';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../containers/Gallery' was resolved to ... Remove this comment to see the full error message
import Gallery from '../../containers/Gallery';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../containers/Thumbnails/PostThumbnail'... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TextAndImage img={app} alt="Fantescy applicatie" padded>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h3>Stemmen en jureren</h3>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p className="Paragraph Bi (introduction)">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <a href={url}>FantESCy</a> is een mobiele app voor iOS en
                Android, waarmee fans van het Songfestival in groepen
                maandelijks kunnen stemmen en jureren in een gesimuleerde
                Songfestivaleditie. Het doel is om zo veel mogelijk punten te
                halen en de beste van een groep, het land of zelfs de wereld te
                worden.
            </p>
        </TextAndImage>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Deliverables
            deliverables={[
                'iOS en Andriod development',
                'Cloud infrastructuur',
                'Beheerpaneel',
                'In-app betalingen',
                'API',
            ]}
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Section>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Introduction>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h3>De uitdaging</h3>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage img={research} alt="Marktonderzoek" reverse>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Research</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Strategie</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="big">
                    We hebben advies gegeven over marktonderzoek,
                    verdienmodellen en eventuele kosten voor gebruikers, zodat
                    de app optimaal op de doelgroep aan kon sluiten. Op dit
                    moment ligt veel focus op de marketing. Inmiddels is
                    FantESCy onder andere genoemd op de{' '}
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <a href={url}>grootste fanwebsite</a> van het Eurovisie
                    Songfestival!
                </p>
            </TextAndImage>
        </Section>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Section>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage small img={payment} alt="Betalingen in de app">
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Development</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Berekeningen en betalingen</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="big">
                    Omdat de scoreberekening complex kan zijn en veel spelers
                    verwacht worden, was het nodig om de berekeningen te
                    optimaliseren. Zo kan iedere gebruiker op elk moment
                    zijn/haar score zien. Ook hebben we gezorgd voor een veilige
                    en stabiele manier om in-app payments mogelijk te maken.
                </p>
            </TextAndImage>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <TextAndImage
                small
                img={userexperience}
                alt="Gebruikservaring"
                reverse
            >
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">User Experience</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Een betere gebruikservaring</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="big">
                    Om de app snel en gemakkelijk te kunnen delen hebben we
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    gebruik gemaakt van <strong>deep linking</strong> en{' '}
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <strong>universal linking</strong>. Met het gebruik van deze
                    links kan de app sneller verspreid en gedownload worden,
                    wordt de gebruikerservaring verbeterd en kunnen webpagina’s
                    ook direct in de app geopend worden.
                </p>
            </TextAndImage>
        </Section>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Section>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ResultsAndNumbers
                subtitles={['Downloads', 'Groepen aangemaakt', 'Votes']}
                numbers={['3.500', '280', '22.000']}
                numberTypes={['+', '+', '+']}
                title="Cijfers tot nu toe"
            />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Introduction>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p className="subtitle">Download de app</p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h3>
                    FantESCy is te downloaden via de{' '}
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <a href={appStoreUrl}>Apple App Store</a> of{' '}
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <a href={playStoreUrl}>Google Play Store</a>.
                </h3>
            </Introduction>
        </Section>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Credits
            columnTwo={creditsColumnTwo}
            resourceLinks={[url]}
            resources={['FantESCy Website']}
            columnOne={creditsColumnOne}
            special={['Levent Akkaya']}
        />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Gallery padded sm={33}>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <PostThumbnail
                title="Valpreventie voor ouderen"
                category="Reinier de Graaf ziekenhuis"
                slug="/case/dawny"
                postImageUrl={dawny}
            />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <PostThumbnail
                title="Platform voor jonge ondernemers"
                category="youngpwr"
                slug="/case/youngpwr"
                postImageUrl={youngpwr}
            />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
