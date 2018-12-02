/* eslint-disable max-len */

import styled from 'styled-components';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import ContactForm from '../components/ContactForm';
import ImageBlock from '../components/ImageBlock';
import Author from '../components/Author';
import BlogPostThumbnail from '../components/BlogPostThumbnail';

const HeaderContainer = styled.section`
    margin: 0% 0 5% 3%
    padding: 2%;
    background-color: ${theme.colors.background};
    background-image: url("https://martinfletcher.files.wordpress.com/2015/01/plato.jpg");
    background-blend-mode: soft-light;
    opacity: 60%;
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: 70% 20%;
    @media (min-width: ${theme.breakpointMobileMenu}) {
        margin: 0% 0% 5rem 2rem;
        padding: 40vh 2% 5vh 5%;
    }
`;

const StyledContainer = styled(Container)`
    margin: 10% 10% 5% 10% !important;
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


const ProcessStepImage = styled.img`
    height: 60rem;
    max-height: 30vh;
    margin-bottom: 5rem;
    @media (max-width: ${theme.breakpoints[2]}px) {
        margin-top: 10rem;
    }
`;

const Icon = styled.img`
    padding: 20%;
    @media (max-width: ${theme.breakpointMobileMenu}) {
        max-width: 75%;
    }
`;

const Posts = styled.section`
`
const Banner =styled.section`
    Container {
        background-color: ${theme.colors.mediumgray};
    }
    .picture {
        background-image: url("https://martinfletcher.files.wordpress.com/2015/01/plato.jpg");
    }
`

const BlogContent = styled(Container)`
    padding-bottom: 10em;
    p, ul, li, a {
        color: ${theme.colors.white};
        font-kerning: normal;
        line-height: 2.2rem;
        font-size: 1.75rem;
        &.call-to-action {
            font-style: italic;
            color: ${theme.colors.lightgray};
            margin-top: 2em;
        }
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 1.5em 0 0em 0;
    }

    ul {
        list-style-type: circle;
        margin: 1em 1.5em;
        li {
            margin: .25rem 0;
    }
        }
    }

    
    figure {
        margin: 4em 0;
    }
`

const pageSettings = {
    title: 'Services',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

const RelatedPosts = styled.section`
    background-color: ${theme.colors.mediumgray};
    padding: 2rem;
`

const BlogMetaDataWrapper = styled(Row)`
    margin-top: 10rem;
`

const BlogMetaData = styled.p`
    text-align: right;
    font-size: 1.25rem;
    display: flex;
    align-self: center;
`
const CallToAction = styled.p`
`

const BlogSingle = () => (
    
        <Layout pageSettings={pageSettings}>
            <HeaderContainer>
            <Container>
            <Row>
                <Col md={6} lg={4}>
                    <TextBlock
                        subtitle="Welkom bij Bytecode"
                        title="Vind de weg naar jouw digitale succes"
                        href="//bytecode.nl"
                        button="Lees verder"
                    >
                        Ons gepassioneerde team helpt je dolgraag met het
                        analyseren, bedenken en ontwikkelen van alles wat jij
                        nodig hebt om je digitaal volledig te ontplooien.
                    </TextBlock>
                </Col>
            </Row>
            </Container>
        </HeaderContainer>
        <Posts>
            <Container>
                <Row>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="De open brief van luciano dat hij Free Software stom vind" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="10 redenen waarom Emacs leuk is" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail 
                        title="De open brief van luciano dat hij Free Software stom vind" 
                        categroy="Development" 
                        coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                        readTime="4 min" date="18 november 2018" 
                        url="#"/>
                    </Col>
                </Row>
            </Container>
        </Posts>
        <Banner>
            <Container>
                <Row>
                    <Col md={6}>
                    <TextBlock
                        headingType="h3"
                        title="Door de jongens van bytecode. Met liefde gemaakt."
                        href="//bytecode.nl"
                        button="Lees meer"
                    >
                    Deze Insights zijn van het team van Bytecode. 
                    Een klein maar fijne web agency in Rotterdam. 
                    In ons werken houden wij, net als in deze artikelen, 
                    bezig hoe je het web het effectiefst kan gebruiken. 
                    Heb je nog vragen over een artikel of wil je zelf een 
                    web applictie gaan bouwen? Neem eens contact met ons op. 
                    Misschien kunnen we zelfs samenwerken. 
                    </TextBlock>

                    </Col>
                    <Col className="picture" md={6}>

                    </Col>
                </Row>
            </Container>        
        </Banner>
        </Layout>
       
   
);

export default BlogSingle;
