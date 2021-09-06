import React, { useState } from 'react';
import Layout from '../experimental/layouts/StartupPageLayout/StartupPageLayout';
import { Subtitle } from '../components/Typography/Typography';
import Button from '../components/Button/Button';
import { Container, Row } from '../lib/Grid';
import {
    ProcessSteps,
    Card,
    CircledIcon,
    CTA,
    CTAContent,
    Deliverables,
    FlexCol,
    GridFig,
    Header,
    HeaderContainer,
    HeaderContent,
    HeaderFigure,
    Icon,
    IconCaption,
    IconList,
    NewsletterContainer,
    NewsletterSection,
    NewsletterSubscribeButton,
    NewsletterSubscribeForm,
    NewsletterSubscribeInputField,
    ParallaxImage,
    PathsLeft,
    PathsRight,
    Section,
    SlantedBackground,
} from '../components/New';

const pageSettings = {
    title: `Maatwerk Web & Mobiel Ontwikkeling`,
    description: `Een kleinschalig full-service webbureau gespecialiseerd in platformontwikkeling op maat. Passie, kwaliteit en betrouwbaarheid als kernwaarden`,
    keywords: 'bytecode, digital agency',
};

const group = require('../images/img/startups/bytecode-team.jpeg');

const Startups: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const canSubmit = name !== '' && email !== '';
    const stateChanger =
        (setter: React.Dispatch<React.SetStateAction<string>>) =>
        (e: React.ChangeEvent<HTMLInputElement>) =>
            setter(e.target.value);

    return (
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
                                    Positionering & Branding
                                </IconCaption>
                            </li>
                            <li>
                                <Icon
                                    src={require('../images/img/startups/icons/mvp.svg')}
                                />
                                <IconCaption className="caption">
                                    Missie & Strategie
                                </IconCaption>
                            </li>
                            <li>
                                <Icon
                                    src={require('../images/img/startups/icons/missie.svg')}
                                />
                                <IconCaption className="caption">
                                    MVP-advies & Development
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
            <SlantedBackground />
            <Section style={{ paddingTop: 0 }}>
                <Container>
                    <Row>
                        <FlexCol
                            style={{ alignItems: 'left' }}
                            xs={12}
                            sm={6}
                            lg={4}
                        >
                            <Card>
                                <div>
                                    <CircledIcon
                                        src={require('../images/img/startups/icons-round/concurrentie.svg')}
                                    />
                                </div>
                                <h3>Branding & positionering</h3>
                                <p>
                                    Wie ben je en hoe verhoud je je tot je
                                    concurrenten? Dit zijn cruciale vragen,
                                    waarmee je boven je concurrenten uit kunt
                                    steken. Met onze visie en analyse zetten we
                                    hier samen grote stappen in.{' '}
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
                                    Wat wil je bereiken met je passie? Misschien
                                    wel de belangrijkste vraag voor een
                                    start-up. Wij geven daarom deskundig en fris
                                    advies op je missie en de strategie waarmee
                                    je die missie wil bereiken. Bovendien kijken
                                    we kritisch naar het business plan.
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
                                    De MVP is de eerste versie van je product.
                                    Die wil je zo snel mogelijk afhebben zodat
                                    je je idee kunt gaan testen en tractie en
                                    omzet kunt genereren. Hierdoor kun je je
                                    concept doorontwikkelen en mogelijke
                                    investeerders overtuigen! Wij geven daarom
                                    scherp advies over hoe het product gebouwd
                                    moet worden en welke onderdelen het beste op
                                    korte en lange termijn ontwikkeld kunnen
                                    worden.
                                </p>
                            </Card>
                        </FlexCol>
                    </Row>
                </Container>
            </Section>
            <Section>
                <ParallaxImage />
            </Section>
            <ProcessSteps />
            <CTA>
                <CTAContent>
                    <Subtitle>Intake</Subtitle>
                    <h1>Kom gratis op adviesgesprek</h1>
                    <p className="introduction">
                        Ons multidisciplinaire, ervaren team van strategen,
                        designers en developers maken jouw passie werkelijkheid!
                        Zet de eerste stap en krijg de volgende gratis
                        deliverables na het kennismakingsgesprek:
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
                                Deskundige en frisse kijk op je missie en
                                strategie
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
            <NewsletterSection>
                <NewsletterContainer>
                    <Subtitle>Nieuwsbrief</Subtitle>
                    <h3 style={{ margin: '.66em 0' }}>
                        Abonneer je op onze nieuwsbrief
                    </h3>
                    <p style={{ margin: '2em 0' }}>
                        Maandelijks brengen wij een interessante en leerzame
                        nieuwsbrief uit met onder andere onze ‘Bytecast’, nieuwe
                        artikelen of e-books, en natuurlijk updates over ons
                        team en werkzaamheden.
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
    );
};

export default Startups;
