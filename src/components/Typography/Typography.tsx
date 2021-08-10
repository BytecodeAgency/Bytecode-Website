import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import { QuoteProps } from './Typography.types';

const { fontWeights, fonts, typography } = theme;

const { caption } = typography;

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

export const Subtitle = styled.p`
    size: 0.75rem;
    height: 1.2em;
    font-family: ${fonts.paragraph};
    font-weight: ${fontWeights.bold};
    color: ${theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: ${typography.subtitle.spacing};
    font-size: 0.85rem;
    margin-bottom: 0.5em;
`;

const captionStyle = css`
    font-size: ${caption.size};
    line-height: ${caption.height};
    letter-spacing: ${caption.spacing};
    font-family: ${caption.font};
    font-weight: ${caption.weight};
    color: ${caption.color};
`;
export const CaptionWithLink = styled.a`
    ${captionStyle}
`;

export const Caption = styled.p`
    ${captionStyle}
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
