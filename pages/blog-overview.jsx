/* eslint-disable max-len */

import styled from 'styled-components';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col } from '../lib/Grid'; // eslint-disable-line
import BlogPostThumbnail from '../components/BlogPostThumbnail';

const HeaderContainer = styled.section`
    margin: 0% 0 5% 3%;
    padding: 2%;
    background-color: ${theme.colors.background};
    background-image: url('https://martinfletcher.files.wordpress.com/2015/01/plato.jpg');
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

const Posts = styled.section``;
const Banner = styled.section`
    Container {
        background-color: ${theme.colors.mediumgray};
    }
    .picture {
        background-image: url('https://martinfletcher.files.wordpress.com/2015/01/plato.jpg');
    }
`;

const pageSettings = {
    title: 'Services',
    description: 'Hier de omschrijving',
    keywords: 'tag1,tag2',
};

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
                            analyseren, bedenken en ontwikkelen van alles wat
                            jij nodig hebt om je digitaal volledig te
                            ontplooien.
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
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="De open brief van luciano dat hij Free Software stom vind"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="10 redenen waarom Emacs leuk is"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
                    </Col>
                    <Col xl={3} lg={4}>
                        <BlogPostThumbnail
                            title="De open brief van luciano dat hij Free Software stom vind"
                            categroy="Development"
                            coverImg="https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                            readTime="4 min"
                            date="18 november 2018"
                            url="#"
                        />
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
                            Deze Insights zijn van het team van Bytecode. Een
                            klein maar fijne web agency in Rotterdam. In ons
                            werken houden wij, net als in deze artikelen, bezig
                            hoe je het web het effectiefst kan gebruiken. Heb je
                            nog vragen over een artikel of wil je zelf een web
                            applictie gaan bouwen? Neem eens contact met ons op.
                            Misschien kunnen we zelfs samenwerken.
                        </TextBlock>
                    </Col>
                    <Col className="picture" md={6} />
                </Row>
            </Container>
        </Banner>
    </Layout>
);

export default BlogSingle;
