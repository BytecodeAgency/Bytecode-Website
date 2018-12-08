/* eslint-disable max-len, object-curly-newline, camelcase */

import styled from 'styled-components';
import Link from 'next/link';
import Layout from '../components/Layout';
import theme from '../styles/theme';
import TextBlock from '../components/TextBlock';
import { Container, Row, Col, Hidden } from '../lib/Grid'; // eslint-disable-line
import Author from '../components/Author';
import ContactForm from '../components/ContactForm';
// import BlogPostThumbnail from '../components/BlogPostThumbnail';

const Posts = styled.section`
    margin: 12rem 0 6rem;
`;

const pageSettings = {
    title: 'Bytecode Insights',
    description: 'Bytecode Insights',
    keywords: 'bytecode blog',
};

const BlogThumbnailContentWrapper = styled.a`
    cursor: pointer;
    text-decoration: none;
    padding: 2rem;
    margin: 1rem;
`;

const BlogThumbnailImage = styled.div`
    background-image: url(${props => props.url});
    width: 100%;
    height: 18rem;
    background-size: cover;
    background-position: center center;
    margin: 0 0 1.6rem;
    @media screen and (max-width: ${theme.breakpoints[1]}) {
        height: 12rem;
    }
`;

const AuthorContainer = styled.div`
    margin: 2rem 0;
`;

const content = {
    title: 'Website laten maken en hoe je de beste website bouwer vindt',
    slug: 'website-laten-maken',
    posted_on: '10 december 2018',
    article_image_url: 'https://cataas.com/cat',
    author_name: 'Nick Broekarts',
    author_role: 'Online Marketeer',
    author_image_url: 'https://cataas.com/cat?width=800?height=400',
    category_name: 'Websites',
    category_slug: 'websites',
    reading_time: 7,
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
        <Col xl={3} lg={4}>
            <Link href={`insights/${slug}`}>
                <BlogThumbnailContentWrapper>
                    <BlogThumbnailImage url={article_image_url} />
                    <TextBlock
                        title={title}
                        subtitle={category_name}
                        headingType="h4"
                    />
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

const BlogSingle = () => (
    <Layout pageSettings={pageSettings}>
        <Posts>
            <Container>
                <Row>
                    <BlogThumbnail
                        title={content.title}
                        slug={content.slug}
                        posted_on={content.posted_on}
                        article_image_url={content.article_image_url}
                        author_name={content.author_name}
                        author_role={content.author_role}
                        author_image_url={content.author_image_url}
                        category_name={content.category_name}
                        reading_time={content.reading_time}
                    />
                </Row>
            </Container>
        </Posts>
        <Container>
            <Row>
                <Col md={5}>
                    <TextBlock
                        headingType="h2"
                        title="Door de jongens van Bytecode. Met liefde gemaakt."
                        // href="//bytecode.nl"
                        // button="Lees meer over ons"
                    >
                        Deze Insights zijn van het team van Bytecode. Een klein
                        maar fijne web agency in Rotterdam. In ons werken houden
                        wij, net als in deze artikelen, bezig hoe je het web het
                        effectiefst kan gebruiken. Heb je nog vragen over een
                        artikel of wil je zelf een web applictie gaan bouwen?
                        Neem eens contact met ons op. Misschien kunnen we zelfs
                        samenwerken.
                    </TextBlock>
                </Col>
                <Col offset={{ md: 1 }} md={6}>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
    </Layout>
);

export default BlogSingle;
