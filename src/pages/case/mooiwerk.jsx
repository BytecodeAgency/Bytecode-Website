/* eslint-disable max-len */
import React from 'react';
import { Link } from 'gatsby';
import { Checklist, CheckListItem, CaseHeader } from '../../components/Case';
import Layout from '../../layouts/MainLayout';
import { Container, Row, Col } from '../../lib/Grid';
import { TextAndImage } from '../../containers/ContentBlocks/ContentBlocks';
import { Big } from '../../components/Typography';

const pageSettings = {
    title: 'Mooiwerk',
    description: 'Een vrijwilligersplatform gemaakt door Bytecode.',
    keywords: 'breda actief, mooiwerkbreda, case, bytecode digital agency',
};

const websiteImg1 = require('../../images/img/cases/mooiwerk/website-1.png');
const websiteImg2 = require('../../images/img/cases/mooiwerk/website-2.png');
const websiteImg3 = require('../../images/img/cases/mooiwerk/website-3.png');
const websiteImg4 = require('../../images/img/cases/mooiwerk/website-4.png');
const websiteImg5 = require('../../images/img/cases/mooiwerk/website-5.png');
const bredaImg = require('../../images/img/cases/breda-actief/website-1.jpg');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={websiteImg1} />
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">Mooiwerk Breda</p>
                    <h1>Breng Breda dichter bij elkaar</h1>
                </Col>
                <Col lg={5}>
                    <Big>
                        Mooiwerk Breda is een platform van Stichting Breda
                        Actief. Op dit platform kunnen organisaties vacatures
                        plaatsen als zij op zoek zijn naar vrijwilligerswerk,
                        maar ook vrijwilligers kunnen hier terecht om een leuke
                        vrijwilligersbaan te zoeken. Op deze manier zorgt het
                        Mooiwerk-platform voor nieuwe contacten en hele mooie
                        samenwerkingsverbanden.
                    </Big>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <TextAndImage img={websiteImg2} alt="onderzoek" fluid>
                <p className="subtitle">Analyze</p>
                <h2>De uitdaging</h2>
                <p>
                    Stichting Breda Actief heeft Bytecode benaderd voor het
                    vernieuwen en verbeteren van een bestaand platform. Zelf
                    hadden zij al een goed idee van de doelgroep en requirements
                    die aan het platform gekoppeld zijn. De belangrijkste reden
                    voor de vraag aan Bytecode was het feit dat zij zelf niet de
                    controle hadden over het platform en de data en dat ze hier
                    graag wel onafhankelijk in wilden zijn. Bij Bytecode vinden
                    wij eigen controle en een open omgeving ook erg belangrijk,
                    en samen met het doel dat Mooiwerk ondersteunt waren wij
                    daarom erg enthousiast om hier een bijdrage aan te leveren.
                </p>
            </TextAndImage>
        </Container>
        <Container flluid>
            <TextAndImage img={websiteImg3} alt="aandachtspunten" fluid reverse>
                <p className="subtitle">Analyze</p>
                <h2>Requirements</h2>
                <Checklist>
                    <CheckListItem>
                        Een geheel vernieuwd, eigen platform
                    </CheckListItem>
                    <CheckListItem>
                        Geen Vendor lock-in, de code is open source
                    </CheckListItem>
                    <CheckListItem>
                        Zelf en onafhankelijk data uit het platform kunnen halen
                    </CheckListItem>
                    <CheckListItem>
                        Eigenaar zijn van de eigen data en de controle hierover
                        behouden
                    </CheckListItem>
                    <CheckListItem>
                        In een paar simpele stappen accounts kunnen aanvullen
                    </CheckListItem>
                    <CheckListItem>
                        Een goed functionerend en duidelijk aanvraagformulier
                    </CheckListItem>
                    <CheckListItem>Nieuwe functionaliteiten</CheckListItem>
                    <CheckListItem>Een verbeterde look</CheckListItem>
                    <CheckListItem>
                        Af vóór vrijwilligersmarkt met onthulling in september
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={websiteImg5} alt="proces" fluid>
                <p className="subtitle">Strategize</p>
                <h2>Proces en techniek</h2>
                <p>
                    Aan de hand van de vastgestelde doelgroep en requirements
                    hebben we een MVP opgesteld van 4 sprints. Hierna was er
                    altijd de mogelijkheid voor doorontwikkeling en toekomstige
                    data-analyse hebben we in het achterhoofd gehouden.
                </p>
                <ol>
                    <li>
                        Een bestaand thema met plugins sloot al bijna aan op
                        alle wensen
                    </li>
                    <li>
                        Intern testen was nodig voor het uitwerken van de
                        requirements
                    </li>
                    <li>
                        Op basis van een bestaande plugin is een proof of
                        concept gemaakt
                    </li>
                    <li>
                        Het doorlopen van simpele flow was mogelijk, evenals het
                        in kaart brengen van specifieke wensen
                    </li>
                    <li>
                        Smidswater heeft het uiteindelijke design aangeleverd op
                        basis van de proof of concept, flow en maatwerk pagina’s
                    </li>
                    <li>
                        Op basis van dit design is een volledig Advanced Custom
                        Fields (ACF) maatwerkthema ontwikkeld met een plugin
                        voor alle functionaliteiten
                    </li>
                    <li>
                        Er is een MVP neergezet met simpele flow, verdere
                        ontwikkeling heeft in overleg, iteratief plaatsgevonden
                    </li>
                    <li>
                        Functionaliteiten zoals het registratieformulier, zijn
                        op basis van feedback ontwikkeld en verbeterd
                    </li>
                </ol>
            </TextAndImage>
        </Container>
        <Container>
            <TextAndImage img={websiteImg4} alt="resultaten" fluid reverse>
                <p className="subtitle">Realize</p>
                <h2>Oplossing en Resultaten</h2>
                <Big>
                    Het uiteindelijke platform zorgt ervoor dat Mooiwerk Breda
                    organisaties en vrijwilligers in Breda samen kan brengen en
                    met behulp van de doorgaande ontwikkeling blijven we Breda
                    Actief ondersteunen.
                </Big>
                <Big>
                    Het resultaat van dit project is te bekijken op
                    <a href="https://mooiwerkbreda.nl">
                        &nbsp;mooiwerkbreda.nl
                    </a>
                    . In overleg met Stichting Breda Actiefis de broncode
                    vrijgegeven onder GPL-3.0 licentie,
                    <a href="https://git.bytecode.nl/breda-actief">
                        &nbsp;hier&nbsp;
                    </a>
                    te bekijken.
                </Big>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={bredaImg} alt="Breda-Actief" fluid>
                <p className="subtitle">Breda Actief</p>
                <h1>Brengt Breda in beweging!</h1>
                <Big>
                    Mooiwerk Breda is slechts een deel van de mooie doelen waar
                    Stichting Breda Actief zich mee bezig houdt. Breda Actief
                    heeft als missie om voor alle inwoners van Breda sport en
                    beweging mogelijk te maken. Ze bieden onder andere sport- en
                    beweegmomenten, het inzetten van sportcoaches, advies en het
                    helpen zoeken naar sportmogelijkheden voor mensen met een
                    beperking. Meer over onze samenwerking met Breda Actief is
                    <Link
                        to="/case/breda-actief"
                        aria-label="breda-actief case"
                    >
                        &nbsp;hier&nbsp;
                    </Link>
                    te lezen.
                </Big>
            </TextAndImage>
        </Container>
    </Layout>
);

export default Case;
