/* eslint-disable @typescript-eslint/camelcase */

import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import Layout from './MainLayout';
import theme from '../styles/theme';
import Author from '../containers/Author/Author';
import { Big, Subtitle, Small } from '../components/Typography';
import ContactForm from '../containers/ContactForm/ContactForm';

const { mediaQueryMin, colors } = theme;

const BlogSingle = ({ content }) => (
    <Layout pageSettings={content.pageSettings}>
        <Article>
            <ArticleHeader>
                <SubtitleContainer>
                    <Subtitle>{content.catergory_name}</Subtitle>
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
                    <Information>
                        <InformationItem>
                            <Small>Gepubliceerd op {content.posted_on}</Small>
                        </InformationItem>
                    </Information>
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
        <ContactForm />
    </CallToActionContainer>
);

const Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 0.66em;
        margin-bottom: 0.33em;
        font-weight: ${theme.fontWeights.regular};
    }
    p {
        line-height: 1.5em;
        letter-spacing: 0.015em;
        font-weight: ${theme.fontWeights.light};
        b,
        strong {
            font-weight: ${theme.fontWeights.regular};
        }
    }
`;

const ArticleHeader = styled.header`
    max-width: 40em;
    display: flex;
    align-items: center;
    flex-direction: column;
    & > * {
        width: 100%;
    }
    &::before {
        content: '';
        background: ${colors.mediumgray};
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        width: 100vw;
        height: 35em;
        z-index: -1;
    }
    @media (${mediaQueryMin.md}) {
        margin-top: 5vh;
        &::before {
            height: 75vh;
        }
    }
`;

const ArticleImageWrapper = styled.figure`
    width: 125%;
    margin: 0.66em 0;
`;

const BlogContent = styled.div`
    max-width: 40em;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1em;
    & > * {
        width: 100%;
    }
`;

const Title = styled.h1`
    margin: 0.44em !important;
    padding: 0 0.33em;
`;

const ArticleIntro = styled(Big)`
    margin-bottom: 1em;
    line-height: 1.22em !important;
`;

const MetaData = styled.div`
    padding: 0 1em;
    display: flex;
    flex-direction: row;
    @media (${mediaQueryMin.xs}) {
        flex-direction: row;
    }
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const Information = styled.li`
    list-style: none;
`;

const InformationItem = styled.li`
    line-height: 0.7em;
    margin: 0;
    color: ${colors.lightgray};
`;

const SubtitleContainer = styled.div`
    display: flex;
    text-transform: uppercase;
    align-items: flex-end;
    padding: 0 1em;
    span,
    p {
        opacity: 0.3;
        color: ${colors.lightgray};
    }
`;

const ReadingTime = styled(Small)`
    margin-bottom: 2px;
`;

const ArticleImage = styled.img``;

const CallToActionContainer = styled.div`
    margin: 2rem 4rem;
`;

const CallToActionText = styled.p`
    font-weight: ${theme.fontWeights.regular} !important;
    font-style: italic;
    color: ${theme.colors.lightgray} !important;
`;

BlogSingle.propTypes = {
    content: PropTypes.shape({
        pageSettings: PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            keywords: PropTypes.string.isRequired,
        }).isRequired,
        article_image_url: PropTypes.string.isRequired,
        catergory_name: PropTypes.string.isRequired,
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
