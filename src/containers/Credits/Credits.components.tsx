import React from 'react';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../../styles/theme';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../components/ArrowButton' was resolved... Remove this comment to see the full error message
import ArrowButton from '../../components/ArrowButton';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin } = theme;
export const CreditsContainer = styled.div`
    width: 100vw;
    background-color: ${theme.colors.secondary};
    padding: 0;
    @media (${mediaQueryMin.sm}) {
        padding: 5em 10em 5em 10em;
    }
`;
export const TitleContainer = styled.div`
    padding: 3em 1em;
    @media (${mediaQueryMin.sm}) {
        padding: 3em 0;
    }
`;
export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (${mediaQueryMin.sm}) {
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CreditItemContainer = styled.div`
    margin: 1em;
`;
export const CreditTitle = styled.p`
    margin-bottom: 0.5em;
`;
export const CreditText = styled.p`
    margin-bottom: 0.5em;
`;

type CreditItemProps = {
    title: string,
    credits: string[],
};
export const CreditItem = ({ title, credits }: CreditItemProps) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <CreditItemContainer>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CreditTitle className="subtitle">{title}</CreditTitle>
        {credits.map(credit => (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <CreditText className="Paragraph light">{credit}</CreditText>
        ))}
    </CreditItemContainer>
);

type CreditItemWithLinksProps = {
    title: string,
    credits: string[],
    links: string[],
};

export const CreditItemWithLinks = ({
    title,
    credits,
    links,
}: CreditItemWithLinksProps) => (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <CreditItemContainer>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <CreditTitle className="subtitle">{title}</CreditTitle>
        {credits.map((credit, index) => (
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <CreditText>{credit}</CreditText>
                {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                <CreditText>
                    {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
                    <ArrowButton href={links[index]}>
                        Ga naar pagina
                    </ArrowButton>
                </CreditText>
            </>
        ))}
    </CreditItemContainer>
);
