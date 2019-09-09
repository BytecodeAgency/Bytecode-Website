import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../styles/theme';
import { Col } from '../lib/Grid';

const { md } = theme.mediaQuery;

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
    // TODO: Change to the SC way of using selectors
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
    const { title, slug, articleImageUrl, categoryName } = props;
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
                                alt=">"
                            />
                        </small>
                    </Link>
                </ThumbnailContent>
            </ThumbnailBase>
        </Col>
    );
};

export default BlogThumbnail;
