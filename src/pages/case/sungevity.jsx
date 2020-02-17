/* eslint-disable max-len */
import React from 'react';
import { CaseHeader } from '../../components/Case';
import Layout from '../../layouts/MainLayout';
import { Container, Row, Col } from '../../lib/Grid';
import { TextAndImage } from '../../containers/ContentBlocks/ContentBlocks';

const pageSettings = {
    title: 'Sungevity',
    description:
        'Bytecode werkt samen met Sungevity aan het verduurzamen van Nederland.',
    keywords:
        'verduurzaming, energie, tranistie, offerte, tool, digitaal, onderzoek',
};

const offerteImg = require('../../images/img/cases/sungevity/offerte.png');
const offerteAcceptImg = require('../../images/img/cases/sungevity/accept.png');
const wocoImg = require('../../images/img/cases/sungevity/woco.png');
const uptimeImg = require('../../images/img/cases/sungevity/uptime.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={wocoImg} alt="Woning Corporatie offerte" />
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
                <p>
                    Sungevity had een basis voor een platform voor
                    woningcorporaties, maar dit was niet stabiel en er was veel
                    downtime. Daarnaast was er de wens om nog zeven
                    woningcorporaties toe te voegen, maar hier was het platform
                    niet op ingericht. De corporaties wilden hiernaast graag de
                    brieven die zij versturen een eigen look-en-feel kunnen
                    geven in samenwerking met Sungevity. Nadat deze brieven zijn
                    uitgestuurd komen de huurders op het platform om aan te
                    geven of zij akkoord gaan met de installatie van
                    zonnepanelen en hoeveel.
                </p>
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
                <p>
                    Om het platform te optimaliseren voor meerdere woning
                    corporaties hebben we in de Python Flask applicatie
                    verbeteringen doorgevoerd aan de offertetool. Daarnaast
                    hebben we gezorgd voor schaalbare cloudhosting en Nginx
                    routing- en serveroptimalisaties. Op het platform kunnen
                    woningcorporaties nu zelf aanpassingen doorvoeren en is het
                    gemakkelijk om een nieuwe corporatie op te zetten in enkele
                    uren.
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={uptimeImg} fluid>
                <p className="subtitle">Realize</p>
                <h2>Oplossing en resultaten</h2>
                <p>
                    Inmiddels zijn er al acht woningcorporaties opgezet. Het
                    platform heeft nu een uptimepercentage van 99.95 tot 100%.
                    Mocht een van de websites downtime ondervinden dan krijgen
                    onze site reliability engineers hier een melding van zodat
                    er direct gehandeld kan worden.
                </p>
            </TextAndImage>
        </Container>
    </Layout>
);

export default Case;
