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
                    title="Co-founder & software consultant"
                    img="/static/img/team/jeroen.png"
                    facebook="https://www.facebook.com/jjvansteijn"
                    twitter="https://twitter.com/jjvansteijn"
                    instagram="https://www.instagram.com/jjvansteijn"
                    linkedin="https://www.linkedin.com/in/jjvansteijn"
                />
                <TeamMember
                    name="Luciano Nooijen"
                    title="Co-founder & software consultant"
                    img="/static/img/team/luciano.png"
                    email="mailto:luciano@bytecode.nl"
                    // facebook="https://www.facebook.com/lucianonooijen"
                    twitter="https://twitter.com/lucianonooijen"
                    // instagram="https://www.instagram.com/lucianonooijen"
                    linkedin="https://www.linkedin.com/in/lucianonooijen"
                />
            </Row>
            <Row>
                <TeamMember
                    name="Julian van Dijk"
                    title="Full-stack developer web/mobiel"
                    img="/static/img/team/julian.png"
                    facebook="https://www.facebook.com/lucianonooijen"
                    twitter="https://twitter.com/lucianonooijen"
                    instagram="https://www.instagram.com/lucianonooijen"
                    linkedin="https://www.linkedin.com/in/lucianonooijen"
                />
                <TeamMember
                    name="Richard van 't Hof"
                    title="Designer &amp; front-end developer"
                    img="/static/img/team/richard.png"
                    facebook="https://www.facebook.com/richardvanthof"
                    twitter="https://twitter.com/richardvanthof"
                    instagram="https://www.instagram.com/richardvanthof"
                    linkedin="https://www.linkedin.com/in/richardvanthof"
                />
                <TeamMember
                    name="Thomas Bodlaender"
                    title="Sales- en accountmanager"
                    img="/static/img/team/thomas.png"
                    facebook="https://www.facebook.com/richardvanthof"
                    twitter="https://twitter.com/richardvanthof"
                    instagram="https://www.instagram.com/richardvanthof"
                    linkedin="https://www.linkedin.com/in/richardvanthof"
                />
                <TeamMember
                    name="Nick Broekarts"
                    title="Online marketeer &amp; SEO specialist"
                    img="/static/img/team/nick.png"
                    facebook="https://www.facebook.com/richardvanthof"
                    twitter="https://twitter.com/richardvanthof"
                    instagram="https://www.instagram.com/richardvanthof"
                    linkedin="https://www.linkedin.com/in/richardvanthof"
                />
            </Row>
        </Container>
        <Wrapper>
            <ContactForm />
        </Wrapper>
    </Layout>
);

export default Over;
