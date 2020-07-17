import React from 'react';
import Layout from '../../layouts/CaseLayout';
import {
    TextAndImage,
    Introduction,
    Section,
    ResultsAndNumbers,
} from '../../containers/ContentBlocks/ContentBlocks';
import Deliverables from '../../containers/Deliverables';
import TextBlock from '../../containers/TextBlock/TextBlock';

// section for image imports in the form of const img = require(url);
const match = '';
const research = '';
const fundering = '';
const pipeline = '';
const integration = '';
const pageSettings = {
    title: 'Platform voor een door jongeren',
    client: 'youngpwr',
    clientBio: '', // TODO: add client bio
    description:
        'Met een nieuw platform ondersteunen we de ontplooiing van scholieren en studenten met een wens om te werken of ondernemen.',
    keywords: '', // TODO: add keywords
};

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
                fluid
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
                fluid
                padded
            >
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
                fluid
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
                fluid
                reverse
            >
                <h3>De technische kant</h3>
                <p className="big">
                    We hebben de achterkant van het matchingplatform al volledig
                    opgezet en solide gemaakt, zodat we bij de volgende
                    ontwikkelingsronde direct kunnen beginnen met ontwikkeling,
                    in plaats van met de fundering. We maken gebruik van
                    microservices die <a>test-driven</a> zijn ontwikkeld. Dit
                    betekent dat de achterkant van het platform opgedeeld is in
                    kleinere onderdelen die individueel aangepast kunnen worden
                    en direct ook als basis dienen voor de doorontwikkeling.
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
    </Layout>
);

export default Case;
