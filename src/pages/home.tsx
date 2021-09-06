import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout/MainLayout';
import TextBlock from '../containers/TextBlock/TextBlock';
import { Container, Row, Col } from '../lib/Grid';
import Wrapper from '../components/Wrapper';
import Cases from '../containers/Cases/Cases';
import Button from '../components/Button/Button';
import {
    ProcessStepsHome,
    GridFig,
    Header,
    HeaderContainer,
    IdeaContainer,
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
    margin: 100px 0px;
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
                    <p>
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
        <IdeaContainer>
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
                        title="Samen maken we ideeën tastbaar"
                        href="/services"
                        button="Bekijk onze diensten"
                        headingType="h2"
                    >
                        Ons doel is simpel. Wij willen ideeën laten slagen. Jij
                        hebt een passie, wij hebben de mensen, middelen en
                        technieken om samen jouw passie werkelijkheid te laten
                        worden. Een stabiel en kwalitatief hoogwaardig product
                        is daarom essentieel.
                    </TextBlock>
                </CenterAlignedCol>
            </Row>
        </IdeaContainer>
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
                            Bij een start-up komt veel kijken. Gelukkig hebben
                            wij dit proces al vaak doorlopen. Daarmee hebben we
                            de kennis en ervaring om niet alleen een technische
                            uitwerking te verzorgen, maar jou ook echt te
                            adviseren, begeleiden en een stabiel “minimal viable
                            product” (MVP) neer te zetten.
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
        <ProcessStepsHome />
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
                            Wij ondersteunen start-ups in elke fase van hun
                            groeiproces. Hierin doorlopen we een aantal stappen,
                            afgestemd op jouw behoeften en de fase waarin jouw
                            start-up zich bevindt.
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
                            Scherp en kritisch advies op MVP scoping
                        </p>
                    </li>
                    <li>
                        <CircledIcon
                            src={require('../images/img/startups/icons-round/missie.svg')}
                        />
                        <p className="caption">
                            Deskundige en frisse kijk op je missie en strategie
                        </p>
                    </li>
                    <li>
                        <CircledIcon
                            src={require('../images/img/startups/icons-round/concurrentie.svg')}
                        />
                        <p className="caption">
                            Moderne doelgroep- en brandinganalyse
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
