/* eslint-disable max-len */
import React from 'react';
import { Link } from 'gatsby';
import { Checklist, CheckListItem, CaseHeader } from '../../components/Case';
import Layout from '../../layouts/MainLayout';
import { Container, Row, Col } from '../../lib/Grid';
import { TextAndImage } from '../../containers/ContentBlocks/ContentBlocks';
import { Big } from '../../components/Typography';

const pageSettings = {
    title: 'Breda Actief',
    description: 'Brengt Breda in beweging!',
    keywords: 'breda actief, mooiwerkbreda, case, bytecode digital agency',
};

const websiteImg1 = require('../../images/img/cases/breda-actief/website-1.jpg');
const websiteImg2 = require('../../images/img/cases/breda-actief/website-2.png');
const websiteImg3 = require('../../images/img/cases/breda-actief/website-3.png');
const websiteImg4 = require('../../images/img/cases/breda-actief/website-4.png');
const websiteImg5 = require('../../images/img/cases/breda-actief/website-5.png');
const mooiwerkImg = require('../../images/img/cases/mooiwerk/website-1.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={websiteImg1} />
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">Breda Actief</p>
                    <h1>Breda in beweging</h1>
                </Col>
                <Col lg={5}>
                    <Big>
                        Stichting Breda Actief&#39;s missie is om alle inwoners
                        van Breda de mogelijkheid te geven om te sporten en
                        bewegen. Naar dit doel wordt gestreefd door middel van
                        het aanbieden van onder andere sport- en beweegmomenten,
                        het inzetten van sportcoaches, het aanbieden van advies
                        en het helpen zoeken naar sportmogelijkheden voor mensen
                        met een beperking.
                    </Big>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <TextAndImage img={websiteImg2} alt="onderzoek" fluid>
                <p className="subtitle">Analyze</p>
                <h2>De uitdaging</h2>
                <p>
                    Voor een maatschappelijk betrokken organisatie zoals
                    stichting Breda Actief is webtoegankelijkheid erg belangrijk
                    om haar doel te bereiken, want als je er voor wil zorgen dat
                    écht <strong>iedereen</strong> aan het sporten komt moet je
                    er ook voor zorgen dat dan ook <strong>iedereen</strong> de
                    website kan bedienen. Met onderstaande problemen en wensen
                    en het reeds uitgewerkte design zijn we aan de slag gegaan
                    om voor Breda Actief het best mogelijke resulaat te behalen.
                </p>
            </TextAndImage>
        </Container>
        <Container flluid>
            <TextAndImage img={websiteImg3} alt="aandachtspunten" fluid reverse>
                <p className="subtitle">Analyze</p>
                <h2>De aandachtspunten</h2>
                <Checklist>
                    <CheckListItem>
                        <a href="https://nl.wikipedia.org/wiki/Responsive_webdesign">
                            Responsive design
                        </a>
                    </CheckListItem>
                    <CheckListItem>
                        Voldoen aan de laatste webstandaarden
                    </CheckListItem>
                    <CheckListItem>
                        Volledig toegankelijk voor gebruikers met een beperking
                    </CheckListItem>
                    <CheckListItem>
                        Vrijheid om de content gemakkelijk aan te passen met
                        consistente huisstijl
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={websiteImg4} alt="proces" fluid>
                <p className="subtitle">Strategize</p>
                <h2>Proces en techniek</h2>
                <ol>
                    <li>
                        Design partner van Breda Actief Studio Maan heeft de
                        website ontworpen en bij ons aangeleverd in Sketch.
                    </li>
                    <li>
                        Aan de hand van dit design hebben wij, binnen een
                        WordPress maatwerkomgeving, de contentblokken en alle
                        pagina’s uitgewerkt. Op die manier hebben we ervoor
                        gezorgd dat Breda Actief in staat is om de website nu
                        zelf met content te vullen maar toch binnen de huisstijl
                        te blijven.
                    </li>
                    <li>
                        De contentblokken zijn gemaakt met Advanced Custom
                        Fields Pro, en de pagina’s zijn opgebouwd met de Blade
                        templating language binnen het Sage thema van roots.io.
                        De CSS en Javascript worden binnen Sage met
                        NodeJS/Webpack gecompiled.
                    </li>
                </ol>
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
                        Het platform met verschillende contentblokken
                        ontwikkelen, die gebruikt worden voor het opbouwen van
                        de pagina’s
                    </CheckListItem>
                    <CheckListItem>
                        Door de contentblokken kan de content makkelijk beheerd
                        worden, zonder problemen voor de layout
                    </CheckListItem>
                    <CheckListItem>
                        De inhoud van de blokken wordt ingeladen in een maatwerk
                        Wordpress thema, zodat alle elementen goed toegankelijk
                        zijn, zelfs voor mensen met een screenreader of
                        gebruikers die geen muis kunnen bedienen
                    </CheckListItem>
                    <CheckListItem>
                        Een grote rol voor semantische HTML, iets wat
                        pagebuilders of templates vaak niet kunnen leveren
                    </CheckListItem>
                    <CheckListItem>
                        Voor het juridische deel van de website hebben we een
                        multisite opgezet, met als positieve consequentie dat de
                        styling van beide sites zonder dubbel werk aangepast kan
                        worden
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container>
            <TextAndImage img={websiteImg1} alt="resultaten" fluid>
                <p className="subtitle">Realize</p>
                <h2>Oplossing en Resultaten</h2>
                <p>
                    <Big>
                        Om Breda Actief zo goed mogelijk te helpen bij het
                        neerzetten van een succesvolle website, hebben we
                        besloten het volgende als oplossing te bieden, om bij te
                        dragen aan de online groei en de prachtige gestelde
                        doelen.
                    </Big>
                </p>
                <p>
                    <Big>
                        Het resultaat van dit project is te bekijken op
                        breda-actief.nl. In overleg met Stichting Breda Actief
                        is de broncode vrijgegeven onder GPL-3.0 licentie,
                        <a href="https://git.bytecode.nl/breda-actief">
                            &nbsp;hier&nbsp;
                        </a>
                        te bekijken.
                    </Big>
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={mooiwerkImg} alt="Mooiwerk Breda" fluid>
                <p className="subtitle">Mooiwerk Breda</p>
                <h1>Brengt Breda dichter bij elkaar</h1>
                <Big>
                    Behalve haar sportieve tak brengt Breda Actief de
                    vrijwilligers en vrijwilligersorganisaties van Breda bij
                    elkaar op haar platform: &#39;Mooiwerk Breda&#39;. Over hoe
                    Bytecode hier aan bij heeft kunnen dragen lees je
                    <Link to="/case/mooiwerk" aria-label="mooiwerk case">
                        &nbsp;hier&nbsp;
                    </Link>
                    meer
                </Big>
            </TextAndImage>
        </Container>
    </Layout>
);

export default Case;
