/* eslint-disable max-len */

import styled from 'styled-components';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import ContactForm from '../components/ContactForm';
import ImageBlock from '../components/ImageBlock';

const HeaderContainer = styled.section`
    margin: 10rem 5% 5% 5%;
    padding: 2%;
    @media (min-width: ${theme.breakpointMobileMenu}) {
        margin: 0% 0% 2% 5%;
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
`;

const ContentBlockWrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 5% 0% 5% 5%;
    padding: 7.5% 5%;
`;

const ProcessStepImage = styled.img`
    height: 60rem;
    max-height: 30vh;
    margin-bottom: 5rem;
    @media (max-width: ${theme.breakpoints[2]}px) {
        margin-top: 10rem;
    }
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

const ArticleContent = styled(Container)`
    background-color: ${theme.colors.secondary};
`

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
                        setting you up for te best results. Constantly
                        analyzing and refining the strategy. Connecting
                        and reconnecting the dots. Just for that maximum
                        result. So you can do what you like best."
                    />
                </Col>
            </Row>
        </HeaderContainer>
        <ContentBlockWrapper>
            <Row>
                <Col md={4} lg={3}>
                    <ProcessStepImage
                        src="/static/img/content/workflow/analyze.svg"
                        alt="Analyze"
                    />
                    <TextBlock
                        subtitle="Stap 1"
                        headingType="h2"
                        title="Analyze"
                    >
                        Voordat we starten met ontwikkelen, maken we eerst een
                        gedetailleerde analyse. Dit stelt ons in staat om een
                        helder en volledig overzicht te krijgen van de huidige
                        situatie. Hierdoor kunnen wij de pijnpunten in beeld
                        brengen en analyseren welke punten het meeste prioriteit
                        hebben.
                    </TextBlock>
                </Col>
                <Col offset={{ lg: 1 }} md={4} lg={3}>
                    <ProcessStepImage
                        src="/static/img/content/workflow/strategize.svg"
                        alt="Strategize"
                    />
                    <TextBlock
                        subtitle="Stap 2"
                        headingType="h2"
                        title="Strategize"
                    >
                        Vervolgens maken wij een duidelijke strategie, waarin we
                        uiteenzetten welke punten we aan gaan pakken en vooral
                        op welke manier we dat doen. Bij het ontwikkelen van
                        deze strategie wegen we de verschillende opties af,
                        zodat we het best haalbare resultaat met het oog op de
                        toekomst gaan halen.
                    </TextBlock>
                </Col>
                <Col offset={{ lg: 1 }} md={4} lg={3}>
                    <ProcessStepImage
                        src="/static/img/content/workflow/realize.svg"
                        alt="Realize"
                    />
                    <TextBlock
                        subtitle="Stap 3"
                        headingType="h2"
                        title="Realize"
                    >
                        Nadat we alles helemaal hebben geanalyseerd en gepland,
                        is het tijd om de handen uit de mouwen te steken en het
                        plan te realiseren. Hierbij werken we volgens de
                        scrum-methode. Op het moment dat het plan uitgevoerd is,
                        is het tijd om het resultaat te analyzeren en om te
                        kijken hoe het nóg beter kan. We blijven dus verbeteren
                        en doorontwikkelen.
                    </TextBlock>
                </Col>
            </Row>
        </ContentBlockWrapper>
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
                    {/* <IconTextHorizontal
                        icon="/static/icons/services/website.svg"
                        alt="websites"
                        title="Websites & webapps"
                        headingType="h3"
                        subtitle=""
                        content="Ons gepassioneerde team helpt je dolgraag met
                        het bedenken en ontwikkelen van alles wat jij
                        nodig hebt om je digitaal volledig te
                        ontplooien."
                        margin=""
                    /> */}
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

                <Col fluid offset={{ xl: 1 }} lg={6}>
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
