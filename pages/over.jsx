import Layout from '../components/Layout';

import TextBlock from '../components/TextBlock';
import ImageBlock from '../components/ImageBlock';
import ContentPageHeader from '../components/ContentPageHeader';
import TeamMember from '../components/TeamMember';
import { Container, Row, Col } from '../lib/Grid';
import ContactForm from '../components/ContactForm';

/* eslint-disable */
const pageSettings = {
    title:
        'Over ons - Bytecode Digital Agency | Wie zijn de drijvende krachten achter Bytecode?',
    description:
        'Over ons. Wie of wat is Bytecode? Wat is onze missie en hoe willen wij die bereiken? Kom meer te weten of het Bytecode-team!',
    keywords: 'over ons',
};
/* eslint-enable */

const loremipsum = `Lorem ipsum dolor sit
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
            title="De titel maar dan een hele erge fucking lange
            titel waar geen einde aan lijkt te komen"
            button="read more"
        >
            {loremipsum}
        </ContentPageHeader>
        {/* eslint-disable max-len */}
        <Container fluid>
            <Row>
                <Col
                    offset={({ md: 0 }, { lg: 1 }, { xl: 2 })}
                    md={6}
                    lg={5}
                    xl={3}
                >
                    <TextBlock
                        subtitle="Onze Visie"
                        alt="I'm different!"
                        title="De titel maar dan een hele erge fucking lange
                            titel waar geen einde aan lijkt te komen"
                        headingType="h2"
                    />
                </Col>
                <Col offset={{ md: 0, lg: 1, xl: 1 }} md={6} lg={5} xl={4}>
                    <p>{loremipsum}</p>
                </Col>
            </Row>
        </Container>
        <ImageBlock
            src="static/img/content/interior.jpg"
            alt="A fun day at the office"
        />
        <Container fluid>
            <Row>
                <Col
                    offset={({ md: 0 }, { lg: 0 }, { xl: 1 })}
                    md={6}
                    lg={6}
                    xl={4}
                >
                    <TextBlock
                        subtitle="Het team"
                        alt="I'm different!"
                        title="Unieke perspectieven door unieke personen"
                        headingType="h2"
                    >
                        {loremipsum}
                    </TextBlock>
                </Col>
            </Row>
            <Row>
                <Col
                    offset={({ md: 0 }, { lg: 1 }, { xl: 1 })}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                >
                    <TeamMember
                        name="Richard van 't Hof"
                        title="Art-Director &amp; front-end developer"
                        img="/static/img/team/Richard.png"
                    />
                </Col>
                <Col
                    offset={({ md: 0 }, { lg: 1 }, { xl: 0.25 })}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                >
                    <TeamMember
                        name="Jeroen van Steijn"
                        title="Co-founder & software-consultant"
                        img="/static/img/team/Jeroen.png"
                    />
                </Col>
                <Col
                    offset={({ md: 0 }, { lg: 1 }, { xl: 0.25 })}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                >
                    <TeamMember
                        name="Luciano Nooijen"
                        title="Co-founder & software-consultant"
                        img="/static/img/team/Luciano.png"
                    />
                </Col>
                {/* <Col
                    offset={({ md: 0 }, { lg: 1 }, { xl: .25 })}
                    sm={6}
                    md={4}
                    lg={3}
                    xl={2}
                >
                    <TeamMember
                        name="Thomas Bodlaender"
                        title="Sales & copywriting"
                        img="/static/img/team/thomas.png"
                        alt="Een foto van Thomas moet nog gemaakt worden."
                    />
                </Col> */}
            </Row>
        </Container>
        <ContactForm />
    </Layout>
);

export default Over;
