import Layout from '../components/Layout';

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

const onzeVisie = `Lorem ipsum dolor sit
amet consectetur adipisicing elit.Asperiores
itaque inventore sequi tempora amet dolore
voluptas? Natus eius repellendus tempora
reiciendis ea tempore dolorum temporibus
quisquam fuga magni. Quis quam, recusandae,
iste, deleniti cum esse distinctio omnis sequi
nemo iusto tempore nobis hic nesciunt
perspiciatis sunt laboriosam corrupti
amollitia? `;

const Over = () => (
    <Layout pageSettings={pageSettings}>
        <ContentPageHeader
            img="/static/img/content/team.png"
            subtitle="Over ons"
            title="Het Bytecode team."
            text="Hoi, wij zijn het Bytecode team. Aangenaam kennis te maken!"
            button="read more"
            bgSize="80%"
        >
            {onzeVisie}
        </ContentPageHeader>
        <Container fluid>
            <Row>
                <Col offset={{ md: 0, lg: 1, xl: 2 }} md={6} lg={5} xl={3}>
                    <TextBlock
                        subtitle="Onze Visie"
                        title="De titel maar dan een hele erge fucking lange
                            titel waar geen einde aan lijkt te komen"
                        headingType="h2"
                    />
                </Col>
                <Col offset={{ md: 0, lg: 1, xl: 1 }} md={6} lg={5} xl={4}>
                    <p>{onzeVisie}</p>
                </Col>
            </Row>
        </Container>
        <ImageBlock
            src="/static/img/content/interior.jpg"
            alt="A fun day at the office"
        />
        <Container fluid>
            <Row>
                <Col offset={{ md: 0, lg: 1, xl: 1 }} md={12} lg={5} xl={4}>
                    <TextBlock
                        subtitle="Het team"
                        alt="Het team"
                        title="Unieke perspectieven door unieke personen"
                        headingType="h2"
                    >
                        {onzeVisie}
                    </TextBlock>
                </Col>
                <TeamMember
                    name="Jeroen van Steijn"
                    title="Co-founder &amp; software consultant"
                    img="/static/img/team/jeroen.png"
                    email="mailto:jeroen@bytecode.nl"
                    github="https://github.com/JeroenVanSteijn"
                    instagram="https://www.instagram.com/jjvansteijn"
                    linkedin="https://www.linkedin.com/in/jjvansteijn"
                />
                <TeamMember
                    name="Luciano Nooijen"
                    title="Co-founder &amp; software consultant"
                    img="/static/img/team/luciano.png"
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
                    img="/static/img/team/julian.png"
                    email="mailto:julian@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/julian-v-66b098116"
                />
                <TeamMember
                    name="Richard van 't Hof"
                    title="Designer &amp; front-end developer"
                    img="/static/img/team/richard.png"
                    email="mailto:richard@bytecode.nl"
                    linkedin="https://www.linkedin.com/in/richard-van-t-hof"
                />
                <TeamMember
                    name="Thomas Bodlaender"
                    title="Sales- &amp; accountmanager"
                    img="/static/img/team/thomas.png"
                    email="mailto:thomas@bytecode.nl"
                    instagram="https://www.instagram.com/thomasbodje"
                    linkedin="https://www.linkedin.com/in/thomasbodlaender"
                />
                <TeamMember
                    name="Nick Broekarts"
                    title="Online marketeer &amp; SEO specialist"
                    img="/static/img/team/nick.png"
                    email="mailto:nick@bytecode.nl"
                    instagram="instagram.com/nickbroekarts"
                    linkedin="https://www.linkedin.com/in/nickbroekarts"
                />
            </Row>
        </Container>
        <Wrapper>
            <ContactForm />
        </Wrapper>
    </Layout>
);

export default Over;
