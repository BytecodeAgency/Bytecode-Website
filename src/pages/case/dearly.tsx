import React from 'react';
import Layout from '../../layouts/CaseLayout/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
    ResultsAndNumbers,
    AppStoreBlock,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables/Deliverables';
import Credits from '../../containers/Credits/Credits';
import Gallery from '../../containers/Gallery';
import PostThumbnail from '../../containers/Thumbnails/PostThumbnail';

const header = require('../../images/img/cases/dearly/header.png');
const intro = require('../../images/img/cases/dearly/intro.png');
const rouwen = require('../../images/img/cases/dearly/rouwen.png');
const app = require('../../images/img/cases/dearly/app.png');
const automatisering = require('../../images/img/cases/dearly/json-ts-checks.png');

const dawny = require('../../images/img/cases/dawny/usecase.png');
const coteetciel = require('../../images/img/cases/cote-et-ciel/homepage.png');
const sungevity = require('../../images/img/cases/sungevity/header.jpg');

const paroolUrl =
    'https://www.parool.nl/ps/samen-rouwen-met-app-dearly-een-veilige-plek-voor-gedeelde-smart~bbc8bda2/';
const appStoreUrl = 'http://bit.ly/dearly-iphone';
const playStoreUrl = 'http://bit.ly/dearly-android';
const websiteUrl = 'https://www.getdearly.com/';

const pageSettings = {
    title: 'Ondersteuning bij rouwverwerking',
    client: 'dearly',
    clientBio: '', //  TODO: add client bio
    description:
        'Een nieuwe mobiele rouwapp voor persoonlijke ondersteuning en maatschappelijke ontwikkeling',
    keywords: '', // TODO: add keywords
    image: header,
};

const creditColumnOne = [
    {
        title: 'Architectuur',
        content: ['Luciano Nooijen'],
    },
    {
        title: 'App',
        content: ['Christiaan Farber', 'Luciano Nooijen', 'Jeroen van Steijn'],
    },
];
const creditColumnTwo = [
    {
        title: 'Back-end',
        content: ['Luciano Nooijen', 'Jeroen van Steijn'],
    },
    {
        title: 'Infrastructuur',
        content: ['Luciano Nooijen', 'Jeroen van Steijn'],
    },
];

const Dearly: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <TextAndImage
            padded
            img={intro}
            alt="Dearly, ondersteuning voor, tijden en na het verlies van een dierbare"
        >
            <h3>De eerste rouwapp ter wereld</h3>
            <p>
                Dearly is een rouwapp waarin lotgenoten elkaar kunnen vinden om
                over hun ervaringen en verlies te praten, professionele
                rouwcoaches kunnen contacteren en informatieve artikelen kunnen
                lezen.
            </p>
            <p>
                Wij hebben in samenwerking met het team van Dearly deze
                waardevolle app mogen ontwikkelen. Daarnaast hebben we advies
                gegeven over de functionaliteiten, bijvoorbeeld over de meest
                optimale vorm van de chat-functie. Samen met designer Yarne
                Sluimer konden we deze functionaliteiten volledig tot hun recht
                laten komen.
            </p>
        </TextAndImage>
        <Deliverables
            deliverables={[
                'Advies',
                'Schaalbare software- en cloudarchitectuur',
                'Ontwikkeling server en app',
                'Applicatie-monitoring en analytics',
                'Grootschalige automatisering',
                'Veiligheid van data gewaarborgd',
                'Plan voor doorontwikkeling',
            ]}
        />
        <Section>
            <Introduction>
                <h3>Dearly</h3>
                <p>
                    Dearly is opgericht door Quirine Wissink en Pieter van der
                    Oest, die maar al te goed weten hoe het is om een dierbare
                    te verliezen. Beide founders verloren één van hun ouders. Ze
                    herkenden dat ze niet de enigen waren die zich na een tijdje
                    alleen en/of onbegrepen voelen. Ze vielen in een zwart gat.
                    Op basis van deze ervaring besloten ze een app te
                    ontwikkelen om dit gat te vullen.{' '}
                </p>
                <p className="Paragraph Big (introduction)">
                    Het is heel vet dat Dearly in deze pre-launch-fase al veel
                    media-aandacht krijgt, zoals in dit artikel van{' '}
                    <a href={paroolUrl}>Het Parool</a>. We verwachten dat Dearly
                    eind 2020 succesvol gelanceerd kan worden, waarna het in de
                    app-stores te vinden is.
                </p>
            </Introduction>
            <TextAndImage img={rouwen} alt="Maak rouwen bespreekbaar" reverse>
                <h3>Maak rouwen bespreekbaar</h3>
                <p>
                    Helaas is rouw nog steeds een taboe. Op de werkvloer wordt
                    het onderwerp bijvoorbeeld nog regelmatig vermeden.
                    Rouwenden voelen zich vaak alleen. De Dearly app draagt bij
                    aan ondersteuning op persoonlijk vlak en de ontwikkeling op
                    maatschappelijk vlak. Wij geloven enorm in de visie dat rouw
                    bespreekbaar wordt en willen aan de bestaande en eventuele
                    nieuwe functies blijven ontwikkelen, ook nadat de app live
                    staat.
                </p>
            </TextAndImage>
        </Section>
        <Section>
            <TextAndImage img={app} alt="Dearly app" padded>
                <h3>De MVP</h3>
                <p>
                    Voor de MVP hadden we een aantal belangrijke functies
                    ontwikkeld. De app was klaar om live te gaan. Toch hebben we
                    de app verder bijgeschaafd, zodat deze direct fijner was in
                    gebruik. De app is nu in de eerste versie en zal steeds
                    verbeterd blijven worden. Zo bereiken we dat straks iedereen
                    die daar behoefte aan heeft steun kan vinden in een
                    duidelijke, intuïtieve en gebruiksvriendelijke app.
                </p>
            </TextAndImage>
            <TextAndImage
                img={automatisering}
                alt="Automatisering en runtime json type-checking"
                reverse
                padded
            >
                <h3>Automatisering</h3>
                <p>
                    Nieuwe versies van de serverapplicatie worden automatisch
                    getest en live gezet zonder downtime. De app wordt voor
                    zowel iOS als Android automatisch in de cloud gebuild,
                    waarna alleen nog de bestanden geüpload hoeven te worden om
                    een nieuwe versie uit te brengen.
                </p>
                <h3>Runtime JSON type-checking</h3>
                <p>
                    Om meer veiligheid te hebben rondom API-calls, hebben we
                    gekozen om tijdens runtime de types te valideren op basis
                    van Typescript interfaces. Luciano legt deze functionaliteit
                    hier in detail uit.
                </p>
            </TextAndImage>
        </Section>
        <Section>
            <ResultsAndNumbers
                numbers={['20', '100']}
                numberTypes={['minuten', '+']}
                subtitles={['van code review naar productie', 'Beta testers']}
                title="Cijfers tot nu toe"
            />
            <AppStoreBlock
                name="Dearly"
                appStoreUrl={appStoreUrl}
                playStoreUrl={playStoreUrl}
                websiteUrl={websiteUrl}
            />
        </Section>
        <Section>
            <Credits
                special={['Dearly']}
                resources={['Dearly website']}
                resourceLinks={[websiteUrl]}
                columnOne={creditColumnOne}
                columnTwo={creditColumnTwo}
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
        </Section>
    </Layout>
);
export default Dearly;
