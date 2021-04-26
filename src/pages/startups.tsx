import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayoutExtended/MainLayout';
import { Subtitle } from '../components/Typography/Typography';
import Button from '../components/Button/Button';
import {Container, Row, Col} from '../lib/Grid';
const pageSettings = {
    title: `Maatwerk Web & Mobiel Ontwikkeling`,
    description: `Een kleinschalig full-service webbureau gespecialiseerd in platformontwikkeling op maat. Passie, kwaliteit en betrouwbaarheid als kernwaarden`,
    keywords: 'bytecode, digital agency',
};

const group = require('../images/img/startups/group.png');
const meeting = require('../images/img/startups/meeting.png');

const Header = styled.header`
    min-height: 100vh;
    display: flex;

    flex-grow: 1;
`;

const HeaderContainer = styled(Container)`
    height: 100%;
`;

const Process = styled.ol`
    display: flex;
    li {
        flex-basis: 33%;
    }
`;

const Startups = () => (
    <Layout pageSettings={pageSettings}>
        <Header>
            <HeaderContainer>
                <Row align="center">
                    <Col md={5}>
                        <Subtitle>Start-up development</Subtitle>
                        <h1>Samen maken we passie werkelijkheid</h1>
                        <p>
                            Als start-up draait het om jouw idee. Wij maken 
                            jouw missie tastbaar aan de hand van research, 
                            strategie, design en development. Bovendien 
                            leveren we je na het kennismakingsgesprek 
                            gratis drie belangrijke analyses
                        </p>
                        <ul>
                            <li>
                                <p>Concurrentie- & MVP-advies</p>
                            </li>
                            <li>
                                <p>Missie & strategie</p>
                            </li>
                            <li>
                                <p>MVP-advies</p>
                            </li>
                        </ul>
                        <Button href="#">Maak een afspraak!</Button>
                    </Col>
                    <Col>
                        <figure>
                            <img src={group} alt="group of happy people" />
                        </figure>
                    </Col>
                </Row>
            </HeaderContainer>
        </Header>
        <section>
            <Container>
                <Row gutterWidth={6900}>
                    <Col xs={12} sm={6} md={4}>
                        <h2>MVP-advies</h2>
                        <p>
                        De MVP is de eerste versie van je product. 
                        Die wil je zo snel mogelijk afhebben zodat 
                        je je idee kunt gaan testen en tractie en 
                        omzet kunt genereren. Hierdoor kun je je 
                        concept doorontwikkelen en mogelijke 
                        investeerders overtuigen! Wij geven 
                        daarom scherp advies over hoe het product 
                        gebouwd moet worden en welke onderdelen 
                        het beste op korte en lange termijn 
                        ontwikkeld kunnen worden.
                        </p>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <h2>Missie & strategie</h2>
                        <p>
                            Wat wil je bereiken met je passie? 
                            Misschien wel de belangrijkste vraag 
                            voor een start-up. Wij geven daarom 
                            deskundig en fris advies op je missie 
                            en de strategie waarmee je die missie 
                            wil bereiken. Bovendien kijken we 
                            kritisch naar het verdienmodel.
                        </p>
                    </Col>
                    <Col xs={12} md={4}>
                        <h2>Branding & concurerntie</h2>
                        <p>Wie ben je en hoe verhoud je je tot je 
                            concurrenten? Dit zijn cruciale vragen, 
                            waarmee je boven je concurrenten uit 
                            kunt steken. Met onze moderne  branding- 
                            en concurrentieanalyse zetten we hier 
                            samen een grote stap in.  </p>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <figure>
                <img src={meeting} alt="meeting"/>
            </figure>
        </section>
        <section>
            <Container>
            <Subtitle>Het proces</Subtitle>
            <h2>Het gaan we je helpen?</h2>
            <Process>
                
                <li>
                    <h3>Strategie</h3>
                    <p>
                        Als startup wil je innoveren en 
                        voorop lopen. De eerste stap is 
                        een online strategie. Wat is je doel, 
                        hoe ga je dit bereiken en wie wil je 
                        bereiken? Na ons eerste gesprek gaan 
                        we hier meteen mee aan de slag, door 
                        kwantitatief en kwalitatief onderzoek. 
                        Door creatief & innovatief denken, 
                        creëren we de perfecte online strategie. 
                        De basis van jouw succes.
                    </p>
                </li>
                <li>
                    <h3>Design</h3>
                    <p>
                        Wij ontwerpen een technisch hoogstaand 
                        eindproduct dat jouw idee goed overbrengt. 
                        Een interactief web design, app of platform 
                        dat passie en creativiteit uitstraalt. 
                        Daarbij hoort een geoptimaliseerde 
                        gebruikservaring en een passende user 
                        interface. Om dit te bereiken maken we 
                        regelmatig prototypes om te evalueren 
                        of het design werkt.
                    </p>
                </li>
                <li>
                    <h3>Development</h3>
                    <p>
                    Als de basis goed is, kunnen we beginnen met 
                    het bouwen van jouw digitale idee. We zijn 
                    ooit gestart als webbureau en beschikken over 
                    de kennis en expertise om een stabiel product 
                    te bouwen dat snel getest kan worden! 
                    Jouw passie wordt werkelijkheid.
                    </p>
                </li>
            </Process>
            </Container>
        </section>
        <section>
            <Container>
            <Subtitle>Intake</Subtitle>
            <h2>Kom gratis op adviesgesprek</h2>
            <p>
                Ons multidisciplinaire, ervaren team van strategen, 
                designers en developers maken jouw passie werkelijkheid! 
                Zet de eerste stap en krijg de volgende gratis 
                deliverables na het kennismakingsgesprek:
            </p>
            <ul>
                <li>
                    <p>Scherp en kritisch advies op MVP</p>
                </li>
                <li>
                    <p>Deskundi8g en fris advies op je missie en strategie</p>
                </li>
                <li>
                    <p>Moderne branding- en klantanalyse</p>
                </li>
            </ul>
            <Button href="#">Maak een afspraak!</Button>
            </Container>
        </section>
    </Layout>
);

export default Startups;