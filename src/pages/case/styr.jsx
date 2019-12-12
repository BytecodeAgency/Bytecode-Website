/* eslint-disable max-len */
import React from 'react';
import { Checklist, CheckListItem, CaseHeader } from '../../components/Case';
import Layout from '../../layouts/MainLayout';
import { Container, Row, Col } from '../../lib/Grid';
import { TextAndImage } from '../../containers/ContentBlocks/ContentBlocks';
import { Big } from '../../components/Typography';

const pageSettings = {
    title: 'Styr',
    description: 'Moderne functiewaardering',
    keywords: 'functiewaardering,online,platform,webapp',
};

const designImg1 = require('../../images/img/cases/styr/website-1.png');
const designImg2 = require('../../images/img/cases/styr/website-1.png');
const websiteImg1 = require('../../images/img/cases/styr/website-1.png');
const websiteImg3 = require('../../images/img/cases/styr/website-1.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={websiteImg3} />
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">STYR</p>
                    <h1>Moderne functiewaardering</h1>
                </Col>
                <Col lg={5}>
                    <Big>
                        STYR is een specialistisch adviesbureau op het gebied
                        van organisatiedesign, waarderen en belonen. STYR heeft
                        het STYR model ontwikkeld, een moderne en vernieuwende
                        manier van (functie)waardering.
                    </Big>
                    <p>
                        Centraal in het STYR model staat het benodigde
                        probleemoplossend vermogen van de stoel (rol of functie)
                        en de talenten en competenties van mensen op de stoel.
                        STYR heeft Bytecode gevraagd om een online
                        waarderingstool te ontwikkelen, waarmee functies en
                        rollen kunnen worden gewaardeerd met behulp van het STYR
                        model.
                    </p>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <TextAndImage img={websiteImg1} alt="alt tag" fluid>
                <p className="subtitle">Analyze</p>
                <h2>De uitdaging</h2>
                <Big>
                    Ontwikkel een praktische online waarderingstool (STYR
                    Allocator Tool) waarmee de klanten van STYR zelf de zwaarte
                    van rollen en functies kunnen vaststellen en die voldoet aan
                    de volgende criteria:
                </Big>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={designImg1} alt="alt tag" fluid reverse>
                <p className="subtitle">Analyze</p>
                <h2>De functionaliteiten</h2>
                <Checklist>
                    <CheckListItem>
                        De tool moet toegankelijk zijn via een webbrowser;
                    </CheckListItem>
                    <CheckListItem>
                        Meerdere klanten van STYR moeten tegelijker tijd toegang
                        kunnen hebben tot de tool;
                    </CheckListItem>
                    <CheckListItem>
                        Meerdere gebruikers moeten tegelijk toegang kunnen
                        hebben tot de tool;
                    </CheckListItem>
                    <CheckListItem>
                        Er moeten meerdere gebruikers rollen komen met
                        bijbehorende rechten;
                    </CheckListItem>
                    <CheckListItem>
                        Een digitale beslisboom om tot de juiste zwaarte van een
                        functie of rol te komen;
                    </CheckListItem>
                    <CheckListItem>
                        Een dashboard met een overzicht van de gewaardeerde
                        functies/rollen en een filter mogelijkheid;
                    </CheckListItem>
                    <CheckListItem>
                        Een servicedesk, waar klanten ondersteuningen kunnen
                        vragen
                    </CheckListItem>
                    <CheckListItem>
                        Het downloaden en uitprinten van de indelingsresultaten
                    </CheckListItem>
                    <CheckListItem>
                        Zowel in het Nederlands als Engls taal beschikbaar
                    </CheckListItem>
                    <CheckListItem>
                        Makkelijk te koppelen aan andere tools
                    </CheckListItem>
                    <CheckListItem>
                        Ondersteuning voor hosting en technisch support
                    </CheckListItem>
                    <CheckListItem>
                        Advisering over de best passende techniek
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={designImg2} alt="alt" fluid>
                <p className="subtitle">Strategize</p>
                <h2>Proces en technische details</h2>
                <Big>
                    Na een grondige intake zijn we begonnen met een eerste UX/UI
                    design voor het Allocator tool. Extra’s die op basis van
                    deze wireframes nog gewenst waren zijn ook toegevoegd.
                </Big>
                <Big>
                    In Invision zijn prototypes gemaakt van de Allocator tool.
                    Op basis hiervan is feedback verzamelt en zijn de
                    functionaliteiten en design aangescherpt.
                </Big>
                <Big>
                    De frontend van de allocator is gemaakt in React, en voor de
                    content van de beslisboom is een maatwerk oplossing gemaakt
                    binnen WordPress.
                </Big>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={websiteImg1} reverse fluid>
                <p className="subtitle">Realize</p>
                <h2>Oplossing</h2>
                <Big>
                    Het design van de allocator is opgebouwd uit opeenvolgende
                    pagina’s die de gebruiker doorloopt, waarbij keuzes gemaakt
                    worden door op opties te klikken die bij een
                    werknemerprofiel passen.
                </Big>
                <p>
                    Meer informatie over het STYR model en de STYR Allocator
                    Tool vind je op www.styrmodel.nl
                </p>
            </TextAndImage>
        </Container>
    </Layout>
);

export default Case;
