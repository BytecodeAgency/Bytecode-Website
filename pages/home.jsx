import styled from 'styled-components';
import Layout from '../components/Layout';
import TextBlock from '../components/TextBlock';
import ContentPageHeader from '../components/ContentPageHeader';
import { Container, Row, Col } from '../lib/Grid';
import ContactForm from '../components/ContactForm';
import Process from '../components/Process';
import Thumbnail from '../components/Thumbnail';
import Wrapper from '../components/Wrapper';

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
            img="/static/img/header/web.svg"
            subtitle="Welkom bij Bytecode"
            title="Specialisten in maatwerk voor web en mobiel"
            href="/contact"
            usenextlink={true}
            button="Neem contact op"
            bgSize="70%"
            text="Bytecode Digital Agency is een kleinschalig full-service
            webbureau gespecialiseerd in maatwerkontwikkeling voor web en
            mobiel. Ons team help je dolgraag met het analyseren, bedenken en
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
                                serviceIcon="/static/icons/services/mobile.svg"
                                backgroundImage="
                                /static/img/services/mobile.jpg"
                            />
                        </Col>
                        <Col sm={6}>
                            <Thumbnail
                                serviceName="Cloud en Automatisering"
                                serviceIcon="/static/icons/services/cloud.svg"
                                backgroundImage="
                                /static/img/services/servers.jpg"
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
                                backgroundImage="
                                /static/img/services/design.jpg"
                            />
                        </Col>
                    </Row>
                </Col>
                <CenterAlignedCol offset={{ lg: 1 }} md={12} lg={5} xl={4}>
                    <TextBlock
                        subtitle="Hoe Bytecode kan helpen"
                        title="Samen halen we alles uit jouw digitale zelf"
                        href="/services"
                        usenextlink={true}
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
                            subtitle="Wie wij zijn"
                            title="
                            Kennis en kwaliteit met een no-bullshit mentaliteit"
                            href="/over"
                            usenextlink={true}
                            button="Meer over ons team"
                        >
                            Wij staan voor een eerlijke en open samenwerking. We
                            werken met elkaar, niet langs elkaar. Ons zul je
                            nooit om de zaken heen zien draaien; wij vertellen
                            je hoe het zit en niet anders. Onze kennis en
                            kwaliteit gebruiken we niet om met moeilijke termen
                            te smijten, maar in het volledig vervullen van al je
                            digitale wensen, om zo een kwalitatief hoogstaand en
                            optimaal functionerend product op te leveren.
                        </TextBlock>
                    </CenterAlignedCol>
                    <Col offset={{ lg: 1 }} md={12} lg={5}>
                        <GroupImage
                            width="700"
                            src="/static/img/content/team-700.png"
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
