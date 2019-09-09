/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout';

import { Container, Row, Col } from '../lib/Grid';

import Wrapper from '../components/Wrapper';
import TextBlock from '../components/TextBlock';
import TextAndImage from '../components/ContentBlocks';
import theme from '../styles/theme';
import { Small, Big } from '../components/Typography';

const container = theme.containerWidth;
const { mediaQueryMin } = theme;

const pageSettings = {
    title: 'Cases',
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

const PaddedContainer = styled(Container)`
    padding: 7em 0;
`;

const CheckListItem = props => {
    const { children } = props;
    return (
        <CheckListItemBase>
            <img src={require('../images/icons/ui/check.svg')} alt="- " />
            <p>
                <Big>{children}</Big>
            </p>
        </CheckListItemBase>
    );
};

const Frame = styled.figure`
    background: teal;
    overflow: hidden;

    padding: 0em;
    transform: translateX(10em);
    img {
        height: 100%;
        transform: translate(5rem, 5rem) scale(1.1);
    }
`;

const Results = styled(Container)`
    padding: 5em 0;
    margin: 0;
    &:before {
        content: '';
        position: absolute;
        top: 0em;
        left: 0;
        width: 90%;
        height: 100%;
        background: ${theme.colors.secondary};
        @media ${mediaQueryMin.md} {
            width: 100%;
        }
    }
    img {
        transform: translateX(4em);
    }
`;

const testImg = require('../images/img/content/team.png');
const testImg2 = require('../images/img/content/cases/cote-et-ciel/website2.png');

const CaseHeader = styled.header`
    background: url("${props => props.img}"), ${theme.colors.secondary};
    background-size: cover;
    height: 75vh;
    border-radius: 0.5em;
    margin-bottom: 3em;
`;

const temp = require('../images/img/content/cases/cote-et-ciel/website1.png');

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <CaseHeader img={testImg2} />
        </Container>
        <Container>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5}>
                    <p className="subtitle">Côte & Ciel</p>
                    <h1>Een high end shopbeleving</h1>
                </Col>
                <Col lg={5}>
                    <p>
                        <Big>
                            {' '}
                            Dit is een opzetje voor een case pagina. Op deze
                            pagina staan elementen die je kan gebruiken.
                            Daarnaast kan je ook zelf composities maken met het
                            react grid. Ben benieuwd wat jullie ermee doen. Als
                            je het idee hebt dat je bepaalde informatie niet
                            handig/goed/mooi kan noteren: geef dat even bij mij
                            aan. Dan kan ik daarvoor weer verder ontwerpen
                        </Big>
                    </p>
                </Col>
            </Row>
        </Container>
        <TextAndImage img={temp} fluid>
            <p className="subtitle">Ontdekking</p>
            <h2>Een high end shopbeleving</h2>
            <p>
                <Big>
                    {' '}
                    hebben Côte et Ciel in samenwerking met The Pumphouse
                    geholpen om hun user flow te verbeteren.
                </Big>
            </p>
            <Checklist>
                <CheckListItem>
                    Altijd duidelijke en snelle communicatie
                </CheckListItem>
                <CheckListItem>
                    7 dagen per week, binnen een uur, reactie op vragen
                </CheckListItem>
                <CheckListItem>
                    Voor noodgevallen altijd bereikbaar te zijn
                </CheckListItem>
                <CheckListItem>
                    Voor noodgevallen altijd bereikbaar te zijn
                </CheckListItem>
                <CheckListItem>
                    Transparantie en openheid, zonder uitzonderingen
                </CheckListItem>
            </Checklist>
        </TextAndImage>
        <TextAndImage img={temp} fluid reverse>
            <h2>Een high end shopbeleving</h2>
            <p>
                <Big>
                    {' '}
                    hebben Côte et Ciel in samenwerking met The Pumphouse
                    geholpen om hun user flow te verbeteren.
                </Big>
            </p>
            <Checklist>
                <CheckListItem>
                    Altijd duidelijke en snelle communicatie
                </CheckListItem>
                <CheckListItem>
                    7 dagen per week, binnen een uur, reactie op vragen
                </CheckListItem>
                <CheckListItem>
                    Voor noodgevallen altijd bereikbaar te zijn
                </CheckListItem>
                <CheckListItem>
                    Voor noodgevallen altijd bereikbaar te zijn
                </CheckListItem>
                <CheckListItem>
                    Transparantie en openheid, zonder uitzonderingen
                </CheckListItem>
            </Checklist>
        </TextAndImage>

        <Container fluid>
            <TextAndImage img={temp} reverse>
                <p className="subtitle">Ontwikkeling</p>
                <h2>Leg de focus op de webwinkel</h2>
                <p>
                    <Big>
                        {' '}
                        hebben Côte et Ciel in samenwerking met The Pumphouse
                        geholpen om hun user flow te verbeteren.
                    </Big>
                </p>
                <Checklist>
                    <CheckListItem>
                        Altijd duidelijke en snelle communicatie
                    </CheckListItem>
                    <CheckListItem>
                        7 dagen per week, binnen een uur, reactie op vragen
                    </CheckListItem>
                    <CheckListItem>
                        Voor noodgevallen altijd bereikbaar te zijn
                    </CheckListItem>
                    <CheckListItem>
                        Voor noodgevallen altijd bereikbaar te zijn
                    </CheckListItem>
                    <CheckListItem>
                        Transparantie en openheid, zonder uitzonderingen
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
        <Container fluid>
            <TextAndImage img={temp}>
                <h2>Leg de focus op de webwinkel</h2>
                <p>
                    <Big>
                        {' '}
                        hebben Côte et Ciel in samenwerking met The Pumphouse
                        geholpen om hun user flow te verbeteren.
                    </Big>
                </p>
                <Checklist>
                    <CheckListItem>
                        Altijd duidelijke en snelle communicatie
                    </CheckListItem>
                    <CheckListItem>
                        7 dagen per week, binnen een uur, reactie op vragen
                    </CheckListItem>
                    <CheckListItem>
                        Voor noodgevallen altijd bereikbaar te zijn
                    </CheckListItem>
                    <CheckListItem>
                        Voor noodgevallen altijd bereikbaar te zijn
                    </CheckListItem>
                    <CheckListItem>
                        Transparantie en openheid, zonder uitzonderingen
                    </CheckListItem>
                </Checklist>
            </TextAndImage>
        </Container>
    </Layout>
);

export default Case;
