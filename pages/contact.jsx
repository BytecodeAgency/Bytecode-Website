import styled from 'styled-components';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import Button from '../components/Button';

const pageSettings = {
    title: 'Cases',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const HeaderContainer = styled.section`
    background-color: ${theme.colors.mediumgray};
    background-image: url('static/img/header/post-it.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: overlay;
    margin: 0% 0% 5% 5%;
    padding: 25vh 2% 25vh 5%;
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

const ContactH3 = styled.h3`
    margin: 1.5em 0;
    line-height: 1.4em;
`;

const PaddedRow = styled(Row)`
    padding: 5% 0 10% 0;
`;

const Contact = () => (
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
                        subtitle="Contact us"
                        title="Heeey makker, kom jij eens even
                        smakelijk kopje koffie drinken"
                        href="//bytecode.nl"
                        button="Lees verder"
                    >
                        Nadat we alles helemaal hebben geanalyseerd en gepland,
                        is het tijd om de handen uit de mouwen te steken en het
                        plan te realiseren. Hierbij werken we volgens de
                        scrum-methode. Op het moment dat het plan uitgevoerd is,
                        is het tijd om het resultaat te analyzeren en om te
                        kijken hoe het nóg beter kan. We blijven dus verbeteren
                        en doorontwikkelen.
                    </TextBlock>
                </Col>
            </Row>
        </HeaderContainer>
        <Container>
            <PaddedRow>
                <Col xl={7} lg={6} md={12} xs={12}>
                    <TextBlock
                        subtitle="We staan voor je klaar"
                        headingType="h2"
                        title="Stuur ons een berichtje"
                    />
                    <ContactForm />
                </Col>
                <Col
                    offset={({ xl: 0 }, { lg: 1 })}
                    xl={3}
                    lg={5}
                    md={12}
                    xs={12}
                >
                    <ContactH3>
                        Zin om samen te werken? Stuur een berichtje naar{' '}
                        <a href="mailto:info@bytecode.nl">info@bytecode.nl</a>{' '}
                        of bel ons op <a href="tel:015-2024222">015-2024222</a>
                    </ContactH3>
                    <ContactH3>
                        Bezoek ons anders op de{' '}
                        <a
                            target="_blanc"
                            href="https://goo.gl/maps/9P6in4Qf6i62"
                        >
                            Verlengde Spiegelmakerstraat 13, Delftgauw
                        </a>
                    </ContactH3>
                    <Button
                        target="_blanc"
                        href="https://goo.gl/maps/9P6in4Qf6i62"
                    >
                        Routebeschrijving
                    </Button>
                </Col>
            </PaddedRow>
        </Container>
    </Layout>
);

export default Contact;
