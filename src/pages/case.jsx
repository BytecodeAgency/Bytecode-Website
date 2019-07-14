import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout';

import { Container, Row, Col } from '../lib/Grid';

import Wrapper from '../components/Wrapper';
import TextBlock from '../components/TextBlock';

import theme from '../styles/theme';

const pageSettings = {
    title: 'Cases',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};
const Statistic = styled(Col)`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 0.1em;
    }
    padding-bottom: 1em;
`;

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
                <big>{children}</big>
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
    &:before {
        content: '';
        position: absolute;
        top: 0em;
        left: 0;
        width: 90%;
        height: 100%;
        background: ${theme.colors.secondary};
    }
    img {
        transform: translateX(4em);
    }
`;

const testImg = require('../images/img/content/team.png');

const WrappedContainer = styled(PaddedContainer)`
    &:before {
        content: '';
        position: absolute;
        top: -3em;
        right: 0em;
        width: 96vw;
        height: 175%;
        background: ${theme.colors.secondary};
    }
`;

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Container fluid>
            <Row>
                <Col offset={{ lg: 1 }} lg={5}>
                    <h1>Cote et Ciel</h1>
                    <p>
                        <big>
                            We helped the educational organisation sales
                            leadership academy get back it leadership in sales
                            by great design and converstion. The goal was to
                            make the aging site new again.d
                        </big>
                    </p>
                    <h3>Challange</h3>
                    <p>
                        (Hier wordt de opdracht en dus het doel beschreven, bij
                        meerdere (sub) doelen mogen bulletpoints gebruikt
                        worden) .We helped the educational organisation sales
                        leadership academy get back it leadership in sales by
                        great design and converstion. The goal was to make the
                        aging site new again.
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
                </Col>
                <Col lg={6}>
                    <img
                        src={require('../images/img/content/cases/cote-et-ciel/website1.png')}
                        alt="Website Cote et Ciel"
                    />
                </Col>
            </Row>
        </Container>
        <WrappedContainer fluid>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={4}>
                    <TextBlock
                        headingType="h2"
                        title="Leg de focus op de webshop"
                        subtitle="discover"
                    >
                        [hier leggen we uit hoe we doe doelen wilde bbereieken
                        of war we achter zijn gekomen in research] We kwamen
                        erachter dat de site te veel aanvoelde als een gallerij
                        en gingen daarom de sitae inrichten rond de webshop
                    </TextBlock>
                </Col>
                <Col offset={{ lg: 1 }} lg={6}>
                    <Frame>
                        <img
                            src={require('../images/img/content/cases/cote-et-ciel/website2.png')}
                            alt="Website Cote et Ciel"
                        />
                    </Frame>
                </Col>
            </Row>
        </WrappedContainer>
        <Container fluid>
            <Row align="center">
                <Col lg={6}>
                    <Frame left>
                        <img
                            src={require('../images/img/content/cases/cote-et-ciel/admin-panel.jpg')}
                            alt="Website Cote et Ciel"
                        />
                    </Frame>
                </Col>
                <Col offset={{ lg: 1 }} lg={4}>
                    <TextBlock
                        headingType="h2"
                        title="Toewerken naar een schaalbare infrastructuur"
                    >
                        [hier leggen we uit hoe we doe doelen wilde bbereieken
                        of war we achter zijn gekomen in research] We kwamen
                        erachter dat de site te veel aanvoelde als een gallerij
                        en gingen daarom de sitae inrichten rond de webshop
                    </TextBlock>
                </Col>
            </Row>
        </Container>
        <PaddedContainer fluid>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={4}>
                    <TextBlock
                        headingType="h2"
                        subtitle="Design & Development"
                        title="Seamless One-Step Checkout"
                    >
                        [hier leggen we uit hoe we doe doelen wilde bbereieken
                        of war we achter zijn gekomen in research] We helped the
                        educational organisation sales leadership academy get
                        back it leadership in sales by great design and
                        converstion. The goal was to make the aging site new
                        again.
                    </TextBlock>
                </Col>
                <Col offset={{ lg: 1 }} lg={6}>
                    <Frame left>
                        <img
                            src={require('../images/img/content/cases/cote-et-ciel/checkout.png')}
                            alt="Website Cote et Ciel"
                        />
                    </Frame>
                </Col>
            </Row>
        </PaddedContainer>
        <PaddedContainer fluid>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={4}>
                    <TextBlock
                        headingType="h2"
                        title="Een Infrastructuur Waarop Je Kan Bouwen"
                    >
                        [hier leggen we uit hoe we doe doelen wilde bbereieken
                        of war we achter zijn gekomen in research] We helped the
                        educational organisation sales leadership academy get
                        back it leadership in sales by great design and
                        converstion. The goal was to make the aging site new
                        again.
                    </TextBlock>
                </Col>
                <Col offset={{ lg: 1 }} lg={5}>
                    <Frame left>
                        <img
                            src={require('../images/img/content/cases/cote-et-ciel/server.jpg')}
                            alt="Website Cote et Ciel"
                        />
                    </Frame>
                </Col>
            </Row>
        </PaddedContainer>
        <Wrapper>
            <Container>
                <Row>
                    <img
                        src={require('../images/img/content/cases/cote-et-ciel/website1.png')}
                        alt="Website Cote et Ciel"
                    />
                </Row>
                <Row
                    style={{ padding: '3em 0' }}
                    align="center"
                    gutterWidth="20em"
                >
                    <Col md={6}>
                        <TextBlock
                            subtitle="Results"
                            title="De resultaten liegen er niet om"
                            headingType="h3"
                        />
                    </Col>
                    <Col md={6}>
                        <p>
                            [hier leggen we uit hoe we doe doelen wilde
                            bbereieken of war we achter zijn gekomen in
                            research] We hebben een nieuw chatsysteem gebouwd
                        </p>
                    </Col>
                </Row>
                <Row align="center">
                    <Col md={4}>
                        <h1>
                            100<sup>%</sup>
                        </h1>
                        <p>Uptime</p>
                    </Col>
                    <Col md={4}>
                        <h1>
                            5<sup>x</sup>
                        </h1>
                        <p>Meer conversie</p>
                    </Col>
                    <Col md={4}>
                        <h1>
                            3<sup>x</sup>
                        </h1>
                        <p>Snellere laadtijd</p>
                    </Col>
                </Row>
            </Container>
        </Wrapper>

        <Results fluid>
            <Row align="center">
                <Col offset={{ lg: 1 }} lg={5} md={6}>
                    <TextBlock
                        subtitle="Results"
                        title="De resultaten liegen er niet om"
                        headingType="h2"
                    >
                        [hier leggen we uit hoe we doe doelen wilde bbereieken
                        of war we achter zijn gekomen in research] We hebben een
                        nieuw chatsysteem gebouwd
                    </TextBlock>
                    <Row
                        style={{ padding: '2em 0' }}
                        gutterWidth={200}
                        align="center"
                    >
                        <Statistic xl={4} md={6}>
                            <h1>
                                100<sup>%</sup>
                            </h1>
                            <p>Uptime</p>
                        </Statistic>
                        <Statistic xl={4} md={6}>
                            <h1>
                                5<sup>x</sup>
                            </h1>
                            <p>Meer conversie</p>
                        </Statistic>
                        <Statistic xl={4} md={6}>
                            <h1>
                                3<sup>x</sup>
                            </h1>
                            <p>Snellere laadtijd</p>
                        </Statistic>
                    </Row>
                </Col>
                <Col>
                    <img
                        src={require('../images/img/content/cases/cote-et-ciel/website1.png')}
                        alt="Website Cote et Ciel"
                    />
                </Col>
            </Row>
        </Results>
    </Layout>
);

export default Case;
