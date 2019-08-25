import React from 'react';
import Layout from '../layouts/MainLayout';
import TextBlock from '../components/TextBlock';
import ImageBlock from '../components/ImageBlock';
import ContentPageHeader from '../components/ContentPageHeader';
import TeamMember from '../components/TeamMember';
import { Container, Row, Col } from '../lib/Grid';
import ContactForm from '../components/ContactForm';
import Wrapper from '../components/Wrapper';

const pageSettings = {
    title: `Over ons - Bytecode Digital Agency |
        Wie zijn de drijvende krachten achter Bytecode?`,
    description: `Over ons. Wie of wat is Bytecode? Wat is onze missie
     en hoe willen wij die bereiken? Kom meer te weten of het Bytecode-team!`,
    keywords: 'over ons',
};

const Over = () => (
    <Layout pageSettings={pageSettings}>
        <ContentPageHeader
            img={require('../images/img/content/team.png')}
            subtitle="Over ons"
            title="Het Bytecode team."
            text="Hoi, wij zijn het Bytecode team. Aangenaam kennis te maken!"
            bgSize="80%"
        />
        <Container fluid>
            <Row justify="center" align="center">
                <Col>
                    <TextBlock
                        subtitle="Onze Visie"
                        title="Problemen oplossen met de nieuwste technieken,
                        om zo waarde te creëren voor jouw business."
                        headingType="h2"
                    />
                </Col>
                <Col>
                    <p>
                        Door eerst de problemen te analyseren en doelen te
                        stellen zorgen we voor resultaat, en voorkomen we
                        veelgemaakte fouten. We weten waarom een project nodig
                        is, niet alleen hoe het gemaakt moet worden, en helpen
                        daarnaast bij het duidelijk maken van de ‘waarom’ als
                        deze nog niet is vastgesteld. Zo zorgen we ervoor dat we
                        mee kunnen denken tijdens een project, en nieuwe ideeën
                        aan kunnen dragen.
                    </p>
                </Col>
            </Row>
        </Container>
        <ImageBlock
            src={require('../images/img/content/cards.jpg')}
            alt="A fun day at the office"
        />
        <Container fluid>
            <Row justify="center" align="center">
                <Col md={12} lg={5} xl={4}>
                    <TextBlock
                        subtitle="Het team"
                        alt="Het team"
                        title="Unieke perspectieven door unieke personen"
                        headingType="h2"
                    >
                        Ons hechte team werkt keihard om jouw doelen te
                        bereiken! Door onze multidisciplinaire kennis versterken
                        we elkaar en delen we onze ervaring. Daarnaast krijgt
                        iedereen ruimte tot inspraak in de toekomst van Bytecode
                        en om bij te dragen aan vrije software projecten,
                        waardoor we niet alleen gebruik maken van de nieuwste
                        technieken, maar er ook aan bijdragen.`
                    </TextBlock>
                </Col>
                <TeamMember
                    name="Jeroen van Steijn"
                    title="Co-founder &amp; software consultant"
                    img={require('../images/img/team/jeroen.png')}
                    email="mailto:jeroen@bytecode.nl"
                    github="https://github.com/JeroenVanSteijn"
                    instagram="https://www.instagram.com/jjvansteijn"
                    linkedin="https://www.linkedin.com/in/jjvansteijn"
                />
                <TeamMember
                    name="Luciano Nooijen"
                    title="Co-founder &amp; software consultant"
                    img={require('../images/img/team/luciano.png')}
                    link="https://lucianonooijen.nl"
                    email="mailto:luciano@bytecode.nl"
                    github="https://github.com/lucianonooijen"
                    linkedin="https://www.linkedin.com/in/lucianonooijen"
                />
            </Row>
            <Row>
                <TeamMember
                    name="Julian van Dijk"
                    title="Full-stack developer web &amp; mobiel"
                    img={require('../images/img/team/julian.png')}
                    email="mailto:julian@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/julian-v-66b098116"
                />
                <TeamMember
                    name="Richard van 't Hof"
                    title="Designer &amp; front-end developer"
                    img={require('../images/img/team/richard.png')}
                    email="mailto:richard@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/richard-van-t-hof"
                />
                <TeamMember
                    name="Thomas Bodlaender"
                    title="Sales- &amp; accountmanager"
                    img={require('../images/img/team/thomas.png')}
                    email="mailto:thomas@bytecode.nl"
                    instagram="https://www.instagram.com/thomasbodje"
                    linkedin="https://www.linkedin.com/in/thomasbodlaender"
                />
                <TeamMember
                    name="Nick Broekarts"
                    title="Online marketeer &amp; SEO specialist"
                    img={require('../images/img/team/nick.png')}
                    email="mailto:nick@bytecode.nl"
                    instagram="https://www.instagram.com/nickbroekarts"
                    linkedin="https://www.linkedin.com/in/nickbroekarts"
                />
            </Row>
        </Container>
        <Container>
            <hr />
            <ContactForm />
        </Container>
    </Layout>
);

export default Over;
