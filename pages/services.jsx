/* eslint-disable max-len */

import styled from 'styled-components';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import ContactForm from '../components/ContactForm';
import ImageBlock from '../components/ImageBlock';
import Process from '../components/Process';

const HeaderContainer = styled.section`
    margin: 10rem 5% 5% 5%;
    padding: 2%;
    @media (min-width: ${theme.breakpointMobileMenu}) {
        margin: 0% 0% 5% 5%;
        padding: 25vh 2% 25vh 5%;
    }
`;

const StyledContainer = styled(Container)`
    margin: 10% 10% 5% 10% !important;
`;

const AbsoluteCol = styled(Col)`
    top: 0px;
    right: 0px;
    max-width: none;
    position: absolute;
`;

const HeaderFigure = styled.figure`
    position: absolute;
    right: 10vw;
    top: 0rem;
    opacity: 0.2;
    width: 60%;
    height: 100%;
`;

const HeaderImage = styled.img`
    position: relative;
    right: -10rem;
    top: -75rem;
    overflow: hidden;
    width: 100%
    height: 100%;
    z-index: -1;
`;

const ContentBlockWrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 5% 0% 5% 5%;
    padding: 7.5% 5%;
`;

const Icon = styled.img`
    padding: 20%;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        max-width: 75%;
    }
`;

const pageSettings = {
    title: 'Services',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const Over = () => (
    <Layout pageSettings={pageSettings}>
        <HeaderContainer>
            <AbsoluteCol>
                <Hidden xs sm>
                    <HeaderFigure>
                        <HeaderImage
                            alt="Bytecode web"
                            src="/static/img/header/web.svg"
                        />
                    </HeaderFigure>
                </Hidden>
            </AbsoluteCol>
            <Row>
                <Col md={10} lg={6} xl={5}>
                    <TextBlock
                        subtitle="Services"
                        title="It’s not about technique. Not about certain
                        frameworks nor features nor platforms. It is about
                        setting you up for te best results."
                    />
                </Col>
            </Row>
        </HeaderContainer>
        <Process />
        <StyledContainer>
            <Row>
                <Col lg={5} md={6}>
                    <TextBlock title="Web & mobiel" headingType="h2">
                        Ons gepassioneerde team helpt je dolgraag met het
                        bedenken en ontwikkelen van alles wat jij nodig hebt om
                        je digitaal volledig te ontplooien.
                    </TextBlock>
                </Col>
            </Row>
        </StyledContainer>
        <ImageBlock src="/static/img/content/group-full.jpg" alt="groep" />
        <StyledContainer>
            <Row>
                <Col offset={{ xl: 1 }} lg={5} md={6}>
                    <Row>
                        <Col lg={3}>
                            <Icon
                                src="/static/icons/services/website.svg"
                                alt="Websites & Webapps"
                            />
                        </Col>

                        <Col lg={9}>
                            <TextBlock
                                title="Websites & Webapps"
                                headingType="h3"
                            >
                                Ons gepassioneerde team helpt je dolgraag met
                                het bedenken en ontwikkelen van alles wat jij
                                nodig hebt om je digitaal volledig te
                                ontplooien.
                            </TextBlock>
                        </Col>
                    </Row>
                </Col>

                <Col offset={{ lg: 1 }} lg={5} md={6}>
                    <Row>
                        <Col lg={3}>
                            <Icon
                                src="/static/icons/services/ecommerce.svg"
                                alt="advertising"
                            />
                        </Col>

                        <Col lg={9}>
                            <TextBlock title="E-commerce" headingType="h3">
                                Ons gepassioneerde team helpt je dolgraag met
                                het bedenken en ontwikkelen van alles wat jij
                                nodig hebt om je digitaal volledig te
                                ontplooien.
                            </TextBlock>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col offset={{ xl: 1 }} lg={5} md={6}>
                    <Row>
                        <Col lg={3}>
                            <Icon
                                src="/static/icons/services/mobile.svg"
                                alt="advertising"
                            />
                        </Col>

                        <Col lg={9}>
                            <TextBlock
                                title="Mobiele applicaties"
                                headingType="h3"
                            >
                                Ons gepassioneerde team helpt je dolgraag met
                                het bedenken en ontwikkelen van alles wat jij
                                nodig hebt om je digitaal volledig te
                                ontplooien.
                            </TextBlock>
                        </Col>
                    </Row>
                </Col>

                <Col offset={{ lg: 1 }} lg={5} md={6}>
                    <Row>
                        <Col lg={3}>
                            <Icon
                                src="/static/icons/services/ui.svg"
                                alt="advertising"
                            />
                        </Col>

                        <Col lg={9}>
                            <TextBlock title="UX/UI-Design" headingType="h3">
                                Ons gepassioneerde team helpt je dolgraag met
                                het bedenken en ontwikkelen van alles wat jij
                                nodig hebt om je digitaal volledig te
                                ontplooien.
                            </TextBlock>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </StyledContainer>
        <StyledContainer>
            <Row>
                <Col lg={5} md={6}>
                    <TextBlock title="Web & mobiel" headingType="h2">
                        Ons gepassioneerde team helpt je dolgraag met het
                        bedenken en ontwikkelen van alles wat jij nodig hebt om
                        je digitaal volledig te ontplooien. Ons gepassioneerde
                        team helpt je dolgraag met het bedenken en ontwikkelen
                        van alles wat jij nodig hebt om je digitaal volledig te
                        ontplooien. Ons gepassioneerde team helpt je dolgraag
                        met het bedenken en ontwikkelen van alles wat jij nodig
                        hebt om je digitaal volledig te ontplooien.
                    </TextBlock>
                </Col>
            </Row>
        </StyledContainer>
        <StyledContainer>
            <Row>
                <Col lg={5}>
                    <Row>
                        <Col lg={3}>
                            <Icon
                                src="/static/icons/services/api.svg"
                                alt="advertising"
                            />
                        </Col>

                        <Col lg={9}>
                            <TextBlock title="API-development" headingType="h3">
                                Ons gepassioneerde team helpt je dolgraag met
                                het bedenken en ontwikkelen van alles wat jij
                                nodig hebt om je digitaal volledig te
                                ontplooien.
                            </TextBlock>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={3}>
                            <Icon
                                src="/static/icons/services/devops.svg"
                                alt="advertising"
                            />
                        </Col>

                        <Col lg={9}>
                            <TextBlock
                                title="Devops & cloudcomputing"
                                headingType="h3"
                            >
                                Ons gepassioneerde team helpt je dolgraag met
                                het bedenken en ontwikkelen van alles wat jij
                                nodig hebt om je digitaal volledig te
                                ontplooien.
                            </TextBlock>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={3}>
                            <Icon
                                src="/static/icons/services/automation.svg"
                                alt="advertising"
                            />
                        </Col>

                        <Col lg={9}>
                            <TextBlock
                                title="IT-automatisering"
                                headingType="h3"
                            >
                                Ons gepassioneerde team helpt je dolgraag met
                                het bedenken en ontwikkelen van alles wat jij
                                nodig hebt om je digitaal volledig te
                                ontplooien.
                            </TextBlock>
                        </Col>
                    </Row>
                </Col>

                <Col fluid="true" offset={{ xl: 1 }} lg={6}>
                    <ImageBlock
                        src="/static/img/content/group-full.jpg"
                        alt="groep"
                    />
                </Col>
            </Row>
        </StyledContainer>
        <StyledContainer>
            <Row>
                <Col lg={5} md={6}>
                    <TextBlock title="Branding & Design" headingType="h2">
                        Ons gepassioneerde team helpt je dolgraag met het
                        bedenken en ontwikkelen van alles wat jij nodig hebt om
                        je digitaal volledig te ontplooien.
                    </TextBlock>
                </Col>
                <Col offset={{ lg: 2 }} lg={4} md={6}>
                    <img src="/static/img/services/design.jpg" alt="design" />
                </Col>
            </Row>
            <Row>
                <Col lg={5} md={6}>
                    <Row>
                        <Col lg={3}>
                            <Icon
                                src="/static/icons/services/design.svg"
                                alt="design"
                            />
                        </Col>

                        <Col lg={9}>
                            <TextBlock
                                title="Graphic Design & Branding"
                                headingType="h3"
                            >
                                Ons gepassioneerde team helpt je dolgraag met
                                het bedenken en ontwikkelen van alles wat jij
                                nodig hebt om je digitaal volledig te
                                ontplooien.
                            </TextBlock>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col lg={5} md={6}>
                    <Row>
                        <Col lg={3}>
                            <Icon
                                src="/static/icons/services/advertise.svg"
                                alt="advertising"
                            />
                        </Col>

                        <Col lg={9}>
                            <TextBlock
                                title="Digital Advertising"
                                headingType="h3"
                            >
                                Ons gepassioneerde team helpt je dolgraag met
                                het bedenken en ontwikkelen van alles wat jij
                                nodig hebt om je digitaal volledig te
                                ontplooien.
                            </TextBlock>
                        </Col>
                    </Row>
                </Col>

                <Col offset={{ lg: 1 }} lg={5} md={6}>
                    <Row>
                        <Col lg={3}>
                            <Icon
                                src="/static/icons/services/seo.svg"
                                alt="seo"
                            />
                        </Col>

                        <Col lg={9}>
                            <TextBlock
                                title="Zoekoptimalisatie"
                                headingType="h3"
                            >
                                Ons gepassioneerde team helpt je dolgraag met
                                het bedenken en ontwikkelen van alles wat jij
                                nodig hebt om je digitaal volledig te
                                ontplooien.
                            </TextBlock>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </StyledContainer>

        <ContentBlockWrapper>
            <TextBlock
                subtitle="We staan voor je klaar"
                headingType="h2"
                title="Stuur ons een berichtje"
            />
            <ContactForm />
        </ContentBlockWrapper>
    </Layout>
);

export default Over;
