/* eslint-disable max-len */

import styled from 'styled-components';
import Layout from '../components/Layout';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col } from '../lib/Grid';
import Thumbnail from '../components/Thumbnail';
import CheckItem from '../components/Check';
import ContactForm from '../components/ContactForm';

const pageSettings = {
    title: 'Home',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const TextBlockContent = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores itaque inventore sequi tempora amet dolore voluptas? Natus eius repellendus tempora reiciendis ea tempore dolorum temporibus quisquam fuga magni. Quis quam, recusandae, iste, deleniti cum esse distinctio omnis sequi nemo iusto tempore nobis hic nesciunt perspiciatis sunt laboriosam corrupti a mollitia?
`;

const StyledContainer = styled(Container)`
    margin-top: 10rem;
    margin-bottom: 10rem;
`;

const Home = () => (
    <Layout pageSettings={pageSettings}>
        <StyledContainer>
            <Row>
                <Col md={6} lg={4}>
                    <TextBlock
                        subtitle="De subtitel komt hier"
                        title="De titel maar dan een hele erge fucking lange titel waar geen einde aan lijkt te komen"
                        href="//richardhotline.nl"
                        button="more"
                    >
                        {TextBlockContent}
                    </TextBlock>
                </Col>
                <Col md={6} lg={7}>
                    {/* TODO: Make this image display good on all devices */}
                    <img alt="" src="/static/img/header/web.svg" />
                </Col>
            </Row>
        </StyledContainer>
        <StyledContainer>
            <Row>
                <Col md={6} lg={7}>
                    <Row>
                        <Col xs={6}>
                            <Thumbnail />
                        </Col>
                        <Col xs={6}>
                            <Thumbnail />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <Thumbnail />
                        </Col>
                        <Col xs={6}>
                            <Thumbnail />
                        </Col>
                    </Row>
                </Col>
                <Col md={6} lg={4}>
                    <TextBlock
                        subtitle="De subtitel komt hier"
                        title="De titel maar dan een hele erge fucking lange titel waar geen einde aan lijkt te komen"
                        href="//richardhotline.nl"
                        button="more"
                    >
                        {TextBlockContent}
                    </TextBlock>
                </Col>
            </Row>
        </StyledContainer>
        <StyledContainer>
            <Row>
                <Col md={6} lg={5}>
                    <Row>
                        <TextBlock
                            subtitle="De subtitel komt hier"
                            title="De titel maar dan een hele erge fucking lange titel waar geen einde aan lijkt te komen"
                            href="//richardhotline.nl"
                            button="more"
                        >
                            {TextBlockContent}
                        </TextBlock>
                    </Row>
                    <Row>
                        <ul>
                            <CheckItem />
                            <CheckItem />
                            <CheckItem />
                        </ul>
                    </Row>
                </Col>
                <Col md={6} lg={7}>
                    <figure>
                        <img
                            // TODO: Make a dynamic way of setting the width with REM
                            width="700"
                            src="/static/img/content/group.jpg"
                            alt="The Bytecode team"
                        />
                    </figure>
                </Col>
            </Row>
        </StyledContainer>
        <StyledContainer>
            <Row>
                <Col md={4}>
                    <TextBlock
                        image="/static/img/content/group.jpg"
                        alt="This is us :)"
                        subtitle="Stap 1"
                        headingType="h2"
                        title="De titel maar dan een hele erge fucking lange titel waar geen einde aan lijkt te komen"
                        href="//richardhotline.nl"
                        button=""
                    >
                        {TextBlockContent}
                    </TextBlock>
                </Col>
                <Col md={4}>
                    <TextBlock
                        image="/static/img/content/group.jpg"
                        alt="This is us :)"
                        subtitle="Stap 2"
                        headingType="h2"
                        title="De titel maar dan een hele erge fucking lange titel waar geen einde aan lijkt te komen"
                        href="//richardhotline.nl"
                        button=""
                    >
                        {TextBlockContent}
                    </TextBlock>
                </Col>
                <Col md={4}>
                    <TextBlock
                        image="/static/img/content/group.jpg"
                        alt="This is us :)"
                        subtitle="Stap 3"
                        headingType="h2"
                        title="De titel maar dan een hele erge fucking lange titel waar geen einde aan lijkt te komen"
                        href="//richardhotline.nl"
                        button=""
                    >
                        {TextBlockContent}
                    </TextBlock>
                </Col>
            </Row>
        </StyledContainer>
        <StyledContainer>
            <ContactForm />
        </StyledContainer>
    </Layout>
);

export default Home;
