import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Button from '../../components/Button/Button';
import { Subtitle } from '../../components/Typography/Typography';
import { CreditItemProps, CreditItemWithLinksProps } from './Credits.types';

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

export const CreditItem: React.FC<CreditItemProps> = ({ title, credits }) => (
    <CreditItemContainer>
        <Subtitle>{title}</Subtitle>
        {credits.map((credit) => (
            <CreditText>{credit}</CreditText>
        ))}
    </CreditItemContainer>
);

export const CreditItemWithLinks: React.FC<CreditItemWithLinksProps> = ({
    title,
    credits,
    links,
}: CreditItemWithLinksProps) => (
    <CreditItemContainer>
        <Subtitle>{title}</Subtitle>
        {credits.map((credit, index) => (
            <>
                <CreditText>{credit}</CreditText>
                <CreditText>
                    <Button href={links[index]}>Ga naar pagina</Button>
                </CreditText>
            </>
        ))}
    </CreditItemContainer>
);
