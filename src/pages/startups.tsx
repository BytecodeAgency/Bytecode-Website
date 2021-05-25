import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayoutExtended/MainLayout';
import { Subtitle } from '../components/Typography/Typography';
import Button from '../components/Button/Button';
import ImageBlock from '../components/ImageBlock/ImageBlock';
import { Container, Row, Col } from '../lib/Grid';
import theme from '../styles/extended/theme';

const { mediaQueryMin } = theme;

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
    max-height: 20rem;
`;

const HeaderContainer = styled(Container)`
    height: 100%;
`;

const Process = styled.ol`
    display: flex;
    flex-direction: column;
    @media (${mediaQueryMin.xs}) {
        width: 80%;
    }
    @media (${mediaQueryMin.sm}) {
        flex-direction: row;
        width: 100%;
        li {
            padding-right: 3em;
        }
    }

    li {
        flex-basis: 33%;
    }
`;

const CTA = styled.section`
    background: #271c25;
    text-align: center;
    padding: 3em 0;
    min-height: 35em;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const Icon = styled.img`
    height: 3rem;
    width: auto;
`;

const CircledIcon = styled(Icon)`
    height: 5rem;
`;

const IconList = styled.ul`
    list-style: none;
    margin-left: 0;
    transform: translateX(-0.33rem);
    display: flex;
    align-items: stretch;
    li {
        flex-direction: column;
        display: inline-flex;
        width: 30%;
        font-size: 0.8rem;
        text-align: center;
        align-items: center;
        justify-content: center;
        img {
            width: min-content;
        }
        p {
            margin: 0;
            margin-top: 1em;
        }
    }
`;

const HeaderFigure = styled.figure`
    display: none;
    @media (${mediaQueryMin.xs}) {
        display: block;
        transform: translate(9vh, -82vh);
    }
    @media (${mediaQueryMin.sm}) {
        transform: translateY(-45vh);
    }
    position: absolute;
    left: 7vw;
    width: 60vw;
    transform: translateY(-45vh);
    height: 85vh;
    background: #271c25;
    overflow: hidden;
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        transform: scale(2);
        object-position: left center;
    }
`;

const Deliverables = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    align-items: center;
    justify-items: center;
    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        width: 33%;

        & > * {
            margin-top: 1rem;
        }
    }

    @media (${mediaQueryMin.xs}) {
        margin: 0.5em 1em 0 1em;
    }
`;

const PathsRight = styled.img`
    display: none;
    position: absolute;
    height: 120%;
    width: fit-content;
    right: -10%;
    z-index: 0;
    @media (${mediaQueryMin.sm}) {
        display: block;
    }
`;

const PathsLeft = styled(PathsRight)`
    left: -10%;
    transform: scaleX(-1);
`;

const Card = styled.div`
    background: #271c25;
    padding: 1em;
    margin-top: 1em;
    border-radius: 0.1em;
    @media (${mediaQueryMin.xs}) {
        padding: 3em;
        margin: 0.5em;
    }
`;

const SlantedBackground = styled.div`
    width: 100%;
    height: 50vh;
    background-image: url(${group});
    opacity: 0.58;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%); 
    background-size: 350%;
    background-position: 29% 61%;
    @media (${mediaQueryMin.sm}) {
        background: #271C25;
        opacity: 1;
        clip-path: polygon(0 0, 100% 0, 100% 66%, 0 100%); 
        35rem
    }
`;

const GridFig = styled.img`
    width: 7rem;
    position: absolute;
    transform: translate(-3rem, -3rem);
`;

const PathFig = styled.img`
    position: absolute;
    left: 0;
    top: 30%;
    z-index: -1;
`;

const Section = styled.section`
    position: relative;
`;

const IconCaption = styled.p`
    width: 66%;
    text-align: center;
`;

const HeaderRow = styled(Row)`
    /* !important used to overwrite standard behaviour react-grid-system*/
    align-items: flex-end !important;
    padding-bottom: 4rem;
    @media (${mediaQueryMin.sm}) {
        align-items: center !important;
        padding-bottom: 0;
    }
`;

const Startups = () => (
    <Layout pageSettings={pageSettings}>
        <Header>
            <HeaderContainer>
                <HeaderRow style={{ height: '100vh' }}>
                    <Col md={10} lg={4}>
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
                                    src={require('../images/img/startups/icons/missie.svg')}
                                />
                                <IconCaption className="caption">
                                    Missie & strategie
                                </IconCaption>
                            </li>
                            <li>
                                <Icon
                                    src={require('../images/img/startups/icons/mvp.svg')}
                                />
                                <IconCaption className="caption">
                                    MVP-advies
                                </IconCaption>
                            </li>
                        </IconList>
                        <Button href="#">Maak een afspraak!</Button>
                    </Col>
                    <Col>
                        <HeaderFigure>
                            <img src={group} alt="group of happy people" />
                        </HeaderFigure>
                    </Col>
                </HeaderRow>
            </HeaderContainer>
            <SlantedBackground />
        </Header>
        <section>
            <Container>
                <Row>
                    <Col style={{ alignItems: 'left' }} xs={12} sm={6} md={4}>
                        <Card>
                            <CircledIcon
                                src={require('../images/img/startups/icons/mvp.svg')}
                            />
                            <h2>MVP-advies</h2>
                            <p>
                                De MVP is de eerste versie van je product. Die
                                wil je zo snel mogelijk afhebben zodat je je
                                idee kunt gaan testen en tractie en omzet kunt
                                genereren. Hierdoor kun je je concept
                                doorontwikkelen en mogelijke investeerders
                                overtuigen! Wij geven daarom scherp advies over
                                hoe het product gebouwd moet worden en welke
                                onderdelen het beste op korte en lange termijn
                                ontwikkeld kunnen worden.
                            </p>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Card>
                            <CircledIcon
                                src={require('../images/img/startups/icons/missie.svg')}
                            />
                            <h2>Missie & strategie</h2>
                            <p>
                                Wat wil je bereiken met je passie? Misschien wel
                                de belangrijkste vraag voor een start-up. Wij
                                geven daarom deskundig en fris advies op je
                                missie en de strategie waarmee je die missie wil
                                bereiken. Bovendien kijken we kritisch naar het
                                verdienmodel.
                            </p>
                        </Card>
                    </Col>
                    <Col xs={12} md={4}>
                        <Card>
                            <CircledIcon
                                src={require('../images/img/startups/icons/concurrentie.svg')}
                            />
                            <h2>Branding & concurerntie</h2>
                            <p>
                                Wie ben je en hoe verhoud je je tot je
                                concurrenten? Dit zijn cruciale vragen, waarmee
                                je boven je concurrenten uit kunt steken. Met
                                onze moderne branding- en concurrentieanalyse
                                zetten we hier samen een grote stap in.{' '}
                            </p>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        <ImageBlock src={meeting} alt="meeting" />
        <Section
            style={{ padding: '15vh 0', display: 'flex', alignItems: 'center' }}
        >
            <Container>
                <Subtitle>Het proces</Subtitle>
                <h2>Het gaan we je helpen?</h2>
                <Process>
                    <li>
                        <h3>Strategie</h3>
                        <p>
                            Als startup wil je innoveren en voorop lopen. De
                            eerste stap is een online strategie. Wat is je doel,
                            hoe ga je dit bereiken en wie wil je bereiken? Na
                            ons eerste gesprek gaan we hier meteen mee aan de
                            slag, door kwantitatief en kwalitatief onderzoek.
                            Door creatief & innovatief denken, creëren we de
                            perfecte online strategie. De basis van jouw succes.
                        </p>
                    </li>
                    <li>
                        <h3>Design</h3>
                        <p>
                            Wij ontwerpen een technisch hoogstaand eindproduct
                            dat jouw idee goed overbrengt. Een interactief web
                            design, app of platform dat passie en creativiteit
                            uitstraalt. Daarbij hoort een geoptimaliseerde
                            gebruikservaring en een passende user interface. Om
                            dit te bereiken maken we regelmatig prototypes om te
                            evalueren of het design werkt.
                        </p>
                    </li>
                    <li>
                        <h3>Development</h3>
                        <p>
                            Als de basis goed is, kunnen we beginnen met het
                            bouwen van jouw digitale idee. We zijn ooit gestart
                            als webbureau en beschikken over de kennis en
                            expertise om een stabiel product te bouwen dat snel
                            getest kan worden! Jouw passie wordt werkelijkheid.
                        </p>
                    </li>
                </Process>
            </Container>
            <PathFig src={require('../images/img/startups/path.svg')} />
        </Section>
        <CTA>
            <Container style={{ zIndex: 2 }}>
                <Row>
                    <Col md={8} lg={6} offset={{ md: 2, lg: 3 }}>
                        <Subtitle>Intake</Subtitle>
                        <h1>Kom gratis op adviesgesprek</h1>
                        <p className="introduction">
                            Ons multidisciplinaire, ervaren team van strategen,
                            designers en developers maken jouw passie
                            werkelijkheid! Zet de eerste stap en krijg de
                            volgende gratis deliverables na het
                            kennismakingsgesprek:
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
                                    Deskundig en fris advies op je missie en
                                    strategie
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
                        <Button href="#">Maak een afspraak!</Button>
                    </Col>
                </Row>
            </Container>
            <PathsRight
                src={require('../images/img/startups/routes/cta-right.svg')}
            />
            <PathsLeft
                src={require('../images/img/startups/routes/cta-right.svg')}
            />
        </CTA>
    </Layout>
);

export default Startups;
