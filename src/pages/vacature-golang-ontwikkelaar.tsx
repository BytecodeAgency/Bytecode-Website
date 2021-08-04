import React from 'react';
import styled from 'styled-components';
import Sticky from 'react-stickynode';
import Layout from '../layouts/MainLayout/MainLayout';
import theme from '../styles/theme';

import IconText from '../containers/IconText/IconText';
import VacancyHeader from '../containers/VacancyHeader/VacancyHeader';
import { Container, Row, Col } from '../lib/Grid';
import Button from '../components/Button/Button';

const { colors, mediaQueryMin } = theme;

const pageSettings = {
    title: `Golang backend/full-stack software ontwikkelaar`,
    description: `Wij, het team van Bytecode, zijn op zoek naar een medior/senior backend/full-stack developer ter uitbreiding van ons team. Onze sterke voorkeur gaat uit naar een ontwikkelaar met HBO/WO werk- en denkniveau, maar een opleiding op dit niveau is geen eis.`,
    keywords: 'vacature',
};

const IconTextContainer = styled.div`
    margin-bottom: 20px;
`;

const CallToActionContainer = styled.div`
    padding: 5px 0;
    @media (${mediaQueryMin.sm}) {
        padding: 5px 50px;
    }
`;

const VacancyHeading = styled.h3`
    margin-top: 1.33rem;
`;

const VacancyText = styled.p`
    margin-bottom: 40px;
`;

const VacancyList = styled.ul`
    margin-bottom: 40px;
`;

const Vacancy: React.FC = () => (
    <Layout pageSettings={pageSettings}>
        <VacancyHeader
            subtitle="Vacature"
            title="Golang backend/full-stack software ontwikkelaar"
            img={require('../images/img/content/teamv2.png')}
        />

        <Container>
            <IconTextContainer>
                <IconText
                    iconName="FaRegClock"
                    iconColor={colors.primary}
                    text="Deel-/voltijd: 24-40 uur"
                />
                <IconText
                    iconName="FaMapMarkerAlt"
                    iconColor={colors.primary}
                    text="Delfgauw"
                />
            </IconTextContainer>

            <Row>
                <Col lg={8} id="bottom">
                    <VacancyText>
                        Wij, het team van Bytecode, zijn op zoek naar een
                        medior/senior backend/full-stack developer ter
                        uitbreiding van ons team. Onze sterke voorkeur gaat uit
                        naar een ontwikkelaar met HBO/WO werk- en denkniveau,
                        maar een opleiding op dit niveau is geen eis.
                    </VacancyText>

                    <VacancyHeading>Over Bytecode</VacancyHeading>
                    <VacancyText>
                        Bytecode is een softwareontwikkelingspartner voor
                        start-ups, waarbij de rol van “interim CTO en technische
                        partner” wordt ingenomen. Daarnaast zijn we bezig met
                        verschillende eigen (open-source) onderzoeksprojecten,
                        om betere software te kunnen ontwikkelen voor klanten en
                        intern.
                    </VacancyText>
                    <VacancyText>
                        Bytecode is opgericht door twee softwareontwikkelaars en
                        kenmerkt zich door een informeel, open en hecht team
                        waarbij iedereen zelf bepaalt waar en wanneer gewerkt
                        wordt. Er heerst een cultuur van continue verbetering,
                        zowel aan de technische kant als aan de business-kant.
                    </VacancyText>
                    <VacancyText>
                        Ons team bestaat uit jonge mensen die gespecialiseerd
                        zijn in development, (UX/UI) design, marketing en sales.
                        Onze visie is dat elk potentievol idee een kans van
                        slagen moet krijgen. Dit bereiken we door samen te
                        werken als een team, waarbij we advies geven en passende
                        technologie creëren.
                    </VacancyText>
                    <VacancyText>
                        Spreekt een jong, hecht team jou aan? Heb jij ook
                        behoefte aan gezamelijke lunches op kantoor? Ben je net
                        zo competitief in ping-pong als wij, en sta jij ook te
                        springen voor gezellige teamuitjes? Dan ben je bij
                        Bytecode aan het juiste adres!
                    </VacancyText>

                    <VacancyHeading>
                        Wat ga je doen bij Bytecode?
                    </VacancyHeading>
                    <VacancyText>
                        In jouw samenwerking met andere developers ga je
                        bijdragen aan de (door-)ontwikkeling van
                        softwareprojecten, zowel voor klanten als bij interne
                        projecten. Je zult voornamelijk bezig zijn met het
                        implementeren van features in de Go-applicaties en het
                        maken van client SDKs voor de frontend. Ook is er de
                        mogelijkheid om bij te dragen aan automatisering van
                        projecten en processen, zoals automatisering van
                        deployments.
                    </VacancyText>

                    <VacancyHeading>
                        De technieken waarmee je bekend bent (of die je graag
                        wil leren)
                    </VacancyHeading>
                    <VacancyList>
                        <li>
                            Golang (voor ontwikkeling van server-applicaties)
                        </li>
                        <li>Relationele databases: voornamelijk PostgreSQL</li>
                        <li>
                            Typescript/Javascript: React (Native), NodeJS (voor
                            het bouwen van client SDKs)
                        </li>
                        <li>Automatisering via CI/CD (GitLab CI)</li>
                        <li>Infrastructure-as-Code: Terraform, Ansible</li>
                        <li>Git (GitLab)</li>
                        <li>Linux/Unix</li>
                        <li>Computer science fundamentals</li>
                    </VacancyList>

                    <VacancyHeading>
                        Wat jij belangrijk vindt in je werk
                    </VacancyHeading>
                    <VacancyList>
                        <li>
                            Communicatie: je houdt van duidelijke afspraken en
                            komt deze na
                        </li>
                        <li>
                            Schone code en softwarearchitectuur: je wil
                            technical debt voorkomen
                        </li>
                        <li>
                            Je zoekt de balans tussen samenwerken en
                            individueel/autonoom werken
                        </li>
                        <li>
                            Om de kwaliteit van code te waarborgen werk je graag
                            met code reviews
                        </li>
                        <li>
                            Je hecht waarde aan de security van de applicaties
                            waar je aan werkt
                        </li>
                        <li>
                            Naast development denk je ook graag mee over
                            strategie (voor klanten en intern)
                        </li>
                        <li>
                            Je hebt affiniteit voor vrije en open-source
                            software
                        </li>
                    </VacancyList>

                    <VacancyHeading>Wat bieden wij?</VacancyHeading>
                    <VacancyList>
                        <li>
                            Een marktconform salaris en vergoeding van
                            reiskosten
                        </li>
                        <li>
                            Een contract voor 24 tot 40 uur per week (in
                            overleg)
                        </li>
                        <li>Snel uitzicht op een vast contract</li>
                        <li>
                            Toffe projecten om aan te werken, van klanten en
                            intern
                        </li>
                        <li>
                            Mogelijkheid om bij te dragen aan open-source
                            projecten
                        </li>
                        <li>
                            Ruimte om te groeien op persoonlijk en professioneel
                            vlak
                        </li>
                        <li>
                            Flexibiliteit in werktijden, werkdagen en werkplek
                        </li>
                        <li>
                            Mogelijkheid om nieuwe technieken te leren en uit te
                            proberen
                        </li>
                    </VacancyList>
                </Col>

                <Col lg={4}>
                    <CallToActionContainer>
                        <Sticky top={100} bottomBoundary="#bottom">
                            <h4>Interesse?</h4>
                            <span style={{ color: 'grey' }}>
                                Stuur ons een e-mail met je motivatie, cv en
                                eventueel je LinkedIn of Github-profiel naar
                                no-recruiters@bytecode.nl
                            </span>
                            <div style={{ marginTop: '20px' }}>
                                <Button href="mailto:no-recruiters@bytecode.nl">
                                    Neem contact op
                                </Button>
                            </div>
                        </Sticky>
                    </CallToActionContainer>
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default Vacancy;
