import styled from 'styled-components';
import theme from '../styles/theme';

const { fontWeights, fonts } = theme;

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
