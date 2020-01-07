import React from 'react';
import Layout from '../layouts/MainLayout';
import TextBlock from '../containers/TextBlock/TextBlock';
import ImageBlock from '../components/ImageBlock';
import ContentPageHeader from '../containers/ContentPageHeader/ContentPageHeader';
import TeamMember from '../containers/TeamMember/TeamMember';
import { Container, Row, Col } from '../lib/Grid';
import ContactForm from '../containers/ContactForm/ContactForm';

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
        <Container>
            <Row justify="center" align="center">
                <Col lg={4}>
                    <TextBlock
                        subtitle="Onze Visie"
                        title="Problemen oplossen met de nieuwste technieken,
                        om zo waarde te creëren voor jouw business."
                        headingType="h2"
                    />
                </Col>
                <Col lg={5} offset={{ lg: 1 }}>
                    <p>
                        Door eerst de problemen te analyseren en doelen te
                        stellen zorgen we voor resultaat en voorkomen we
                        veelgemaakte fouten. We weten waarom een project nodig
                        is, niet alleen hoe het gemaakt moet worden en helpen
                        daarnaast bij het duidelijk maken van de ‘waarom’ als
                        deze nog niet is vastgesteld. Zo zorgen we ervoor dat we
                        mee kunnen denken tijdens een project en nieuwe ideeën
                        aan kunnen dragen.
                    </p>
                </Col>
            </Row>
        </Container>
        <ImageBlock
            src={require('../images/img/content/cards.jpg')}
            alt="A fun day at the office"
        />
        <Container>
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
                        technieken, maar er ook aan bijdragen.
                    </TextBlock>
                </Col>
                <TeamMember
                    name="Jeroen van Steijn"
                    title="Co-founder &amp; Operations manager"
                    img={require('../images/img/team/jeroen.png')}
                    link="https://jeroenvansteijn.nl"
                    email="mailto:jeroen@bytecode.nl"
                    github="https://github.com/JeroenVanSteijn"
                    instagram="https://www.instagram.com/jjvansteijn"
                    linkedin="https://www.linkedin.com/in/jjvansteijn"
                />
                <TeamMember
                    name="Luciano Nooijen"
                    title="Co-founder &amp; Technical lead"
                    img={require('../images/img/team/luciano.png')}
                    link="https://lucianonooijen.nl"
                    email="mailto:luciano@bytecode.nl"
                    github="https://github.com/lucianonooijen"
                    linkedin="https://www.linkedin.com/in/lucianonooijen"
                />
            </Row>
            <Row>
                {/* TODO: Generate from array, maybe later change via dashb. */}
                <TeamMember
                    name="Thomas Bodlaender"
                    title="Sales- &amp; accountmanager"
                    img={require('../images/img/team/thomas.png')}
                    email="mailto:thomas@bytecode.nl"
                    instagram="https://www.instagram.com/thomasbodje"
                    linkedin="https://www.linkedin.com/in/thomasbodlaender"
                />
                <TeamMember
                    name="Richard van 't Hof"
                    title="Designer &amp; front-end developer"
                    img={require('../images/img/team/richard.png')}
                    email="mailto:richard@bytecode.nl"
                    link="https://www.therichart.space"
                    linkedin="https://www.linkedin.com/in/richard-van-t-hof"
                    behance="https://www.behance.net/therichartspace"
                    github="https://www.github.com/RichART-Official"
                />
                <TeamMember
                    name="Julian van Dijk"
                    title="Full-stack developer web &amp; mobiel"
                    img={require('../images/img/team/julian.png')}
                    email="mailto:julian@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/julian-v-66b098116"
                />
                <TeamMember
                    name="Nick Broekarts"
                    title="Partner &amp; Business Developer"
                    img={require('../images/img/team/nick.png')}
                    email="mailto:nick@bytecode.nl"
                    instagram="https://www.instagram.com/nickbroekarts"
                    linkedin="https://www.linkedin.com/in/nickbroekarts"
                />
                <TeamMember
                    name="Robin van Zeelst"
                    title="Online Marketeer"
                    img={require('../images/img/team/robin.png')}
                    email="mailto:robin@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/robin-van-zeelst/"
                />
                <TeamMember
                    name="Suzanne De Vries"
                    title="Marketing &amp; Communicatie"
                    img={require('../images/img/team/suzanne.png')}
                    email="mailto:suzanne@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/suzanne-de-vries-11b088149/"
                />
            </Row>
        </Container>
        <Container>
            <ContactForm />
        </Container>
    </Layout>
);

export default Over;
