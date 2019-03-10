import styled from 'styled-components';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import Thumbnail from '../components/Thumbnail';
import ContactForm from '../components/ContactForm';
import Process from '../components/Process';
import ContentPageHeader from '../components/ContentPageHeader';

/* eslint-disable */
const pageSettings = {
    title: 'Bytecode Digital Agency B.V. | Vind de weg naar jouw digitale succes!',
    description: 'Bytecode Digital Agency B.V. | Gespecialiseerd in ✓Websites en Webshops ✓Webapps ✓Cloud ✓Automatisering ✓Mobiele apps ✓API ontwikkeling',
    keywords: 'bytecode, digital agency',
};
/* eslint-enable */
/* eslint-disable max-len */

const HeaderContainer = styled.section`
    background-color: ${theme.colors.mediumgray};
    padding: 4vh 2rem 3vh 2rem;

    @media (min-width: ${theme.breakpoints[1]}px) {
        margin: 0 0 0 2em;
        padding: 5vh 2% 7.5vh 5%;
    }
    @media (min-width: ${theme.breakpoints[2]}px) {
        margin: 0 0 0 2em;
        padding: 10vh 2% 15vh 2em;
    }
    @media (min-width: ${theme.breakpoints[3]}px) {
        margin: 0 0 0 8rem;
        padding: 25vh 2% 25vh 5%;
    }
`;

// const StyledContainer = styled(Container)`
//     margin: 10% !important;
//     @media (min-width: ${theme.breakpoints[2]}px) {
//         margin: 10% !important;
//     }
// `;

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
    width: 100%;
    height: 100%;
`;

const GroupImage = styled.img`
    margin-top: 4rem;
    width: 100%;
`;

const Home = () => (
    <Layout pageSettings={pageSettings}>
        <ContentPageHeader
            img="static/img/header/girl.jpg"
            subtitle="Welkom bij Bytecode"
            title="De makers van alles wt digitaal los en vast zit!"
            href="//bytecode.nl/contact"
            button="Lees verder"
        />
        <Container fluid>
            <Row>
                <Col offset={{ xl: 1 }} md={12} lg={5} xl={5}>
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
                <Col offset={{ lg: 1 }} md={12} lg={4}>
                    <TextBlock
                        subtitle="Hoe Bytecode kan helpen"
                        title="Samen halen we alles uit jouw digitale zelf"
                        href="//bytecode.nl/services"
                        button="Lees verder"
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
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <CenterAlignedRow>
                <Col offset={{ lg: 1 }} md={12} lg={4}>
                    <TextBlock
                        subtitle="Wie wij zijn"
                        title="Kennis en kwaliteit met een no-bullshit mentaliteit"
                        href="//bytecode.nl/services"
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
                <Col offset={{ lg: 1 }} md={12} lg={5}>
                    <GroupImage
                        width="700"
                        src="/static/img/content/team.png"
                        alt="Onze mindset"
                    />
                </Col>
            </CenterAlignedRow>
        </Container>
        <Process />
        <ContactForm />
    </Layout>
);

export default Home;
