/* eslint-disable @typescript-eslint/camelcase */

import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'gats... Remove this comment to see the full error message
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
// @ts-expect-error ts-migrate(6142) FIXME: Module './MainLayout' was resolved to '/home/tiko-... Remove this comment to see the full error message
import Layout from './MainLayout';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/Author/Author' was resolved ... Remove this comment to see the full error message
import Author from '../containers/Author/Author';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../components/Typography' was resolved to ... Remove this comment to see the full error message
import { Subtitle, Small } from '../components/Typography';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../containers/NewsletterSubscribe/Newslett... Remove this comment to see the full error message
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

type BlogSingleProps = {
    content: {
        pageSettings: {
            title: string,
            description: string,
            keywords: string,
        },
        article_image_url: string,
        category_name: string,
        title: string,
        author_name: string,
        author_role: string,
        author_image_url: string,
        posted_on: string,
        reading_time: string,
        article_intro: string,
        post_content: string,
    },
};

const BlogSingle = ({ content }: BlogSingleProps) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Layout padded pageSettings={content.pageSettings}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Article>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <ArticleHeader>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <SubtitleContainer>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Subtitle>{content.category_name}</Subtitle>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <ReadingTime>
                        &nbsp;&nbsp;&#47;&#47; {content.reading_time} min. read
                    </ReadingTime>
                </SubtitleContainer>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <Title>{content.title}</Title>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <ArticleImageWrapper>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <ArticleImage
                        src={require(`../images/img/articles/${content.article_image_url}`)}
                    />
                </ArticleImageWrapper>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MetaData>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <Author
                        name={content.author_name}
                        title={content.author_role}
                        img={content.author_image_url}
                    />
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <PublishedOnContainer>
                        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                        <Small>Gepubliceerd op {content.posted_on}</Small>
                    </PublishedOnContainer>
                </MetaData>
            </ArticleHeader>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <BlogContent>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <ArticleIntro>{content.article_intro}</ArticleIntro>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <MDXRenderer>{content.post_content}</MDXRenderer>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <CallToAction />
            </BlogContent>
        </Article>
    </Layout>
);

export default BlogSingle;

const CallToAction = () => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <CallToActionContainer>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CallToActionText>
            Dit artikel is met passie geschreven door Bytecode, een jonge en
            moderne web agency. Wij laten jou graag zien hoe je de kracht van
            het internet kunt gebruiken om alles uit jezelf te halen. Dit doen
            we door bijvoorbeeld dit artikel te schrijven, maar ook door deze
            inzichten in onze werkzaamheden te verwerken.
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <br />
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <br />
            Wil je meer over ons weten of kunnen we misschien iets voor je
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            betekenen? <a href="/contact">Neem gerust contact met ons op</a> of
            kom een keer langs op de koffie!
        </CallToActionText>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <NewsletterSubscribe />
    </CallToActionContainer>
);
