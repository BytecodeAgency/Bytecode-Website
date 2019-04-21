/* eslint-disable max-len, no-use-before-define */

import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import theme from '../../styles/theme';
import TextBlock from '../../components/TextBlock';
import { Container, Row, Col } from '../../lib/Grid';
import Author from '../../components/Author';
import ContactForm from '../../components/ContactForm';

const content = {
    id: 2,
    title: 'Webapp: het complete overzicht',
    subtitle: '',
    slug: 'webapp-het-complete-overzicht',
    posted_on: '30 maart 2019',
    article_image_url: require('../../images/img/articles/webapp-overzicht.jpg'),
    summary:
        'Webapp: wat is een (progressive) webapp? Is een webapp beter dan een mobiele app en wat is de waarde van een webapp voor jouw bedrijf? Lees het hier!',
    author_name: 'Nick Broekarts',
    author_role: 'Online Marketeer',
    author_image_url: require('../../images/img/authors/nick.jpeg'),
    catergory_name: 'Webapps',
    category_slug: 'webapps',
    reading_time: 13,
    html_content: `
    <p>In de digitale wereld waarin wij leven zijn er vele mobiele apps en webapps ontwikkeld met bepaalde functionaliteiten en doelgroepen. Zo zijn er apps ontwikkeld voor ontspanning, gezondheid, educatie, en meer. Applicaties die te downloaden zijn vanuit de Play Store of Apple Store alvorens ze gebruikt kunnen worden op het toestel naar keuze noemen we <strong>native apps</strong>, aangezien ze gekoppeld zijn aan een store en geïnstalleerd moeten worden op een toestel.</p><p>Daarnaast is er een ander soort applicatie, de <strong>webapp</strong>. Webapps zijn applicaties die draaien op een webbrowser, waardoor ze niet noodzakelijkerwijs geïnstalleerd hoeven te worden. In dit artikel willen we de webapplicatie analyseren, terwijl we deze ook afzetten tegen native apps. Daarnaast zullen we het onderwerp vanuit een zakelijke invalshoek benaderen en bekijken we wat de mogelijke <strong>waarde</strong> van een webapp is voor een bedrijf. We gaan specifiek de volgende zaken bespreken:</p><ul>
    <li><a href="#Wat-is-een-webapp-en-hoe-werkt-het">Wat is een webapp en hoe werkt het?</a></li>
    <li><a href="#Wat-is-een-progressive-webapp">Wat is een progressive webapp?</a></li>
    <li><a href="#Webapp-vs-native-app-wat-zijn-de-voor-en-nadelen">Webapp versus native app: wat zijn de voor- en nadelen? </a></li>
    <li><a href="#Wat-heb-ik-aan-een-webapp">Wat heb ik aan een webapp?</a></li>
    </ul><h2 id="Wat-is-een-webapp-en-hoe-werkt-het">Wat is een webapp en hoe werkt het?</h2><p>Een <strong>webapplicatie</strong> of <strong>webapp</strong> is een programma dat een bepaalde functie vervult door te draaien op een webbrowser of webpagina. Ze zijn dus gemaakt met de basisblokken waar elke website uit bestaat: <em>HTML, CSS en Javascript</em>. Omdat ze draaien op een webbasis hoeven ze dus niet, zoals een native app, geïnstalleerd te worden vanuit een app store. De gegevens die je opslaat bij een webapplicatie worden digitaal bewaard, en daardoor heb je altijd toegang tot die gegevens. Een webapp is geoptimaliseerd voor mobiel gebruik en voelt aan als een “normale” native app.</p><p>In kindertaal is een webapplicatie eigenlijk een website die je via je webbrowser opent. Het fijne hiervan is dat elke toestel (Samsung, Apple etc.) deze website kan bezoeken en gebruik kan maken van de functionaliteiten. Je hoeft de webapp dus niet te updaten zoals dat gebruikelijk is bij native apps van de Google Play Store of Apple App Store. Een webapp is gemakkelijk te bereiken en gebruiken door het instellen van een bladwijzer. Door die bladwijzer kun je een koppeling maken, zodat je vanuit je toestel meteen naar de webapp kan.</p><p>Er bestaan al heel wat webapps die we in het dagelijks leven gebruiken, maar waarvan we misschien niet beseffen dat dit een webapp is. Bijvoorbeeld:</p><ul>
    <li><strong>Sociale media</strong> - via je browser Facebooken, Twitteren, netwerken op LinkedIn of zelfs via Whatsapp Web berichten versturen</li>
    <li><strong>Internetbankieren</strong> – via een website log je in en heb je toegang tot je bankgegevens</li>
    <li><strong>E-mail</strong> – via een url kom je terecht in je mail met behulp van je browser, bijvoorbeeld Gmail</li>
    </ul><h2 id="Wat-is-een-progressive-webapp">Wat is een progressive webapp?</h2><p>Voordat we het verschil bespreken tussen een normale en een <strong>progressive webapplicatie</strong> (vaak afgekort tot <strong>PWA</strong>) is het handig om eerst het verschil aan te duiden tussen websites en webapps. Want wat is eigenlijk het verschil? Het grootste verschil zit in de functionaliteit. Webapps bieden de optie tot actie en interactie, en focussen daarom op <strong>dienstverlening</strong>, zoals bijvoorbeeld e-mail of Google Maps (ook als native app beschikbaar). <strong>Websites</strong> zijn daarentegen vaak meer <strong>informatief en statisch</strong>. Bij websites zijn features zoals geld overschrijven vanuit online bankieren, e-mails versturen of een routebeschrijving krijgen niet aanwezig.</p><p>Wat is dan een progressive webapp? Een progressive webapp is een website die functioneert en aanvoelt alsof het een <strong>geïnstalleerde mobiele app</strong> is op je toestel. De content van een PWA is tevens indexeerbaar en deelbaar. Ze zijn ook <strong>veilig</strong>, omdat ze geen standaard toegang hebben met betrekking tot de hardware van het systeem.</p><p>Google zet veel in op progressive webapps om te kunnen concurreren met de native app stores. Volgens Google zijn progressive webapps: <strong>betrouwbaar</strong>, <strong>snel</strong> en voelen ze aan als een “<strong>natuurlijke</strong>” app. <em><a href="https://developers.google.com/web/progressive-web-apps/" target="_blank" rel="noopener">Bron: Google</a></em></p><p><em>Video: Google over Progressive Web App (PWA) toepassingen:</em></p><p></p><div class="youtube" data-videoid="m-sCdS0sQO8"><iframe webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://www.youtube.com/embed/m-sCdS0sQO8" frameborder="0"></iframe></div><p></p><h3 id="Voordelen-van-een-progressive-webapp">Voordelen van een progressive webapp</h3><p>Progressive webapps zijn betrouwbaar doordat je niet langer afhankelijk bent van een netwerkverbinding. Wanneer je de progressive webapp start vanuit je startscherm zorgen “<em>service workers</em>” ervoor dat je de applicatie kan laden, ongeacht of je apparaat met een netwerk verbonden is of niet. Een “service worker” zorgt ervoor dat je met behulp van <strong>pre-caching</strong> altijd toegang hebt tot de app, waardoor je niet langer afhankelijk bent van een netwerkverbinding. Door deze pre-caching voelt de PWA ook een stuk <strong>sneller</strong> en <strong>vloeiender</strong> aan dan een normale website, omdat veelgebruikte bestanden lokaal worden bewaard en niet steeds opnieuw geladen hoeven te worden.</p><p>Google geeft tevens vier redenen waarom het <strong>waardevol</strong> voor je bedrijf kan zijn om een progressive webapp te bouwen of te laten maken:</p><ol>
    <li>Wanneer aan de progressive webapplicatie vereisten (afkomstig vanuit Google) is voldaan, krijgen gebruikers een <strong>melding om de app toe te voegen aan hun homescreen</strong> om zo makkelijk toegang te hebben tot de applicatie, net als met native apps.</li>
    <li><strong>Hogere betrokkenheid</strong>: push-notificaties helpen bij de betrokkenheid van doelgroepen. Uit resultaten is gebleken dat gebruikers meer tijd spenderen op zulke websites.</li>
    <li><strong>Hogere conversie</strong>: de sterke user experience zorgt ervoor dat er meer conversie plaatsvindt.</li>
    <li><strong>Betere betrouwbaarheid</strong>: zoals besproken is de betrouwbaarheid hoger doordat progressive webapps minder afhankelijk zijn van een netwerkverbinding.</li>
    </ol><h3 id="“Keurmerk-van-Google”">“Keurmerk van Google”</h3><p>Voordat je van deze voordelen kunt genieten, moet je eerst de webapp zo programmeren dat deze voldoet aan de <strong>progressive webapp vereisten</strong> van Google zelf. Deze eisen gelden niet alleen voor Android, maar ook voor Apple’s iOS. Deze vereisten zijn als volgt:</p><ul>
    <li>De website moet een geldig SSL-certificaat hebben (https).</li>
    <li>De pagina’s moeten responsive zijn op apparaten zoals tablets en mobiele toestellen.</li>
    <li>De URL’s van de webapp laden terwijl er geen netwerkverbinding is.</li>
    <li>Metadata moet aanwezig zijn, zodat de webapp toegevoegd kan worden aan de homescreen, door middel van een manifest.json bestand.</li>
    <li>Een hoge laadsnelheid voor het eerste scherm.</li>
    <li>De webapp moet functioneren op verschillende browsers: Chrome, Edge, Firefox, Safari.</li>
    <li>Paginaovergangen moeten goed aanvoelen, ook bij een slechte netwerkverbinding.</li>
    <li>Elke pagina moet een URL bevatten.</li>
    <li>De content van de webapp moet geïndexeerd worden door Google.</li>
    <li>Metadata <a href="http://schema.org" target="_blank" rel="noopener">schema.org</a> is aangeleverd waar dat nodig is.</li>
    <li>Canonical URLS plaatsen waar nodig.</li>
    <li>Historische API wordt gebruikt.</li>
    <li>Content verspringt niet wanneer de pagina geladen wordt.</li>
    <li>Content moet makkelijk deelbaar staan vanuit verschillende beeldmodi.</li>
    <li>De PWA moet bij het laden niet gebruik maken van een interstitial.</li>
    <li>Maakt gebruikt van cache-first netwerk.</li>
    <li>De webapp informeert de gebruikers wanneer ze offline zijn.</li>
    <li>De webapp moet informatie verstrekken over het gebruik van notificaties.</li>
    <li>De user-interface moet niet té agressief zijn om push notificaties te mogen versturen naar gebruikers.</li>
    <li>Het scherm van het toestel moet dimmen wanneer er gevraagd wordt naar toestemming over bepaalde instellingen.</li>
    <li>Push notificaties moeten kloppen op het gebied van tijd, precisie en relevantie.</li>
    <li>Het moet mogelijk zijn om push notificaties aan en/of uit te zetten.</li>
    <li>De gebruiker moet ingelogd kunnen zijn op verschillende toestellen met behulp van de credential management API.</li>
    <li>De gebruiker kan makkelijk betalen door de user-interface bij een betaalverzoek.</li>
    </ul><p><a href="https://developers.google.com/web/progressive-web-apps/checklist" target="_blank" rel="noopener">Bron checklist: Google</a></p><p><img src=${require('../../images/img/articles/webapp-overzicht-1.jpeg')} alt=""></p><h3 id="Chrome-Lighthouse-Tool">Chrome Lighthouse Tool</h3><p>Als je een webapplicatie hebt of aan het ontwikkelen bent, en je wilt testen of je (progressive) webapp voldoet aan de <strong>eisen</strong>, dan kun je gebruik maken van de <a href="https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk" target="_blank" rel="noopener">Chrome Lighthouse Tool</a>.</p><p>Aan de techniek achter progressive webapps wordt hard gewerkt. Stukje bij beetje wordt het voor PWAs gemakkelijker om native apps te vervangen, omdat Android en iOS steeds meer mogelijk maken binnen de browser. Zo zal het bijvoorbeeld binnenkort mogelijk worden om gebruik te maken van de NFC-functionaliteit, allemaal vanuit de PWA. Om te bekijken wat er allemaal mogelijk is kan je met je mobiele browser naar <a href="https://whatwebcando.today" target="_blank" rel="noopener">whatwebcando.today</a> gaan om precies te zien welke functionaliteiten jouw telefoon ondersteunt.</p><h2 id="Webapp-versus-native-app-wat-zijn-de-voor-en-nadelen">Webapp versus native app: wat zijn de voor en nadelen?</h2><p>Voordat we gaan bespreken wat de mogelijkheden van een webapplicatie zijn voor jouw bedrijf, zullen we eerst de webapp tegenover de native app zetten. We bekijken hierbij de voor- en nadelen van beide instrumenten.</p><h3 id="De-voordelen-van-een-webapp">De voordelen van een webapp:</h3><ul>
    <li>Webapps werken op <strong>alle besturingssystemen</strong> en toestellen die beschikking hebben tot een webbrowser (zelfs op desktop!).</li>
    <li>Webapplicaties hoeven <strong>niet geïnstalleerd</strong> te worden.</li>
    <li>Gebruikt nagenoeg <strong>geen ruimte op het apparaat</strong>.</li>
    <li>Is makkelijk te koppelen aan andere websites.</li>
    <li>Een <strong>security update</strong> van een webapp wordt in tegenstelling tot een native app <strong>meteen in de software geladen</strong>, terwijl dit bij een native app meer tijd kost vanwege de goedkeuring die appstores moeten geven.</li>
    <li>Webapps zijn <strong>sneller</strong> en <strong>goedkoper</strong> te programmeren dan native apps als er al een normale website of webshop aanwezig, omdat er niet opnieuw begonnen hoeft te worden.</li>
    </ul><h3 id="De-nadelen-van-een-webapp">De nadelen van een webapp:</h3><ul>
    <li><strong>Altijd internetverbinding</strong> nodig (zoals aangegeven geldt dit <strong>niet voor een PWA</strong>)</li>
    <li>Er is <strong>geen distributiekanaal</strong>, wat inhoudt dat je niet naar de Apple of Play store kan gaan om te downloaden. Een webapp moet gevonden worden door een zoekopdracht.</li>
    <li>Slaat online gegevens op.</li>
    </ul><h3 id="De-voordelen-van-een-native-app">De voordelen van een native app:</h3><ul>
    <li>Geen internetverbinding nodig (wel voor online functionaliteiten zoals bijvoorbeeld sociale media).</li>
    </ul><h3 id="De-nadelen-van-een-native-app">De nadelen van een native app:</h3><ul>
    <li>De applicatie moet <strong>per besturingssysteem ontwikkeld</strong> worden. Dus voor IOS, Android en eventueel Windows.</li>
    <li>Voor de plaatsing van de app in de store moet er eerst <strong>goedkeuring</strong> zijn vanuit de store.</li>
    <li>Een update van de software <strong>duurt langer</strong> omdat er eerst goedkeuring moet zijn.</li>
    <li>De <strong>investering</strong> is doorgaans <strong>groter</strong> dan een webapp of PWA.</li>
    </ul><h2 id="Wat-heb-ik-aan-een-webapp">Wat heb ik aan een webapp?</h2><p>Na de vorige alinea’s gelezen te hebben weet je wat een webapp is en wat een PWA inhoudt. Ook heb je gelezen over de voor- en nadelen ten opzichte van native apps.</p><p>De progressive webapp verhelpt ook een aantal gebreken die de oorspronkelijke webapplicatie zou hebben ten overstaande van de native apps. Wellicht is een progressive webapp dus iets wat een <strong>waardevolle toevoeging</strong> zou kunnen zijn voor jouw bedrijf en/of merk. Wat zijn enkele praktijkvoorbeelden?</p><p>Voorbeelden van doeleinden van webapplicaties zijn: <em>projectmanagement, boekhouding, klantencontact, tekstverwerkers, presentatiehulpmiddelen, videobewerking, verkooppuntsoftware (POS)</em>, etc.</p><p>Als je je afvraagt of <strong>grote bedrijven</strong> al gebruik maken van progressive webapps, is het antwoord volmondig ja. Een recent artikel van <a href="https://nexxite.nl" target="_blank" rel="noopener">nexxite.nl</a> laat zien dat grote spelers als Twitter, The Washington Post, Forbes, Uber, Starbucks en Virgin America ook gebruik maken van (progressive) web apps.</p><p>Het wereldwijd <strong>meest bekende voorbeeld</strong> is misschien wel de <strong><a href="https://alibaba.com" target="_blank" rel="noopener">progressive webapp van Alibaba.com</a></strong>. Door gebruik van een PWA steeg het <strong>aantal conversies</strong> met <strong>76%</strong> in totaal! <a href="https://www.nexxite.nl/post/10-populaire-bedrijven-met-een-progressive-web-app" target="_blank" rel="noopener">Bron: Nexxite</a></p><p>Een ander voorbeeld is <strong>Pinterest</strong>. Na de introductie van een PWA was er een <strong>kliktoename</strong> van <strong>50%</strong> en het <strong>totale bedrag aan uitgaven</strong> steeg met <strong>40%</strong> voor mensen die meer dan 5 minuten spendeerden op de website. De prestaties waren beter dan mobielweggebruik en zelfs <strong>beter dan het gebruik van native apps</strong>. <a href="https://computerworld.nl/development/107187-wat-microsoft-en-google-in-progressive-web-apps-zien" target="_blank" rel="noopener">Bron: Computerworld</a></p><p></p><div class="youtube" data-videoid="itJnSmKRK_g"><iframe webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" src="https://www.youtube.com/embed/itJnSmKRK_g" frameborder="0"></iframe></div><p></p><h3 id="Appmoeheid">Appmoeheid</h3><p>Naast de besproken <strong>voordelen</strong> in de bovengenoemde opsommingen is er nog een voordeel voor gebruikers. Omdat webapps gewoon vanaf een browser “geïnstalleerd” kunnen worden, is er <strong>geen gedoe</strong> meer bij het navigeren binnen de app store om iets te downloaden. Het begrip <strong>app-moeheid</strong> houdt in dat de markt voor apps verzadigd is, en men niet snel meer nieuwe apps downloadt. Ook daarom is een webapp profitabel.</p><p>Bij het bezoeken van een website kan een bladwijzer in de homescreen geplaatst worden, waardoor een (progressive)webapp <strong>makkelijk en snel bezocht</strong> kan worden. Dit is tevens handig voor ondernemers en winkels die acties of kortingen willen aanbieden aan hun klanten. Deze “distributie” vindt nu vaak plaats middels native apps, maar klanten willen vaak niet nog een applicatie installeren op hun toestel. PWA’s daarentegen kunnen door middel van een bladwijzer bij het opstarten direct een <strong>aanbieding of korting</strong> laten zien, ook kunnen hiervoor <strong>push-notificaties</strong> gebruikt worden. Door gebruik te maken van een webapplicatie wordt er minder opslagruimte gebruikt en wordt het overzichtelijker voor de gebruiker.</p><h3 id="Application-serviceprovider">Application serviceprovider</h3><p>Er zijn nog een aantal <strong>praktische voorbeelden</strong> over het gebruik van webapps om waarde te creëren voor een gebruiker. Een strategie die steeds meer voorkomt is <em>ASP</em>. ASP staat voor <em>application serviceprovider</em>. Hierbij wordt webtoegang geboden voor software die eerst als lokale applicatie werd gebruikt. Door de webapplicatie hoeft er niks meer geinstalleerd te worden op de lokale harde schijf. De provider krijgt vaak in <strong>abonnementsvorm</strong> een betaling voor het verstrekken van de applicatie.</p><p>ASP’s krijgen momenteel <strong>veel aandacht</strong> in de software-industrie, en wellicht is het voor jouw bedrijf interessant om een webapp te laten ontwikkelen waarbij anderen tegen periodieke betalingen gebruik kunnen maken van jouw software. Daarnaast is er een verdienmodel waarbij het gebruik van de webapplicatie gratis is. Het draaien van advertenties levert in dit geval geld op.</p><h2 id="Conclusie">Conclusie</h2><p>We hebben besproken wat een webapp en een progressive webapp zijn, en hebben deze vergeleken met de voor en nadelen van een native app.</p><p>De progressive webapp of <strong>PWA</strong> is een vrij nieuw fenomeen dat veel <strong>problemen verhelpt</strong> van de webapplicatie en waarvan ontwikkeling interessant kan zijn voor bedrijven. Wellicht heeft jouw bedrijf of onderneming al een native app, maar ben je na het lezen van dit overzicht tot de conclusie gekomen dat een (progressive) webapp een <strong>mooie ontwikkeling</strong> is en een <strong>uitkomst</strong> biedt voor jouw bedrijf.</p><p>Een <strong>PWA</strong> dient aan een aantal eisen te voldoen, maar levert ook <strong>hogere prestaties</strong> op, zoals <strong>hogere klikratio en meer conversies</strong>. Een goede manier om strategische stappen te zetten is om te investariseren welke apps nu gebruikt of gedistributeerd worden en om vervolgens te kijken hoe webapps deze zouden kunnen vervangen en/of verbeteren.</p><p>Er zijn inmiddels al veel <strong>grote bedrijven</strong> die de omslag gemaakt hebben <strong>van een native app naar een webapp</strong>. Voor beide producten valt uiteraard iets positiefs te zeggen, maar de verwachting is dat progressive webapps een steeds <strong>dominantere rol</strong> zullen gaan spelen in de industrie.</p><p><strong>Speel in op de steeds groter wordende aanwezigheid van mobiel gebruik, zet in op een mobile-first strategie en verbeter/ontwikkel een applicatie die de wensen van je klanten optimaal bedient.</strong></p><p>Wil je een website laten maken? Lees in <a href="https://bytecode.nl/insights/website-laten-maken" target="_blank" rel="noopener">ons vorige artikel</a> hoe je een webdeveloper moet kiezen!</p>`,
};

const pageSettings = {
    title: content.title,
    description:
        'Webapp: wat is een (progressive) webapp? Is een webapp beter dan een mobiele app en wat is de waarde van een webapp voor jouw bedrijf? Lees het hier!',
    keywords: 'webapp',
};

const HeaderContainer = styled.section`
    padding: 10rem 2% 2%;
    background-color: ${theme.colors.mediumgray};
    background-image: url(${props => props.background});
    background-blend-mode: soft-light;
    background-size: cover;
    background-position: center center;
    opacity: 60%;
    @media (min-width: ${theme.breakpointMobileMenu}) {
        padding: 40vh 2% 5vh 5%;
    }
    @media (max-width: ${theme.breakpointMobileMenu}) {
        h1 {
            font-size: 2.6rem;
        }
    }
`;

const BlogContentContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const BlogContent = styled.div`
    padding: 4rem 1rem 4rem;
    max-width: 68rem;

    p {
        margin: 1rem 0;
    }

    b,
    strong {
        font-weight: bold;
    }

    p,
    ul,
    li,
    a {
        color: ${theme.colors.white};
        font-kerning: normal;
        line-height: 2.2rem;
        font-size: 1.75rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 1.5em 0 0em 0;
    }

    ul {
        list-style-type: circle;
        margin: 1em 1.5em;
    }

    ol {
        list-style-type: decimal;
        margin: 1em 1.5em;
    }

    li {
        margin: 0.5rem 0;
        padding-left: 0.8rem;
        font-family: ${theme.typography.p.font};
        letter-spacing: ${theme.typography.p.spacing};
    }

    figure {
        margin: 4em 0;
    }

    img {
        max-width: 400px;
        margin: 3rem auto 3rem auto;
        display: block;
    }
`;

const BlogMetaDataWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-content: flex-end;
    margin-top: 6rem;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        margin-top: 2.4rem;
    }
`;

const BlogMetaData = styled.p`
    text-align: right;
    font-size: 1.25rem;
    display: flex;
    align-self: center;
    max-width: 20rem;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        display: none;
    }
`;

const CallToActionContainer = styled.div`
    margin-top: 4rem;
`;

const CallToActionText = styled.p`
    font-style: italic;
    color: ${theme.colors.lightgray} !important;
`;

const ContentBlockWrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 5% 0% 5% -5%;
    padding: 7.5% 5%;
`;

const CallToAction = () => (
    <CallToActionContainer>
        <CallToActionText>
            Dit artikel is met passie geschreven door Bytecode, een jonge en
            moderne web agency. Wij laten jou graag zien hoe je de kracht van
            het internet kunt gebruiken om alles uit jezelf te halen. Dit doen
            we door bijvoorbeeld dit artikel te schrijven, maar ook door deze
            inzichten in onze werkzaamheden te verwerken.
            <br />
            <br />
            Wil je meer over ons weten of kunnen we misschien iets voor je
            betekenen? <a href="/contact">Neem gerust contact met ons op</a> of
            kom een keer langs op de koffie!
        </CallToActionText>
    </CallToActionContainer>
);

const BlogSingle = () => (
    <Layout pageSettings={pageSettings}>
        <article>
            <HeaderContainer background={content.article_image_url}>
                <Container>
                    <Row>
                        <Col md={12}>
                            <TextBlock
                                subtitle={content.catergory_name}
                                title={content.title}
                            />
                            <BlogMetaDataWrapper>
                                <Author
                                    name={content.author_name}
                                    title={content.author_role}
                                    img={content.author_image_url}
                                />
                                <BlogMetaData>
                                    {content.posted_on} <br />
                                    {content.reading_time} min. read
                                </BlogMetaData>
                            </BlogMetaDataWrapper>
                        </Col>
                    </Row>
                </Container>
            </HeaderContainer>
            <BlogContentContainer>
                <BlogContent>
                    <div
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                            __html: content.html_content,
                        }}
                    />
                    <CallToAction />
                </BlogContent>
            </BlogContentContainer>
        </article>
        <Container>
            <ContentBlockWrapper>
                <TextBlock
                    subtitle="We staan voor je klaar"
                    headingType="h2"
                    title="Heb je een vraag over dit artikel? Of misschien een suggestie voor een volgende post? Laat het ons weten!"
                />
                <ContactForm hideText={true} />
            </ContentBlockWrapper>
        </Container>
    </Layout>
);

export default BlogSingle;
