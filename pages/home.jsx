/* eslint-disable max-len */

import styled from 'styled-components';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import Thumbnail from '../components/Thumbnail';
import ContactForm from '../components/ContactForm';
import Process from '../components/Process';

const pageSettings = {
    title: 'Vind de weg naar jouw digitale succes - Bytecode Digital Agency',
    description: `Ons gepassioneerde team van ervaren experts helpt je dolgraag
        met het analyseren, bedenken en ontwikkelen van alles wat jij nodig hebt
        om je digitaal volledig te ontplooien`,
    keywords: 'bytecode',
};

const HeaderContainer = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 0% 0% 5% 5%;
    padding: 25vh 2% 25vh 5%;
`;

const StyledContainer = styled(Container)`
    margin: 10% !important;
`;

const AbsoluteCol = styled(Col)`
    top: 0px;
    right: 0px;
    max-width: none;
    position: absolute;
`;

const CenterAlignedRow = styled(Row)`
    align-items: center;
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

const GroupImage = styled.img`
    margin-top: 4rem;
    width: 70rem;
    max-width: 100%;
`;

const ContentBlockWrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 5% 0% 5% 5%;
    padding: 7.5% 5%;
`;

const Home = () => (
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
                <Col md={6} lg={4}>
                    <TextBlock
                        subtitle="Welkom bij Bytecode"
                        title="Vind de weg naar jouw digitale succes"
                        href="//bytecode.nl"
                        button="Lees verder"
                    >
                        Ons gepassioneerde team helpt je dolgraag met het
                        analyseren, bedenken en ontwikkelen van alles wat jij
                        nodig hebt om je digitaal volledig te ontplooien.
                    </TextBlock>
                </Col>
            </Row>
        </HeaderContainer>
        <StyledContainer>
            <Row>
                <Col md={12} lg={5}>
                    <Row>
                        <Col sm={6}>
                            <Thumbnail
                                serviceName="Websites, Webshops en Webapps"
                                serviceIcon="/static/icons/services/mobile.svg"
                                backgroundImage="/static/img/services/mobile.jpg"
                            />
                        </Col>
                        <Col sm={6}>
                            <Thumbnail
                                serviceName="Cloud en Automatisering"
                                serviceIcon="/static/icons/services/cloud.svg"
                                backgroundImage="/static/img/services/servers.jpg"
                            />
                        </Col>
                        <Col sm={6}>
                            <Thumbnail
                                serviceName="Mobile- en API-ontwikkeling"
                                serviceIcon="/static/icons/services/api.svg"
                                backgroundImage="/static/img/services/code.jpeg"
                            />
                        </Col>
                        <Col sm={6}>
                            <Thumbnail
                                serviceName="Branding, Design en Marketing"
                                serviceIcon="/static/icons/services/design.svg"
                                backgroundImage="/static/img/services/design.jpg"
                            />
                        </Col>
                    </Row>
                </Col>
                <Col offset={{ lg: 1 }} md={12} lg={5}>
                    <TextBlock
                        subtitle="Hoe Bytecode kan helpen"
                        title="Samen halen we alles uit jouw digitale zelf"
                        href="//bytecode.nl"
                        button="Lees verder"
                    >
                        Wij maken uitgebreide analyses en strategieën van alles
                        wat je nodigt hebt om je online ijzersterk te
                        presenteren en profileren. In combinatie met onze
                        expertise op het gebied van alle maatwerk
                        webontwikkeling en IT-automatisering, zorgt dit ervoor
                        dat je bij ons echt alles uit je digitale zelf kunt
                        halen.
                    </TextBlock>
                </Col>
            </Row>
        </StyledContainer>
        <StyledContainer>
            <CenterAlignedRow>
                <Col offset={{ lg: 0 }} md={4} lg={4}>
                    <TextBlock
                        subtitle="Wie wij zijn"
                        title="Kennis en kwaliteit met een no-bullshit mentaliteit"
                        href="//bytecode.nl"
                        button="Lees verder"
                    >
                        Wij staan voor een eerlijke en open samenwerking. We
                        werken met elkaar, niet langs elkaar. Ons zul je nooit
                        om de zaken heen zien draaien; wij vertellen je hoe het
                        zit en niet anders. Onze kennis en kwaliteit gebruiken
                        we niet om met moeilijke termen te smijten, maar in het
                        volledig vervullen van al je digitale wensen, om zo een
                        kwalitatief hoogstaand en optimaal functionerend product
                        op te leveren.
                    </TextBlock>
                </Col>
                <Col offset={{ lg: 1 }} md={5} lg={5}>
                    <GroupImage
                        width="700"
                        src="/static/img/content/group.jpg"
                        alt="Onze mindset"
                    />
                </Col>
            </CenterAlignedRow>
        </StyledContainer>
        <Process />
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

export default Home;
