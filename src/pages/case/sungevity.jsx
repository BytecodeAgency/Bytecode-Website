/* eslint-disable max-len */
import React from 'react';
import { CaseHeader } from '../../components/Case';
import Layout from '../../layouts/MainLayout';
import { Container, Row, Col } from '../../lib/Grid';
import { TextAndImage } from '../../containers/ContentBlocks/ContentBlocks';
import { Big } from '../../components/Typography';

const pageSettings = {
    title: 'Sungevity',
    description:
        'Bytecode werkt samen met Sungevity aan het verduurzamen van Nederland.',
    keywords:
        'verduurzaming, energie, tranistie, offerte, tool, digitaal, onderzoek',
};

const offerteImg = require('../../images/img/cases/sungevity/offerte.png');
const offerteAcceptImg = require('../../images/img/cases/sungevity/accept.png');
const mozaiekImg = require('../../images/img/cases/sungevity/mozaiek.png');
const uptimeImg = require('../../images/img/cases/sungevity/uptime.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={mozaiekImg} alt="Mozaiek offerte" />
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">Sungevity</p>
                    <h1>Duurzaam met zonnepanelen</h1>
                </Col>
                <Col lg={5}>
                    Sungevity is een bedrijf gespecialiseerd in het ontwerpen en
                    installeren van zonnepanelen. Het is het grootste
                    zonnepanelenbedrijf in Europa, bekroond met de NRC Impact
                    Award 2018. Sungevity&apos;s missie is om groene energie op
                    te wekken op alle daken die daarvoor geschikt zijn. Om deze
                    duurzame missie met een platform voor woningcorporaties nog
                    beter tot zijn recht te laten komen, is Bytecode benaderd.
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <TextAndImage img={offerteImg} alt="offerte pagina" fluid>
                <p className="subtitle">Analyze</p>
                <h2>De uitdaging</h2>
                <Big>
                    Sungevity had een basis voor een platform voor
                    woningcorporaties, maar dit was niet stabiel en er was veel
                    downtime. Via deze woningcorporaties worden potentiële
                    klanten benaderd. De corporaties zelf wilden hiernaast graag
                    de brieven die zij versturen een eigen look-en-feel kunnen
                    geven in samenwerking met Sungevity. Nadat deze brieven zijn
                    uitgestuurd komen de huurders op het platform om aan te
                    geven of zij akkoord gaan met de installatie van
                    zonnepanelen en hoeveel.
                </Big>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage
                img={offerteAcceptImg}
                alt="accepteer offerte"
                fluid
                reverse
            >
                <p className="subtitle">Strategize</p>
                <h2>De functionaliteiten</h2>
                <Big>
                    Om het platform te optimaliseren hebben we in de Python
                    Flask applicatie verbeteringen doorgevoerd aan de
                    offertetool en op het gebied van de code quality, zodat
                    doorontwikkeling makkelijker mogelijk is. Daarnaast hebben
                    we gezorgd voor schaalbare cloudhosting en Nginx routing- en
                    serveroptimalisaties. Op het platform kunnen
                    woningcorporaties nu zelf aanpassingen doorvoeren en is het
                    gemakkelijk om een nieuwe corporatie op te zetten in enkele
                    uren.
                </Big>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={uptimeImg} fluid>
                <p className="subtitle">Realize</p>
                <h2>Oplossing en resultaten</h2>
                <Big>
                    Inmiddels zijn er al zeven woningcorporaties opgezet. Het
                    platform heeft nu een uptimepercentage van 99.95 tot 100%.
                    Mocht een van de websites downtime ondervinden dan krijgen
                    onze server reliability engineers hier een melding van zodat
                    er direct gehandeld kan worden. Het resultaat is te bekijken
                    op onder andere&nbsp;
                    <a href="https://mozaiek.sungevity.nl/">
                        de Mozaiek offerte site,
                    </a>
                    &nbsp; hoewel je voor een echte offerte natuurlijk lid moet
                    zijn van de woningcorporatie
                </Big>
            </TextAndImage>
        </Container>
    </Layout>
);

export default Case;
