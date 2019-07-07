import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
import Layout from '../layouts/MainLayout';
import ContentPageHeader from '../components/ContentPageHeader';
import Wrapper from '../components/Wrapper';
import ContactForm from '../components/ContactForm';

import theme from '../styles/theme';

import Service from '../components/Service';

const pageSettings = {
    title: 'Cases',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const ProfilePicture = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 100rem;
    background-image: url(${props => props.img});
    background-size: cover;
    margin-bottom: 1.66em;
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
        width: 4rem;
        margin-right: 1.33em;
    }
`;

const PaddedCol = styled(Col)`
    margin: 1em !important;
    @media (min-width: ${theme.breakpoints[2]}px) {
        margin: 0 3em;
    }
`;

const PaddedContainer = styled(Container)`
    padding: 4em 0;
    @media (max-width: ${theme.breakpoints[1]}px) {
        margin: 1em;
    }
`;

const Checklist = styled.ul`
    margin: 2em 0;
`;

const Img = styled.img`
    max-width: 30em;
`;

const Big = styled.big`
    line-height: 1.33em;

    p {
        @media (max-width: ${theme.breakpoints[1]}px) {
            max-width: 95vw;
        }
    }
`;

const FluidWrapper = styled(Wrapper)`
    margin: 0 !important;
    padding: 0 !important;
    Container {
        margin: 0 !important;
        padding: 0 !important;
    }
`;

const SwitchCol = styled(Col)`
    @media (max-width: ${theme.breakpoints[1]}px) {
        order: -1;
    }
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

const Collaboration = () => (
    <Layout pageSettings={pageSettings}>
        <ContentPageHeader
            useGatsbyLink
            img={require('../images/img/content/team.png')}
            subtitle="Bytecode Partner"
            title="Bytecode als partner"
            href="/contact"
            button="Neem contact op"
            bgSize="70%"
            text="Als marketingbureau wil je het liefst
            bezig zijn met marketingactiviteiten om waarde
            te leveren aan je klanten. Wat als er een technische
            opdracht binnenkomt die je zelf niet wil of
            kan behandelen, maar wel full-service wil bieden?
            Bytecode neemt voor veel marketing- en communicatiebedrijven
            de technische opdrachten uit handen, volledig of gedeeltelijk."
        />
        <FluidWrapper>
            <Container style={{ marginTop: '0', padding: '5em 0' }}>
                <Row>
                    <PaddedCol
                        style={{ margin: '1em' }}
                        offset={{ lg: 1 }}
                        lg={9}
                    >
                        <h2>Waarom samenwerken?</h2>
                        <Big>
                            <p>
                                Wij komen als technisch partner in beeld wanneer
                                er maatwerk maatwerk nodig is op het technisch
                                gebied. Marketing- en communicatiebureaus zijn
                                een kei bij het creeeren en marketing bij
                                content, hierbij zijn de bedrijven op hun
                                sterkts. Om de klantenwens te kunnen bedienen
                                bij een meer technisch vraagstuk zoals
                                bijvoorbeeld maatwerk websites en webshops,
                                mobiele apps, API-koppelingen of (cloud-)hosting
                                worden technische partijen zoals Bytecode vaak
                                ingeschakeld.
                            </p>
                        </Big>
                    </PaddedCol>
                </Row>
            </Container>
        </FluidWrapper>
        <PaddedContainer>
            <Row justify="center" align="center">
                <PaddedCol md={5}>
                    <h3>Eén contactpersoon</h3>
                    <p>
                        <big>
                            Bedrijven willen graag een enkele partij hebben
                            waarbij ze al hun vragen kunnen neerleggen. Voor
                            bedrijven gespecialiseerd in marketing heeft het dus
                            een grote toegevoegde aarde om technische diensten
                            aan te kunnen bieden aan klanten, zonder dat dit
                            volledig intern gemanaged hoeft te worden.
                        </big>
                    </p>
                </PaddedCol>
                <SwitchCol offset={{ lg: 1 }}>
                    <Img
                        // eslint-disable-next-line max-len
                        src={require('../images/img/content/collaboration/say.svg')}
                        alt="worth"
                        style={{ marginBottom: '1em' }}
                    />
                </SwitchCol>
            </Row>
        </PaddedContainer>
        <PaddedContainer>
            <Row justify="center" align="center">
                <Col lg={6} md={5}>
                    <Img
                        // eslint-disable-next-line max-len
                        src={require('../images/img/content/collaboration/code.svg')}
                        alt="worth"
                        style={{ marginBottom: '1em' }}
                    />
                </Col>
                <PaddedCol lg={5} md={5} offset={{ lg: 1, md: 1 }}>
                    <h3>De nieuwste technieken</h3>
                    <p>
                        <big>
                            Bij het leveren van onze diensten zorgen wij altijd
                            dat we ons aanpassen naar de benodigde workflow, dus
                            dat wij als onderdeel (of in het verlengde) van het
                            bestaande team kunnen werken.
                        </big>
                    </p>
                </PaddedCol>
            </Row>
        </PaddedContainer>
        <PaddedContainer>
            <Row justify="center" align="center">
                <PaddedCol md={6}>
                    <h3>Vergroot je waarde</h3>
                    <p>
                        <big>
                            Door technische diensten aan te kunnen bieden aan
                            klanten vergroot je dus de waarde van de geleverde
                            diensten, en kan je de full-service bieden waar eel
                            klanten naar verlangen.
                        </big>
                    </p>
                </PaddedCol>
                <SwitchCol lg={5} offset={{ md: 0.5 }}>
                    <Img
                        // eslint-disable-next-line max-len
                        src={require('../images/img/content/collaboration/worth.svg')}
                        alt="worth"
                        style={{ marginBottom: '1em' }}
                    />
                </SwitchCol>
            </Row>
        </PaddedContainer>
        <Wrapper>
            <Container fluid>
                <Row>
                    <Col offset={{ md: 0.6 }} lg={6}>
                        <h2>De nieuwste technieken</h2>
                        <p>
                            <big>
                                Bij het leveren van onze diensten zorgen wij
                                altijd dat we ons aanpassen naar de benodigde
                                workflow, dus dat wij als onderdeel (of in het
                                verlengde) van het bestaande team kunnen werken.
                            </big>
                        </p>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row>
                    <Service iconName="website" title="Websites & Webapps">
                        Dit is de plek waar alles gebeurt. De plek waar je laat
                        zien wie je bent, waar je mensen overtuigt en waar je
                        klanten binnenhaalt. Bytecode zal je hiertoe in staat
                        stellen, door het onderste uit de kan te halen. Daarmee
                        creëren wij samen het beste voor jou, uiteenlopend van
                        simplistische websites tot ingewikkelde webapps.
                    </Service>
                    <Service iconName="ecommerce" title="E-commerce">
                        Wil je een succesvolle webshop hebben? Dan heel veel
                        factoren denken. Bytecode weet precies welke factoren
                        dit zijn en wil je daar graag mee helpen. Zowel met de
                        techniek als met de specifieke marketing en SEO die bij
                        een succesvolle webshop komen kijken.
                    </Service>
                    <Service iconName="mobile" title="Mobiele applicaties">
                        Tegenwoordig zijn mobiele applicaties belangrijk als
                        websites of webapps. Wij vinden het daarom belangrijk
                        dat apps net zo goed werken als websites en op elk
                        apparaat perfect aangepast zijn. Daarbij benaderen wij
                        apps als een zelfstandig platform en niet als een kopie
                        van de website. Bytecode ontwikkelt zowel native
                        applicaties als progressive webapps.
                    </Service>
                    <Service iconName="ui" title="UX/UI-Design">
                        Alles draait om de beleving van de bezoeker van jouw
                        platform. Deze beleving optimaliseren wij door middel
                        middel van hoogstaand UX/UI-design. Onze developers
                        besteden uiterst veel aandacht aan de user experience en
                        de intuïtiviteit van de website of app. Daarnaast zorgen
                        designers ervoor dat het ontwerp van het platform in het
                        oog springt en perfect past bij wat jij wil uitstralen.
                    </Service>
                </Row>
            </Container>
        </Wrapper>
        <PaddedContainer>
            <Row>
                <Col lg={6}>
                    <h2>Garanties</h2>
                    <Checklist>
                        <CheckListItem>
                            Altijd duidelijke en snelle communicatie
                        </CheckListItem>
                        <CheckListItem>
                            Altijd duidelijke en snelle communicatie
                        </CheckListItem>
                        <CheckListItem>
                            Altijd duidelijke en snelle communicatie
                        </CheckListItem>
                        <CheckListItem>
                            Altijd duidelijke en snelle communicatie
                        </CheckListItem>
                    </Checklist>
                </Col>
                <Col lg={6}>
                    <ProfilePicture
                        img={require('../images/img/authors/nick.jpeg')}
                    />
                    <blockquote>
                        <h3>
                            With Code School, we excelled as an early entry
                            learn-to-code marketplace. Since then, we’ve
                            consulted on and implemented platforms.
                        </h3>
                        <p>- Nick</p>
                    </blockquote>
                </Col>
            </Row>
        </PaddedContainer>
        <Wrapper>
            <ContactForm />
        </Wrapper>
    </Layout>
);

export default Collaboration;
