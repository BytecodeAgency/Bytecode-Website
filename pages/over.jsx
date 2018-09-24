import styled from 'styled-components';
import Layout from '../components/Layout';
import theme from '../styles/theme';

import TextBlock from '../components/TextBlock';
import ImageBlock from '../components/ImageBlock';
import ContentPageHeader from '../components/ContentPageHeader';
import TeamMember from '../components/TeamMember';
import { Container, Row, Col } from '../lib/Grid';

const StyledContainer = styled(Container)`
    margin-top: 10rem;
    margin-bottom: 10rem;
`;

const pageSettings = {
    title: 'Cases',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const ContentBlockWrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    padding: 5% 0%;
    margin: 5% 0% 5% 5%;
`;

const loremipsum = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Asperiores itaque inventore sequi tempora amet dolore voluptas? Natus eius
repellendus tempora reiciendis ea tempore dolorum temporibus quisquam fuga
magni. Quis quam, recusandae, iste, deleniti cum esse distinctio omnis sequi
nemo iusto tempore nobis hic nesciunt perspiciatis sunt laboriosam corrupti a
mollitia? `;

const Over = () => (
    <Layout pageSettings={pageSettings}>
        <ContentPageHeader />
        <StyledContainer>
            <Row>
                <Col md={6}>
                    <TextBlock
                        title="De titel maar dan een hele erge fucking lange
                        titel waar geen einde aan lijkt te komen"
                        headingType="h2"
                    >
                        {loremipsum}
                    </TextBlock>
                </Col>
            </Row>
        </StyledContainer>
        <ImageBlock src="/static/img/content/interior.png" alt="Funny stuff" />
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
                <StyledContainer>
                    <Row>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder & full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder & full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder & full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder & full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder & full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                        <Col md={3} xs={6}>
                            <TeamMember
                                name="Jeroen van Steijn"
                                title="Co-founder & full-stack developer"
                                img="/static/img/team/Jeroen.png"
                                alt="A photo of Jeroen van steijn"
                            />
                        </Col>
                    </Row>
                </StyledContainer>
            </StyledContainer>
        </ContentBlockWrapper>
    </Layout>
);

export default Over;
