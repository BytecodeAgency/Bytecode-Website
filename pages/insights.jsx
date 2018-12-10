/* eslint-disable max-len, object-curly-newline, camelcase */

import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import Author from '../components/Author';
import ContactForm from '../components/ContactForm';

/* eslint-disable */
const pageSettings = {
    title: 'Bytecode Insights - Bytecode Digital Agency B.V.',
    description: 'Bytecode insights, vergroot je kennis en leer meer over hoe je digitale assets kan inzetten voor jouw business! Samen halen we alles uit jouw digitale zelf!',
    keywords: 'bytecode insights',
};
/* eslint-enable */
/* eslint-disable max-len, object-curly-newline, camelcase */

const Posts = styled.section`
    margin: 12rem 0 6rem;
`;

const BlogThumbnailContentWrapper = styled.a`
    cursor: pointer;
    text-decoration: none;
    padding: 2rem;
    margin: 1rem;
`;

const BlogThumbnailImage = styled.div`
    background-image: url(${props => props.url});
    width: 100%;
    height: 18rem;
    background-size: cover;
    background-position: center center;
    margin: 0 0 1.6rem;
    @media screen and (max-width: ${theme.breakpoints[1]}) {
        height: 12rem;
    }
`;

const AuthorContainer = styled.div`
    margin: 2rem 0;
`;

const content = {
    id: 1,
    title:
        'Wil je een website laten maken? Tips en tricks bij het kiezen van een webdeveloper!',
    subtitle: '',
    slug: 'website-laten-maken',
    posted_on: '10 december 2018',
    article_image_url: 'https://cataas.com/cat',
    summary:
        'Je wilt een website laten maken en bent op zoek naar de juiste webdeveloper. Wat is nou echt waardevol voor jouw website? Lees het hier!',
    author_name: 'Nick Broekarts',
    author_role: 'Online Marketeer',
    author_image_url: 'https://cataas.com/cat?width=400?height=400',
    catergory_name: 'Websites',
    category_slug: 'websites',
    reading_time: 8,
    html_content: `
        <p>In de loop van de jaren zijn er een aantal marktontwikkelingen geweest die voortvloeien vanuit de opkomst van digitalisering. Tegenwoordig kan eigenlijk alles digitaal geregeld worden, denk maar aan: kleding, bankzaken, vakanties, voedsel, alhoewel fysieke supermarkten nog steeds erg geliefd zijn. Daarnaast zijn er veel fysieke winkels verdwenen en kwamen daar online winkels voor in de plaats. Dit blijkt ook uit de cijfers van 2017: volgens het AD waren er in 2017 32.000 webwinkels en zijn het er anno 2018 ongeveer 40.000. <a href="https://www.ad.nl/economie/aantal-webshops-in-nederland-in-tien-jaar-tijd-verzesvoudigd~a755cbb5/" rel="nofollow">bron</a></p>
        <p>(image1)</p>
        <p>Misschien wil je zelf ook een website laten maken en ben je op zoek naar de juiste partij, maar weet je niet waar precies op te letten. Daarom willen we met dit artikel jou helpen om de volgende stap te nemen in je digitale loopbaan. In dit artikel bespreken we wat voor soorten websites er zijn en voor welke doeleinden, wat het verschil is tussen alle internetbureaus die met jouw ideeën aan de slag willen, wat de belangrijkste prijs-kwaliteitsoverwegingen zijn en tot slot de kwaliteitseisen en conclusie.</p>
        <h2>Wat voor soort websites zijn er en wat wil ik?</h2>
        <p>In het algemeen vallen alle websites onder een van de volgende modellen:</p>
        <ul>
        <li>
        <strong>Model 1: de verkoop site</strong>. Deze is zojuist al benoemd en heet ook wel de webshop. Het doel van deze website is om zoveel mogelijk producten of diensten te verkopen. Voor een goede webshop is een optimale customer journey uitermate belangrijk: de klant moet zo geleid worden langs jouw webpagina’s dat het overzichtelijk en duidelijk is wat er te koop is én voor welke prijs. Denk hierbij aan bol.com of zalando.nl. Deze websites hebben heel duidelijk een structuur uiteengezet zodat de klant makkelijk het gewenste product vindt en kan bestellen. Deze categorie van website laten maken is eigenlijk de meest voorkomende opdracht bij webdevelopers.</li>
        <li>
        <strong>Model 2: lead generation site</strong>. Het belangrijkste doel van dit type website is het binnenhalen van opdrachten. Deze websites bieden vaak de mogelijkheid om formulieren in te vullen, zodat bezoekers een offerte kunnen aanvragen. Veel websites zijn voor een deel informatief en voor een deel lead generation ingericht.</li>
        <li>
        <strong>Model 3: branding site</strong>. Een website hoeft niet per se bedoeld te zijn om direct te verkopen aan potentiele leads. Een leuk voorbeeld is de website van Coca-Cola. Coca-Cola heeft veel domeinen maar ga je naar <a href="https://www.cocacolanederland.nl" rel="nofollow">cocacolanederland.nl</a> dan zie je meteen dat dit geen webshop is. Dit soort websites zijn puur bedoeld om de branding van een product te versterken. Op deze website kun je bijvoorbeeld de pagina’s "duurzaamheid, gezondheid, pers en nieuws" bewonderen. Hiermee kan Coca-Cola een goede naamsbekendheid bewerkstelligen om zo de fysieke verkoop (supermarkten, horeca etc.) te stimuleren.</li>
        <li>
        <strong>Model 4: publicatie site.</strong> Een publicatie site heeft een verdienmodel dat volledig gebaseerd is op het realiseren van abonnementen of het verkrijgen van sponsorgeld door middel van advertenties. Hierbij valt te denken aan websites zoals <a href="www.metronieuws.nl">metronieuws.nl</a> of <a href="https://fd.nl" rel="nofollow">fd.nl</a>. Vooral nieuwsites vallen hieronder, door hun leden vragen ze vaak een maandelijks bedrag voor het lezen van hun artikelen en/of ze krijgen advertentie-inkomsten doordat al die websitebezoekers de "draaiende" advertenties te zien krijgen.</li>
        <li>
        <strong>Model 5: informatie en dienstverlening site</strong>. Het doel van deze websites is het verstrekken van informatie, het geven van klantenservice of andere digitale diensten. Platforms zijn vaak zo opgericht zodat bezoekers informatie kunnen krijgen over een bepaald onderwerp, maar de websites van de brandweer en politie zijn juist erop gericht zodat er actie ondernomen kan worden. <a href="http://windkracht62.nl/vijf-verschillende-soorten-sites/" rel="nofollow">bron</a>
        </li>
        </ul>
        <p>Er zijn dus een aantal modellen en opties en voor ieder model zijn weer andere zaken belangrijk. Waarschijnlijk kun je aan de hand van deze samenvatting makkelijk bepalen wat jouw doel is en wat voor soort website je nodig hebt. Vele internetbureaus staan te popelen om voor jou een website te maken. Daarom is het belangrijk te begrijpen wat de prijs-kwaliteitverhoudingen zijn.</p>
        <h2>Waarom wil je maatwerk</h2>
        <p>Veel internetbureaus spelen in op de ondernemers met een klein(er) budget. Om daarop in te spelen adverteren ze met slogans zoals: "complete website voor 549 euro!", of "website laten maken voor 600 euro." Daarnaast beloven ze snelle levertijden, zodat je snel met je investering aan de slag kan.</p>
        <p>Je kan een website laten maken door een bureau's die zulke websites als eindproduct leveren, maar het probleem met dit soort websites is dat het vaak gestandaardiseerde WordPress thema’s zijn. Waarom wil je geen gestandariseerde website laten maken door een webdeveloper?</p>
        <p>Je moet je voorstellen dat jouw onderneming/product waarschijnlijk niet het wiel heeft uitgevonden en daarom moet concurreren met honderden vergelijkbare webshops/sites. De kans is daardoor aanzienlijk kleiner dat toekomstige leads een aankoop doen of actie uitvoeren op jouw website. Wil je dus een website laten maken door een bureau of webdevloper, is het gewenst dat deze website eruit springt en optimaal presteert. Als je de ambitie hebt voor een website die opvalt en daadwerkelijk waarde toevoegt aan je bedrijf, moet de website:</p>
        <ul>
        <li>
        <strong>Maatwerk zijn</strong>, waardoor een website echt aansluit op 1 van de 5 modellen en de bijbehorende inrichting.</li>
        <li>
        <strong>Uniek zijn</strong>, geen gestandaardiseerde thema’s maar een website die volledig ontworpen is om jouw doelgroep te dienen.</li>
        <li>
        <strong>Conversie geoptimaliseerd</strong> ingericht zijn</li>
        <li>
        <strong>Zoek-geoptimaliseerd zijn</strong>, je wilt immers dat jouw website ook gevonden wordt!</li>
        <li>Volgens het gewenste model zodanig ingericht zijn dat er sprake is van een <strong>optimale customer journey</strong>.</li>
        <li>
        <strong>Sustainable zijn</strong>, een website moet de basis zijn van waaruit voortgebouwd wordt.</li>
        </ul>
        <h2>Kwaliteitseisen</h2>
        <p>Jouw toekomstige website moet niet alleen een investering zijn die op korte termijn rendeert. Een goede technische website is zo ontwikkeld dat deze aan jouw persoonlijke eisen voldoet zodat jouw klanten ook optimaal bediend kunnen worden. Ook in dit geval is <strong>goedkoop duurkoop</strong>. Op die manier wordt er een website door middel van maatwerk gerealiseerd zodat het een basis is voor toekomstige features en dus "future proof" is. Daarmee is jouw digitale succes verzekerd.</p>
        <p>Waaraan herken je een goed internetbureau? Een internetbureau dat kwaliteit levert zal de volgende stappen met een klant doorlopen:</p>
        <ol>
        <li>Analyseren: voordat ze ontwikkelen maken ze een gedetailleerde analyse. Hiermee kunnen ze een goed beeld creëren van de huidige en gewenste situatie. Dit doen we door een goed marktonderzoek te doen zodat we kunnen achterhalen wat echt bij jouw doelgroep aansluit. Belangrijk hierbij is het type doel van de website. Denk hierbij aan de vijf verschillende modellen websites. Daardoor kunnen ze een product leveren dat precies aan je wensen voldoet.</li>
        <li>Strategie: vervolgens maken ze een duidelijke strategie waarin staat hoe ze alle punten gaan oppakken en verwerken in jouw website. Hierbij wegen ze alle opties af om een zo goed mogelijk resultaat te realiseren.</li>
        <li>Realiseren: pas na dat alles geanalyseerd en gepland is gaat het bedrijf aan de slag met het de uitvoer van jouw website. Na het realiseren ben je nog niet klaar, want een bedrijf dat wil inspelen op veranderingen die zich voordoen in de markt zal ook moeten blijven veranderen!</li>
        </ol>
        <h2>Conclusie</h2>
        <p>Weet voor jezelf wat voor soort website je nodig hebt en wat de doelen zijn die je met je website wilt behalen. Ga voor jezelf te raden wat je budget is en wat je uit je investering wilt halen. Als je echt kwaliteit wilt en dat je investering loont, adviseren wij om een webbouwer te kiezen die aandacht en tijd in je website steekt, zodat je een goed fundament hebt voor je business van waaruit je je bedrijf verder op kan bouwen!</p>`,
};

const BlogThumbnail = props => {
    const {
        title,
        slug,
        posted_on,
        article_image_url,
        author_name,
        author_role,
        author_image_url,
        category_name,
        reading_time,
    } = props;
    return (
        <Col xl={3} lg={4}>
            <Link href={`insights/${slug}`}>
                <BlogThumbnailContentWrapper>
                    <BlogThumbnailImage url={article_image_url} />
                    <TextBlock
                        title={title}
                        subtitle={category_name}
                        headingType="h4"
                    />
                    <AuthorContainer>
                        <Author
                            name={author_name}
                            title={author_role}
                            img={author_image_url}
                        />
                    </AuthorContainer>
                    <p>
                        {reading_time} min read <br /> {posted_on}
                    </p>
                </BlogThumbnailContentWrapper>
            </Link>
        </Col>
    );
};

const BlogSingle = () => (
    <Layout pageSettings={pageSettings}>
        <Posts>
            <Container>
                <Row>
                    <BlogThumbnail
                        title={content.title}
                        slug={content.slug}
                        posted_on={content.posted_on}
                        article_image_url={content.article_image_url}
                        author_name={content.author_name}
                        author_role={content.author_role}
                        author_image_url={content.author_image_url}
                        category_name={content.category_name}
                        reading_time={content.reading_time}
                    />
                </Row>
            </Container>
        </Posts>
        <Container>
            <Row>
                <Col md={5}>
                    <TextBlock
                        headingType="h2"
                        title="Door de jongens van Bytecode. Met liefde gemaakt."
                        // href="//bytecode.nl"
                        // button="Lees meer over ons"
                    >
                        Deze Insights zijn van het team van Bytecode. Een klein
                        maar fijne web agency in Rotterdam. In ons werken houden
                        wij, net als in deze artikelen, bezig hoe je het web het
                        effectiefst kan gebruiken. Heb je nog vragen over een
                        artikel of wil je zelf een web applictie gaan bouwen?
                        Neem eens contact met ons op. Misschien kunnen we zelfs
                        samenwerken.
                    </TextBlock>
                </Col>
                <Col offset={{ md: 1 }} md={6}>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default BlogSingle;
