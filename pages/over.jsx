import styled from 'styled-components';
import Layout from '../components/Layout';
import theme from '../styles/theme';

import TextBlock from '../components/TextBlock';
import ImageBlock from '../components/ImageBlock';
import ContentPageHeader from '../components/ContentPageHeader';
import TeamMember from '../components/TeamMember';
import { Container, Row, Col } from '../lib/Grid';

/* eslint-disable */
const pageSettings = {
    title:
        'Over ons - Bytecode Digital Agency | Wie zijn de drijvende krachten achter Bytecode?',
    description:
        'Over ons. Wie of wat is Bytecode? Wat is onze missie en hoe willen wij die bereiken? Kom meer te weten of het Bytecode-team!',
    keywords: 'over ons',
};
/* eslint-enable */

const StyledContainer = styled(Container)`
    margin-top: 10rem;
    margin-bottom: 10rem;
    max-width: none !important;
    margin: 10rem 0rem;
`;

const ContentBlockWrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    padding: 5% 0%;
    margin: 5% 0% 5% 5%;
`;

const PaddedColumn = styled(Col)`
    padding: 12% 0 15% 0;
`;

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
        <ContentPageHeader />
        <StyledContainer>
            <Row>
                <PaddedColumn xl={4} lg={5} md={6}>
                    <TextBlock
                        title="De titel maar dan een hele erge fucking lange
                        titel waar geen einde aan lijkt te komen"
                        headingType="h2"
                    >
                        {loremipsum}
                    </TextBlock>
                </PaddedColumn>
            </Row>
        </StyledContainer>
        {/* eslint-disable max-len */}
        <ImageBlock
            src="https://www.grafixarts.com/wp-content/uploads/2018/06/gfx_shrink_artist_sheets_fan_julie.jpg"
            alt="Funny stuff"
        />
        <ContentBlockWrapper>
            <StyledContainer>
                <Row>
                    <Col md={6}>
                        <TextBlock
                            subtitle="Het Team"
                            alt="I'm different!"
                            title="De titel maar dan een hele erge fucking lange
                            titel waar geen einde aan lijkt te komen"
                            headingType="h2"
                        >
                            {loremipsum}
                        </TextBlock>
                    </Col>
                </Row>
                <Container fluid={true}>
                    <Row>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder &amp; full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder &amp; full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder &amp; full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder &amp; full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder &amp; full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder &amp; full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                    </Row>
                </Container>
            </StyledContainer>
        </ContentBlockWrapper>
    </Layout>
);

export default Over;
