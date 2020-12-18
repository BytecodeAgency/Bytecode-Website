import React from 'react';
import styled from 'styled-components';
import Layout from '../../layouts/MainLayout';
import { Container, Row as RowBase } from '../../lib/Grid';

const pageSettings = {
    title: 'Cookie Policy',
    description: `Dit is het cookiebeleid van Bytecode Digital Agency B.V.
        (hierna te noemen Bytecode), wij ons ...`,
    keywords: 'cookies',
};

const Row = styled(RowBase)`
    h1 {
        margin-top: 6rem;
        margin-bottom: 2rem;
    }
    p {
        margin-top: 2rem;
        margin-bottom: 6rem;
    }
`;

const CookiePolicy: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <Container>
            <Row>
                <h1>Cookiebeleid</h1>
                <p>
                    Dit is het cookiebeleid van Bytecode Digital Agency B.V.
                    (hierna te noemen &#34;
                    <b>Bytecode</b>
                    &#34;, &#34;wij&#34;, &#34;ons&#34; of &#34;onze&#34;), een
                    onderneming met adres Verlengde Spiegelmakerstraat 13,
                    Delfgauw. Bytecode is ingeschreven bij de Kamer van
                    Koophandel onder nummer 71497560. Dit cookiebeleid legt uit
                    hoe wij cookies gebruiken en hoe wij uw gegevens delen en
                    beschermen in relatie tot onze website bytecode.nl (de &#34;
                    <b>Website</b>
                    &#34;). Het plaatsen van cookies en het verwerken van
                    persoonsgegevens gebeurt op een wijze die in overeenstemming
                    is met de Algemene Verordening Gegevensbescherming,
                    inclusief uitvoeringswet van deze verordening, of de
                    voorafgaande wetgeving van de Wet Bescherming
                    Persoonsgegevens (de &#34;
                    <b>AVG</b>
                    &#34;), de telecommunicatiewet en alle overige
                    privacywetgeving zoals die op dit moment geldt.
                </p>
            </Row>

            <Row>
                <h2>Wat zijn cookies?</h2>
                <p>
                    Cookies zijn eenvoudige tekstbestanden die op uw computer,
                    tablet of telefoon worden opgeslagen, wanneer u onze Website
                    bezoekt. Cookies kunnen uw computer, tablet of telefoon niet
                    beschadigen. De opgeslagen informatie kan bij een volgend
                    bezoek weer naar onze servers teruggestuurd worden. De
                    cookies zijn voor ons noodzakelijk om u een prettige
                    ervaring op de Website te kunnen geven.
                </p>
            </Row>

            <Row>
                <h2>Functionele cookies</h2>
                <p>
                    Functionele cookies zijn cookies die noodzakelijk zijn om
                    onze Website goed te laten werken. Zonder deze cookies kan
                    onze Website niet goed functioneren. U kunt deze cookies dan
                    ook niet uitzetten. Er bestaat een onderscheid tussen
                    permanente functionele cookies en sessie cookies. De sessie
                    cookies worden direct na uw bezoek van onze site verwijderd.
                    De permanente cookies worden bewaard om te zorgen dat u niet
                    telkens opnieuw dezelfde actie hoeft uit te voeren. Een
                    voorbeeld hiervan zijn aankopen die in een winkelwagen van
                    een webshop voor u bewaard worden. Wij delen de gegevens die
                    wij inwinnen via deze cookies dan ook niet met derden.
                </p>
            </Row>

            <Row>
                <h2>Analytische cookies</h2>
                <p>
                    Analytische cookies zijn cookies die ervoor zorgen dat de
                    site goed kan functioneren. Door analytische cookies weten
                    wij bijvoorbeeld waar op onze site naar wordt gezocht, hoe
                    lang het duurt voordat pagina’s geladen zijn en waarop onze
                    bezoekers vaak klikken. Sommige analytische cookies mogen
                    worden geplaatst zonder uw toestemming. Andere analytische
                    cookies worden alleen met uw toestemming geplaatst. Wij
                    streven ernaar om altijd toestemming aan u te vragen bij het
                    gebruik van cookies.
                    <br /> <br />
                    <b>Google Analytics</b>: Voor onze analytische diensten
                    maken we gebruik van Google Analytics. Wij gebruiken deze
                    dienst om bij te houden en rapportages te ontvangen over hoe
                    bezoekers de Website gebruiken. Google Analytics plaatst een
                    permanent cookie om uw webbrowser te identificeren. Hierdoor
                    worden uw gegevens gedeeld met Google. Wij delen alleen
                    gegevens met Google die wij op basis van de AVG met Google
                    mogen delen. Wij gebruiken deze informatie met informatie
                    van andere Gebruikers. Hierdoor is het voor ons niet
                    mogelijk om u als individu te kunnen identificeren. Wij
                    hebben Google geen toestemming gegeven om uw gegevens te
                    delen met derden. U kunt volledig voorkomen dat Google
                    Analytics u herkent door de cookies uit te schakelen in uw
                    browser. Google kan wel verplicht worden de gegevens aan
                    derden te verschaffen indien Google daartoe wettelijk
                    verplicht wordt. De informatie die Google verzamelt, wordt
                    zo veel mogelijk geanonimiseerd. Uw IP-adres wordt
                    nadrukkelijk niet meegegeven. De informatie wordt door
                    Google opgeslagen op servers in de Verenigde Staten. Google
                    houdt zich aan de Privacy Shield principles en is
                    aangesloten bij het Privacy Shield-programma van het
                    Amerikaanse Ministerie van Handel. Dit betekent dat er
                    sprake is van een passend beschermingsniveau voor de
                    verwerking van eventuele persoonsgegevens.
                    <br /> <br />
                    Naast Google Analytics maken wij op de Website gebruik van
                    de volgende analytische cookies: Hotjar.
                </p>
            </Row>

            <Row>
                <h2>Sociale media cookies</h2>
                <p>
                    Op deze pagina zijn buttons van sociale netwerken als
                    Facebook en Twitter opgenomen. Deze buttons werken door
                    stukjes code die van deze netwerken zelf afkomstig zijn.
                    Door middel van deze code worden cookies op de Website
                    geplaatst. Wij hebben daar geen invloed op. Leest u de
                    privacyverklaring van het respectievelijke sociale
                    mediabedrijf (die regelmatig gewijzigd kan worden) om te
                    lezen wat zij met uw (persoons)gegevens doen die zij via
                    deze cookies verwerken. De informatie die ze verzamelen
                    wordt zo veel mogelijk geanonimiseerd. Bedrijven als
                    LinkedIn, Twitter, Facebook en Google + houden zich aan de
                    Privacy Shield principes en zijn aangesloten bij het Privacy
                    Shield-programma van het Amerikaanse Ministerie van Handel.
                    Dit houdt in dat er sprake is van een passend
                    beschermingsniveau voor de verwerking van eventuele
                    persoonsgegevens zoals bedoeld in de AVG.
                </p>
            </Row>

            <Row>
                <h2>
                    Recht op inzage, correcties, recht op bezwaar en recht op
                    dataportabiliteit
                </h2>
                <p>
                    Wij bieden u graag de mogelijkheid om zo veel mogelijk
                    controle over uw persoonsgegevens te houden. Wanneer u
                    inzage wil in uw persoonsgegevens, als u uw gegevens wil
                    wijzigingen of verwijderen of als u uw persoonsgegevens
                    geheel of gedeeltelijk wil laten overdragen aan u of aan een
                    derde, dan kunt u contact opnemen met Bytecode door een
                    e-mail te sturen naar&nbsp;
                    <a href="mailto:support@bytecode.nl">support@bytecode.nl</a>
                    &nbsp;of een brief te sturen aan:
                    <br />
                    <br />
                    Bytecode Digital Agency B.V. <br />
                    tav. Administatie <br />
                    Verlengde Spiegelmakerstraat 13 <br />
                    2645KW Delfgauw, Nederland
                </p>
            </Row>

            <Row>
                <h2>Onvoorziene cookies</h2>
                <p>
                    Wij proberen een zo goed mogelijk overzicht te houden van de
                    cookies op onze Website en proberen het plaatsen van cookies
                    door derden altijd zo veel mogelijk te vermijden. Het kan
                    echter wel voorkomen dat derden cookies op onze website
                    plaatsen. Dit gebeurt voornamelijk via embedded elementen,
                    zoals een Youtube-video. In dat geval vindt u de cookies
                    niet terug in dit overzicht. Komt u op onze Website een
                    cookie tegen die niet in dit overzicht staat? Dan kunt u
                    contact opnemen met ons door een mail te sturen naar&nbsp;
                    <a href="mailto:support@bytecode.nl">support@bytecode.nl</a>
                    .
                </p>
            </Row>

            <Row>
                <h2>Hoe wordt de verzamelde informatie beveiligd?</h2>
                <p>
                    De beveiliging van uw gegevens is cruciaal voor ons. Daarom
                    hebben we de nodige technische en organisatorische
                    maatregelen genomen om uw gegevens te beveiligen tegen
                    verlies of tegen enige vorm van onrechtmatige verwerking.
                    Echter, Bytecode kan helaas niet verzekeren dat de
                    informatie op de Website niet wordt geopend, onthuld,
                    veranderd of vernietigd. U draagt de verantwoordelijkheid
                    voor het handhaven van uw unieke wachtwoord en
                    account-informatie en voor het beheren van de e-mails tussen
                    u en Bytecode.
                </p>
            </Row>

            <Row>
                <h2>Zeggenschapswijziging</h2>
                <p>
                    Wanneer Bytecode, of een deel daarvan, wordt verkocht of
                    overgedragen (bijvoorbeeld als gevolg van een fusie,
                    overname, faillissement, ontbinding of liquidatie), dan
                    kunnen gegevens die via onze Website zijn verzameld onder de
                    verkochte of overgedragen zaken vallen. De koper of
                    verkrijger zal de afspraken die in dit Cookiebeleid staan
                    vanzelfsprekend moeten opvolgen.
                </p>
            </Row>

            <Row>
                <h2>Zeggenschapswijziging</h2>
                <p>
                    Het kan voorkomen dat wij dit Cookiebeleid in de loop van de
                    tijd zullen aanpassen of updaten. Daarom adviseren we u om
                    dit Cookiebeleid regelmatig te raadplegen. Aanpassingen van
                    dit Cookiebeleid treden in werking op het moment dat ze zijn
                    gepubliceerd op deze pagina.
                </p>
            </Row>

            <Row>
                <h2>Contact</h2>
                <p>
                    Mocht u vragen hebben over dit Cookiebeleid, dan
                    beantwoorden we deze graag. U kunt contact met ons opnemen
                    door een e-mail te sturen naar&nbsp;
                    <a href="mailto:support@bytecode.nl">support@bytecode.nl</a>
                    .
                </p>
            </Row>
        </Container>
    </Layout>
);

export default CookiePolicy;
