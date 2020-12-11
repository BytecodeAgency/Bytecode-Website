import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import { QuoteProps } from './Typography.types';

const { fontWeights, fonts } = theme;
const QuoteText = styled.blockquote`
    font-weight: ${fontWeights.light};
    line-height: 1.2em;
    font-size: 1.75em;
    margin: 1em 0;
`;

export const Big = styled.p`
    font-size: 1.33em;
    margin: 20px 0px;
`;

export const Small = styled.span`
    font-size: 0.66em;
`;

export const Subtitle = styled.h6`
    size: 0.85rem;
    height: 1.2em;
    font-family: ${fonts.paragraph};
    font-weight: ${fontWeights.bold};
    color: ${theme.colors.primary};
`;

export const Quote: React.FC<QuoteProps> = ({ author, url, children }) => {
    return (
        <div>
            <QuoteText>{children}</QuoteText>
            <p>
                <a href={url}>{author}</a>
            </p>
        </div>
    );
};
