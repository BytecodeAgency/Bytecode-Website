import React from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import IconText from '../containers/IconText/IconText';
import VacancyHeader from '../containers/VacancyHeader/VacancyHeader';
import Container from '../containers/Container';
import theme from '../styles/theme';
import Sticky from 'react-stickynode';


const { colors } = theme;

const pageSettings = {
    title: `Golang backend/full-stack software ontwikkelaar`,
    description: `Wij, het team van Bytecode, zijn op zoek naar een medior/senior backend/full-stack developer ter uitbreiding van ons team. Onze sterke voorkeur gaat uit naar een ontwikkelaar met HBO/WO werk- en denkniveau, maar een opleiding op dit niveau is geen eis.`,
    keywords: 'vacature',
};

const Vacancy: React.FC<Record<string, never>> = () => (
    <Layout pageSettings={pageSettings}>
        <VacancyHeader
            subtitle="Vacature"
            title="Golang backend/full-stack software ontwikkelaar"
            img={require('../images/img/content/teamv2.png')}
        />

        <Container>
            <div style={{ marginBottom: "20px" }}>
                <IconText
                    icon="FaRegClock"
                    fSize="15px"
                    iconColor={colors.primary}
                    text="Deeltijd: 24-40 uur"
                />
                <IconText
                    icon="FaMapMarkerAlt"
                    fSize="15px"
                    iconColor={colors.primary}
                    text="Delfgauw"
                />
            </div>

            <div style={{
                display: "flex",
            }}>
                <div style={{ maxWidth: "calc(66.66% - 5px)" }}>
                    <p style={{ marginBottom: "50px" }}>
                        Wij, het team van Bytecode, zijn op zoek naar een medior/senior backend/full-stack developer ter uitbreiding van ons team. Onze sterke voorkeur gaat uit naar een ontwikkelaar met HBO/WO werk- en denkniveau, maar een opleiding op dit niveau is geen eis.
                    </p>

                    <h3>Over Bytecode</h3>
                    <p>
                        Bytecode is een softwareontwikkelingspartner voor start-ups, waarbij de rol van “interim CTO en technische partner” wordt ingenomen. Daarnaast zijn we bezig met verschillende eigen (open-source) onderzoeksprojecten, om betere software te kunnen ontwikkelen voor klanten en intern.
                    </p>
                    <p>
                        Bytecode is opgericht door twee softwareontwikkelaars en kenmerkt zich door een informeel, open en hecht team waarbij iedereen zelf bepaalt waar en wanneer gewerkt wordt. Er heerst een cultuur van continue verbetering, zowel aan de technische kant als aan de business-kant.
                    </p>
                    <p>
                        Ons team bestaat uit jonge mensen die gespecialiseerd zijn in development, (UX/UI) design, marketing en sales. Onze visie is dat elk potentievol idee een kans van slagen moet krijgen. Dit bereiken we door samen te werken als een team, waarbij we advies geven en passende technologie creëren.
                    </p>
                    <p>
                        Spreekt een jong, hecht team jou aan? Heb jij ook behoefte aan gezamelijke lunches op kantoor? Ben je net zo competitief in ping-pong als wij, en sta jij ook te springen voor gezellige teamuitjes? Dan ben je bij Bytecode aan het juiste adres!
                    </p>

                    <h3>Wat ga je doen bij Bytecode?</h3>
                    <p>
                        In jouw samenwerking met andere developers ga je bijdragen aan de (door-)ontwikkeling van softwareprojecten, zowel voor klanten als bij interne projecten. Je zult voornamelijk bezig zijn met het implementeren van features in de Go-applicaties en het maken van client SDKs voor de frontend. Ook is er de mogelijkheid om bij te dragen aan automatisering van projecten en processen, zoals automatisering van deployments.
                    </p>

                    <h3>De technieken waarmee je bekend bent (of die je graag wil leren)</h3>
                    <ul>
                        <li>Golang (voor ontwikkeling van server-applicaties)</li>
                        <li>Relationele databases: voornamelijk PostgreSQL</li>
                        <li>Typescript/Javascript: React (Native), NodeJS (voor het bouwen van client SDKs)</li>
                        <li>Automatisering via CI/CD (GitLab CI)</li>
                        <li>Infrastructure-as-Code: Terraform, Ansible</li>
                        <li>Git (GitLab)</li>
                        <li>Linux/Unix</li>
                        <li>Computer science fundamentals</li>
                    </ul>

                    <h3>Wat jij belangrijk vindt in je werk</h3>
                    <ul>
                        <li>Communicatie: je houdt van duidelijke afspraken en komt deze na</li>
                        <li>Schone code en softwarearchitectuur: je wil technical debt voorkomen</li>
                        <li>Je zoekt de balans tussen samenwerken en individueel/autonoom werken</li>
                        <li>Om de kwaliteit van code te waarborgen werk je graag met code reviews</li>
                        <li>Je hecht waarde aan de security van de applicaties waar je aan werkt</li>
                        <li>Naast development denk je ook graag mee over strategie (voor klanten en intern)</li>
                        <li>Je hebt affiniteit voor vrije en open-source software</li>
                    </ul>

                    <h3>Wat bieden wij?</h3>
                    <ul id="bottom">
                        <li>Een marktconform salaris en vergoeding van reiskosten</li>
                        <li>Een contract voor 32/40 uur per week</li>
                        <li>Snel uitzicht op een vast contract</li>
                        <li>Toffe projecten om aan te werken, van klanten en intern</li>
                        <li>Mogelijkheid om bij te dragen aan open-source projecten</li>
                        <li>Ruimte om te groeien op persoonlijk en professioneel vlak</li>
                        <li>Flexibiliteit in werktijden, werkdagen en werkplek</li>
                        <li>Mogelijkheid om nieuwe technieken te leren en uit te proberen</li>
                    </ul>
                </div>

                <div style={{ padding: "5px 50px", minWidth: "calc(33.33% - 5px)" }}>
                    <Sticky top={100} bottomBoundary="#bottom">
                        <h4>Interesse?</h4>
                        <span style={{ color: "grey" }}>Stuur ons een e-mail met je motivatie, cv en eventueel je LinkedIn of Github-profiel naar no-recruiters@bytecode.nl</span>
                    </Sticky>
                </div>
            </div>
        </Container>
    </Layout >
);

export default Vacancy;
