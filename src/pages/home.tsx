import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../layouts/MainLayout' was resolved to '/h... Remove this comment to see the full error message
import Layout from '../layouts/MainLayout';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/TextBlock/TextBlock' was res... Remove this comment to see the full error message
import TextBlock from '../containers/TextBlock/TextBlock';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/ContentPageHeader/ContentPag... Remove this comment to see the full error message
import ContentPageHeader from '../containers/ContentPageHeader/ContentPageHeader';
import { Container, Row, Col } from '../lib/Grid';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/NewsletterSubscribe/Newslett... Remove this comment to see the full error message
import NewsletterSubscribe from '../containers/NewsletterSubscribe/NewsletterSubscribe';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Process/Process' was resolve... Remove this comment to see the full error message
import Process from '../containers/Process/Process';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Thumbnails/Thumbnail' was re... Remove this comment to see the full error message
import Thumbnail from '../containers/Thumbnails/Thumbnail';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/Wrapper' was resolved to '/h... Remove this comment to see the full error message
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout pageSettings={pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Row>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Col md={12} lg={6} xl={6}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Row gutterWidth={20}>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Col sm={6}>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <Thumbnail
                                serviceName="Websites, Webshops en Webapps"
                                serviceIcon={service1icon}
                                backgroundImage={service1bg}
                            />
                        </Col>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Col sm={6}>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <Thumbnail
                                serviceName="Cloud en Automatisering"
                                serviceIcon={service2icon}
                                backgroundImage={service2bg}
                            />
                        </Col>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Col sm={6}>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <Thumbnail
                                serviceName="Mobile- en API-ontwikkeling"
                                serviceIcon={service3icon}
                                backgroundImage={service3bg}
                            />
                        </Col>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Col sm={6}>
                            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                            <Thumbnail
                                serviceName="Design en Strategie"
                                serviceIcon={service4icon}
                                backgroundImage={service4bg}
                            />
                        </Col>
                    </Row>
                </Col>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <CenterAlignedCol offset={{ lg: 1 }} md={12} lg={5}>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Wrapper>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <Container>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Row justify="center" align="center">
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <CenterAlignedCol md={12} lg={5}>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Col offset={{ lg: 1 }} md={12} lg={6}>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <GroupImage
                            width="700"
                            src={require('../images/img/content/group.png')}
                            alt="Onze mindset"
                        />
                    </Col>
                </Row>
            </Container>
        </Wrapper>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Process />
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Container>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <NewsletterSubscribe />
        </Container>
    </Layout>
);

export default Home;
