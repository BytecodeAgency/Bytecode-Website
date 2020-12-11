import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../layouts/MainLayout' was resolved to ... Remove this comment to see the full error message
import Layout from '../../layouts/MainLayout';
import { Container, Row as RowBase } from '../../lib/Grid';

const pageSettings = {
    title: 'Privacy Policy',
    description: `Dit is het privacybeleid van Bytecode Digital Agency B.V.
        (hierna te noemen Bytecode), wij ons ...`,
    keywords: 'privacy',
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
    ol {
        list-style-type: lower-latin;
        padding: 0.8rem 0 0.8rem 3rem;
        li {
            padding-left: 0.4rem;
            display: list-item;
        }
    }
`;

const PrivacyPolicy = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h1>Privacybeleid</h1>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Dit is het privacybeleid van Bytecode Digital Agency B.V.
                    (hierna te noemen &#34;
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <b>Bytecode</b>
                    &#34;, &#34;wij,&#34; &#34;ons&#34; of &#34;onze&#34;), een
                    onderneming met adres Verlengde Spiegelmakerstraat 13,
                    Delfgauw. Bytecode is ingeschreven bij de Kamer van
                    Koophandel onder nummer 71497560. Deze Privacy Policy legt
                    uit hoe wij gegevens verzamelen, gebruiken, delen en
                    beschermen in relatie tot onze website bytecode.nl (de &#34;
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <b>Website</b>
                    &#34;). Wij verzamelen deze gegevens wanneer u onze Website
                    bezoekt met uw computer, tablet of mobiele telefoon (&#34;
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <b>Computer</b>
                    &#34;). Wij verwerken persoonsgegevens op een manier die in
                    overeenstemming is met de Algemene Verordening
                    Gegevensbescherming (de &#34;
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <b>AVG</b>
                    &#34;), de op de AVG gebaseerde uitvoeringswetgeving en de
                    andere op dit moment geldende privacywetgeving. Door het
                    gebruiken van onze Website, begrijpt u en gaat u akkoord met
                    het verzamelen en gebruiken van informatie in
                    overeenstemming met dit privacybeleid. Onze Privacy Policy
                    is van toepassing op alle bezoekers, gebruikers en alle
                    anderen die de toegang hebben tot de Website (&#34;
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <b>Gebruikers</b>
                    &#34;).
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Wat voor gegevens verzamelen wij?</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Wij verzamelen de volgende gegevens die u ons verstrekt:
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <ol type="a">
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <li>E-mailadres</li>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <li>Naam</li>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <li>Telefoonnummer</li>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <li>Bedrijfsnaam en -gegevens</li>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <li>
                            Communicatie tussen Bytecode en u (wij mogen u
                            dienst-gerelateerde e-mails sturen)
                        </li>
                    </ol>
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Log file informatie</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Wij verzamelen alleen informatie die uw browser stuurt als u
                    onze Website bezoekt, wanneer dit echt noodzakelijk is voor
                    het goed functioneren van de Website. Onder het goed
                    functioneren van de Website verstaan wij met name het
                    beschermen van de Website tegen handelingen die de
                    veiligheid van de Website en van uw Computer in gevaar
                    kunnen brengen. Het logbestand kan informatie bevatten zoals
                    uw IP-adres, browser-type, browser-versie, de pagina’s van
                    onze Website die u bezoekt, de tijd en datum van uw bezoek,
                    de tijd die u besteedt op deze pagina’s en andere
                    statistieken.
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Analytische diensten</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Wij maken gebruik van analytische diensten van derden. Deze
                    helpen ons om ons verkeer en de trends van de Website te
                    meten. De tools verzamelen informatie die verzonden zijn
                    door uw Computer, onze Website, de webpagina’s die u
                    bezoekt, add-ons en door andere informatie die ons helpen
                    bij het verbeteren van onze Website. Deze tools gebruiken
                    ‘cookies’. Dit zijn eenvoudige tekstbestanden die worden
                    opgeslagen op uw harde schijf of in het geheugen van uw
                    Computer. Cookies kunnen uw Computer of de bestanden die op
                    uw Computer staan niet beschadigen. Cookies verzamelen
                    anoniem informatie over uw log-informatie en log-gedrag. Wij
                    gebruiken deze informatie alleen in samen met informatie van
                    andere Gebruikers. Hierdoor is het voor ons niet mogelijk om
                    u als individu te kunnen identificeren. Voor onze
                    analytische diensten gebruiken wij Google Analytics. Google
                    Analytics installeert een permanent cookie in uw webbrowser
                    om u te identificeren. Hierdoor worden uw gegevens gedeeld
                    met Google. Wij delen alleen gegevens met Google die wij op
                    basis van de AVG mogen delen met Google. U kunt voorkomen
                    dat Google Analytics u herkent, door de cookies uit te
                    schakelen in uw browser. Voor meer informatie over cookies
                    raden we u aan ons Cookiebeleid te lezen.
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <br /> <br />
                    Bytecode gebruikt remarketing diensten om te adverteren op
                    websites van derden nadat u onze Website heeft bezocht. Wij
                    en derde partijen waar wij mee samenwerken, gebruiken
                    cookies om de advertenties die getoond worden op basis van
                    uw voorgaande bezoeken, te optimaliseren. Wij maken, met uw
                    toestemming, gebruik van de volgende remarketing diensten:
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <br /> <br />
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <b>Google</b>: Google AdWords remarketing service wordt
                    geleverd door Google Inc. Wij maken alleen gebruik van
                    Google AdWords remarketing service op het moment dat u ons
                    daar toestemming voor geeft. U kunt Google AdWords
                    remarketing uitschakelen door uw toestemming in te trekken.
                    Voor meer informatie over het privacybeleid van Google kunt
                    u de volgende pagina bezoeken:
                    http://www.google.com/intl/en/policies/privacy/.
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Hoe gebruiken wij deze informatie?</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Alle informatie die wij verzamelen gebruiken wij om onze
                    Website te ondersteunen en verbeteren door:
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <ol type="a">
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <li>
                            De doeltreffendheid van onze Website vast te
                            stellen, te verbeteren, te testen en te bekijken;
                        </li>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <li>
                            Statistieken te bekijken, zoals het aantal bezoekers
                            en het verkeer naar de Website;
                        </li>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <li>
                            Technische problemen te verhelpen of te
                            diagnosticeren;
                        </li>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <li>Nieuwe producten te testen en te ontwikkelen.</li>
                    </ol>
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Hoe wordt deze informatie gedeeld?</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Wij zullen uw (persoons)gegevens niet verhuren of verkopen
                    aan derden.
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Zeggenschapswijziging</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Wanneer Bytecode, of een deel daarvan, wordt verkocht of
                    overgedragen (bijvoorbeeld als gevolg van een fusie,
                    overname, faillissement, ontbinding of liquidatie), dan
                    kunnen gegevens die via onze Website zijn verzameld onder de
                    verkochte of overgedragen zaken vallen. De koper of
                    verkrijger zal de afspraken die in dit Privacybeleid staan
                    vanzelfsprekend moeten opvolgen.
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Wettelijk verzoek en voorkoming schade</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Op grond van een wettelijk verzoek zijn wij gerechtigd om
                    toegang te krijgen tot uw informatie en dit te bewaren en/of
                    te delen in antwoord op een wettelijk verzoek (zoals een
                    huiszoekingsbevel, gerechtelijk bevel of een dagvaarding).
                    Wij zijn ook gerechtigd om uw informatie te bewaren en/of te
                    delen wanneer wij geloven dat dit noodzakelijk is voor het
                    opsporen, voorkomen en aankaarten van fraude of andere
                    illegale activiteiten en om ons, u en anderen te beschermen.
                    Informatie die wij ontvangen over u kan worden geopend,
                    bewerkt en bewaard voor een langere periode wanneer dit
                    noodzakelijk is vanwege een juridisch verzoek of
                    verplichting, een onderzoek met betrekking tot onze
                    voorwaarden, beleid of om anderszins schade te voorkomen.
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <br /> <br />
                    Bytecode heeft passende technische en organisatorische
                    maatregelen genomen om uw gegevens te beveiligen tegen
                    verlies of tegen enige vorm van onrechtmatige verwerking.
                    Wij gebruiken veiligheidsmaatregelen om te zorgen dat
                    informatie via de Website wordt beveiligd. Echter, Bytecode
                    kan niet verzekeren dat de informatie op de Website niet
                    wordt geopend, onthuld, veranderd of vernietigd. U bent te
                    allen tijde verantwoordelijk voor het beheren van de e-mails
                    tussen u en Bytecode. Wij zijn niet verantwoordelijk voor de
                    functionaliteit, privacy of veiligheidsmaatregelen van enige
                    andere organisatie.
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Internationale overdraging</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Uw informatie kan worden overgedragen en onderhouden op
                    computers en/of servers die zich buiten Nederland en/of de
                    EU bevinden en waar de wetten omtrent gegevensbescherming
                    kunnen verschillen. Wij spannen ons in om ervoor te zorgen
                    dat ook wanneer uw persoonsgegevens buiten de EU worden
                    verwerkt, zij op een juridisch juiste en zorgvuldige wijze
                    buiten de EU worden verwerkt.
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Bewaartermijn</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    In overeenstemming met de AVG en de overige relevante
                    wetgeving, bewaart Bytecode persoonsgegevens niet langer dan
                    noodzakelijk is voor de verwezenlijking van de doeleinden
                    waarvoor zij verzameld of verwerkt worden. Indien u meer
                    informatie wil over hoe lang uw specifieke persoonsgegevens
                    bewaard blijven, kunt u contact opnemen met &nbsp;
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <a href="mailto:support@bytecode.nl">support@bytecode.nl</a>
                    .
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>
                    Recht op inzage, correcties, recht op bezwaar en recht op
                    dataportabiliteit
                </h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Wij bieden u graag de mogelijkheid om zo veel mogelijk
                    controle over uw persoonsgegevens te houden. Wanneer u
                    inzage wil in uw persoonsgegevens, als u uw gegevens wil
                    wijzigingen of verwijderen of als u uw persoonsgegevens
                    geheel of gedeeltelijk wil laten overdragen aan u of aan een
                    derde, dan kunt u contact opnemen met Bytecode door een
                    e-mail te sturen naar&nbsp;
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <a href="mailto:support@bytecode.nl">support@bytecode.nl</a>
                    &nbsp;of een brief te sturen aan:
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <br />
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <br />
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    Bytecode Digital Agency B.V. <br />
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    tav. Administatie <br />
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    Verlengde Spiegelmakerstraat 13 <br />
                    2645KW Delfgauw, Nederland
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Applicaties, websites en diensten van derden</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Wij zijn niet verantwoordelijk voor de praktijken van
                    applicaties, websites of services van derden die gelinkt
                    zijn naar of van onze Website, waaronder de informatie of
                    inhoud die bijgaand is. Onze Privacy Policy is niet van
                    toepassing wanneer u een link gebruikt om van onze Website
                    naar een andere applicatie, website of service te gaan. Uw
                    gedragingen op een applicatie, website of dienst van een
                    derde, waaronder deze die een link hebben op onze website,
                    zijn onderworpen aan de regels en het beleid van deze derde.
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Wijzigingen</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Het kan voorkomen dat wij dit Privacybeleid in de loop van
                    de tijd zullen aanpassen of updaten. Daarom adviseren we u
                    om dit Privacybeleid regelmatig te raadplegen. Aanpassingen
                    van het Privacybeleid treden in werking op het moment dat ze
                    zijn gepubliceerd op deze pagina.
                </p>
            </Row>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <h2>Contact</h2>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <p>
                    Mocht u vragen hebben over dit Privacybeleid, dan
                    beantwoorden we deze graag. U kunt contact met ons opnemen
                    door een e-mail te sturen naar&nbsp;
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <a href="mailto:support@bytecode.nl">support@bytecode.nl</a>
                    .
                </p>
            </Row>
        </Container>
    </Layout>
);

export default PrivacyPolicy;
