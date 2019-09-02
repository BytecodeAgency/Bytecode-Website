import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-grid-system';
import { Link, graphql } from 'gatsby';
import theme from '../styles/theme';
import TextBlock from './TextBlock';
import { Col } from '../lib/Grid';

const { xs, sm, md, lg, xl, xxl } = theme.mediaQuery;

const SubtitleBase = ({ className, children }) => (
    <div className={`subtitle ${className}`}>{children}</div>
);
const Subtitle = styled(SubtitleBase)`
    margin-bottom: 0.66em;
`;

const ThumbnailBase = styled(Link)`
    flex-basis: 25%;
    background-color: ${theme.colors.secondary};
    padding-bottom: 2em;
    cursor: pointer;
    transition: all 0.4s ease;
    min-width: 10em;
    .thumbnailCTA {
        transition: 0.3s ease all;
        transform: translate(0em, -1em);
        img {
            transition: 0.3s ease all;
        }
    }
    &:hover {
        & > .ThumbnailImg {
            transform: scale(1.02);
        }

        .thumbnailCTA {
            transform: translate(0.3em, -1em);
            img {
                transform: scaleX(1.3);
            }
        }
    }
`;

const ThumbnailContent = styled.div`
    padding: 1.33em;
    big {
        p {
            margin-bottom: 1em;
        }
    }
    small {
        display: hidden;
        @media (min-width: ${theme.breakpoints[2]}px) {
            display: block;
            margin: 1.66em 0em;
        }

        img {
            width: 2em;
            height: 0.5em;

            margin-left: 0.66em;
        }
    }
`;

const BigThumbnailImg = styled.div`
    background: url('${props => props.img}'), ${theme.colors.secondary};
    background-size: cover;
    height: 50vh;
    @media ${md} {
        height: 65vh;
    }
    transition: all 0.3s ease;

`;

const ThumbnailImg = styled.div`
    background: url(${props => props.img}), ${theme.colors.secondary};
    background-size: cover;
    transition: all 0.5s ease;
    height: 50vh;
    @media ${md} {
        height: ${props => (props.big ? '50vh' : '18em')};
    }
`;

const Arrow = styled.img``;

const BlogThumbnail = props => {
    const {
        title,
        slug,
        postedOn,
        articleImageUrl,
        authorName,
        authorRole,
        authorImageUrl,
        categoryName,
        readingTime,
    } = props;
    const articleImage = require(`../images/img/articles/${articleImageUrl}`);

    return (
        <Col offset={{ md: 0.1 }} md={3.9}>
            <ThumbnailBase to={slug}>
                <ThumbnailImg className="ThumbnailImg" img={articleImage} />
                <ThumbnailContent>
                    <Subtitle>{categoryName}</Subtitle>

                    <h6>{title}</h6>

                    <Link to={slug}>
                        <small className="thumbnailCTA">
                            Lees meer{' '}
                            <Arrow
                                src={require('../images/icons/ui/arrow.svg')}
                                alt=" >"
                            />
                        </small>
                    </Link>
                </ThumbnailContent>
            </ThumbnailBase>
        </Col>
    );
};

export default BlogThumbnail;
