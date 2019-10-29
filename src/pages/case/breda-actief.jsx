/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Layout from '../../layouts/MainLayout';

import { Container, Row, Col } from '../../lib/Grid';

import TextAndImage from '../../containers/ContentBlocks/ContentBlocks';
import theme from '../../styles/theme';
import { Big } from '../../components/Typography';

const pageSettings = {
    title: 'Breda Actief',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const Checklist = styled.ul`
    margin: 2em 0;
`;

const CheckListItemBase = styled.li`
    display: flex;
    align-items: center;
    justify-items: left;
    margin: 1.33em 0;
    p {
        margin: 0;
    }
    img {
        width: 2rem;
        margin-right: 1.33em;
    }
`;

const CheckListItem = props => {
    const { children } = props;
    return (
        <CheckListItemBase>
            <img src={require('../../images/icons/ui/check.svg')} alt="- " />
            <p>
                <Big>{children}</Big>
            </p>
        </CheckListItemBase>
    );
};

CheckListItem.propTypes = {
    children: PropTypes.node.isRequired,
};

const testImg2 = require('../../images/img/cases/breda-actief/website-1.jpg');

const CaseHeader = styled.header`
    background: url("${props => props.img}"), ${theme.colors.secondary};
    background-size: cover;
    height: 75vh;
    border-radius: 0.5em;
    margin-bottom: 3em;
`;

const temp = require('../../images/img/cases/breda-actief/website-2.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={testImg2} />
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">Breda Actief</p>
                    <h1>Brengt Breda in beweging</h1>
                </Col>
                <Col lg={5}>
                    <p>
                        <Big>
                            Stichting Breda Actief&#39;s missie is om alle
                            inwoners van Breda de mogelijkheid te geven om te
                            kunnen met sport en beweging. Naar dit doel wordt
                            gestreefd door middel van het aanbieden van onder
                            andere sport- en beweegmomenten, het inzetten van
                            sportcoaches, het aanbieden van advies, en het
                            helpen zoeken naar sportmogelijkheden voor mensen
                            met een beperking.
                        </Big>
                    </p>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">Ontdekking</p>
                    <h2>De uitdaging</h2>
                    <p>
                        Voor een maatschappelijk betrokken organisatie zoals
                        stichting Breda Actief is webtoegankelijkheid erg
                        belangrijk om haar doel te bereiken, want als je er voor
                        wilt zorgen dat écht <strong>iedereen</strong> aan het
                        sporten komt moet je er ook voor zorgen dat dan ook{' '}
                        <strong>iedereen</strong> de website kan bedienen. Met
                        onderstaande problemen en wensen en het reeds
                        uitgewerkte design zijn we aan de slag gegaan om voor
                        Breda Actief het best mogelijke resulaat te behalen.
                    </p>
                </Col>
                <Col lg={5}>
                    <Checklist>
                        <CheckListItem>
                            Geen
                            <a href="https://nl.wikipedia.org/wiki/Responsive_webdesign">
                                responsive design
                            </a>
                        </CheckListItem>
                        <CheckListItem>
                            Geen vrijheid om de content gemakkelijk aan te
                            passen met de zekerheid dat dit binnen de huisstijl
                            zou gebeuren
                        </CheckListItem>
                        <CheckListItem>
                            Niet volledig toegankelijk voor gebruikers met een
                            beperking
                        </CheckListItem>
                        <CheckListItem>
                            Voldeed niet aan de laatste webstandaarden
                        </CheckListItem>
                    </Checklist>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <TextAndImage img={temp} alt="alt" fluid reverse>
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
                        zelf met content te vullen en hiermee bezoekers direct
                        van de juiste informatie te voorzien.
                    </li>
                    <li>
                        De contentblokken zijn gemaakt met Advanced Custom
                        Fields Pro, en de pagina’s zijn opgebouwd met de Blade
                        templating language binnen het Sage thema van roots.io.
                        De CSS en Javascript worden binnen Sage met
                        NodeJS/Webpack gecompiled.
                    </li>
                </ol>
                <p>
                    <Big>
                        Deze technische tools stellen Breda Actief in staat hun
                        website geheel naar eigen wens in te richten.
                    </Big>
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={temp}>
                <h2>Oplossing</h2>
                <p>
                    <Big>
                        Om Breda Actief zo goed mogelijk te helpen bij het
                        neerzetten van een succesvolle website, hebben we
                        besloten het volgende als oplossing te bieden, om bij te
                        dragen aan de online groei en de prachtige gestelde
                        doelen.
                    </Big>
                </p>
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
                        De inhoud van de blokken wordt ingeladen in ee maatwerk
                        Wordpress thema, zodat alle elementen goed toegankelijk
                        zijn, zelfs voor mensen met een screenreader of
                        gebruikers die geen muis kunnen bedienen
                    </CheckListItem>
                    <CheckListItem>
                        Een grote rol voor semantische HTML, iets wat
                        pagebuilders of templates vaak niet kunnen leveren
                    </CheckListItem>
                    <CheckListItem>
                        oor het juridische deel van de website hebben we een
                        multisite opgeze, met als positieve consequentie dat de
                        styling van beide sites zonder dubbel werk aangepast kan
                        worden
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={temp} alt="alt" fluid reverse>
                <h2>Resultaten</h2>
                <p>
                    <Big>
                        Het resultaat van dit project is te bekijken op
                        breda-actief.nl. In overleg met Stichting Breda Actief
                        is de broncode vrijgegeven onder GPL-3.0 licentie, hier
                        te bekijken.
                    </Big>
                </p>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={temp} alt="Mooiwerk Breda" fluid>
                <p className="subtitle">Mooiwerk Breda</p>
                <h1>Brengt Breda dichter bij elkaar</h1>
                <p>
                    <Big>
                        Behalve haar sportieve tak brengt Breda Actief de
                        vrijwilligers en vrijwilligersorganisaties van Breda bij
                        elkaar op haar platform: &#39;Mooiwerk Breda&#39;. Over
                        hoe Bytecode hier aan bij heeft kunnen dragen lees je
                        <a href="/cases/mooiwerkbreda">hier</a> meer
                    </Big>
                </p>
            </TextAndImage>
        </Container>
    </Layout>
);

export default Case;
