import styled from 'styled-components';
import theme from '../../styles/theme';
import TextBlock from '../TextBlock/TextBlock';
import { Container } from '../../lib/Grid';

const { mediaQueryMin } = theme;

export const StyledLogo = styled.img`
    min-width: 10%;
    height: auto;
    width: auto;
`;

export const CenteredTextBlock = styled(TextBlock)`
    text-align: center;
`;
export const Containment = styled(Container)`
    margin-top: 0 !important;
    margin-bottom: 3em !important;
    @media (${mediaQueryMin.xs}) {
        margin-top: 3em !important;
        margin-bottom: 5em !important;
    }
    @media (${mediaQueryMin.sm}) {
        margin-top: 0 !important;
        margin-bottom: 3em !important;
    }
`;
