import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Button from '../../components/Button';

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

interface CreditItemProps {
    title: string;
    credits: string[];
}
export const CreditItem: React.FC<CreditItemProps> = ({ title, credits }) => (
    <CreditItemContainer>
        <CreditTitle className="subtitle">{title}</CreditTitle>
        {credits.map((credit) => (
            <CreditText className="Paragraph light">{credit}</CreditText>
        ))}
    </CreditItemContainer>
);

interface CreditItemWithLinksProps {
    title: string;
    credits: string[];
    links: string[];
}

export const CreditItemWithLinks: React.FC<CreditItemWithLinksProps> = ({
    title,
    credits,
    links,
}: CreditItemWithLinksProps) => (
    <CreditItemContainer>
        <CreditTitle className="subtitle">{title}</CreditTitle>
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
