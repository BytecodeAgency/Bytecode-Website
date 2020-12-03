import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../layouts/MainLayout' was resolved to '/h... Remove this comment to see the full error message
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import { BlogpostSingleProps, CallToActionProps } from './BlogpostLayout.types';
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

const CallToAction: React.FC<CallToActionProps> = () => (
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

const BlogSingle: React.FC<BlogpostSingleProps> = ({ content }) => (
    <Layout newsLetter={0.5} padded pageSettings={content.pageSettings}>
        <Article>
            <ArticleHeader>
                <SubtitleContainer>
                    <Subtitle>{content.categoryName}</Subtitle>
                    <ReadingTime>
                        &nbsp;&nbsp;&#47;&#47; {content.readingTime} min. read
                    </ReadingTime>
                </SubtitleContainer>
                <Title>{content.title}</Title>
                <ArticleImageWrapper>
                    <ArticleImage
                        src={require(`../images/img/articles/${content.articleImageUrl}`)}
                    />
                </ArticleImageWrapper>
                <MetaData>
                    <Author
                        name={content.authorName}
                        title={content.authorRole}
                        img={content.authorImageUrl}
                    />
                    <PublishedOnContainer>
                        <Small>Gepubliceerd op {content.postedOn}</Small>
                    </PublishedOnContainer>
                </MetaData>
            </ArticleHeader>
            <BlogContent>
                <ArticleIntro>{content.articleIntro}</ArticleIntro>
                <MDXRenderer>{content.postContent}</MDXRenderer>
                <CallToAction />
            </BlogContent>
        </Article>
    </Layout>
);
export default BlogSingle;
