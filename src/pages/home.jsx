import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout';
import TextBlock from '../components/TextBlock';
import ContentPageHeader from '../components/ContentPageHeader';
import { Container, Row, Col } from '../lib/Grid';
import ContactForm from '../components/ContactForm';
import Process from '../components/Process';
import Thumbnail from '../components/Thumbnail';
import Wrapper from '../components/Wrapper';

const service1icon = require('../images/icons/services/mobile.svg');
const service2icon = require('../images/icons/services/cloud.svg');
const service3icon = require('../images/icons/services/api.svg');
const service4icon = require('../images/icons/services/design.svg');
const service1bg = require('../images/img/services/mobile.jpg');
const service2bg = require('../images/img/services/servers.jpg');
const service3bg = require('../images/img/services/code.jpeg');
const service4bg = require('../images/img/services/design.jpg');

const pageSettings = {
    title: `Bytecode Digital Agency B.V.`,
    description: `Bytecode Digital Agency B.V. |
    Gespecialiseerd in ✓Websites en Webshops ✓Webapps
    ✓Cloud ✓Automatisering ✓Mobiele apps ✓API ontwikkeling`,
    keywords: 'bytecode, digital agency',
};

const CenterAlignedRow = styled(Row)`
    align-items: center;
`;

const CenterAlignedCol = styled(Col)`
    align-self: center;
    display: flex;
`;

const GroupImage = styled.img`
    margin-top: 4rem;
    width: 100%;
`;

const Home = () => (
    <Layout pageSettings={pageSettings}>
        <ContentPageHeader
            useGatsbyLink
            img={require('../images/img/header/web.svg')}
            subtitle="Welkom bij Bytecode"
            title="Specialisten in maatwerk voor web en mobiel"
            href="/contact"
            button="Neem contact op"
            bgSize="70%"
            text="Bytecode Digital Agency is een kleinschalig full-service
            webbureau gespecialiseerd in maatwerkontwikkeling voor web en
            mobiel. Ons team helpt je dolgraag met het analyseren, bedenken en
            ontwikkelen van alles wat je nodig hebt om je digitaal volledig te
            ontplooien."
        />
        <Container fluid>
            <Row>
                <Col offset={{ xl: 1, lg: 1 }} md={12} lg={4} xl={4}>
                    <Row>
                        <Col sm={6}>
                            <Thumbnail
                                serviceName="Websites, Webshops en Webapps"
                                serviceIcon={service1icon}
                                backgroundImage={service1bg}
                            />
                        </Col>
                        <Col sm={6}>
                            <Thumbnail
                                serviceName="Cloud en Automatisering"
                                serviceIcon={service2icon}
                                backgroundImage={service2bg}
                            />
                        </Col>
                        <Col sm={6}>
                            <Thumbnail
                                serviceName="Mobile- en API-ontwikkeling"
                                serviceIcon={service3icon}
                                backgroundImage={service3bg}
                            />
                        </Col>
                        <Col sm={6}>
                            <Thumbnail
                                serviceName="Branding, Design en Marketing"
                                serviceIcon={service4icon}
                                backgroundImage={service4bg}
                            />
                        </Col>
                    </Row>
                </Col>
                <CenterAlignedCol offset={{ lg: 1 }} md={12} lg={5} xl={4}>
                    <TextBlock
                        useGatsbyLink
                        subtitle="Hoe Bytecode kan helpen"
                        title="Samen halen we alles uit jouw digitale zelf"
                        href="/services"
                        button="Meer over onze diensten"
                        headingType="h2"
                    >
                        Wij maken uitgebreide analyses en strategieën van alles
                        wat je nodigt hebt om je online ijzersterk te
                        presenteren en profileren. In combinatie met onze
                        expertise op het gebied van alle maatwerk
                        webontwikkeling en IT-automatisering, zorgt dit ervoor
                        dat je bij ons echt alles uit je digitale zelf kunt
                        halen.
                    </TextBlock>
                </CenterAlignedCol>
            </Row>
        </Container>
        <Wrapper>
            <Container fluid>
                <CenterAlignedRow>
                    <CenterAlignedCol offset={{ lg: 1 }} md={12} lg={4}>
                        <TextBlock
                            useGatsbyLink
                            subtitle="Wie wij zijn"
                            title="
                            Kennis en kwaliteit met een no-bullshit mentaliteit"
                            href="/over"
                            button="Meer over ons team"
                        >
                            Wij staan voor een eerlijke en open samenwerking. We
                            werken met elkaar, niet langs elkaar. Ons zul je
                            nooit om de zaken heen zien draaien; wij vertellen
                            je hoe het zit en niet anders. Onze kennis en
                            kwaliteit gebruiken we niet om met moeilijke termen
                            te smijten, maar voor in het volledig vervullen van
                            al je digitale wensen. Zo leveren wij een
                            kwalitatief hoogstaand en optimaal functionerend
                            product op.
                        </TextBlock>
                    </CenterAlignedCol>
                    <Col offset={{ lg: 1 }} md={12} lg={5}>
                        <GroupImage
                            width="700"
                            src={require('../images/img/content/team-700.png')}
                            alt="Onze mindset"
                        />
                    </Col>
                </CenterAlignedRow>
            </Container>
        </Wrapper>
        <Process />
        <Wrapper>
            <ContactForm />
        </Wrapper>
    </Layout>
);

export default Home;
