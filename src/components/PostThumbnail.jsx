import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Container } from 'react-grid-system';
import theme from '../styles/theme';
import { Col } from '../lib/Grid';
import { Small, Big } from './Typography';

const { mediaQueryMin } = theme;

const SubtitleBase = ({ className, children }) => (
    <div className={`subtitle ${className}`}>{children}</div>
);
const Subtitle = styled(SubtitleBase)`
    margin-bottom: 0.66rem;
`;

const ThumbnailBase = styled(Link)`
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
        // TODO: CSS classes in SC?
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
        @media (${mediaQueryMin.md}) {
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
    @media (${mediaQueryMin.md}) {
        height: 65vh;
    }
    transition: all 0.3s ease;

`;

const ThumbnailImg = styled.div`
    background: url('${props => props.img}'), ${theme.colors.secondary};
    background-size: cover;
    transition: all 0.5s ease;
    height: 50vh;
    max-height: 40em;
    @media (${mediaQueryMin.md}) {
        height: ${props => (props.big ? '50vh' : '18em')};
    }
`;

const Arrow = styled.img``;

const PostThumbnail = props => {
    const {
        big,
        title,
        slug,
        category,
        postedOn,
        articleImageUrl,
        authorName,
        authorRole,
        authorImageUrl,
        readingTime,
        description,
        imageRoot,
        postImageUrl,
        blog,
    } = props;

    if (big) {
        return (
            <Col>
                <ThumbnailBase to={slug}>
                    <BigThumbnailImg
                        className="ThumbnailImg"
                        img={postImageUrl}
                    />
                    <ThumbnailContent>
                        <Subtitle>{category}</Subtitle>
                        <h5>{title}</h5>
                    </ThumbnailContent>
                </ThumbnailBase>
            </Col>
        );
    }
    return (
        <Col offset={{ md: 0.1 }} md={3.9}>
            <ThumbnailBase to={slug}>
                <ThumbnailImg className="ThumbnailImg" img={postImageUrl} />
                <ThumbnailContent>
                    <Subtitle>{category}</Subtitle>
                    <Big>
                        <p>{title}</p>
                    </Big>
                    <a href={slug}>
                        <small className="thumbnailCTA">
                            Learn more{' '}
                            <Arrow
                                src={require('../images/icons/ui/arrow.svg')}
                                alt=">"
                            />
                        </small>
                    </a>
                </ThumbnailContent>
            </ThumbnailBase>
        </Col>
    );
};

export default PostThumbnail;
