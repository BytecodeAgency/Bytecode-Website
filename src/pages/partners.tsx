import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import { Container, Row, Col } from '../lib/Grid';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../layouts/MainLayout' was resolved to '/h... Remove this comment to see the full error message
import Layout from '../layouts/MainLayout';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/ContentPageHeader/ContentPag... Remove this comment to see the full error message
import ContentPageHeader from '../containers/ContentPageHeader/ContentPageHeader';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/Wrapper' was resolved to '/h... Remove this comment to see the full error message
import Wrapper from '../components/Wrapper';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/ContactForm/ContactForm' was... Remove this comment to see the full error message
import ContactForm from '../containers/ContactForm/ContactForm';
import {
    TextAndImage,
    ProfilePicture,
    // @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/ContentBlocks/ContentBlocks'... Remove this comment to see the full error message
} from '../containers/ContentBlocks/ContentBlocks';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/Typography' was resolved to ... Remove this comment to see the full error message
import { Big, Quote } from '../components/Typography';
import theme from '../styles/theme';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Service/Service' was resolve... Remove this comment to see the full error message
import Service from '../containers/Service/Service';

const { colors } = theme;

const pageSettings = {
    title: 'Bytecode as partner',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

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

interface CheckListItemProps {
    children: React.ReactNode;
}

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'props'.
const CheckListItem: React.FC<CheckListItemProps> = ({ children }) => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'props'.

    return (
        <CheckListItemBase>
            <img src={require('../images/icons/ui/check.svg')} alt="- " />
            <p>
                <Big>{children}</Big>
            </p>
        </CheckListItemBase>
    );
};

const Partners = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <ContentPageHeader
            useGatsbyLink
            img={require('../images/img/header/postit-shadow.jpg')}
            subtitle="Bytecode Partner"
            title="Bytecode als partner"
            href="/contact"
            button="Neem contact op"
            text="Als marketingbureau wil je het liefst bezig zijn
                  met marketingactiviteiten die waarde creëren
                  voor jouw klanten. Wat als er een technische
                  opdracht binnenkomt die je zelf niet wil of kan
                  behandelen, maar wel full-service diensten wil aanbieden?
                  Bytecode ondersteunt marketing- en communicatiebedrijven
                  volledig of gedeeltelijk met hun technische opdrachten."
        />

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Col style={{ margin: '1em' }} offset={{ lg: 1 }} lg={7}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <h2>Waarom samenwerken?</h2>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Big>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TextAndImage
            img={require('../images/img/content/collaboration/worth.svg')}
            alt="worth"
        >
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h2>Vergroot je waarde</h2>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Big>
                    Het aanbieden van technische diensten aan je klanten
                    vergroot jouw waarde van geleverde diensten. Daarnaast kun
                    je de full-service bieden waar klanten naar verlangen.
                </Big>
            </p>
        </TextAndImage>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TextAndImage
            img={require('../images/img/content/collaboration/say.svg')}
            alt="1 contactpersoon"
            reverse
        >
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h2>Eén contactpersoon</h2>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Big>
                    Met Bytecode als partner fungeren wij als de (enige) partij
                    waar je al je vraagstukken kan neerleggen. Dit is van grote
                    waarde, omdat je deze niet volledig intern hoeft te managen.
                </Big>
            </p>
        </TextAndImage>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <TextAndImage
            img={require('../images/img/content/collaboration/code.svg')}
            alt="1 contactpersoon"
            fluid
        >
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <h2>De nieuwste technieken</h2>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Big>
                    Bij het leveren van onze diensten zorgen wij dat we ons
                    aanpassen naar de benodigde workflow, zodat wij als
                    onderdeel (of in het verlengde) van het bestaande team
                    kunnen werken. Door onze jarenlange ervaring als technisch
                    partner beheersen wij vrijwel alle veelgebruikte technieken.
                </Big>
            </p>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <SmallList>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li>Front-end: HTML, CSS, Sass, Stylus, Typescript</li>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li>
                    Backend: Typescript, Go, Elixir, Rust, Python, Java, Scala
                </li>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li>
                    PHP frameworks: WordPress, WooCommerce, Laravel en Magento 2
                </li>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li>Javascript Frameworks: NodeJS, ReactJS en Angular 2+ </li>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li>Mobiel: React Native, Expo, Ionic 2+, Flutter</li>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <li>Servers: Linux, Apache, Nginx, Caddy</li>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Is de techniek die je zoekt niet benoemd? Schroom dan niet
                    contact op te nemen, we kijken graag wat we voor je kunnen
                    betekenen.
                </p>
            </SmallList>
        </TextAndImage>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Wrapper>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Container>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Row>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <h2>Diensten</h2>
                </Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Row>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Service iconName="website" title="Websites &amp; Webshops">
                        Een website is de plek waar je laat zien wie je bent,
                        waar je mensen overtuigt en waar je klanten binnenhaalt.
                        Bytecode zal je hiertoe in staat stellen. We creëren
                        samen het beste voor jou, uiteenlopend van simplistische
                        websites tot ingewikkelde webapps.
                    </Service>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Service iconName="mobile" title="Apps &amp; Webapps">
                        Droom je van een succesvolle webshop? Bytecode weet
                        precies welke factoren hiervoor belangrijk zijn. We
                        willen je graag helpen met de techniek en de specifieke
                        marketing en SEO die bij een succesvolle webshop komen
                        kijken.
                    </Service>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Service iconName="cloud" title="Cloud &amp; hosting">
                        Tegenwoordig zijn mobiele applicaties even belangrijk
                        als websites of webapps. Wij vinden het daarom van
                        waarde dat apps net zo goed werken als websites en op
                        elk apparaat perfect aangepast zijn. We benaderen apps
                        als een zelfstandig platform en niet als een kopie van
                        de website. Bytecode ontwikkelt zowel native applicaties
                        als progressive webapps.
                    </Service>

                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Service iconName="ads" title="Support op afstand">
                        Naast &apos;full service&apos; zijn wij ook beschikbaar
                        voor de kleinere vragen of klusjes. Wanneer uw
                        werknemers een technische vraag krijgen die zij niet
                        kunnen beantwoorden, staan wij altijd klaar om op
                        afstand advies en antwoorden te verschaffen over
                        technische vraagstukken.
                    </Service>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h1>Werkwijze</h1>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Big>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <PaddedContainer>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Col lg={6}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <h2>Garanties</h2>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Checklist>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <CheckListItem>
                            Duidelijke en snelle communicatie
                        </CheckListItem>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <CheckListItem>
                            Ondersteuning bij digitale zelfontplooing
                        </CheckListItem>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <CheckListItem>
                            Kwalitatief hoogstaand en een optimaal functionerend
                            product
                        </CheckListItem>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <CheckListItem>
                            Transparantie en openheid, zonder uitzonderingen
                        </CheckListItem>
                    </Checklist>
                </Col>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Col lg={6}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <ProfilePicture
                        img={require('../images/img/content/jan-willem.jpg')}
                    />
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Quote
                        author="- Jan-Willem (The Pumphouse)"
                        url="https://pumphouse.nl"
                    >
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <strong>
                            Bytecode heeft slimme, gedreven en ook communicatief
                            sterke developers die met je meedenken en meegroeien
                            naar gezamelijke doelen
                        </strong>
                        . Diverse en gespecificeerde skills en kennis die ze
                        zowel op technisch als adviserend niveau inzetten om je
                        te helpen bij de volgende stap van je organisatie.
                    </Quote>
                </Col>
            </Row>
        </PaddedContainer>

        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ContactForm />
        </Container>
    </Layout>
);

export default Partners;
