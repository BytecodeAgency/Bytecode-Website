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
    margin: 0% 0 3% 3%
    padding: 2%;
    background-color: ${theme.colors.mediumgray};
    background-image: url("https://martinfletcher.files.wordpress.com/2015/01/plato.jpg");
    background-blend-mode: soft-light;
    opacity: 60%;
    background-size: cover;
    
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
            <article>
            <HeaderContainer>
                <Container>
                <Row>
                    <Col offset={ {xl:2, lg:1, md:0} } md={10} lg={8} xl={7}>
                        <TextBlock
                            subtitle="UX-Design"
                            title="Waarom je filosofen moet betrekken in het ontwikkelproces"
                        />
                    </Col>
                </Row>
                <BlogMetaDataWrapper>
                    <Col offset={ {xl:2, lg:1, md:0} } md={6} lg={6} xl={5}>
                        <Author name="Richard van 't Hof" title="Art-director & Front-end Developer" img="/static/img/team/Jeroen.png"/>
                    </Col>
                    <Col md={2} lg={3} xl={3}>
                        <BlogMetaData>
                        2 november 2018 <br/>
                        4 min. read
                        </BlogMetaData>
                    </Col>
                </BlogMetaDataWrapper>
                </Container>
            </HeaderContainer>
            <BlogContent>
                <Row>
                    <Col offset={ {md:1, lg:1, xl: 3}} md={10} lg={8} xl={5}>

                        <p>Voordat we starten met ontwikkelen, maken we eerst een
                        gedetailleerde analyse. Dit stelt ons in staat om een
                        helder en volledig overzicht te krijgen van de huidige
                        situatie. Hierdoor kunnen wij de pijnpunten in beeld
                        brengen en analyseren welke punten het meeste prioriteit
                        hebben. Voordat we starten met ontwikkelen, maken we eerst een
                        gedetailleerde analyse. Dit stelt ons in staat om een
                        helder en volledig overzicht te krijgen van de huidige
                        situatie. Hierdoor kunnen wij de pijnpunten in beeld
                        brengen en analyseren welke punten het meeste prioriteit
                        hebben.</p>
                        <h2>Een lijst</h2>
                        <ul>
                        <li><h3>Een lijst</h3><br/><p>Voordat we starten met ontwikkelen, maken we eerst een
                        gedetailleerde analyse. Dit stelt ons in staat om een
                        helder en volledig overzicht te krijgen van de huidige
                        situatie. Hierdoor kunnen wij de pijnpunten in beeld
                        brengen en analyseren welke punten het meeste prioriteit
                        hebben. Voordat we starten met ontwikkelen, maken we eerst een
                        gedetailleerde analyse. Dit stelt ons in staat om een
                        helder en volledig overzicht te krijgen van de huidige
                        situatie. Hierdoor kunnen wij de pijnpunten in beeld
                        brengen en analyseren welke punten het meeste prioriteit
                        hebben.</p></li>
                        <li><h3>Een lijst</h3><br/><p>Voordat we starten met ontwikkelen, maken we eerst een
                        gedetailleerde analyse. Dit stelt ons in staat om een
                        helder en volledig overzicht te krijgen van de huidige
                        situatie. Hierdoor kunnen wij de pijnpunten in beeld
                        brengen en analyseren welke punten het meeste prioriteit
                        hebben. Voordat we starten met ontwikkelen, maken we eerst een
                        gedetailleerde analyse. Dit stelt ons in staat om een
                        helder en volledig overzicht te krijgen van de huidige
                        situatie. Hierdoor kunnen wij de pijnpunten in beeld
                        brengen en analyseren welke punten het meeste prioriteit
                        hebben.</p></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} lg={10} xl={8} offset={ {md:0, lg:1, xl: 2}} >
                        
                        <figure>
                            <img src="/static/img/content/interior.png" alt="test image"/>
                            <p className="sm">Foto: Pexels</p>
                        </figure>
                    </Col>
                </Row>

                <Row>
                    <Col offset={ {md:1, lg:2, xl: 3}} md={10} lg={8} xl={5}>
                    <p>Voordat we starten met ontwikkelen, maken we eerst een
                        gedetailleerde analyse. Dit stelt ons in staat om een
                        helder en volledig overzicht te krijgen van de huidige
                        situatie. Hierdoor kunnen wij de pijnpunten in beeld
                        brengen en analyseren welke punten het meeste prioriteit
                        hebben. Voordat we starten met ontwikkelen, maken we eerst een
                        gedetailleerde analyse. Dit stelt ons in staat om een
                        helder en volledig overzicht te krijgen van de huidige
                        situatie. Hierdoor kunnen wij de pijnpunten in beeld
                        brengen en analyseren welke punten het meeste prioriteit
                        hebben.</p>

                        <p className="call-to-action">Dit artikel is geschreven het team van Bytecode. 
                        Een klein maar fijne web agency in Rotterdam. 
                        Net als in deze artikelen willen wij jou in ons werk graag nieuwe inzichten geven hoe je het internet kan gebruiken. 
                        Heb je vragen over dit artikel of wil je meer over ons weten? 
                        <a href="/contact"> Neem eens contact met ons op!</a></p>
                        
                    </Col>
                </Row>
            </BlogContent>
            </article>
            <RelatedPosts>d
            <Container>
                <Row>
                    <Col>
                    <h2>Wat je misschien ook interessant vind</h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={3}>
                        <BlogPostThumbnail title="10 redenen waarom Emacs leuk is" categroy="Development" coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" readTime="4 min" date="18 november 2018" url="#"/>
                    </Col>
                    <Col xl={3}>
                        <BlogPostThumbnail title="10 redenen waarom Emacs leuk is" categroy="Development" coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" readTime="4 min" date="18 november 2018" url="#"/>
                    </Col>
                    <Col xl={3}>
                        <BlogPostThumbnail title="10 redenen waarom Emacs leuk is" categroy="Development" coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" readTime="4 min" date="18 november 2018" url="#"/>
                    </Col>
                    <Col xl={3}>
                        <BlogPostThumbnail title="10 redenen waarom Emacs leuk is" categroy="Development" coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" readTime="4 min" date="18 november 2018" url="#"/>
                    </Col>
                </Row>
            </Container>
        </RelatedPosts>
        </Layout>
       
   
);

export default BlogSingle;
