import styled from 'styled-components';
import theme from '../../styles/theme';
import { Container, Col, Row } from '../../lib/Grid';

const { mediaQueryMin } = theme;

// TODO: change float to fit flexbox

export const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
    width: auto;
    float: right;
`;

export const Containment = styled(Container)`
    @media (${mediaQueryMin.sm}) {
        margin: ${props =>
            props.light || !props.src
                ? '5em 0em 0em 3em'
                : '0em 0 0em 0'} !important;
    }

    @media (${mediaQueryMin.md}) {
        margin: ${props =>
            props.light || !props.src
                ? '2em 0em 3em 3em'
                : '0em 0 0em 0'} !important;
    }
    @media (${mediaQueryMin.lg}) {
        margin: ${props =>
            props.light || !props.src
                ? '5em 0em 5em 3em'
                : '5em 0 5em 0'} !important;
    }
`;
export const StyledRow = styled(Row)`
    background-color: ${props =>
        props.light ? '#262626' : '#1a1a1a'}!important;
    flex-direction: column-reverse;
    @media (${mediaQueryMin.sm}) {
        flex-direction: row;
    }
    min-height: 67vh;
    @media (${mediaQueryMin.md}) {
        min-height: 85vh;
    }
`;
export const StyledCol = styled(Col)`
    padding-right: 1em !important;
    padding-left: 1em !important;

    @media (${mediaQueryMin.sm}) {
        align-self: center;
        padding-right: 3em !important;
        padding-left: 3em !important;
    }
    @media (${mediaQueryMin.md}) {
        padding-left: 3em !important;
        padding-right: 3em !important;
    }
    @media (${mediaQueryMin.lg}) {
        padding-right: 7em !important;
        padding-left: 7em !important;
    }
`;
export const ImageCol = styled(Col)`
    background-color: #262626;
    align-self: flex-end;
`;
export const ListCol = styled(Col)`
    align-self: center;
    padding: 12vw !important;
    @media (${mediaQueryMin.xs}) {
        padding: 24vw !important;
    }
    @media (${mediaQueryMin.sm}) {
        align-self: auto;
        padding: 5em 6em !important;
    }

    @media (${mediaQueryMin.lg}) {
        padding: 14em 8em !important;
    }
`;
