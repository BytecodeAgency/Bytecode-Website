import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts/MainLayout';
import TextBlock from '../containers/TextBlock/TextBlock';
import ContentPageHeader from '../containers/ContentPageHeader/ContentPageHeader';
import { Container, Row, Col } from '../lib/Grid';
import NewsletterSubscribe from '../containers/NewsletterSubscribe/NewsletterSubscribe';
import Process from '../containers/Process/Process';
import Thumbnail from '../containers/Thumbnails/Thumbnail';
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
    title: `Maatwerk Web & Mobiel Ontwikkeling`,
    description: `Een kleinschalig full-service webbureau gespecialiseerd in platformontwikkeling op maat. Passie, kwaliteit en betrouwbaarheid als kernwaarden`,
    keywords: 'bytecode, digital agency',
};

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
            href="/cases"
            button="Onze recente projecten"
            text="Wij zijn Bytecode Digital Agency: een team van ontwikkelaars, ontwerpers, researchers, strategen en marketeers. Ons jonge, hechte team staat graag voor je klaar om uniek digitaal maatwerk te verzorgen."
            hero
            shadow
        />
        <Container>
            <Row>
                <Col md={12} lg={6} xl={6}>
                    <Row gutterWidth={20}>
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
                                serviceName="Design en Strategie"
                                serviceIcon={service4icon}
                                backgroundImage={service4bg}
                            />
                        </Col>
                    </Row>
                </Col>
                <CenterAlignedCol offset={{ lg: 1 }} md={12} lg={5}>
                    <TextBlock
                        useGatsbyLink
                        subtitle="Hoe Bytecode kan helpen"
                        title="Van inzicht tot impact"
                        href="/services"
                        button="Bekijk onze diensten"
                        headingType="h2"
                    >
                        Wij ontwikkelen maatwerksoftware op basis van verkregen
                        inzichten en onderzoek, zodat onze digitale producten
                        impact maken op jouw organisatie en klanten. Handmatig,
                        tijdrovend werk wordt verleden tijd. Jij kan je volledig
                        focussen op datgene waar jij passie voor hebt. Zo maken
                        we jouw visie realiteit.
                    </TextBlock>
                </CenterAlignedCol>
            </Row>
        </Container>
        <Wrapper>
            <Container>
                <Row justify="center" align="center">
                    <CenterAlignedCol md={12} lg={5}>
                        <TextBlock
                            useGatsbyLink
                            subtitle="Wie wij zijn"
                            title="
                            Kennis en kwaliteit met een no-bullshit mentaliteit"
                            href="/over"
                            button="Meer over ons team"
                            headingType="h2"
                        >
                            Wij staan voor een eerlijke en open samenwerking,
                            binnen ons team en daarbuiten. Door onze
                            multidisciplinaire kennis versterken we elkaar en
                            delen we onze ervaringen. Zo werken we naar nieuwe
                            manieren en inzichten om de digitale wereld naar
                            jouw hand te zetten.
                        </TextBlock>
                    </CenterAlignedCol>
                    <Col offset={{ lg: 1 }} md={12} lg={6}>
                        <GroupImage
                            width="700"
                            src={require('../images/img/content/group.png')}
                            alt="Onze mindset"
                        />
                    </Col>
                </Row>
            </Container>
        </Wrapper>
        <Process />
        <Container>
            <NewsletterSubscribe />
        </Container>
    </Layout>
);

export default Home;
