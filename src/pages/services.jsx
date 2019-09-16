import React from 'react';
import Layout from '../layouts/MainLayout';
import TextBlock from '../containers/TextBlock/TextBlock';
import { Container, Row, Col } from '../lib/Grid';
import ContactForm from '../containers/ContactForm/ContactForm';
import ImageBlock from '../components/ImageBlock';
import Process from '../containers/Process/Process';
import ContentPageHeader from '../containers/ContentPageHeader/ContentPageHeader';
import Wrapper from '../components/Wrapper';
import Service from '../containers/Service/Service';

const pageSettings = {
    title: 'Services - Bytecode Digital Agency B.V.',
    description: `Services, benieuwd wat Bytecode voor jou kan betekenen?
    Met onze expertise en maatwerk helpen we je om alles uit je digitale
    zelf te kunnen halen.`,
    keywords: 'diensten',
};

const Services = () => (
    <Layout pageSettings={pageSettings}>
        <ContentPageHeader
            img={require('../images/img/header/postit-shadow.jpg')}
            subtitle="Services"
            title="Wij doen alles om het beste digitale resultaat te behalen."
            text="Onze diensten zorgen voor de beste digitale resultaten
            voor jouw bedrijf."
            bgSize="cover"
        />
        <Process />

        {/* WEB EN MOBIEL */}
        <Wrapper>
            <Container>
                <Row>
                    <Col lg={8}>
                        <TextBlock title="Web & mobiel" headingType="h2">
                            Natuurlijk heeft elk bedrijf een website nodig om
                            zich online te presenteren en een groot publiek te
                            bereiken. Mobiel wordt echter steeds belangrijker.
                            Daarom is het voor veel bedrijven ook essentieel om
                            een mobiele (web-)app te hebben. Bytecode zorgt
                            ervoor dat jij je op beide platforms met trots kunt
                            presenteren en dat mobiel en web naadloos op elkaar
                            aansluiten.
                        </TextBlock>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Service iconName="website" title="Websites & Webapps">
                            Dit is de plek waar alles gebeurt. De plek waar je
                            laat zien wie je bent, waar je mensen overtuigt en
                            binnenhaalt. Bytecode zal je hiertoe in staat
                            stellen, door het onderste uit de kan te halen.
                            Daarmee creëren wij samen het beste voor jou,
                            uiteenlopend van simplistische websites tot
                            ingewikkelde webapps.
                        </Service>
                        <Service iconName="ecommerce" title="E-commerce">
                            Wil je een succesvolle webshop hebben? Dan moet je
                            aan heel veel factoren denken. Bytecode weet precies
                            welke factoren dit zijn en wil je daar graag mee
                            helpen. Zowel met de techniek als met de specifieke
                            marketing en SEO die bij een succesvolle webshop
                            komen kijken.
                        </Service>
                        <Service iconName="mobile" title="Mobiele applicaties">
                            Tegenwoordig zijn mobiele applicaties minstens zo
                            belangrijk als websites of webapps. Wij vinden het
                            daarom belangrijk dat apps net zo goed werken als
                            websites en op elk apparaat perfect aangepast zijn.
                            Daarbij benaderen wij apps als een zelfstandig
                            platform en niet als een kopie van de website.
                            Bytecode ontwikkelt zowel native applicaties als
                            progressive webapps.
                        </Service>
                        <Service iconName="ui" title="UX/UI-Design">
                            Alles draait om de beleving van de bezoeker van jouw
                            platform. Deze beleving optimaliseren wij door
                            middel van hoogstaand UX/UI-design. Onze developers
                            besteden uiterst veel aandacht aan de user
                            experience en de intuïtiviteit van de website of
                            app. Daarnaast zorgen onze designers ervoor dat het
                            ontwerp van het platform in het oog springt en
                            perfect past bij wat jij wil uitstralen.
                        </Service>
                    </Col>
                </Row>
            </Container>
        </Wrapper>
        <ImageBlock
            src={require('../images/img/content/code-arch.jpg')}
            alt="maatwerk development"
        />

        {/* CLOUD EN AUTOMATISERING */}
        <Container>
            <TextBlock title="Cloud & automatisering" headingType="h2">
                Bedrijven zijn vaak erg veel tijd kwijt aan repetitief handwerk,
                terwijl dit werk veel beter geautomatiseerd zou kunnen worden.
                Bytecode zorgt ervoor dat je geen tijd meer kwijt bent aan dit
                soort werk, zodat je je kunt richten op werkzaamheden waarin jij
                en je bedrijf veel beter zijn, zoals sales of marketing.
                Daarnaast verkleinen wij de kans op menselijke fouten door deze
                automatisering.
            </TextBlock>
        </Container>
        <Container>
            <Row>
                <Col>
                    <Service fullWidth iconName="api" title="API-ontwikkeling">
                        API-systemen zijn enorm belangrijk voor communicatie van
                        jouw platform met andere systemen. Wij zorgen er
                        bijvoorbeeld voor dat klanten door middel van API met
                        jouw website kunnen communiceren of dat betaalsystemen
                        zoals iDeal aan je platform worden gekoppeld. Daarnaast
                        beveiligen we jouw API volgens de allernieuwste
                        beveiligingsstandaarden.
                    </Service>
                    <Service
                        fullWidth
                        iconName="devops"
                        title="Devops & cloudcomputing"
                    >
                        Met onze devops-methodiek verkleinen wij de
                        ontwikkeltijd en zorgen we voor een betere oplevering,
                        door overal in het ontwikkelingsproces automatisering
                        toe te passen. Dit zorgt er bijvoorbeeld voor dat nieuwe
                        versies van jouw website of applicatie automatisch
                        worden uitgerold. Daarnaast bieden wij ook managed
                        infrastructuur in de cloud. Al met al zetten wij
                        kwalitatief hoge devops- en cloudsystemen op, om jou de
                        nodige hoofdpijn te besparen.
                    </Service>
                    <Service
                        fullWidth
                        iconName="automation"
                        title="IT-automatisering"
                    >
                        Door IT-automatisering zorgt Bytecode ervoor dat
                        bepaalde services gekoppeld worden met jouw website. Een
                        goed voorbeeld daarvan is het koppelen van een
                        boekhoudservice met jouw webshop of het automatisch
                        doorsturen van orders naar PostNL. Omdat
                        IT-automatisering enorm veel functionaliteiten toevoegt
                        aan jouw service is dit een van de diensten waar wij
                        veel waarde aan hechten.
                    </Service>
                </Col>
                <Col md={5}>
                    <ImageBlock
                        src={require('../images/img/content/tekentablet.jpg')}
                        alt="tekentablet voor designwerk"
                    />
                </Col>
            </Row>
        </Container>

        {/* BRANDING EN DESIGN */}
        <Container>
            <Row>
                <Col>
                    <TextBlock title="Branding & Design" headingType="h2">
                        Om te kunnen slagen, zal je bedrijf een duidelijke en
                        herkenbare identiteit moeten hebben. Hierdoor wordt het
                        een echt merk en zal je makkelijker aan bezoekers komen.
                        Een andere manier om voor meer bezoekers te zorgen, is
                        door digital advertising en zoekoptimalisatie. Wij
                        hebben designers en marketeers in huis die ervoor zorgen
                        dat jouw bedrijf nog aantrekkelijker wordt door middel
                        van branding & design.
                    </TextBlock>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col>
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
                        apps, maar ook in verpakkingen, visitekaartjes et
                        cetera. Je kunt het zo gek niet bedenken; Bytecode zal
                        ervoor zorgen dat alles uit de kast wordt getrokken om
                        van jouw bedrijf een goed merk te maken.
                    </Service>
                    <Service iconName="ads" title="Digital advertising">
                        Tegenwoordig kan je als bedrijf niet achterblijven op
                        het gebied van digital advertising. Bij elke klant doen
                        we daarom onderzoek naar de meest efficiënte manier om
                        te adverteren op internet. Dit kan via Google AdWords
                        zijn, maar ook via bijvoorbeeld Instagram of Facebook,
                        zolang het jou maar zo veel mogelijk bezoekers en
                        conversie oplevert.
                    </Service>
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
        </Container>

        <Container>
            <ContactForm />
        </Container>
    </Layout>
);

export default Services;
