/* eslint-disable max-len */
import React from 'react';
import { Checklist, CheckListItem, CaseHeader } from '../../components/Case';
import Layout from '../../layouts/MainLayout';
import { Container, Row, Col } from '../../lib/Grid';
import { TextAndImage } from '../../containers/ContentBlocks/ContentBlocks';
import { Big } from '../../components/Typography';

const pageSettings = {
    title: 'Dawny',
    description:
        'Bytecode werkt samen met het Reiner De Graaf Gasthuis aan valpreventie voor ouderen.',
    keywords: 'ouderen, zorg, platform, webapp, onderzoek',
};

const dashboardImg = require('../../images/img/cases/dawny/dashboard.png');
const noninImg = require('../../images/img/cases/dawny/nonin.png');
const teamImg = require('../../images/img/cases/dawny/team.png');
const weekImage = require('../../images/img/cases/dawny/weekoverzicht.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={dashboardImg} alt="login" />
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">Reinier De Graaf Gasthuis</p>
                    <h1>Valpreventie voor ouderen</h1>
                </Col>
                <Col lg={5}>
                    Samen met onderzoeker Dr. A.W. Siegel en internist Dr. D.H.
                    Schweitzer van Dawny en het Reinier de Graaf Gasthuis in
                    Delft zijn we bezig met het vervullen van een fantastische
                    missie. Een groot gedeelte van de ouderen die een heup
                    breken overlijdt hierna binnen een aantal maanden. Dit kan
                    en moet voorkomen worden. Bytecode en het Reinier de Graaf
                    Gasthuis slaan daarom de handen ineen om een oplossing te
                    vinden die kan leiden tot het voorkomen van een nachtelijke
                    val en het vroegtijdig herkennen van risicofactoren.
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <TextAndImage img={noninImg} alt="styr model" fluid>
                <p className="subtitle">Analyze</p>
                <h2>De uitdaging</h2>
                <Big>
                    Van de senioren (55 jaar en ouder) die een heup breken,
                    overlijdt bijna 25% binnen een jaar na het oplopen van de
                    heupfractuur{' '}
                    <a href="http://dx.doi.org/10.1007/978-90-313-9265-0_8">
                        (Verhaar et al., 2013).{' '}
                    </a>
                </Big>
                <p>
                    We zijn op dit moment bezig om met gemakkelijk beschikbare
                    tools slaappatronen te onderzoeken, om hiermee een delier te
                    herkennen en hierop te kunnen reageren. Op deze manier
                    kunnen we uiteindelijk voorkomen dat ouderen vallen en een
                    heup breken. Door middel van verschillende
                    &quot;wearables&quot; wordt patiëntendata verzameld voor
                    onderzoek, en uiteindelijk voor gebruik in de praktijk. Zo
                    worden slaappatronen onderzocht, om te ontdekken wanneer
                    iemand kwetsbaar is voor nachtelijk vallen.
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={weekImage} alt="service desk" fluid reverse>
                <p className="subtitle">Analyze</p>
                <h2>De functionaliteiten</h2>
                We werken in verschillende opeenvolgende sprints. Zo wordt er op
                dit moment gewerkt aan drie componenten
                <Checklist>
                    <CheckListItem>
                        Een Android app waarin slaapdata verzameld kan worden
                        (hartslag, zuurstofwaarden, PAI en HRV) vanaf de Nonin
                        WristOx2 wearable
                    </CheckListItem>
                    <CheckListItem>
                        Een API om data te kunnen ontvangen, analyseren en delen
                    </CheckListItem>
                    <CheckListItem>
                        Een server die verbindt met een voor grote datastromen
                        geoptimaliseerde database
                    </CheckListItem>
                    <CheckListItem>
                        Een dashboard om data uit de API visueel te analyseren
                        en exporteren
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={teamImg} fluid>
                <p className="subtitle">Realize</p>
                <h2>Ontwikkeling</h2>
                <Big>
                    Het project blijft in ontwikkeling. Zo zullen de wearables
                    Fitbit 2 en 3 worden geïntegreerd, en binnenkort zal een
                    onderzoek gestart worden met 50 patiënten.
                </Big>
                <p>
                    Om op de hoogte te blijven van het project kun je altijd een
                    kijkje nemen op
                    <a href="https://dawny.nl/">
                        {' '}
                        de website van het Dawny project
                    </a>
                    .
                </p>
            </TextAndImage>
        </Container>
    </Layout>
);

export default Case;
