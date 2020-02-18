import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import React from 'react';
import theme from '../../styles/theme';

const { mediaQueryMin, colors } = theme;
const { secondary } = colors;

const SubtitleBase = ({ className, children }) => (
    <div className={`subtitle ${className}`}>{children}</div>
);

SubtitleBase.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
};

SubtitleBase.defaultProps = {
    className: '',
    children: '',
};

export const Subtitle = styled(SubtitleBase)`
    margin-bottom: 0.66rem;
`;

export const ThumbnailBase = styled(Link)`
    background-color: ${theme.colors.secondary};
    padding-bottom: 2em;
    cursor: pointer;
    transition: all 0.4s ease;
    min-width: 10em;
    .thumbnail-cta {
        transition: 0.3s ease all;
        transform: translate(0em, -1em);
        img {
            transition: 0.3s ease all;
        }
    }
    &:hover {
        & > .thumbnail-img {
            transform: scale(1.02);
        }

        .thumbnail-cta {
            transform: translate(0.3em, -1em);
            img {
                transform: scaleX(1.1);
            }
        }
    }
`;

export const ThumbnailContent = styled.div`
    padding: 1.33em;
    big {
        p {
            margin-bottom: 1em;
        }
    }
    small {
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

export const BigThumbnailImg = styled.div`
    background: url('${props => props.img}'), ${secondary};
    background-size: cover;
    background-position: center center;
    height: 90vh;
    min-height: 30em;
    transition: all 0.3s ease;

`;

export const ThumbnailImg = styled.div`
    background: url('${props => props.img}'), ${secondary};
    background-position: center center;
    background-size: cover;
    transition: all 0.5s ease;
    height: 50vh;
    max-height: 40em;
    @media (${mediaQueryMin.md}) {
        height: ${props => (props.big ? '50vh' : '15em')};
    }
`;

export const Arrow = styled.img`
    margin-left: 0.01em;
`;
