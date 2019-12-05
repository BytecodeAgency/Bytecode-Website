import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from '../lib/Grid';
import Layout from '../layouts/MainLayout';
import ContentPageHeader from '../containers/ContentPageHeader/ContentPageHeader';
import Wrapper from '../components/Wrapper';
import ContactForm from '../containers/ContactForm/ContactForm';
import TextAndImage from '../containers/ContentBlocks/ContentBlocks';
import { Big } from '../components/Typography';
import theme from '../styles/theme';

import Service from '../containers/Service/Service';

const { colors } = theme;

const pageSettings = {
    title: 'Bytecode as partner',
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
        width: 3rem;
        margin-right: 1.33em;
    }
`;

const PaddedContainer = styled(Container)`
    padding: 4em 0;
`;

const Checklist = styled.ul`
    margin: 2em 0;
`;

const SmallList = styled.ul`
    margin: 1em 0.5em;
    list-style-position: inside;
    list-style: circle;
    li {
        font-size: 85%;
        margin: 0 1em;
        line-height: 1.58em;
        color: ${colors.lightgray};
    }
    p {
        margin: inherit;
        font-size: 75%;
        line-height: 1.4em;
        color: ${colors.lightgray};
        opacity: 0.33;
    }
`;

const CheckListItem = props => {
    const { children } = props;
    return (
        <CheckListItemBase>
            <img src={require('../images/icons/ui/check.svg')} alt="- " />
            <p>
                <Big>{children}</Big>
            </p>
        </CheckListItemBase>
    );
};

CheckListItem.propTypes = {
    children: PropTypes.node.isRequired,
};

const Partners = () => (
    <Layout pageSettings={pageSettings}>
        <ContentPageHeader
            useGatsbyLink
            img={require('../images/img/content/team.png')}
            subtitle="Bytecode Partner"
            title="Bytecode als partner"
            href="/contact"
            button="Neem contact op"
            bgSize="70%"
            text="Als marketingbureau wil je het liefst bezig zijn
                  met marketingactiviteiten die waarde creëren
                  voor jouw klanten. Wat als er een technische
                  opdracht binnenkomt die je zelf niet wil of kan
                  behandelen, maar wel full-service diensten wil aanbieden?
                  Bytecode ondersteunt marketing- en communicatiebedrijven
                  volledig of gedeeltelijk met hun technische opdrachten."
        />

        <Container>
            <Row>
                <Col style={{ margin: '1em' }} offset={{ lg: 1 }} lg={7}>
                    <h2>Waarom samenwerken?</h2>
                    <Big>
                        <p>
                            Wij komen als technisch partner in beeld wanneer er
                            een wens is vanuit de klant naar maatwerk op
                            technisch gebied, zoals maatwerk websites en
                            webshops, mobiele apps, API-koppelingen of
                            (cloud-)hosting.
                        </p>
                    </Big>
                </Col>
            </Row>
        </Container>

        <TextAndImage
            img={require('../images/img/content/collaboration/worth.svg')}
            alt="worth"
        >
            <h2>Vergroot je waarde</h2>
            <p>
                <Big>
                    Het aanbieden van technische diensten aan je klanten
                    vergroot jouw waarde van geleverde diensten. Daarnaast kun
                    je de full-service bieden waar klanten naar verlangen.
                </Big>
            </p>
        </TextAndImage>
        <TextAndImage
            img={require('../images/img/content/collaboration/say.svg')}
            alt="1 contactpersoon"
            reverse
        >
            <h2>Eén contactpersoon</h2>
            <p>
                <Big>
                    Met Bytecode als partner fungeren wij als de (enige) partij
                    waar je al je vraagstukken kan neerleggen. Dit is van grote
                    waarde, omdat je deze niet volledig intern hoeft te managen.
                </Big>
            </p>
        </TextAndImage>
        <TextAndImage
            img={require('../images/img/content/collaboration/code.svg')}
            alt="1 contactpersoon"
            fluid
        >
            <h2>De nieuwste technieken</h2>
            <p>
                <Big>
                    Bij het leveren van onze diensten zorgen wij dat we ons
                    aanpassen naar de benodigde workflow, zodat wij als
                    onderdeel (of in het verlengde) van het bestaande team
                    kunnen werken. Door onze jarenlange ervaring als technisch
                    partner beheersen wij vrijwel alle veelgebruikte technieken.
                </Big>
            </p>
            <SmallList>
                <li>Front-end: HTML, CSS, Sass, Stylus, Typescript</li>
                <li>
                    Backend: Typescript, Go, Elixir, Rust, Python, Java, Scala
                </li>
                <li>
                    PHP frameworks: WordPress, WooCommerce, Laravel en Magento 2
                </li>
                <li>Javascript Frameworks: NodeJS, ReactJS en Angular 2+ </li>
                <li>Mobiel: React Native, Expo, Ionic 2+, Flutter</li>
                <li>Servers: Linux, Apache, Nginx, Caddy</li>
                <p>
                    Is de techniek die je zoekt niet benoemd? Schroom dan niet
                    contact op te nemen, we kijken graag wat we voor je kunnen
                    betekenen.
                </p>
            </SmallList>
        </TextAndImage>

        <Wrapper>
            <Container>
                <Row>
                    <h2>Diensten</h2>
                </Row>
                <Row>
                    <Service iconName="website" title="Websites &amp; Webshops">
                        Een website is de plek waar je laat zien wie je bent,
                        waar je mensen overtuigt en waar je klanten binnenhaalt.
                        Bytecode zal je hiertoe in staat stellen. We creëren
                        samen het beste voor jou, uiteenlopend van simplistische
                        websites tot ingewikkelde webapps.
                    </Service>
                    <Service iconName="mobile" title="Apps &amp; Webapps">
                        Droom je van een succesvolle webshop? Bytecode weet
                        precies welke factoren hiervoor belangrijk zijn. We
                        willen je graag helpen met de techniek en de specifieke
                        marketing en SEO die bij een succesvolle webshop komen
                        kijken.
                    </Service>
                    <Service iconName="api" title="APIs &amp; automatisering">
                        Alles draait om de beleving van de bezoeker van jouw
                        platform. Deze beleving optimaliseren wij door middel
                        van een hoogstaand UX/UI-design. Onze developers
                        besteden uiterst veel aandacht aan de user experience en
                        de intuïtiviteit van de website of app. Daarnaast zorgen
                        onze designers ervoor dat het ontwerp van het platform
                        in het oog springt en perfect past bij wat jij wil
                        uitstralen.
                    </Service>
                    <Service iconName="cloud" title="Cloud &amp; hosting">
                        Tegenwoordig zijn mobiele applicaties even belangrijk
                        als websites of webapps. Wij vinden het daarom van
                        waarde dat apps net zo goed werken als websites en op
                        elk apparaat perfect aangepast zijn. We benaderen apps
                        als een zelfstandig platform en niet als een kopie van
                        de website. Bytecode ontwikkelt zowel native applicaties
                        als progressive webapps.
                    </Service>

                    <Service iconName="ads" title="Support op afstand">
                        Naast &apos;full service&apos; zijn wij ook beschikbaar
                        voor de kleinere vragen of klusjes. Wanneer uw
                        werknemers een technische vraag krijgen die zij niet
                        kunnen beantwoorden, staan wij altijd klaar om op
                        afstand advies en antwoorden te verschaffen over
                        technische vraagstukken.
                    </Service>
                    <Service iconName="design" title="Design &amp; Branding">
                        De identiteit van jouw bedrijf is van belang en een
                        bepalende factor voor je reputatie. Via onze ontwikkelde
                        &apos;Three Hour Branding Sprint&apos; komen we er samen
                        uit wat jullie brand is en hoe jullie je hiermee kunnen
                        onderscheiden.
                    </Service>
                </Row>
            </Container>
        </Wrapper>
        <Container>
            <Row>
                <h1>Werkwijze</h1>
                <Big>
                    <p>
                        Voordat we als technisch partner aan de slag gaan,
                        zorgen we altijd dat we geheel op één lijn zitten.
                        Wanneer wij support verlenen aan eindklanten kunnen wij
                        dit white-label doen. Het is bijvoorbeeld mogelijk om
                        als medewerker vanuit een eigen support-systeem te
                        werken. Soms komt dit neer op dat we een opdracht
                        volledig uit handen nemen. Andere keren zal het nodig
                        zijn om te fungeren als onderdeel van een team voor een
                        langere tijd. Of wellicht is een ad-hoc
                        support-contructie de beste oplossing. Hierin denken we
                        graag met je mee.
                    </p>
                </Big>
            </Row>
        </Container>
        <PaddedContainer>
            <Row>
                <Col lg={6}>
                    <h2>Garanties</h2>
                    <Checklist>
                        <CheckListItem>
                            Duidelijke en snelle communicatie
                        </CheckListItem>
                        <CheckListItem>
                            Ondersteuning bij digitale zelfontplooing
                        </CheckListItem>
                        <CheckListItem>
                            Kwalitatief hoogstaand en een optimaal functionerend
                            product
                        </CheckListItem>
                        <CheckListItem>
                            Transparantie en openheid, zonder uitzonderingen
                        </CheckListItem>
                    </Checklist>
                </Col>
                <Col lg={6}>
                    <ProfilePicture
                        img={require('../images/img/content/jan-willem.jpg')}
                    />
                    <blockquote>
                        <h3>
                            With Code School, we excelled as an early entry
                            learn-to-code marketplace. Since then, we’ve
                            consulted on and implemented platforms.
                        </h3>
                        <p>- Jan-Willem (<a href="https://pumphouse.nl/">The Pumphouse</a>)</p>
                    </blockquote>
                </Col>
            </Row>
        </PaddedContainer>

        <Container>
            <ContactForm />
        </Container>
    </Layout>
);

export default Partners;
