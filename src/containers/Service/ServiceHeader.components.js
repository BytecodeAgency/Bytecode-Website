import styled from 'styled-components';
import theme from '../../styles/theme';
import { Container, Col, Row } from '../../lib/Grid';

const { mediaQueryMin } = theme;

export const StyledImage = styled.img`
    max-width: 100%;
    max-height: 75vh;
    width: auto;
    height: auto;
    float: right;
    @media (${mediaQueryMin.sm}) {
        max-height: 130vh;
    }
`;
export const TextCol = styled(Col)`
    @media (${mediaQueryMin.sm}) {
        align-self: center;
        padding-left: 6em !important;
        padding-right: 6em !important;
    }
`;

export const StyledContainer = styled(Container)`
    @media (${mediaQueryMin.sm}) {
        margin: 0 !important;
    }
`;

export const StyledRow = styled(Row)`
    flex-direction: column-reverse;
    @media (${mediaQueryMin.sm}) {
        flex-direction: row;
    }
`;
