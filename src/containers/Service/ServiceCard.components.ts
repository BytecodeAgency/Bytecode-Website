// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Container, Col, Row } from '../../lib/Grid';

// @ts-expect-error ts-migrate(2339) FIXME: Property 'mediaQueryMin' does not exist on type '{... Remove this comment to see the full error message
const { mediaQueryMin } = theme;

export const TextBlockContainer = styled(Container)`
    background-color: ${theme.colors.secondary};
    padding: 10% !important;
    z-index: 1;
    margin: 40% auto !important;
    @media (${mediaQueryMin.xs}) {
        padding: 18% !important;
        margin: 40% 10% !important;
    }
    @media (${mediaQueryMin.sm}) {
        margin: 10% 35% 10% 0 !important;
        padding: 10% !important;
    }
    @media (${mediaQueryMin.sm}) {
        margin: 10% 38% 10% 0 !important;
        padding: 10% !important;
    }

    @media (${mediaQueryMin.lg}) {
        margin: 10% 45% 10% 0 !important;
    }
`;
export const ImageContainer = styled(Container)`
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    margin: 0 !important;
    min-height: 100%;
    min-width: 100%;
    z-index: -1;
    @media (${mediaQueryMin.xs}) {
        top: 10% !important;
    }
    @media (${mediaQueryMin.sm}) {
        left: 30% !important;
        top: 20% !important;
    }

    @media (${mediaQueryMin.md}) {
        margin: 0 !important;
    }
`;

export const StyledRow = styled(Row)`
    min-height: 150vw;
    align-content: center;
    @media (${mediaQueryMin.xs}) {
        min-height: 100vh;
    }
    @media (${mediaQueryMin.sm}) {
        min-height: 100vh;
    }
`;

export const StyledCol = styled(Col)`
    height: 150vw;
    @media (${mediaQueryMin.sm}) {
        height: auto;
    }
`;

export const StyledImage = styled.img`
    min-width: 100%;
    width: auto;
    height: auto;
    @media (${mediaQueryMin.xs}) {
        min-width: 130%;
    }
    @media (${mediaQueryMin.sm}) {
        min-width: 80%;
    }
`;
