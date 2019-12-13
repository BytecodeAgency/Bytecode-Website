/* eslint-disable max-len */
import React from 'react';
import { Checklist, CheckListItem, CaseHeader } from '../../components/Case';
import Layout from '../../layouts/MainLayout';
import { Container, Row, Col } from '../../lib/Grid';
import { TextAndImage } from '../../containers/ContentBlocks/ContentBlocks';
import { Big } from '../../components/Typography';

const pageSettings = {
    title: 'côte&ciel?l',
    description:
        'Bytecode hielp côte&ciel met de stabiliteit van haar webshop.',
    keywords: 'côte&ciel?, rugtassen, case, bytecode digital agency',
};

const homePage = require('../../images/img/cases/cote-et-ciel/homepage.png');
const dashboardImg = require('../../images/img/cases/cote-et-ciel/dashboard.png');
const loginImg = require('../../images/img/cases/cote-et-ciel/login.png');
const productImg = require('../../images/img/cases/cote-et-ciel/product.png');
const countryImg = require('../../images/img/cases/cote-et-ciel/country.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={homePage} />
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">côte&ciel</p>
                    <h1>Rugtassen van hoge kwaliteit</h1>
                </Col>
                <Col lg={5}>
                    <Big>
                        côte&ciel is gespecialiseerd in het ontwerpen en maken
                        van designerrugtassen die verkocht worden via hun eigen
                        webshop, maar ook via externe kanalen zoals bijvoorbeeld
                        Amazon. Met hun tassen brengen ze de wereld van mode en
                        industrieel ontwerp samen, wat leidt tot stijlvolle
                        oplossingen en designs. côte&ciel heeft warenhuizen in
                        Azië, Europa en Noord-Amerika.
                    </Big>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <TextAndImage img={loginImg} alt="onderzoek" fluid>
                <p className="subtitle">Analyze</p>
                <h2>De uitdaging</h2>
                <p>
                    De bestaande webshop van côte&ciel voldeed niet meer aan de
                    wensen. Er bestonden technische mankementen en problemen bij
                    het uitrollen van nieuwe versies. Daarnaast moest de
                    gebruiksvriendelijkheid onder handen genomen worden,
                    bijvoorbeeld door het toevoegen van nieuwe betaalmethodes.
                    Wij ondersteunden côte&ciel bij het opzetten van haar nieuwe
                    platform op Shopify, oplossen van kritieke problem op haar
                    huidige Magento webshop en verzorgden zowel datamigratie als
                    launch engineering.
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={productImg} alt="aandachtspunten" fluid reverse>
                <p className="subtitle">Analyze</p>
                <h2>De aandachtspunten</h2>
                <p>
                    De volgende verbeterpunten en wensen voor de nieuwe webshop
                    zijn opgesteld en uitgevoerd:
                </p>
                <Checklist>
                    <CheckListItem>
                        Gemakkelijker accounts aanmaken voor hogere conversie
                    </CheckListItem>
                    <CheckListItem>Verkorten van de laadtijd</CheckListItem>
                    <CheckListItem>
                        Automatisch deployen van nieuwe versies zonder downtime
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
                </Checklist>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={dashboardImg} alt="proces" fluid>
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
                <Checklist>
                    <CheckListItem>
                        De webshop is ontwikkeld en gebouwd in Magento 2.3.
                        Gebruikers worden op basis van hun locatie direct naar
                        de juiste webshop geleid.
                    </CheckListItem>
                    <CheckListItem>
                        Gebruik van Redis en Varnish voor de caching, en
                        NewRelic voor de analyse.
                    </CheckListItem>
                    <CheckListItem>
                        De volledige cloud-infrastructuur draait op Amazon Web
                        Services (AWS).
                    </CheckListItem>
                    <CheckListItem>
                        De database draait onder een losse RDS-instantie met
                        primary/replica (leader/follower) opzet.
                    </CheckListItem>
                    <CheckListItem>
                        Automatische testing wordt gedaan met onder andere Jest
                        (Javascript) en TestCafe (E2E). Automatische deployments
                        zijn geïntegreerd in onze GitLab-omgeving.
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container>
            <TextAndImage img={countryImg} alt="functies" fluid reverse>
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
        <Container fluid>
            <TextAndImage img={homePage} alt="resultaten" fluid>
                <p className="subtitle">Realize</p>
                <h2>Oplossing en Resultaten</h2>
                <Big>
                    Het côte&ciel project is inmiddels door ons overgezet naar
                    Shopify voor een stabielere omgeving en snellere frontend
                    ontwikkeling. Hierbij hebben wij zowel de launch engineering
                    als data migratie verzorgd.
                </Big>
            </TextAndImage>
        </Container>
    </Layout>
);

export default Case;
