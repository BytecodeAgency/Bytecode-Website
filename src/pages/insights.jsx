/* eslint-disable max-len, object-curly-newline, camelcase */

import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import Author from '../components/Author';
import ContactForm from '../components/ContactForm';
import ContentPageHeader from '../components/ContentPageHeader';
import Wrapper from '../components/Wrapper';

/* eslint-disable */
const pageSettings = {
    title: 'Bytecode Insights - Bytecode Digital Agency B.V.',
    description:
        'Bytecode insights, vergroot je kennis en leer meer over hoe je digitale assets kan inzetten voor jouw business! Samen halen we alles uit jouw digitale zelf!',
    keywords: 'bytecode insights',
};
/* eslint-enable */
/* eslint-disable max-len, object-curly-newline, camelcase, prettier/prettier */

const Posts = styled.section`
    margin: 0;
`;

const BlogThumbnailContentWrapper = styled.a`
    cursor: pointer;
    text-decoration: none;
    padding: 2rem;
    margin: 1rem;
`;

const BlogThumbnailImage = styled.div`
    background-image: url(${props => props.url || '/static/img/header/noise.jpg'});
    width: 100%;
    height: 25rem;
    background-size: cover;
    background-position: center center;
    margin: 0 0 1.6rem;
    @media screen and (max-width: ${theme.breakpoints[1]}) {
        height: 25rem;
    }
`;

const AuthorContainer = styled.div`
    margin: 2rem 0;
`;

const content1 = {
    id: 1,
    title:
        'Wil je een website laten maken? Tips en tricks bij het kiezen van een webdeveloper!',
    subtitle: '',
    slug: 'website-laten-maken',
    posted_on: '10 december 2018',
    article_image_url: '/static/img/articles/website-laten-maken.jpg',
    summary:
        'Je wilt een website laten maken en bent op zoek naar de juiste webdeveloper. Wat is nou echt waardevol voor jouw website? Lees het hier!',
    author_name: 'Nick Broekarts',
    author_role: 'Online Marketeer',
    author_image_url: '/static/img/authors/nick.jpeg',
    catergory_name: 'Websites',
    category_slug: 'websites',
    reading_time: 8,
};

const content2 = {
    id: 2,
    title: 'Webapp: het complete overzicht',
    subtitle: '',
    slug: 'webapp-het-complete-overzicht',
    posted_on: '30 maart 2019',
    article_image_url: '/static/img/articles/webapp-overzicht.jpg',
    summary:
        'Webapp: wat is een (progressive) webapp? Is een webapp beter dan een mobiele app en wat is de waarde van een webapp voor jouw bedrijf? Lees het hier!',
    author_name: 'Nick Broekarts',
    author_role: 'Online Marketeer',
    author_image_url: '/static/img/authors/nick.jpeg',
    catergory_name: 'Webapps',
    category_slug: 'webapps',
    reading_time: 13,
};

const BlogThumbnail = props => {
    const {
        title,
        slug,
        posted_on,
        article_image_url,
        author_name,
        author_role,
        author_image_url,
        category_name,
        reading_time,
    } = props;
    return (
        <Col xl={4} lg={4}>
            <Link to={`insights/${slug}`}>
                <BlogThumbnailContentWrapper>
                    <BlogThumbnailImage url={article_image_url} />
                    <h6 className="subtitle">{category_name}</h6>
                    <h3>{title}</h3>
                    <AuthorContainer>
                        <Author
                            name={author_name}
                            title={author_role}
                            img={author_image_url}
                        />
                    </AuthorContainer>
                    <p>
                        {reading_time} min read <br /> {posted_on}
                    </p>
                </BlogThumbnailContentWrapper>
            </Link>
        </Col>
    );
};

const blogArchive = () => (
    <Layout pageSettings={pageSettings}>
        <ContentPageHeader
            img="/static/img/content/vision_web.png"
            subtitle="Insights"
            title="Een frisse blik op het internet."
            text="Hier zie je artikelen die met passie zijn geschreven
            door Bytecode, een jonge en moderne web agency. Wij
            laten jou graag zien hoe je de kracht van het
            internet kunt gebruiken om alles uit jezelf te
            halen. Dit doen we door interessante artikelen te
            schrijven, maar ook door deze inzichten in onze
            werkzaamheden te verwerken."
        />
        <Posts>
            <Container fluid>
                <Row>
                    <Col offset={{ md: 1 }} md={10}>
                        <Container fluid>
                            <Row>
                                <BlogThumbnail
                                    title={content1.title}
                                    slug={content1.slug}
                                    posted_on={content1.posted_on}
                                    article_image_url={
                                        content1.article_image_url
                                    }
                                    author_name={content1.author_name}
                                    author_role={content1.author_role}
                                    author_image_url={content1.author_image_url}
                                    category_name={content1.category_name}
                                    reading_time={content1.reading_time}
                                />
                                <BlogThumbnail
                                    title={content2.title}
                                    slug={content2.slug}
                                    posted_on={content2.posted_on}
                                    article_image_url={
                                        content2.article_image_url
                                    }
                                    author_name={content2.author_name}
                                    author_role={content2.author_role}
                                    author_image_url={content2.author_image_url}
                                    category_name={content2.category_name}
                                    reading_time={content2.reading_time}
                                />
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Posts>
        <Wrapper>
            <ContactForm />
        </Wrapper>
    </Layout>
);

export default blogArchive;
