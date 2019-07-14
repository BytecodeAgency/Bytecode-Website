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

const Case = () => (
    <Layout pageSettings={pageSettings}>
        <Wrapper>
            <Container>
                <Row>
                    <img
                        src={require(```../images/img/
                        content/cases/cote-et-ciel/website1.png```)}
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
                        <Statistic md={6}>
                            <h1>
                                100<sup>%</sup>
                            </h1>
                            <p>Uptime</p>
                        </Statistic>
                        <Statistic md={6}>
                            <h1>
                                5<sup>x</sup>
                            </h1>
                            <p>Meer conversie</p>
                        </Statistic>
                        <Statistic md={6}>
                            <h1>
                                3<sup>x</sup>
                            </h1>
                            <p>Snellere laadtijd</p>
                        </Statistic>
                    </Row>
                </Col>
                <Col>
                    <img
                        src={require(```../images/img/content/cases/
                        cote-et-ciel/website1.png```)}
                        alt="Website Cote et Ciel"
                    />
                </Col>
            </Row>
        </Results>
    </Layout>
);

export default Case;
