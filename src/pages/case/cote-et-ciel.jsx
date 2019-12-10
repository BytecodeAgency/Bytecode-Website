/* eslint-disable max-len */
import React from 'react';
import { Checklist, CheckListItem, CaseHeader } from '../../components/Case';
import Layout from '../../layouts/MainLayout';
import { Container, Row, Col } from '../../lib/Grid';
import { TextAndImage } from '../../containers/ContentBlocks/ContentBlocks';
import { Big } from '../../components/Typography';

const pageSettings = {
    title: 'Côte et ciel',
    description: 'Rugtassen van hoge kwaliteit',
    keywords: 'cote et ciel, rugtassen, case, bytecode digital agency',
};

const websiteImg1 = require('../../images/img/cases/cote-et-ciel/website-1.png');
const websiteImg2 = require('../../images/img/cases/cote-et-ciel/website-2.png');
const websiteImg3 = require('../../images/img/cases/cote-et-ciel/website-3.png');
const websiteImg4 = require('../../images/img/cases/cote-et-ciel/website-4.png');
const websiteImg5 = require('../../images/img/cases/cote-et-ciel/website-5.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={websiteImg1} />
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">Côte et ciel</p>
                    <h1>Rugtassen van hoge kwaliteit</h1>
                </Col>
                <Col lg={5}>
                    <Big>
                        Côte et Ciel is gespecialiseerd in het ontwerpen en
                        maken van designerrugtassen die verkocht worden via hun
                        eigen webshop, maar ook via externe kanalen zoals
                        bijvoorbeeld Amazon. Met hun tassen brengen ze de wereld
                        van mode en industrieel ontwerp samen, wat leidt tot
                        stijlvolle oplossingen en designs. Côte et Ciel heeft
                        warenhuizen in Azië, Europa en Noord-Amerika.
                    </Big>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <TextAndImage img={websiteImg3} alt="onderzoek" fluid>
                <p className="subtitle">Analyze</p>
                <h2>De uitdaging</h2>
                <p>
                    De bestaande webshop van Côte et Ciel voldeed niet meer aan
                    de wensen. Er bestonden technische mankementen en problemen
                    bij het uitrollen van nieuwe versies. Daarnaast moest de
                    gebruiksvriendelijkheid onder handen genomen worden,
                    bijvoorbeeld door het toevoegen van nieuwe betaalmethodes.
                    We ontdekten dat veel mogelijkheden voor online groei
                    onbenut bleven, en dit hebben we ook meteen doorgevoerd om
                    de resultaten van Côte et Ciel met hun nieuwe platform te
                    verbeteren en optimaliseren.
                </p>
            </TextAndImage>
        </Container>
        <Container flluid>
            <TextAndImage img={websiteImg4} alt="aandachtspunten" fluid reverse>
                <p className="subtitle">Analyze</p>
                <h2>De aandachtspunten</h2>
                <p>
                    De volgende verbeterpunten en wensen voor de nieuwe webshop
                    zijn opgesteld en uitgevoerd:
                </p>
                <Checklist>
                    <CheckListItem>Verkorten van de laadtijd</CheckListItem>
                    <CheckListItem>
                        Automatisch deployen van nieuwe versies
                    </CheckListItem>
                    <CheckListItem>Minimaliseren van downtime</CheckListItem>
                    <CheckListItem>Gebruiksvriendelijke webshop</CheckListItem>
                    <CheckListItem>
                        Vergemakkelijken van het plaatsen van een bestelling
                    </CheckListItem>
                    <CheckListItem>Meer betaalmogelijkheden</CheckListItem>
                    <CheckListItem>
                        Betere beveiliging van de webshop
                    </CheckListItem>
                    <CheckListItem>
                        Een mobiele app in de toekomst
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={websiteImg2} alt="proces" fluid>
                <p className="subtitle">Strategize</p>
                <h2>Proces en techniek</h2>
                <p>
                    Samen met The Pumphouse, een samenwerkingspartner van
                    Bytecode, hebben we een assessment opgesteld met de
                    verbeterpunten. Op basis hiervan hebben we een plan van
                    aanpak gemaakt en een planning voor de komende maanden.
                    Tussendoor hebben we vanzelfsprekend genoeg evaluatie- en
                    feedbackmomenten ingelast.
                </p>
                <ul>
                    <li>
                        De webshop is ontwikkeld en gebouwd in Magento 2.3.
                        Gebruikers worden op basis van hun locatie direct naar
                        de juiste webshop geleid.
                    </li>
                    <li>
                        Gebruik van Redis en Varnish voor de caching, en
                        NewRelic voor de analyse.
                    </li>
                    <li>
                        De volledige cloud-infrastructuur draait op Amazon Web
                        Services (AWS).
                    </li>
                    <li>
                        De database draait onder een losse RDS-instantie met
                        primary/replica (master/slave) opzet.
                    </li>
                    <li>
                        Automatische testing wordt gedaan met onder andere Jest
                        (Javascript) en TestCafe/Cypress (E2E). Automatische
                        deployments zijn geïntegreerd in onze GitLab-omgeving.
                    </li>
                </ul>
                <Big>
                    Deze technische tools stellen Breda Actief in staat om haar
                    website geheel naar eigen wens in te richten.
                </Big>
            </TextAndImage>
        </Container>
        <Container>
            <TextAndImage img={websiteImg5} alt="functies" fluid reverse>
                <Checklist>
                    <CheckListItem>
                        Om downtime te minimaliseren is er geswitcht naar
                        cloudhosting.
                    </CheckListItem>
                    <CheckListItem>
                        Er is een volledig automatische deploystraat ingericht
                        en er zijn automatische tests toegevoegd voor het testen
                        na updates.
                    </CheckListItem>
                    <CheckListItem>
                        Door een nieuwe stagingserver kunnen veranderingen
                        getest worden zonder risico voor de applicatie.
                    </CheckListItem>
                    <CheckListItem>
                        De cloud-infrastructuur zorgt voor supersnelle
                        laadtijden.
                    </CheckListItem>
                    <CheckListItem>
                        De servers zijn goed beveiligd om de data te beschermen.
                    </CheckListItem>
                    <CheckListItem>
                        In het design zijn aanpassingen gemaakt om de conversie
                        en customer journey te optimaliseren.
                    </CheckListItem>
                    <CheckListItem>
                        De veranderingen aan de achterkant van de webshop hebben
                        ervoor gezorgd dat het nu mogelijk is om veel sneller
                        nieuwe functionaliteiten te ontwikkelen en uit te
                        rollen.
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container>
            <TextAndImage img={websiteImg1} alt="resultaten" fluid>
                <p className="subtitle">Realize</p>
                <h2>Oplossing en Resultaten</h2>
                <Big>
                    Het Côte et Ciel project is inmiddels door ons overgezet
                    naar Shopify voor een stabielere omgeving en snellere
                    frontend ontwikkeling. Hiernaast zijn er ook nog
                    langetermijnwensen, zoals het maken van een mobiele app,
                    sterker inzetten op online marketing en de voorkant van de
                    webshop omzetten naar een webapp.
                </Big>
            </TextAndImage>
        </Container>
    </Layout>
);

export default Case;
