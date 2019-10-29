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
    title: 'Mooiwerkbreda',
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

const testImg2 = require('../../images/img/cases/styr/sample.webp');

const CaseHeader = styled.header`
    background: url("${props => props.img}"), ${theme.colors.secondary};
    background-size: cover;
    height: 75vh;
    border-radius: 0.5em;
    margin-bottom: 3em;
`;

const temp = require('../../images/img/cases/styr/sample.webp');;

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
        <TextAndImage img={temp} alt="alt tag" fluid>
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
        <TextAndImage img={temp} alt="alt" fluid reverse>
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
            <TextAndImage img={temp} alt="alt" reverse>
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
