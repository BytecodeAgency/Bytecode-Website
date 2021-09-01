import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout/MainLayout';
import TextBlock from '../containers/TextBlock/TextBlock';
import { Container, Row, Col } from '../lib/Grid';
import Wrapper from '../components/Wrapper';
import Cases from '../containers/Cases/Cases';
import Button from '../components/Button/Button';
import {
    ProcessSteps,
    GridFig,
    Header,
    HeaderContainer,
    HeaderContent,
    HeaderFigure,
    CTA,
    CircledIcon,
    CTAContent,
    Deliverables,
    PathsLeft,
    PathsRight,
} from '../components/New';
import { Subtitle } from '../components/Typography/Typography';

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
const idea = require('../images/img/content/idea.png');

const Home: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <HeaderContainer>
            <Header>
                <HeaderContent>
                    <GridFig src={require('../images/img/startups/grid.svg')} />
                    <p className="subtitle">Wij zijn Bytecode</p>
                    <h1>Technisch verlengstuk van jouw start-up</h1>
                    <p className="introduction">
                        Op zoek naar een ervaren technische start-up-partner die
                        jou kan ondersteunen met strategie, ontwerp en
                        ontwikkeling? Van het valideren van jouw idee tot de
                        livegang van je eerste product (MVP), wij zijn het
                        technische verlengstuk van jouw start-up.
                    </p>
                    <Button href="/cases">Bekijk onze recente projecten</Button>
                </HeaderContent>
                <HeaderFigure>
                    <img src={group} alt="group of happy people" />
                </HeaderFigure>
            </Header>
        </HeaderContainer>
        <Container>
            <Row>
                <Col md={12} lg={6} xl={6}>
                    <Row gutterWidth={20}>
                        <img src={idea} alt="group of happy people" />
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
        <ProcessSteps />
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
                            Wij ondersteunen start-ups in elke fase van hun groeiproces. Hierin doorlopen we een aantal stappen, afgestemd op jouw behoeften en de fase waarin jouw start-up zich bevindt.
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
        <CTA>
            <CTAContent>
                <Subtitle>Intake</Subtitle>
                <h1>Kom gratis op adviesgesprek</h1>
                <p className="introduction">
                    Ons multidisciplinaire, ervaren team van strategen,
                    designers en developers maken jouw passie werkelijkheid! Zet
                    de eerste stap en krijg de volgende gratis deliverables na
                    het kennismakingsgesprek:
                </p>
                <Deliverables>
                    <li>
                        <CircledIcon
                            src={require('../images/img/startups/icons-round/mvp.svg')}
                        />
                        <p className="caption">
                            Scherp en kritisch advies op MVP
                        </p>
                    </li>
                    <li>
                        <CircledIcon
                            src={require('../images/img/startups/icons-round/missie.svg')}
                        />
                        <p className="caption">
                            Deskundig en fris advies op je missie en strategie
                        </p>
                    </li>
                    <li>
                        <CircledIcon
                            src={require('../images/img/startups/icons-round/concurrentie.svg')}
                        />
                        <p className="caption">
                            Moderne branding- en klantanalyse
                        </p>
                    </li>
                </Deliverables>
                <Button
                    href="https://calendly.com/bytecode"
                    target="_blank"
                    rel="noopener"
                >
                    Maak een afspraak!
                </Button>
            </CTAContent>
            <PathsRight
                src={require('../images/img/startups/routes/cta-right.svg')}
            />
            <PathsLeft
                src={require('../images/img/startups/routes/cta-right.svg')}
            />
        </CTA>
    </Layout>
);

export default Home;
