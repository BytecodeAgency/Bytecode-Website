import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout/MainLayout';
import TextBlock from '../containers/TextBlock/TextBlock';
import ContentPageHeader from '../containers/ContentPageHeader/ContentPageHeader';
import { Container, Row, Col } from '../lib/Grid';
import Process from '../containers/Process/Process';
import Wrapper from '../components/Wrapper';
import Cases from '../containers/Cases/Cases';

const pageSettings = {
    title: `Technische Start-up Partner`,
    description: `Opzoek naar een ervaren technische start-up partner die jou kan ondersteunen met strategie, ontwerp en software ontwikkeling?`,
    keywords: 'bytecode, partner, tech start-up, start-up',
};

const CenterAlignedCol = styled(Col)`
    align-self: center;
    display: flex;
`;

const GroupImage = styled.img`
    margin-top: 4rem;
    width: 100%;
`;

const imageHome = require(`../images/img/header/youngpwr.png`);

const Home: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <ContentPageHeader
            useGatsbyLink
            subtitle="Wij zijn Bytecode"
            title="Technisch verlengstuk van jouw start-up"
            href="/cases"
            button="Onze recente projecten"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            img={imageHome}
            hero
            shadow
        />
        <Container>
            <Row>
                <Col md={12} lg={6} xl={6}>
                    <Row gutterWidth={20}>
                    </Row>
                </Col>
                <CenterAlignedCol offset={{ lg: 1 }} md={12} lg={5}>
                    <TextBlock
                        useGatsbyLink
                        subtitle="Onze missie"
                        title="Samen maken we ideeen tastbaar"
                        href="/services"
                        button="Bekijk onze diensten"
                        headingType="h2"
                    >
                        Wij ontwikkelen maatwerksoftware op basis van verkregen
                        inzichten en onderzoek, zodat onze digitale producten
                        impact maken op jouw organisatie en klanten. Handmatig,
                        tijdrovend werk wordt verleden tijd. Jij kan je volledig
                        focussen op datgene waar jij passie voor hebt. Zo maken
                        we jouw visie realiteit.
                    </TextBlock>
                </CenterAlignedCol>
            </Row>
        </Container>
        <Wrapper>
            <Container>
                <Row justify="center" align="center">
                    <CenterAlignedCol md={12} lg={5}>
                        <TextBlock
                            useGatsbyLink
                            subtitle="Wat wij doen"
                            title="Van inzicht tot impact"
                            href="/over"
                            button="Meer over ons team"
                            headingType="h2"
                        >
                            Wij staan voor een eerlijke en open samenwerking,
                            binnen ons team en daarbuiten. Door onze
                            multidisciplinaire kennis versterken we elkaar en
                            delen we onze ervaringen. Zo werken we naar nieuwe
                            manieren en inzichten om de digitale wereld naar
                            jouw hand te zetten.
                        </TextBlock>
                    </CenterAlignedCol>
                    <Col offset={{ lg: 1 }} md={12} lg={6}>
                        <GroupImage
                            width="700"
                            src={require('../images/img/content/group.png')}
                            alt="Onze mindset"
                        />
                    </Col>
                </Row>
            </Container>
        </Wrapper>
        <Process />
        <Cases />
        <Wrapper>
            <Container>
                <Row justify="center" align="center">
                    <CenterAlignedCol md={12} lg={5}>
                        <TextBlock
                            useGatsbyLink
                            subtitle="Ons proces"
                            title="Jouw weg naar een waardevol product"
                            href="/over"
                            button="Meer over ons team"
                            headingType="h2"
                        >
                            Wij staan voor een eerlijke en open samenwerking,
                            binnen ons team en daarbuiten. Door onze
                            multidisciplinaire kennis versterken we elkaar en
                            delen we onze ervaringen. Zo werken we naar nieuwe
                            manieren en inzichten om de digitale wereld naar
                            jouw hand te zetten.
                        </TextBlock>
                    </CenterAlignedCol>
                    <Col offset={{ lg: 1 }} md={12} lg={6}>
                        <GroupImage
                            width="700"
                            src={require('../images/img/content/process.png')}
                            alt="Onze mindset"
                        />
                    </Col>
                </Row>
            </Container>
        </Wrapper>
    </Layout>
);

export default Home;
