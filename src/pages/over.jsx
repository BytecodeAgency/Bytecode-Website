import React from 'react';
import Layout from '../layouts/MainLayout';
import TextBlock from '../containers/TextBlock/TextBlock';
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
            img={require('../images/img/content/teamv2.png')}
            subtitle="Over ons"
            title="Partner in jouw ambities"
            text="Bytecode is collectief van ontwikkelaars, ontwerpers, researchers en marketeers die zoeken naar nieuwe manieren en inzichten om de digitale wereld naar jouw hand te zetten. Zo kunnen binnen jouw onderneming randzaken en repetitieve taken weggelaten worden en geven wij jou de vrijheid dingen te doen die echt een verschil maken. "
            width={80}
            align="flex-end"
            hero
        />
        <Container>
            <Row gutterWidth={100} justify="center" align="center">
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
                    img={require('../images/img/team/jeroen.jpg')}
                    link="https://jeroenvansteijn.nl"
                    email="mailto:jeroen@bytecode.nl"
                    github="https://github.com/JeroenVanSteijn"
                    instagram="https://www.instagram.com/jjvansteijn"
                    linkedin="https://www.linkedin.com/in/jjvansteijn"
                />
                <TeamMember
                    name="Luciano Nooijen"
                    title="Co-founder &amp; Technical lead"
                    img={require('../images/img/team/luciano.jpg')}
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
                    img={require('../images/img/team/thomas.jpg')}
                    email="mailto:thomas@bytecode.nl"
                    instagram="https://www.instagram.com/thomasbodje"
                    linkedin="https://www.linkedin.com/in/thomasbodlaender"
                />

                <TeamMember
                    name="Robin van Zeelst"
                    title="Online Marketeer"
                    img={require('../images/img/team/robin.jpg')}
                    email="mailto:robin@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/robin-van-zeelst/"
                />
                <TeamMember
                    name="Julian van Dijk"
                    title="Full-stack developer web &amp; mobiel"
                    img={require('../images/img/team/julian.jpg')}
                    email="mailto:julian@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/julian-v-66b098116"
                />
                <TeamMember
                    name="Nick Broekarts"
                    title="Partner &amp; Business Developer"
                    img={require('../images/img/team/nick.jpg')}
                    email="mailto:nick@bytecode.nl"
                    instagram="https://www.instagram.com/nickbroekarts"
                    linkedin="https://www.linkedin.com/in/nickbroekarts"
                />
                <TeamMember
                    name="Suzanne De Vries"
                    title="Marketing &amp; Communicatie"
                    img={require('../images/img/team/suzanne.jpg')}
                    email="mailto:suzanne@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/suzanne-de-vries-11b088149/"
                />
                <TeamMember
                    name="Tiko"
                    title="Marketing &amp; Communicatie"
                    img={require('../images/img/team/tiko.jpg')}
                    email="mailto:tiko@bytecode.nl"
                />
                <TeamMember
                    name="Nawin"
                    title="Marketing &amp; Communicatie"
                    img={require('../images/img/team/nawin.jpg')}
                    email="mailto:nawin@bytecode.nl"
                />
                <TeamMember
                    name="Chis"
                    title="Marketing &amp; Communicatie"
                    img={require('../images/img/team/chirs.jpg')}
                    email="mailto:chris@bytecode.nl"
                />
                <TeamMember
                    name="Richard van 't Hof"
                    title="Ontwerper &amp; front-end developer"
                    img={require('../images/img/team/richard.jpg')}
                    email="mailto:richard@bytecode.nl"
                    link="https://www.therichard.space"
                    linkedin="https://www.linkedin.com/in/richard-van-t-hof"
                    behance="https://www.behance.net/therichartspace"
                    github="https://www.github.com/RichART-Official"
                />
            </Row>
        </Container>
        <Container>
            <ContactForm />
        </Container>
    </Layout>
);

export default Over;
