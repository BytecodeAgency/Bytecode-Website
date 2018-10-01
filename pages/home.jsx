/* eslint-disable max-len */

import styled from 'styled-components';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import Thumbnail from '../components/Thumbnail';
import CheckItem from '../components/Check';
import ContactForm from '../components/ContactForm';

const pageSettings = {
    title: 'Home',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const TextBlockContent = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores itaque
inventore sequi tempora amet dolore voluptas? Natus eius repellendus tempora
reiciendis ea tempore dolorum temporibus quisquam fuga magni. Quis quam,
recusandae, iste, deleniti cum esse distinctio omnis sequi nemo iusto tempore
nobis hic nesciunt perspiciatis sunt laboriosam corrupti a mollitia?
`;

const HeaderContainer = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 0% 0% 5% 5%;
    padding: 25vh 2% 25vh 5%;
`;

const StyledContainer = styled(Container)`
    margin: 10% !important;
`;

const AbsoluteCol = styled(Col)`
    top: 0px;
    right: 0px;
    max-width: none;
    position: absolute;
`;

const HeaderFigure = styled.figure`
    position: absolute;
    right: 10vw;
    top: 0rem;
    opacity: 0.2;
    width: 60%;
    height: 100%;
`;

const HeaderImage = styled.img`
    position: relative;
    right: -10rem;
    top: -75rem;
    overflow: hidden;
    width: 100%
    height: 100%;
`;

const ContentBlockWrapper = styled.section`
    background-color: ${theme.colors.mediumgray};
    margin: 5% 0% 5% 5%;
    padding: 7.5% 5%;
`;

const EqualHeightImage = styled.img`
    height: 60rem;
    margin-bottom: 10rem;
`;

const Home = () => (
    <Layout pageSettings={pageSettings}>
        <HeaderContainer>
            <AbsoluteCol>
                <Hidden xs sm>
                    <HeaderFigure>
                        <HeaderImage
                            alt="Bytecode web"
                            src="/static/img/header/web.svg"
                        />
                    </HeaderFigure>
                </Hidden>
            </AbsoluteCol>
            <Row>
                <Col md={6} lg={4}>
                    <TextBlock
                        subtitle="Wij zijn bytecode"
                        title="Vind je weg naar jouw digitale success"
                        href="//richardhotline.nl"
                        button="Lean more"
                    >
                        Ons gepassioneerde team helpt je graag met het bedenken,
                        analyseren en ontwikkelen van alles wat je nodig hebt om
                        je online volledig te ontplooien
                    </TextBlock>
                </Col>
            </Row>
        </HeaderContainer>
        <StyledContainer>
            <Row>
                <Col md={12} lg={5}>
                    <Row>
                        <Col md={6}>
                            <Thumbnail />
                        </Col>
                        <Col md={6}>
                            <Thumbnail />
                        </Col>
                        <Col md={6}>
                            <Thumbnail />
                        </Col>
                        <Col md={6}>
                            <Thumbnail />
                        </Col>
                    </Row>
                </Col>
                <Col offset={{ lg: 1 }} md={12} lg={5}>
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
                <Col offset={{ lg: 0 }} md={5} lg={5}>
                    <figure>
                        <img
                            // TODO: Make a dynamic way of setting the width with REM
                            width="700"
                            src="/static/img/content/group.jpg"
                            alt="The Bytecode team"
                        />
                    </figure>
                </Col>

                <Col offset={{ lg: 1 }} md={4} lg={4}>
                    <Row>
                        <TextBlock
                            subtitle="De subtitel komt hier"
                            title="De titel maar dan een hele erge fucking lange titel waar geen einde aan lijkt te komen"
                            href="//richardhotline.nl"
                            button="more"
                        >
                            {TextBlockContent}
                        </TextBlock>
                        <ul>
                            <CheckItem />
                            <CheckItem />
                            <CheckItem />
                        </ul>
                    </Row>
                </Col>
            </Row>
        </StyledContainer>
        <ContentBlockWrapper>
            <Row>
                <Col md={4} lg={3}>
                    <EqualHeightImage
                        src="/static/img/content/workflow/analyse.svg"
                        alt="analyzing..."
                    />
                </Col>
                <Col offset={{ lg: 1 }} md={4} lg={3}>
                    <EqualHeightImage
                        src="/static/img/content/workflow/strategise.svg"
                        alt="analyzing..."
                    />
                </Col>
                <Col offset={{ lg: 1 }} md={4} lg={3}>
                    <EqualHeightImage
                        src="/static/img/content/workflow/execute.svg"
                        alt="analyzing..."
                    />
                </Col>
            </Row>

            <Row>
                <Col md={4} lg={3}>
                    <TextBlock
                        subtitle="Stap 1"
                        headingType="h2"
                        title="De titel maar dan een hele erge fucking lange titel waar geen einde aan lijkt te komen"
                        href="//richardhotline.nl"
                        button=""
                    >
                        {TextBlockContent}
                    </TextBlock>
                </Col>

                <Col offset={{ lg: 1 }} md={4} lg={3}>
                    <TextBlock
                        subtitle="Stap 2"
                        headingType="h2"
                        title="De titel maar dan een hele erge fucking lange titel waar geen einde aan lijkt te komen"
                        href="//richardhotline.nl"
                        button=""
                    >
                        {TextBlockContent}
                    </TextBlock>
                </Col>

                <Col offset={{ lg: 1 }} md={4} lg={3}>
                    <TextBlock
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
        </ContentBlockWrapper>

        <ContentBlockWrapper>
            <TextBlock
                subtitle="Contact us"
                headingType="h2"
                title="Stuur ons een berichtje"
            />
            <ContactForm />
        </ContentBlockWrapper>
    </Layout>
);

export default Home;
