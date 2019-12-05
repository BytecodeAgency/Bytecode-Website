import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const { fontWeights, fonts } = theme;

export const Quote = ({ author, url, children }) => {
    return (
        <div>
            <QuoteText>{children}</QuoteText>
            <p>
                <a href={url}>{author}</a>
            </p>
        </div>
    );
};
Quote.propTypes = {
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

const QuoteText = styled.blockquote`
    font-weight: ${fontWeights.light};
    line-height: 1.2em;
    font-size: 1.75em;
    margin: 1em 0;
`;

export const Big = styled.span`
    font-size: 1.33em;
`;

export const Small = styled.span`
    font-size: 0.66em;
`;

export const Subtitle = styled.h6`
    size: '0.85rem';
    height: '1.2em';
    font-family: ${fonts.paragraph};
    font-weight: ${fontWeights.bold};
    color: ${theme.colors.primary};
`;
