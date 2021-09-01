import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout/MainLayout';
import TextBlock from '../containers/TextBlock/TextBlock';
import { Container, Row, Col } from '../lib/Grid';
import Wrapper from '../components/Wrapper';
import Cases from '../containers/Cases/Cases';
import Button from '../components/Button/Button';
import { Card, CircledIcon, CTA, CTAContent, Deliverables, FlexCol, GridFig, Header, HeaderContainer, HeaderContent, HeaderFigure, Icon, IconCaption, IconList, NewsletterContainer, NewsletterSection, NewsletterSubscribeButton, NewsletterSubscribeForm, NewsletterSubscribeInputField, ParallaxImage, PathFig, PathsLeft, PathsRight, Process, Section, SlantedBackground } from '../components/New';

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

const group = require('../images/img/startups/group.jpg');

const Home: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <HeaderContainer>
            <Header>
                <HeaderContent>
                    <GridFig
                        src={require('../images/img/startups/grid.svg')}
                    />
                    <p className="subtitle">Start-up development</p>
                    <h1>Samen maken we passie werkelijkheid</h1>
                    <p className="introduction">
                        Als start-up draait het om jouw idee. Wij maken jouw
                        missie tastbaar aan de hand van research, strategie,
                        design en development. Bovendien leveren we je na
                        het kennismakingsgesprek gratis drie belangrijke
                        analyses
                    </p>
                    <IconList>
                        <li>
                            <Icon
                                src={require('../images/img/startups/icons/concurrentie.svg')}
                            />
                            <IconCaption className="caption">
                                Concurrentie- & MVP-advies
                            </IconCaption>
                        </li>
                        <li>
                            <Icon
                                src={require('../images/img/startups/icons/mvp.svg')}
                            />
                            <IconCaption className="caption">
                                Missie & strategie
                            </IconCaption>
                        </li>
                        <li>
                            <Icon
                                src={require('../images/img/startups/icons/missie.svg')}
                            />
                            <IconCaption className="caption">
                                MVP-advies
                            </IconCaption>
                        </li>
                    </IconList>
                    <Button
                        href="https://calendly.com/bytecode"
                        target="_blank"
                        rel="noopener"
                    >
                        Maak een afspraak!
                    </Button>
                </HeaderContent>
                <HeaderFigure>
                    <img src={group} alt="group of happy people" />
                </HeaderFigure>
            </Header>
        </HeaderContainer>
        <Container>
            <Row>
                <Col md={12} lg={6} xl={6}>
                    <Row gutterWidth={20} />
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
