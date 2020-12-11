import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../styles/theme';

const { fontWeights, fonts } = theme;

type Props = {
    author: string,
    url: string,
    children: string,
};

export const Quote = ({ author, url, children }: Props) => {
    return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <QuoteText>{children}</QuoteText>
            {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
            <p>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <a href={url}>{author}</a>
            </p>
        </div>
    );
};

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
    size: '0.85rem';
    height: '1.2em';
    font-family: ${fonts.paragraph};
    font-weight: ${fontWeights.bold};
    color: ${theme.colors.primary};
`;
