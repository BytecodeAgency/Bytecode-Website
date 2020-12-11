/* eslint-disable @typescript-eslint/camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Layout from './MainLayout';
import Author from '../containers/Author/Author';
import { Subtitle, Small } from '../components/Typography';
import NewsletterSubscribe from '../containers/NewsletterSubscribe/NewsletterSubscribe';
import {
    Article,
    ArticleHeader,
    SubtitleContainer,
    ReadingTime,
    Title,
    ArticleImageWrapper,
    ArticleImage,
    MetaData,
    PublishedOnContainer,
    BlogContent,
    ArticleIntro,
    CallToActionContainer,
    CallToActionText,
} from './BlogpostLayout.components';

const BlogSingle = ({ content }) => (
    <Layout padded pageSettings={content.pageSettings}>
        <Article>
            <ArticleHeader>
                <SubtitleContainer>
                    <Subtitle>{content.category_name}</Subtitle>
                    <ReadingTime>
                        &nbsp;&nbsp;&#47;&#47; {content.reading_time} min. read
                    </ReadingTime>
                </SubtitleContainer>
                <Title>{content.title}</Title>
                <ArticleImageWrapper>
                    <ArticleImage
                        src={require(`../images/img/articles/${content.article_image_url}`)}
                    />
                </ArticleImageWrapper>
                <MetaData>
                    <Author
                        name={content.author_name}
                        title={content.author_role}
                        img={content.author_image_url}
                    />
                    <PublishedOnContainer>
                        <Small>Gepubliceerd op {content.posted_on}</Small>
                    </PublishedOnContainer>
                </MetaData>
            </ArticleHeader>
            <BlogContent>
                <ArticleIntro>{content.article_intro}</ArticleIntro>
                <MDXRenderer>{content.post_content}</MDXRenderer>
                <CallToAction />
            </BlogContent>
        </Article>
    </Layout>
);

export default BlogSingle;

const CallToAction = () => (
    <CallToActionContainer>
        <CallToActionText>
            Dit artikel is met passie geschreven door Bytecode, een jonge en
            moderne web agency. Wij laten jou graag zien hoe je de kracht van
            het internet kunt gebruiken om alles uit jezelf te halen. Dit doen
            we door bijvoorbeeld dit artikel te schrijven, maar ook door deze
            inzichten in onze werkzaamheden te verwerken.
            <br />
            <br />
            Wil je meer over ons weten of kunnen we misschien iets voor je
            betekenen? <a href="/contact">Neem gerust contact met ons op</a> of
            kom een keer langs op de koffie!
        </CallToActionText>
        <NewsletterSubscribe />
    </CallToActionContainer>
);

BlogSingle.propTypes = {
    content: PropTypes.shape({
        pageSettings: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            keywords: PropTypes.string.isRequired,
        }).isRequired,
        article_image_url: PropTypes.string.isRequired,
        category_name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author_name: PropTypes.string.isRequired,
        author_role: PropTypes.string.isRequired,
        author_image_url: PropTypes.string.isRequired,
        posted_on: PropTypes.string.isRequired,
        reading_time: PropTypes.string.isRequired,
        article_intro: PropTypes.string.isRequired,
        post_content: PropTypes.string.isRequired,
    }).isRequired,
};
