import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';
import ArrowButton from '../../components/ArrowButton';

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
export const CreditItem = ({ title, credits }) => (
    <CreditItemContainer>
        <CreditTitle className="subtitle">{title}</CreditTitle>
        {credits.map(credit => (
            <CreditText className="Paragraph light">{credit}</CreditText>
        ))}
    </CreditItemContainer>
);

CreditItem.propTypes = {
    title: PropTypes.string.isRequired,
    credits: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const CreditItemWithLinks = ({ title, credits, links }) => (
    <CreditItemContainer>
        <CreditTitle className="subtitle">{title}</CreditTitle>
        {credits.map((credit, index) => (
            <>
                <CreditText>{credit}</CreditText>
                <CreditText>
                    <ArrowButton href={links[index]}>Ga naar pagina</ArrowButton>
                </CreditText>
            </>
        ))}
    </CreditItemContainer>
);

CreditItemWithLinks.propTypes = {
    title: PropTypes.string.isRequired,
    credits: PropTypes.arrayOf(PropTypes.string).isRequired,
    links: PropTypes.arrayOf(PropTypes.string).isRequired,
};
