import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../experimental/layouts/StartupPageLayout/StartupPageLayout';
import { Subtitle } from '../components/Typography/Typography';
import InputField from '../components/InputField';
import Button from '../components/Button/Button';
import { Container, Row, Col } from '../lib/Grid';
import theme from '../experimental/styles/theme';

const { size, height, spacing, font, weight, color, border } = theme.typography.button;
const { mediaQueryMin, colors } = theme;

const pageSettings = {
    title: `Maatwerk Web & Mobiel Ontwikkeling`,
    description: `Een kleinschalig full-service webbureau gespecialiseerd in platformontwikkeling op maat. Passie, kwaliteit en betrouwbaarheid als kernwaarden`,
    keywords: 'bytecode, digital agency',
};

const group = require('../images/img/startups/group.jpeg');
const meeting = require('../images/img/startups/meeting.jpeg');
const team = require('../images/img/startups/bytecode-team.jpeg');

const Header = styled.header`
    height: 100vh;
    min-height: 600px;
    display: flex;
    flex-direction: row;
    @media (max-width: ${theme.breakpoint.xs}) {
        flex-direction: column;
        justify-content: flex-end
    }
    align-items: center;
    
`;

const HeaderContainer = styled(Container)`
    flex: 1;
    /* !important used to overwrite standard behaviour react-grid-system, may the code gods forgive me*/
    margin-top: 0 !important;
    margin-bottom: 0 !important;
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

const Process = styled.ol`
    display: flex;
    flex-direction: column;
    list-style-type: none;
    list-style-position: inside;
    counter-reset: elementcounter;
    padding-left: 0;
    @media (${mediaQueryMin.xs}) {
        width: 80%;
        margin:0 auto;
    }
    @media (${mediaQueryMin.sm}) {
        flex-direction: row;
        width: 100%;
        padding-left: 1em;
        li {
            padding-right: 2em;
        }
    }
    li {
        flex-basis: 33%;
        font-size: 20px;
        color: ${colors.primary};
        position: relative;
        &:before {
            content: "0" counter(elementcounter) ". ";
            counter-increment: elementcounter;
            position: absolute;
            right: 1em;
            @media (${mediaQueryMin.sm}) {
                left: -2em;
            }
        }
        h3 {
            display: inline-block;
        }
    }
`;

const Icon = styled.img`
    height: 4rem;
    width: auto;
    @media (${mediaQueryMin.sm}) {
        height: 4rem;
    }
`;

const AdviceIcon = styled.img`
    position: absolute;
    width: 4rem;
    height: auto;
    left: 65%;
    top: 0;
    opacity: 70%;
    @media (min-width: 500px) {
        left: 90%;
        width: 5rem;
    }
    @media (${mediaQueryMin.sm}) {
        left: 40%;
        width: 7rem;
    }
`;

const CircledIcon = styled(Icon)`
    height: 5rem;
    width: auto;
    display: block;
    margin: 0 auto;
    @media (${mediaQueryMin.xs}) {
        height: 5rem;
    }
`;

const IconList = styled.ul`
    list-style: none;
    margin-left: 0;
    transform: translateX(-0.33rem);
    display: flex;
    align-items: stretch;
    width: 100%;
    max-width: 30rem;
    margin: 0 0 2.66em 0;
    li {
        flex-direction: column;
        display: inline-flex;
        width: 100%;
        font-size: 0.8rem;
        text-align: center;
        align-items: center;
        justify-content: start;
        margin: 0;
        img {
            @media (${mediaQueryMin.sm}) {
                width: min-content;
            }
        }
        p {
            margin: 0;
        }
    }
`;

const HeaderFigure = styled.figure`
    display: none;
    grid-column: 2;
    height: 80vh;
    width: 60vw;
    transform: translateX(5vw);
    @media (${mediaQueryMin.sm}) {
        display: block; 
    }
    @media (max-width: ${theme.breakpoint.md}) {
        height: 75vh;
        width: 50vw;
        transform: translateX(10vw);
    }
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const ParallaxImage = styled.div`
    background-image: url(${team});
    min-height: 500px;
    width: 100%;
    display: block;
    border: none;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (${mediaQueryMin.sm}) {
        background-image: url(${meeting});
    }
    & img {
        width: 100%;
        height: auto;
    }
`;

const Deliverables = styled.ul`
    display: flex;
    list-style: none;
    text-align: center;
    align-items: flex-start;
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
    text-align: center;
    @media (${mediaQueryMin.xs}) {
        padding: 3em;
        margin: 0.5em;
    }
    div {
        position: relative;
        height: 5em;
        margin: 0 auto;
    }
    h3 {
        margin: 2em 0;
    }
`;

const FlexCol = styled(Col)`
    display: flex;
`;

const SlantedBackground = styled.div`
    width: 100%;
    height: 40vh;
    background-image: url(${group});
    opacity: 0.58;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    background-size: 150%;
    background-position: 29% 61%;
    @media (${mediaQueryMin.sm}) {
        background: #271C25;
        opacity: 1;
        clip-path: polygon(0 0, 100% 0, 100% 66%, 0 100%);
        /* 35rem */
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
    padding: 3em 0;
`;

const CTA = styled(Section)`
    background: #271c25;
    text-align: center;
    min-height: 35em;
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const IconCaption = styled.p`
    width: 90%;
    text-align: center;
`;

const NewsletterSection = styled(Section)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NewsletterContainer = styled.div`
    margin-top: 2vh;
    padding: 10vw;
    text-align: center;
    max-width: 800px;
    @media (min-width: ${theme.breakpoint.md}) {
        padding: 3vw;
    }
`;

const NewsletterSubscribeForm = styled.form`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 50% 50%;
    text-align: center;
    @media (max-width: ${theme.breakpoint.xs}) {
        display: block;
    }
    > input {
        grid-column: span 2;
        background: ${theme.colors.white};
        color: ${theme.colors.black};
        @media (max-width: ${theme.breakpoint.xs}) {
            grid-column: none;
        }
    }
`;

const NewsletterSubscribeInputField = styled(InputField)`
    background: ${theme.colors.secondary} !important;
    font-size: 16px;
    padding: 1em 1.33em;
    color: white !important;
`;

const NewsletterSubscribeButton = styled.button`
    display: inline-block;
    background: transparent;
    padding: 0.66em 2em;
    grid-column: 2 / span 2;
    border: ${border};
    border-radius: 5px;
    transition: all 0.2s ease;
    font-size: ${size};
    line-height: ${height};
    letter-spacing: ${spacing};
    font-family: ${font};
    font-weight: ${weight};
    color: ${color};
    text-decoration: none;
    margin: 1em 0;

    @media (max-width: ${theme.breakpoint.xs}) {
        grid-column: none;
        width: 100%;
    }

    &:hover {
        color: ${theme.colors.white};
        background: ${theme.colors.primary};
        border-color: ${theme.colors.primary};
        cursor: pointer;
    }
`;

const HeaderContent = styled.div`
    grid-column: 1;
    flex-basis: 30%;
    @media (max-width: ${theme.breakpoint.sm}) {
        padding-bottom: 5vh;
    }
    @media (max-width: ${theme.breakpoint.lg}) {
        flex-basis: 60%;
    }
    
`;

const Startups: React.FC = () => {
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');

    const canSubmit = name !== '' && email !== '';
    const stateChanger = (
        setter: React.Dispatch<React.SetStateAction<string>>
    ) => (e: React.ChangeEvent<HTMLInputElement>) => setter(e.target.value);

    return (
        <Layout pageSettings={pageSettings}>
            <HeaderContainer>
                <Header>
                    <HeaderContent>
                        <GridFig src={require('../images/img/startups/grid.svg')}/>
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
                            rel="noopener">
                            Maak een afspraak!
                        </Button>
                    </HeaderContent>
                    <HeaderFigure>
                                <img src={group} alt="group of happy people" />
                    </HeaderFigure>
            </Header>
            </HeaderContainer>
            <SlantedBackground />
            <Section style={{ paddingTop: 0 }}>
                <Container>
                    <Row>
                        <FlexCol style={{ alignItems: 'left' }} xs={12} sm={6} lg={4}>
                            <Card>
                                <div>
                                    <CircledIcon
                                        src={require('../images/img/startups/icons-round/concurrentie.svg')}
                                    />
                                </div>
                                <h3>Branding & concurrentie</h3>
                                <p>
                                    Wie ben je en hoe verhoud je je tot je
                                    concurrenten? Dit zijn cruciale vragen, waarmee
                                    je boven je concurrenten uit kunt steken. Met
                                    onze moderne branding- en concurrentieanalyse
                                    zetten we hier samen een grote stap in.{' '}
                                </p>
                            </Card>
                        </FlexCol>
                        <FlexCol xs={12} sm={6} lg={4}>
                            <Card>
                                <div>
                                    <CircledIcon
                                        src={require('../images/img/startups/icons-round/missie.svg')}
                                    />
                                </div>
                                <h3>Missie & strategie</h3>
                                <p>
                                    Wat wil je bereiken met je passie? Misschien wel
                                    de belangrijkste vraag voor een start-up. Wij
                                    geven daarom deskundig en fris advies op je
                                    missie en de strategie waarmee je die missie wil
                                    bereiken. Bovendien kijken we kritisch naar het
                                    verdienmodel.
                                </p>
                            </Card>
                        </FlexCol>
                        <FlexCol xs={12} lg={4}>
                            <Card>
                                <div>
                                    <CircledIcon
                                        src={require('../images/img/startups/icons-round/mvp.svg')}
                                    />
                                </div>
                                <h3>MVP-advies</h3>
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
                        </FlexCol>
                    </Row>
                </Container>
            </Section>
            <Section>
                <ParallaxImage />
            </Section>
            <Section
                style={{ display: 'flex', alignItems: 'center' }}
            >
                <Container>
                    <Subtitle>Het proces</Subtitle>
                    <h2>Hoe gaan we je helpen?</h2>
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
                            <Button
                                href="https://calendly.com/bytecode"
                                target="_blank"
                                rel="noopener">
                                Maak een afspraak!
                            </Button>
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
            <NewsletterSection>
                <NewsletterContainer>
                    <Subtitle>Nieuwsbrief</Subtitle>
                    <h3 style={{ margin: ".66em 0" }}>Abonneer je op onze nieuwsbrief</h3>
                    <p style={{ margin: "2em 0" }}>
                        Maandelijks brengen wij een interessante en leerzame nieuwsbrief
                        uit met onder andere onze ‘Bytecast’, nieuwe artikelen of
                        e-books, en natuurlijk updates over ons team en werkzaamheden.
                    </p>
                    <NewsletterSubscribeForm
                        action="https://bytecode.us4.list-manage.com/Subscribe/post"
                        method="POST"
                        noValidate
                    >
                        <input
                            type="hidden"
                            name="u"
                            value="8442e1debdc9af183ff9fdc66"
                        />
                        <input type="hidden" name="id" value="ae42f56e38" />
                        <NewsletterSubscribeInputField
                            type="text"
                            name="MERGE1"
                            id="MERGE1"
                            placeholder="Naam"
                            onChange={stateChanger(setName)}
                            value={name}
                        />
                        <NewsletterSubscribeInputField
                            type="text"
                            name="MERGE0"
                            id="MERGE0"
                            placeholder="E-mailadres"
                            onChange={stateChanger(setEmail)}
                            value={email}
                        />
                        <NewsletterSubscribeButton
                            type="submit"
                            disabled={!canSubmit}
                            value="Subscribe"
                            name="Subscribe"
                            id="mc-embedded-Subscribe"
                        >
                            Abonneer
                        </NewsletterSubscribeButton>
                    </NewsletterSubscribeForm>
                </NewsletterContainer>
            </NewsletterSection>
        </Layout>
    )
};

export default Startups;
