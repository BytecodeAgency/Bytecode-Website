import styled from 'styled-components';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import ContactForm from '../components/ContactForm';
import ImageBlock from '../components/ImageBlock';
import Process from '../components/Process';

/* eslint-disable */
const pageSettings = {
    title: 'Services - Bytecode Digital Agency | Vind de weg naar digitaal succes!',
    description: 'Services, benieuwd wat Bytecode voor jou kan betekenen? Met onze expertise en maatwerk helpen we je om alles uit je digitale zelf te kunnen halen.',
    keywords: 'diensten',
};
/* eslint-enable */
/* eslint-disable max-len */

const HeaderContainer = styled.div`
    margin: 16rem 5vw 8rem;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        margin: 12rem 2vw 6rem;
    }
`;

const StyledContainer = styled(Container)`
    margin: 10% 10% 5% 10% !important;
`;

const ContentBlockWrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 5% 0% 5% 5%;
    padding: 7.5% 5%;
`;

const Icon = styled.img`
    padding: 20%;
    @media (max-width: ${theme.breakpoints[0]}px) {
        margin-top: 4rem;
        margin-bottom: -1.4rem;
        padding: 0 !important;
    }
`;

const ServiceRow = styled(Row)`
    margin-bottom: 2rem;
`;

const Service = ({ children, ...props }) => {
    const { iconName, title } = props;
    return (
        <ServiceRow>
            <Col xs={3}>
                <Icon
                    src={`/static/icons/services/${iconName}.svg`}
                    alt={iconName}
                />
            </Col>
            <Col sm={9} xs={12}>
                <TextBlock title={title} headingType="h3">
                    {children}
                </TextBlock>
            </Col>
        </ServiceRow>
    );
};

const Services = () => (
    <Layout pageSettings={pageSettings}>
        <HeaderContainer>
            <Row>
                <Col md={10}>
                    <TextBlock
                        subtitle="Services"
                        headingType="h2"
                        title="Het gaat niet om frameworks of technieken, maar om het behalen van de allerbeste resultaten voor jou. Dát is de essentie van onze diensten."
                    />
                </Col>
            </Row>
        </HeaderContainer>
        <Process />

        {/* WEB EN MOBIEL */}
        <StyledContainer>
            <Row>
                <Col lg={8} md={10}>
                    <TextBlock title="Web & mobiel" headingType="h2">
                        Natuurlijk heeft elk bedrijf een website nodig om zich
                        online te presenteren en een groot publiek te bereiken.
                        Mobiel wordt echter steeds en steeds belangrijker.
                        Daarom is het voor veel bedrijven ook essentieel om een
                        mobiele (web-)app te hebben. Bytecode zorgt ervoor dat
                        jij je op beide platforms met trots kunt presenteren en
                        dat mobiel en web naadloos op elkaar aansluiten.
                    </TextBlock>
                </Col>
            </Row>
        </StyledContainer>
        <StyledContainer>
            <Row>
                <Col lg={6} md={12}>
                    <Service iconName="website" title="Websites & Webapps">
                        Dit is de plek waar alles gebeurt. De plek waar je laat
                        zien wie je bent, waar je mensen overtuigd en waar je
                        klanten binnenhaalt. Bytecode zal je hiertoe in staat
                        stellen, door het onderste uit de kan te halen. Daarmee
                        creëren wij samen het beste voor jou, uiteenlopend van
                        simplistische websites tot ingewikkelde webapps.
                    </Service>
                </Col>
                <Col lg={6} md={12}>
                    <Service iconName="ecommerce" title="E-commerce">
                        Wil je een succesvolle webshop hebben? Dan moet je aan
                        heel veel factoren denken. Bytecode weet precies welke
                        factoren dit zijn en wil je daar graag mee helpen. Zowel
                        met de techniek als met de specifieke marketing en SEO
                        die bij een succesvolle webshop komen kijken.
                    </Service>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={12}>
                    <Service iconName="mobile" title="Mobiele applicaties">
                        Wil je een succesvolle webshop hebben? Dan moet je aan
                        heel veel factoren denken. Bytecode weet precies welke
                        factoren dit zijn en wil je daar graag mee helpen. Zowel
                        met de techniek als met de specifieke marketing en SEO
                        die bij een succesvolle webshop komen kijken.
                    </Service>
                </Col>

                <Col lg={6} md={12}>
                    <Service iconName="ui" title="UX/UI-Design">
                        Alles draait om de beleving van de bezoeker van jouw
                        platform. Deze beleving optimaliseren wij door middel
                        van hoogstaand UX/UI-design. Onze developers besteden
                        uiterst veel aandacht aan de user experience en de
                        intuïtiviteit van de website of app. Daarnaast zorgen
                        onze designers ervoor dat het ontwerp van het platform
                        in het oog springt en perfect past bij wat jij wil
                        uitstralen.
                    </Service>
                </Col>
            </Row>
        </StyledContainer>

        {/* CLOUD EN AUTOMATISERING */}
        <StyledContainer>
            <Row>
                <Col lg={8} md={10}>
                    <TextBlock title="Cloud & automatisering" headingType="h2">
                        Bedrijven zijn vaak erg veel tijd kwijt aan repetitief
                        handwerk, terwijl dit werk veel beter geautomatiseerd
                        zou kunnen worden. Bytecode zorgt ervoor dat je geen
                        tijd meer kwijt bent aan dit soort werk, zodat je je
                        kunt richten op werkzaamheden waarin jij en je bedrijf
                        veel beter zijn, zoals sales of marketing. Daarnaast
                        verkleinen wij de kans op menselijke fouten door deze
                        automatisering.
                    </TextBlock>
                </Col>
            </Row>
        </StyledContainer>
        <StyledContainer>
            <Row>
                <Col offset={{ xl: 1 }} xl={10}>
                    <Service iconName="api" title="API-ontwikkeling">
                        API-systemen zijn enorm belangrijk voor communicatie van
                        jouw platform met andere systemen. Wij zorgen er
                        bijvoorbeeld voor dat klanten door middel van API met
                        jouw website kunnen communiceren of dat betaalsystemen
                        zoals iDeal aan je platform worden gekoppeld. Daarnaast
                        beveiligen we jou API volgens de allernieuwste
                        beveiligingsstandaarden.
                    </Service>
                    <Service iconName="devops" title="Devops & cloudcomputing">
                        Met onze devops-methodiek verkleinen wij de
                        ontwikkeltijd en zorgen we voor een betere oplevering,
                        door overal in het ontwikkelingsproces automatisering
                        toe te passen. Dit zorgt er bijvoorbeeld voor dat nieuwe
                        versies van jouw website of applicatie automatisch wordt
                        uitgerold. Daarnaast bieden wij ook managed
                        infrastructuur in de cloud. Al met al zetten wij
                        kwalitatief hoge devops- en cloudsystemen op, om jou de
                        nodige hoofdpijn te besparen.
                    </Service>
                    <Service iconName="automation" title="IT-automatisering">
                        Door IT-automatisering zorgt Bytecode ervoor dat bepaald
                        services gekoppeld worden met jouw website. Een goed
                        voorbeeld daarvan is het koppelen van een
                        boekhoudservices met jouw webshop of het automatisch
                        doorsturen van orders naar PostNL. Omdat
                        IT-automatisering enorm veel functionaliteiten toevoegt
                        aan jouw service is dit een van de diensten waar wij
                        veel waarde aan hechten.
                    </Service>
                </Col>
            </Row>
        </StyledContainer>

        <ImageBlock src="/static/img/content/group-full.jpg" alt="groep" />

        {/* BRANDING EN DESIGN */}
        <StyledContainer>
            <Row>
                <Col lg={8} md={10}>
                    <TextBlock title="Branding & Design" headingType="h2">
                        Om te kunnen slagen, zal je bedrijf een duidelijke en
                        herkenbare identiteit moeten hebben. Hierdoor wordt het
                        een echt merk, en zal je makkelijker aan bezoekers
                        komen. Een andere manier om voor meer bezoekers te
                        zorgen, is door digital advertising en
                        zoekoptimalisatie. Wij hebben designers en marketeers in
                        huis die ervoor zorgen dat jouw bedrijf nog
                        aantrekkelijker wordt door middel van branding & design.
                    </TextBlock>
                </Col>
            </Row>
            <Row>
                <Col xl={6} md={12}>
                    <Service
                        iconName="design"
                        title="Graphic design & branding"
                    >
                        Het opbouwen van een herkenbaar merk is cruciaal.
                        Hierdoor weten consumenten wie jij bent, wat je doel is,
                        wie je doelgroep is en waarin jij je onderscheidt. Samen
                        doen wij onderzoek naar wat jouw bedrijf en doelgroep
                        definieert en zorgen we ervoor dat deze identiteit
                        terugkomt op je social media, je websites en mobiele
                        apps, maar ook in verpakkingen, visitekaartjes, of wat
                        dan ook. Je kunt het zo gek niet bedenken; Bytecode zal
                        ervoor zorgen dat alles uit de kast wordt getrokken om
                        van jouw bedrijf een goed merk te maken.
                    </Service>
                </Col>
                <Col xl={6} md={12}>
                    <Service iconName="advertise" title="Digital advertising">
                        Tegenwoordig kan je als bedrijf niet achterblijven op
                        het gebied van digital advertising. Bij elke klant doen
                        we daarom onderzoek naar de meest efficiënte manier om
                        te adverteren op internet. Dit kan via Google AdWords
                        zijn, maar ook via bijvoorbeeld Instagram of Facebook,
                        zolang het jou maar zo veel mogelijk bezoekers en
                        conversie oplevert.
                    </Service>
                </Col>
                <Col xl={6} md={12}>
                    <Service iconName="seo" title="Zoekoptimalisatie">
                        Om veel bezoekers te genereren, zul je goed vindbaar
                        moeten zijn in zoekmachines. Wij zijn gespecialiseerd in
                        zoekmachine optimalisatie (SEO). In de loop van de tijd
                        zijn er enorm veel technieken en trucjes ontstaan die de
                        SEO kunnen verbeteren. Bytecode past al deze technieken
                        toe op jouw website, webapp of platform, zodat deze veel
                        hogere bezoekersaantallen zal krijgen.
                    </Service>
                </Col>
            </Row>
        </StyledContainer>

        <ContentBlockWrapper>
            <TextBlock
                subtitle="We staan voor je klaar"
                headingType="h2"
                title="Stuur ons een berichtje"
            />
            <ContactForm />
        </ContentBlockWrapper>
    </Layout>
);

export default Services;
